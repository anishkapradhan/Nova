import { describe, it, expect, vi } from 'vitest';
import { verifyUrlLiveness } from '@/services/multiagent/liveness.agent';

describe('LivenessPaywallAgent', () => {
  it('should verify an active, open-access institutional resource', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => '<html><body>Welcome to NASA Aeronautics Open Guide</body></html>',
    } as unknown as Response);

    const result = await verifyUrlLiveness(
      'https://www.grc.nasa.gov/airplane/guide.html',
      mockFetch as unknown as typeof fetch
    );

    expect(result.isReachable).toBe(true);
    expect(result.isFreeVerified).toBe(true);
    expect(result.isInstitutionalDomain).toBe(true);
    expect(result.paywallFlagsFound).toHaveLength(0);
    expect(result.reasoningStep.decision).toMatch(/APPROVED/);
  });

  it('should detect paywall markers and flag resource as not free', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () =>
        '<html><body>Subscribe now to unlock this chapter. Enter your credit card to begin.</body></html>',
    } as unknown as Response);

    const result = await verifyUrlLiveness(
      'https://commercial-textbook.com/chapter-1',
      mockFetch as unknown as typeof fetch
    );

    expect(result.isReachable).toBe(true);
    expect(result.isFreeVerified).toBe(false);
    expect(result.paywallFlagsFound).toContain('subscribe now');
    expect(result.paywallFlagsFound).toContain('enter your credit card');
    expect(result.reasoningStep.decision).toMatch(/REJECT/);
  });

  it('should reject non-HTTPS URLs before making network requests', async () => {
    const mockFetch = vi.fn();
    const result = await verifyUrlLiveness(
      'http://insecure-site.com/resource',
      mockFetch as unknown as typeof fetch
    );

    expect(mockFetch).not.toHaveBeenCalled();
    expect(result.isReachable).toBe(false);
    expect(result.reasoningStep.decision).toMatch(/HTTPS/);
  });

  it('should flag HTTP 404 or connection failures as unreachable', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      text: async () => 'Not Found',
    } as unknown as Response);

    const result = await verifyUrlLiveness(
      'https://nasa.gov/broken-page',
      mockFetch as unknown as typeof fetch
    );

    expect(result.isReachable).toBe(false);
    expect(result.isFreeVerified).toBe(false);
  });
});
