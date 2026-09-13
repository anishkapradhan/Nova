import { describe, it, expect } from 'vitest';
import {
  generateCadetKeypair,
  deriveCadetHandle,
  signPayload,
  verifySignature,
} from '@/lib/webcrypto';

describe('WebCrypto Zero-PII Cryptographic Engine', () => {
  it('should generate a valid ECDSA P-256 keypair', async () => {
    const keypair = await generateCadetKeypair();
    expect(keypair.publicKey).toBeDefined();
    expect(keypair.privateKey).toBeDefined();
    expect(keypair.publicKey.algorithm.name).toBe('ECDSA');
  });

  it('should derive a valid deterministic pseudonym handle matching Cadet_[Constellation]_[Number]', async () => {
    const keypair = await generateCadetKeypair();
    const handle1 = await deriveCadetHandle(keypair.publicKey);
    const handle2 = await deriveCadetHandle(keypair.publicKey);

    expect(handle1).toMatch(/^Cadet_[A-Za-z]+_\d{2}$/);
    expect(handle1).toBe(handle2); // Deterministic
  });

  it('should sign a payload and verify it successfully with the public key', async () => {
    const keypair = await generateCadetKeypair();
    const message = JSON.stringify({
      action: 'SUBMIT_RESOURCE',
      resourceId: 'res-aero-01',
      timestamp: Date.now(),
    });

    const signature = await signPayload(keypair.privateKey, message);
    expect(typeof signature).toBe('string');
    expect(signature.length).toBeGreaterThan(0);

    const isValid = await verifySignature(keypair.publicKey, signature, message);
    expect(isValid).toBe(true);

    const isTamperedValid = await verifySignature(
      keypair.publicKey,
      signature,
      message + 'tampered'
    );
    expect(isTamperedValid).toBe(false);
  });
});
