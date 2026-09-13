import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse } from '@/types/api';
import { FundamentalResource } from '@/types/fundamentals';

export const CANONICAL_RESOURCES: FundamentalResource[] = [
  {
    id: 'res-aero-01',
    title: "NASA Beginner's Guide to Aeronautics",
    category: 'Aerodynamics & Fluid Dynamics',
    resourceType: 'Free Online Textbook (OER)',
    targetUrl: 'https://www.grc.nasa.gov/www/k-12/airplane/bga.html',
    publisherOrSource: 'NASA Glenn Research Center',
    difficultyLevel: 'Beginner (Grades 9-10 / Algebra I)',
    summary:
      'Foundational airplane and rocketry aerodynamics covering lift, drag, thrust, and airfoil physics for high schoolers.',
    prerequisites: ['Algebra I'],
    highSchoolCurriculumTieIn: 'NGSS HS-PS2 Motion and Stability',
    isFreeVerified: true,
    submittedByHandle: 'Cadet_Orion_01',
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'res-aero-02',
    title: 'NASA FoilSim Interactive Airfoil Simulator',
    category: 'Aerodynamics & Fluid Dynamics',
    resourceType: 'Interactive Simulation / Webtool',
    targetUrl: 'https://www.grc.nasa.gov/www/k-12/airplane/foil3.html',
    publisherOrSource: 'NASA Glenn Educational Labs',
    difficultyLevel: 'Beginner (Grades 9-10 / Algebra I)',
    summary:
      'Browser-based interactive simulator to adjust camber, thickness, angle of attack, and air velocity.',
    prerequisites: ['Basic Physics Concepts'],
    highSchoolCurriculumTieIn: 'NGSS HS-PS2-1 Newton Second Law',
    isFreeVerified: true,
    submittedByHandle: 'Cadet_Orion_01',
    createdAt: '2026-01-02T00:00:00.000Z',
  },
  {
    id: 'res-astro-01',
    title: 'OpenStax Astronomy 2e',
    category: 'Astronomy & Planetary Science',
    resourceType: 'Free Online Textbook (OER)',
    targetUrl: 'https://openstax.org/details/books/astronomy-2e',
    publisherOrSource: 'OpenStax / Rice University',
    difficultyLevel: 'Beginner (Grades 9-10 / Algebra I)',
    summary:
      'Comprehensive, peer-reviewed open textbook covering planetary science, stellar evolution, and cosmology.',
    prerequisites: ['Algebra I', 'Introductory Chemistry'],
    highSchoolCurriculumTieIn: 'NGSS HS-ESS1 Earth Place in the Universe',
    isFreeVerified: true,
    submittedByHandle: 'Cadet_Vega_12',
    createdAt: '2026-01-03T00:00:00.000Z',
  },
  {
    id: 'res-astro-02',
    title: 'MIT OCW Introduction to Astronomy (8.282J)',
    category: 'Astronomy & Planetary Science',
    resourceType: 'Full Video Course / Lecture Series',
    targetUrl: 'https://ocw.mit.edu/courses/8-282j-introduction-to-astronomy-spring-2006/',
    publisherOrSource: 'MIT OpenCourseWare',
    difficultyLevel: 'Intermediate (Grades 11-12 / AP Physics & Calc)',
    summary:
      'Complete lecture notes and assignments exploring stellar spectra, orbital dynamics, and black holes.',
    prerequisites: ['AP Physics 1', 'Pre-Calculus'],
    highSchoolCurriculumTieIn: 'AP Physics C / Advanced Astronomy',
    isFreeVerified: true,
    submittedByHandle: 'Cadet_Vega_12',
    createdAt: '2026-01-04T00:00:00.000Z',
  },
  {
    id: 'res-phys-01',
    title: 'OpenStax University Physics Volume 1 & 2',
    category: 'Physics & Classical Mechanics',
    resourceType: 'Free Online Textbook (OER)',
    targetUrl: 'https://openstax.org/details/books/university-physics-volume-1',
    publisherOrSource: 'OpenStax / Rice University',
    difficultyLevel: 'Intermediate (Grades 11-12 / AP Physics & Calc)',
    summary:
      'Calculus-based physics covering kinematics, dynamics, rotational mechanics, and gravitation.',
    prerequisites: ['Calculus I', 'Vector Algebra'],
    highSchoolCurriculumTieIn: 'AP Physics C: Mechanics',
    isFreeVerified: true,
    submittedByHandle: 'Cadet_Lyra_09',
    createdAt: '2026-01-05T00:00:00.000Z',
  },
  {
    id: 'res-phys-02',
    title: 'HyperPhysics Mechanics & Astrophysics',
    category: 'Physics & Classical Mechanics',
    resourceType: 'Interactive Simulation / Webtool',
    targetUrl: 'https://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html',
    publisherOrSource: 'Georgia State University',
    difficultyLevel: 'Beginner (Grades 9-10 / Algebra I)',
    summary:
      'Interactive concept mind-map with built-in numerical calculators for physics and astronomy.',
    prerequisites: ['Algebra I'],
    highSchoolCurriculumTieIn: 'AP Physics 1',
    isFreeVerified: true,
    submittedByHandle: 'Cadet_Lyra_09',
    createdAt: '2026-01-06T00:00:00.000Z',
  },
  {
    id: 'res-prop-01',
    title: 'NASA Basics of Space Flight',
    category: 'Aerospace Engineering & Propulsion',
    resourceType: 'Study Guide / Cheatsheet (PDF)',
    targetUrl: 'https://science.nasa.gov/learn/basics-of-space-flight/',
    publisherOrSource: 'NASA Jet Propulsion Laboratory (JPL)',
    difficultyLevel: 'Intermediate (Grades 11-12 / AP Physics & Calc)',
    summary:
      'Deep dive into interplanetary trajectory design, propulsion systems, and telecommunications.',
    prerequisites: ['Pre-Calculus', 'Classical Mechanics'],
    highSchoolCurriculumTieIn: 'Introductory Aerospace Engineering',
    isFreeVerified: true,
    submittedByHandle: 'Cadet_Altair_88',
    createdAt: '2026-01-07T00:00:00.000Z',
  },
  {
    id: 'res-prop-02',
    title: 'OpenRocket Flight Dynamics Documentation',
    category: 'Aerospace Engineering & Propulsion',
    resourceType: 'Interactive Simulation / Webtool',
    targetUrl: 'https://openrocket.info/documentation.html',
    publisherOrSource: 'OpenRocket Project',
    difficultyLevel: 'Intermediate (Grades 11-12 / AP Physics & Calc)',
    summary:
      'Technical documentation for model rocket flight simulation, stability margin, and motor thrust curves.',
    prerequisites: ['Algebra II', 'Trigonometry'],
    highSchoolCurriculumTieIn: 'The American Rocketry Challenge (TARC)',
    isFreeVerified: true,
    submittedByHandle: 'Cadet_Altair_88',
    createdAt: '2026-01-08T00:00:00.000Z',
  },
  {
    id: 'res-math-01',
    title: "Paul's Online Math Notes (Calculus & Vectors)",
    category: 'Applied Space Mathematics',
    resourceType: 'Guided Problem Set & Solutions',
    targetUrl: 'https://tutorial.math.lamar.edu/',
    publisherOrSource: 'Lamar University',
    difficultyLevel: 'Advanced (College Bridge / Dual Enrollment)',
    summary:
      'Comprehensive tutorials, vector algebra, and differential equations essential for aerospace simulation.',
    prerequisites: ['Pre-Calculus', 'Algebra II'],
    highSchoolCurriculumTieIn: 'AP Calculus BC / Multivariable',
    isFreeVerified: true,
    submittedByHandle: 'Cadet_Cygnus_33',
    createdAt: '2026-01-09T00:00:00.000Z',
  },
];

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
