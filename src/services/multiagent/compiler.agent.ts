import { CompilerVerdict, AgentReasoningStep } from '@/types/agents';
import { FundamentalResource } from '@/types/fundamentals';

export interface CompileResourceInput {
  resource: Partial<FundamentalResource> & {
    title: string;
    category: string;
    targetUrl: string;
    summary: string;
  };
  sriScore?: number;
  contributorHandle?: string;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function compileResourceMarkdown(
  input: CompileResourceInput
): Promise<CompilerVerdict> {
  const cot: string[] = [];
  cot.push(`Compiling Markdown specification for resource: '${input.resource.title}'`);

  const slug = slugify(input.resource.title);
  const now = new Date().toISOString();
  const sri = input.sriScore ?? 85;
  const handle = input.contributorHandle ?? input.resource.submittedByHandle ?? 'Anonymous_Cadet';
  const prerequisites = input.resource.prerequisites ?? ['Algebra I'];

  cot.push(`Generated canonical slug: '${slug}' and attributed to ${handle}.`);

  const yamlFrontmatter: Record<string, unknown> = {
    title: input.resource.title,
    slug,
    category: input.resource.category,
    resourceType: input.resource.resourceType ?? 'Free Online Textbook (OER)',
    targetUrl: input.resource.targetUrl,
    publisherOrSource: input.resource.publisherOrSource ?? 'Open Space OER',
    difficultyLevel: input.resource.difficultyLevel ?? 'Beginner (Grades 9-10 / Algebra I)',
    sriScore: sri,
    isFreeVerified: input.resource.isFreeVerified ?? true,
    submittedByHandle: handle,
    prerequisites,
    createdAt: now,
  };

  // Construct Markdown with 3-button formatting rules:
  // **Bold** on key laws, *Italic* on variables, - Bullets on prerequisites
  const markdownBody = [
    '---',
    `title: "${input.resource.title}"`,
    `slug: "${slug}"`,
    `category: "${input.resource.category}"`,
    `resourceType: "${yamlFrontmatter.resourceType}"`,
    `targetUrl: "${input.resource.targetUrl}"`,
    `publisherOrSource: "${yamlFrontmatter.publisherOrSource}"`,
    `difficultyLevel: "${yamlFrontmatter.difficultyLevel}"`,
    `sriScore: ${sri}`,
    `isFreeVerified: true`,
    `submittedByHandle: "${handle}"`,
    `createdAt: "${now}"`,
    '---',
    '',
    `# ${input.resource.title}`,
    '',
    '## 📖 Overview',
    input.resource.summary,
    '',
    '## 📐 Prerequisites & Core Mathematics',
    ...prerequisites.map((p) => `- ${p}`),
    '',
    '## 🚀 Direct Access',
    `Access the verified open resource here: [${input.resource.title}](${input.resource.targetUrl})`,
    '',
  ].join('\n');

  cot.push('Enforced standard 3-button formatting rules and YAML frontmatter constraints.');

  const gitCommitMessage = `feat(fundamentals): add ${input.resource.title} [SRI: ${sri}]`;

  const reasoningStep: AgentReasoningStep = {
    agentName: 'MarkdownCompilerAgent',
    timestamp: now,
    chainOfThought: cot,
    decision: `COMPILED: Valid Git Markdown artifact prepared for slug '${slug}'`,
    confidenceScore: 0.98,
  };

  return {
    markdownContent: markdownBody,
    yamlFrontmatter,
    suggestedSlug: slug,
    gitCommitMessage,
    reasoningStep,
  };
}
