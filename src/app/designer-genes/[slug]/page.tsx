import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  getDesignerGenesTopicBySlug,
  DESIGNER_GENES_TOPICS,
} from '@/data/designer-genes';
import { DesignerGenesTopicPage } from '@/components/designer-genes/DesignerGenesTopicPage';

export function generateStaticParams(): { slug: string }[] {
  return DESIGNER_GENES_TOPICS.map((t) => ({ slug: t.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getDesignerGenesTopicBySlug(slug);

  if (!topic) {
    return {
      title: 'Topic Not Found • Designer Genes Nova',
    };
  }

  return {
    title: `${topic.title} • Designer Genes Science Olympiad Guide | Nova`,
    description: topic.freshmanSummary,
  };
}

export default async function Page({ params }: PageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const topic = getDesignerGenesTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  return <DesignerGenesTopicPage topic={topic} />;
}
