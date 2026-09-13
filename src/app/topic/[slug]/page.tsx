import { notFound } from 'next/navigation';
import { getTopicBySlug, SPACE_TOPICS, TopicDefinition } from '@/data/topics';
import { TopicClientView } from '@/components/topic/TopicClientView';

export function generateStaticParams(): { slug: string }[] {
  return SPACE_TOPICS.map((topic) => ({
    slug: topic.slug,
  }));
}

interface TopicPageProps {
  params: Promise<{ slug: string }>;
}

export default async function TopicPage({ params }: TopicPageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const topic: TopicDefinition | undefined = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  return <TopicClientView topic={topic} />;
}
