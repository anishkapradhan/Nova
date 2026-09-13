import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse } from '@/types/api';
import { FundamentalResource } from '@/types/fundamentals';
import { CANONICAL_RESOURCES } from '@/data/resources';

export async function GET(
  request: NextRequest
): Promise<NextResponse<ApiResponse<FundamentalResource[]>>> {
  const requestStart = Date.now();
  const searchParams = request.nextUrl.searchParams;
  const categoryFilter = searchParams.get('category');
  const searchQuery = searchParams.get('q')?.toLowerCase();

  let filtered = [...CANONICAL_RESOURCES];

  if (categoryFilter) {
    filtered = filtered.filter(
      (res) => res.category.toLowerCase() === categoryFilter.toLowerCase()
    );
  }

  if (searchQuery) {
    filtered = filtered.filter(
      (res) =>
        res.title.toLowerCase().includes(searchQuery) ||
        res.summary.toLowerCase().includes(searchQuery) ||
        res.publisherOrSource.toLowerCase().includes(searchQuery)
    );
  }

  const latencyMs = Math.max(0, Date.now() - requestStart);

  const response: ApiResponse<FundamentalResource[]> = {
    success: true,
    data: filtered,
    metadata: {
      timestamp: new Date().toISOString(),
      requestId: crypto.randomUUID(),
      latencyMs,
    },
  };

  return NextResponse.json(response, {
    status: 200,
    headers: {
      'Cache-Control': 'public, max-age=60, s-maxage=300',
    },
  });
}
