import { Metadata } from 'next';
import { REMOTE_SENSING_TOPIC } from '@/data/remote-sensing';
import { RemoteSensingPage } from '@/components/remote-sensing/RemoteSensingPage';

export const metadata: Metadata = {
  title: 'Remote Sensing & Earth Observation | Science Olympiad Division C Guide',
  description:
    'Complete freshman study guide for Science Olympiad Remote Sensing: EM radiation physics, satellite orbits, Landsat & Sentinel fleets, NDVI calculations, 3D flashcards, and 20-question exam.',
};

export default function RemoteSensingRoute(): React.JSX.Element {
  return <RemoteSensingPage topic={REMOTE_SENSING_TOPIC} />;
}
