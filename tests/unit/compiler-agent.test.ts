import { describe, it, expect } from 'vitest';
import { compileResourceMarkdown, slugify } from '@/services/multiagent/compiler.agent';
import { DisciplineCategory } from '@/types/fundamentals';

describe('MarkdownCompilerAgent', () => {
  it('should slugify resource titles reliably', () => {
    expect(slugify("NASA Beginner's Guide to Aeronautics")).toBe(
      'nasa-beginners-guide-to-aeronautics'
    );
    expect(slugify('OpenStax Astronomy 2e (Vol. 1 & 2)')).toBe(
      'openstax-astronomy-2e-vol-1-2'
    );
  });

  it('should compile valid Markdown with structured YAML frontmatter and commit message', async () => {
    const input = {
      resource: {
        title: "NASA Beginner's Guide to Aeronautics",
        category: 'Aerodynamics & Fluid Dynamics' as DisciplineCategory,
        targetUrl: 'https://www.grc.nasa.gov/airplane/bga.html',
        summary:
          'Introductory aeronautics guide exploring lift, drag, and airfoil aerodynamics for high school students.',
        prerequisites: ['Algebra I', 'Newtonian Mechanics'],
      },
      sriScore: 92,
      contributorHandle: 'Cadet_Orion_42',
    };

    const result = await compileResourceMarkdown(input);

    expect(result.suggestedSlug).toBe('nasa-beginners-guide-to-aeronautics');
    expect(result.gitCommitMessage).toContain('feat(fundamentals): add NASA');
    expect(result.markdownContent).toMatch(/^---\ntitle:/);
    expect(result.markdownContent).toContain('sriScore: 92');
    expect(result.markdownContent).toContain('submittedByHandle: "Cadet_Orion_42"');
    expect(result.markdownContent).toContain('- Algebra I');
    expect(result.markdownContent).toContain('- Newtonian Mechanics');
    expect(result.yamlFrontmatter.title).toBe("NASA Beginner's Guide to Aeronautics");
    expect(result.reasoningStep.agentName).toBe('MarkdownCompilerAgent');
  });
});
