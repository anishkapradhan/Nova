import { notFound } from 'next/navigation';
import { getTopicBySlug, SPACE_TOPICS, TopicDefinition } from '@/data/topics';
import { getCurriculumTopicBySlug, CURRICULUM_TOPICS } from '@/data/curriculum';
import { getDesignerGenesTopicBySlug, DESIGNER_GENES_TOPICS } from '@/data/designer-genes';
import { TopicClientView } from '@/components/topic/TopicClientView';
import { FreshmanTopicPage } from '@/components/curriculum/FreshmanTopicPage';
import { DesignerGenesTopicPage } from '@/components/designer-genes/DesignerGenesTopicPage';

export function generateStaticParams(): { slug: string }[] {
  const spaceSlugs = SPACE_TOPICS.map((t) => ({ slug: t.slug }));
  const curriculumSlugs = CURRICULUM_TOPICS.map((t) => ({ slug: t.slug }));
  const designerGenesSlugs = DESIGNER_GENES_TOPICS.map((t) => ({ slug: t.slug }));
  return [...spaceSlugs, ...curriculumSlugs, ...designerGenesSlugs];
}

interface TopicPageProps {
  params: Promise<{ slug: string }>;
}

export default async function TopicPage({ params }: TopicPageProps): Promise<React.JSX.Element> {
  const { slug } = await params;

  // 1. Check if it's one of the 8 Designer Genes topics
  const designerGenesTopic = getDesignerGenesTopicBySlug(slug);
  if (designerGenesTopic) {
    return <DesignerGenesTopicPage topic={designerGenesTopic} />;
  }

  // 2. Check if it's one of the 12 Astronomy Curriculum topics
  const curriculumTopic = getCurriculumTopicBySlug(slug);
  if (curriculumTopic) {
    return <FreshmanTopicPage topic={curriculumTopic} />;
  }

  // 3. Check if it's one of the foundational engineering topics
  const spaceTopic: TopicDefinition | undefined = getTopicBySlug(slug);
  if (spaceTopic) {
    return <TopicClientView topic={spaceTopic} />;
  }

  notFound();
}
