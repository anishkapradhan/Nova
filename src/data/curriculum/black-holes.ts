import { CurriculumTopic } from '@/types/curriculum';

export const blackHolesTopic: CurriculumTopic = {
  slug: 'black-holes',
  chapterNumber: 22,
  title: 'Black Holes',
  subtitle: 'Curved Spacetime, Event Horizons, Spaghettification, and Kerr Ergospheres',
  badge: 'Chapter 22 • General Relativity',
  accentColor: 'purple',
  freshmanSummary:
    'What happens when gravity completely overpowers every known force in physics? A Black Hole is born: a region of spacetime where matter is crushed to infinite density and gravity is so intense that nothing—not even light itself—can escape! In this chapter, you will explore Albert Einstein’s General Theory of Relativity, calculate the exact size of an Event Horizon (the Schwarzschild radius), experience gravitational time dilation and spaghettification, and see how astronomers photograph black hole shadows across millions of light-years.',
  readingSections: 'Sections 22.4 – 22.5, 22.7 (General Relativity, Schwarzschild Radius, Spacetime Curvature, Kerr Rotating Holes, Observing Black Holes)',
  deepSkyObjects: [
    {
      name: 'Cygnus X-1',
      designation: 'HDE 226868 / V1357 Cyg',
      type: 'High-Mass X-Ray Binary (Stellar Black Hole)',
      constellation: 'Cygnus',
      distanceLightYears: '7,200 light-years',
      significance:
        'The first widely accepted black hole candidate ever discovered (1964). A blue supergiant star orbits an invisible compact object of ~21 solar masses, which strips gas into a scorching, X-ray-emitting accretion disk.',
      observationTip: 'The 9th-magnitude blue supergiant companion star is observable with small amateur telescopes in the constellation Cygnus.',
    },
    {
      name: 'Messier 87 (M87*)',
      designation: 'NGC 4486 / Virgo A',
      type: 'Supermassive Black Hole & Giant Elliptical',
      constellation: 'Virgo',
      distanceLightYears: '53.5 million light-years',
      significance:
        'A supermassive black hole with a mass of 6.5 billion suns. In April 2019, the Event Horizon Telescope (EHT) captured the historic first-ever direct image of a black hole’s event horizon shadow and glowing relativistic accretion ring.',
    },
  ],
  sections: [
    {
      id: 'general-relativity-spacetime',
      title: 'General Relativity: Gravity as Curved Spacetime',
      subheading: 'Why gravity is not a pull, but a warp in the fabric of the universe',
      laymanExplanation:
        'In 1915, Albert Einstein completely revolutionized how we understand gravity. In General Relativity, space and time are woven together into a four-dimensional fabric called Spacetime. Heavy masses (like the Sun or a black hole) warp and dent this fabric. When planets orbit the Sun, they aren’t being pulled by an invisible rope—they are simply following the straightest possible natural path (a geodesic) along the curved surface of spacetime!',
      realWorldAnalogy:
        'Imagine stretching a large rubber trampoline sheet flat. If you place a heavy 16-pound bowling ball in the center, it creates a deep funnel depression. If you roll a small marble across the sheet, the marble curves around the bowling ball in an orbit! The bowling ball never touches the marble; the marble’s path is dictated by the warped rubber sheet.',
      keyTerms: [
        {
          term: 'Spacetime',
          definition: 'The four-dimensional continuum combining three dimensions of space with one dimension of time, dynamically curved by mass and energy.',
        },
        {
          term: 'Geodesic',
          definition: 'The shortest and straightest possible path an object or light beam can travel through curved spacetime.',
        },
        {
          term: 'Equivalence Principle',
          definition: 'The cornerstone of General Relativity stating that the physical effects of a uniform gravitational field are completely indistinguishable from the effects of uniform physical acceleration.',
        },
        {
          term: 'Gravitational Lensing',
          definition: 'The bending and focusing of light from a distant source as it passes through the warped spacetime surrounding a massive foreground object (like a galaxy cluster or black hole).',
        },
      ],
    },
    {
      id: 'event-horizon-schwarzschild',
      title: 'The Event Horizon and the Schwarzschild Radius',
      subheading: 'The point of no return: R_s = 2GM / c²',
      laymanExplanation:
        'Every object has an escape velocity. If you shrink a star smaller and smaller, its surface gravity climbs higher and higher. If you compress it so small that the escape velocity exceeds the speed of light (300,000 km/s), nothing can escape! The boundary where the escape velocity equals the speed of light is the Event Horizon—the cosmic "point of no return." German physicist Karl Schwarzschild calculated the exact radius of this horizon: R_s = 2GM / c². At the very center lies the Singularity, where all mass is crushed into zero volume and infinite density.',
      realWorldAnalogy:
        'Imagine paddling a canoe down a calm river that flows toward a giant waterfall. Far upstream, you can easily paddle backwards away from the falls. But as the river accelerates, you reach a line where the water flows faster than your canoe can possibly paddle. Once you cross that line, you are going over the falls no matter what. The event horizon is that exact line on the cosmic river of light!',
      keyTerms: [
        {
          term: 'Event Horizon',
          definition: 'The spherical boundary enclosing a black hole across which nothing—matter, light, or information—can escape back to the outside universe.',
        },
        {
          term: 'Schwarzschild Radius (R_s)',
          definition: 'The radius of the event horizon for a non-rotating, spherically symmetric black hole: R_s = 2GM / c² (about 3 km per solar mass).',
        },
        {
          term: 'Singularity',
          definition: 'The theoretical point at the dead center of a black hole where matter is crushed to infinite density, zero volume, and infinite spacetime curvature.',
        },
        {
          term: 'Photon Sphere',
          definition: 'The sphere at radius r = 1.5 R_s where gravity is so strong that photons of light can orbit the black hole in unstable circular orbits.',
        },
      ],
      mathBreakdown: {
        name: 'The Schwarzschild Radius Formula',
        formula: 'R_s = \\frac{2 \\cdot G \\cdot M}{c^2} \\approx 2.95 \\text{ km} \\times \\left( \\frac{M}{M_\\odot} \\right)',
        variables: 'R_s = Schwarzschild radius; G = 6.674 × 10⁻¹¹; M = black hole mass; c = speed of light (3.0 × 10⁸ m/s).',
        walkThrough:
          'For a 10 solar mass black hole (M = 10 M_☉): R_s ≈ 3 km × 10 = 30 km (about 18 miles across). If you compressed planet Earth into a black hole (M = 5.97 × 10²⁴ kg): R_s = 2GM / c² ≈ 0.0089 meters = 8.9 millimeters (the size of a marble)!',
        practiceProblem: {
          problem: 'Sagittarius A*, the supermassive black hole at the center of the Milky Way, has a mass of 4.15 million solar masses. What is its Schwarzschild radius?',
          solution: 'R_s ≈ 2.95 km × (4.15 × 10⁶) ≈ 1.22 × 10⁷ km (about 0.08 AU, or roughly 17 times the radius of the Sun).',
        },
      },
    },
    {
      id: 'spaghettification-kerr',
      title: 'Spacetime Near a Black Hole and Rotating Kerr Holes',
      subheading: 'Tidal spaghettification, time dilation, and extracting rotational energy',
      laymanExplanation:
        'If you fell feet-first toward a stellar-mass black hole, your feet (being slightly closer to the center than your head) would experience a vastly stronger gravitational pull than your head. Furthermore, your shoulders would be squeezed inward toward the center. This extreme tidal stretching is called Spaghettification—you would be stretched into a long, thin noodle of atoms! Meanwhile, a friend watching you from far away would see your watch tick slower and slower due to Gravitational Time Dilation. Real astrophysical black holes also spin (Kerr Black Holes). A spinning black hole drags the very fabric of spacetime around with it (frame dragging), creating a region outside the horizon called the Ergosphere where space rotates faster than light and energy can be extracted (the Penrose process)!',
      realWorldAnalogy:
        'Frame dragging in the ergosphere is like stirring a spoon rapidly in a cup of thick molasses: the molasses near the spoon gets dragged around in a whirlpool. In a Kerr black hole, spacetime itself is the molasses!',
      keyTerms: [
        {
          term: 'Spaghettification',
          definition: 'The vertical stretching and horizontal compression of an object falling into a strong gravitational gradient, caused by extreme differential tidal forces.',
        },
        {
          term: 'Gravitational Time Dilation',
          definition: 'The relativistic slowdown of time in regions of strong gravitational fields: a clock close to a black hole ticks significantly slower than a clock far away.',
        },
        {
          term: 'Kerr Black Hole',
          definition: 'A realistic, uncharged rotating black hole described by the Kerr metric, featuring an event horizon, an outer ergosphere, and a ring-shaped singularity.',
        },
        {
          term: 'Ergosphere',
          definition: 'The region outside the event horizon of a rotating black hole where frame dragging forces all matter and radiation to rotate in the direction of the hole’s spin.',
        },
        {
          term: 'Hawking Radiation',
          definition: 'Theoretical thermal blackbody radiation emitted by black holes due to quantum vacuum fluctuations near the event horizon, causing black holes to slowly evaporate.',
        },
      ],
    },
  ],
  diagram: {
    type: 'black-hole-anatomy',
    title: 'Anatomy of a Black Hole & Spacetime Curvature',
    caption: 'Event Horizon (R_s = 2GM/c²) • Photon Sphere (1.5 R_s) • Ergosphere (rotating Kerr hole) • Central Singularity • Infalling Accretion Disk with Relativistic Doppler Beaming.',
  },
  flashcards: [
    {
      id: 'c22-f1',
      term: 'Event Horizon Definition',
      category: 'Definition',
      front: 'What is the Event Horizon of a black hole?',
      back: 'The boundary boundary enclosing a black hole where the escape velocity equals the speed of light. Nothing that crosses it can ever escape back to the outside universe.',
    },
    {
      id: 'c22-f2',
      term: 'Schwarzschild Radius Formula',
      category: 'Formula',
      front: 'State the formula for the Schwarzschild radius of a non-rotating black hole.',
      back: 'R_s = (2 × G × M) / c² (approx. 3 km for every 1 solar mass of black hole).',
    },
    {
      id: 'c22-f3',
      term: 'Sun as a Black Hole Size',
      category: 'Formula',
      front: 'If the Sun (1 M_☉) were compressed into a black hole, what would its radius be?',
      back: 'Approximately 3 kilometers (~1.86 miles across, the size of a small town).',
    },
    {
      id: 'c22-f4',
      term: 'Singularity Definition',
      category: 'Definition',
      front: 'What is the singularity at the center of a black hole?',
      back: 'A theoretical point where mass is compressed to zero volume, creating infinite density and infinite spacetime curvature where classical general relativity breaks down.',
    },
    {
      id: 'c22-f5',
      term: 'Gravitational Time Dilation',
      category: 'Concept',
      front: 'What does a distant observer see happen to a clock falling toward an event horizon?',
      back: 'The clock appears to tick slower and slower as it approaches the horizon, asymptotically freezing and fading to black as its light is gravitationally redshifted to infinity.',
    },
    {
      id: 'c22-f6',
      term: 'Spaghettification',
      category: 'Concept',
      front: 'What causes spaghettification near a stellar-mass black hole?',
      back: 'Extreme gravitational tidal forces: the pull on the near side of your body is vastly greater than on your far side, stretching you vertically and compressing you horizontally.',
    },
    {
      id: 'c22-f7',
      term: 'Photon Sphere Radius',
      category: 'Formula',
      front: 'At what distance from a non-rotating black hole does the Photon Sphere sit?',
      back: 'At 1.5 times the Schwarzschild radius (r = 1.5 R_s). Here, light can orbit in unstable circular trajectories.',
    },
    {
      id: 'c22-f8',
      term: 'Kerr Black Hole & Ergosphere',
      category: 'Concept',
      front: 'What is a Kerr black hole and what is its ergosphere?',
      back: 'A Kerr black hole is a rotating black hole. The ergosphere is an egg-shaped region outside the horizon where spacetime is dragged so fast that standing still is impossible.',
    },
    {
      id: 'c22-f9',
      term: 'Cygnus X-1',
      category: 'DSO',
      front: 'Why is Cygnus X-1 historically significant in astronomy?',
      back: 'It was the first widely recognized black hole candidate (discovered in 1964): an invisible ~21 M_☉ object accreting gas from a blue supergiant companion.',
    },
    {
      id: 'c22-f10',
      term: 'M87* Black Hole Mass & Image',
      category: 'DSO',
      front: 'What is M87* and what historic milestone did it achieve in 2019?',
      back: 'A supermassive black hole (6.5 billion M_☉) in galaxy M87. In 2019, the Event Horizon Telescope captured the first-ever direct image of its shadow and glowing accretion ring.',
    },
    {
      id: 'c22-f11',
      term: 'Gravitational Redshift',
      category: 'Concept',
      front: 'What happens to a photon of light climbing out of a strong gravitational field?',
      back: 'It loses energy. Because light travels at constant speed c, losing energy stretches its wavelength to longer, redder frequencies (Gravitational Redshift).',
    },
    {
      id: 'c22-f12',
      term: 'Hawking Radiation',
      category: 'Definition',
      front: 'What is Hawking radiation and who predicted it?',
      back: 'Predicted by Stephen Hawking: quantum vacuum fluctuations near the horizon produce virtual particle pairs where one falls in and one escapes, causing the black hole to slowly lose mass.',
    },
    {
      id: 'c22-f13',
      term: 'How We "See" Black Holes',
      category: 'Concept',
      front: 'If black holes emit no light, how do astronomers detect them?',
      back: 'Through their gravitational effects: high-speed orbital motions of companion stars, intense X-rays from friction in accretion disks, relativistic jets, and gravitational wave chirps.',
    },
    {
      id: 'c22-f14',
      term: 'Equivalence Principle',
      category: 'Concept',
      front: 'State Einstein’s Equivalence Principle.',
      back: 'The effects of gravity and the effects of physical acceleration in an enclosed room are completely indistinguishable from each other.',
    },
    {
      id: 'c22-f15',
      term: 'No-Hair Theorem',
      category: 'Definition',
      front: 'What are the only three physical properties an isolated black hole can have (No-Hair Theorem)?',
      back: 'Mass (M), Electric Charge (Q), and Angular Momentum / Spin (J). All other information about what fell into the hole is lost.',
    },
    {
      id: 'c22-f16',
      term: 'Penrose Process',
      category: 'Concept',
      front: 'What is the Penrose process in a rotating black hole?',
      back: 'A mechanism to extract rotational kinetic energy from the ergosphere of a Kerr black hole by firing mass into it and capturing the boosted fragment.',
    },
  ],
  quiz: [
    {
      id: 'c22-q1',
      question: 'In Albert Einstein’s General Theory of Relativity, what is gravity?',
      options: [
        'An invisible magnetic pull between atoms',
        'The geometric curvature of 4D spacetime caused by mass and energy',
        'A repulsive force created by dark energy',
        'Frictional drag from the ether',
      ],
      correctIndex: 1,
      explanation: 'General Relativity defines gravity not as a Newtonian force, but as the curvature of spacetime around mass and energy.',
    },
    {
      id: 'c22-q2',
      question: 'What is the Event Horizon of a black hole?',
      options: [
        'The physical solid surface of the crushed star',
        'The boundary where escape velocity equals the speed of light, across which nothing can escape',
        'The outer edge of the accretion disk',
        'The point where time runs backwards',
      ],
      correctIndex: 1,
      explanation: 'The event horizon is the boundary of no return where escape velocity equals c.',
    },
    {
      id: 'c22-q3',
      question: 'What is the formula for the Schwarzschild radius (R_s) of a non-rotating black hole?',
      options: ['R_s = GM / c', 'R_s = 2GM / c²', 'R_s = G M² / c³', 'R_s = 4π R³'],
      correctIndex: 1,
      explanation: 'The Schwarzschild radius is R_s = 2GM / c².',
    },
    {
      id: 'c22-q4',
      question: 'If planet Earth were compressed into a black hole, what would its approximate event horizon radius be?',
      options: ['8.9 millimeters (~size of a marble)', '6,400 kilometers', '1 meter', '100 kilometers'],
      correctIndex: 0,
      explanation: 'R_s for Earth’s mass (5.97 × 10²⁴ kg) is approximately 8.9 mm (about 0.35 inches).',
    },
    {
      id: 'c22-q5',
      question: 'What is the theoretical point of zero volume and infinite density at the center of a black hole called?',
      options: ['The Ergosphere', 'The Singularity', 'The Photon Sphere', 'The Lagrange Point'],
      correctIndex: 1,
      explanation: 'The central singularity is the mathematical point where mass is compressed to infinite density and known laws of physics break down.',
    },
    {
      id: 'c22-q6',
      question: 'What happens to a clock as it approaches closer and closer to a black hole’s event horizon (Gravitational Time Dilation)?',
      options: [
        'It ticks faster and faster',
        'It ticks slower and slower relative to a distant observer’s clock',
        'It immediately stops and runs in reverse',
        'Time flows at the exact same rate everywhere',
      ],
      correctIndex: 1,
      explanation: 'According to General Relativity, time dilates in stronger gravitational fields, ticking progressively slower as viewed by an outside observer.',
    },
    {
      id: 'c22-q7',
      question: 'What is "Spaghettification"?',
      options: [
        'A cooking technique used on the space station',
        'The extreme vertical tidal stretching and horizontal compression of an object falling into a steep gravitational field',
        'The bending of light through a gravitational lens',
        'The evaporation of a black hole',
      ],
      correctIndex: 1,
      explanation: 'Differential tidal gravity pulls much harder on your near end than your far end, stretching infalling matter into a long thin thread.',
    },
    {
      id: 'c22-q8',
      question: 'At what radius from a non-rotating black hole does the Photon Sphere reside?',
      options: ['0.5 R_s', '1.0 R_s', '1.5 R_s', '3.0 R_s'],
      correctIndex: 2,
      explanation: 'The photon sphere sits at r = 1.5 R_s, where light can orbit in circular trajectories.',
    },
    {
      id: 'c22-q9',
      question: 'What is a rotating black hole called in astrophysics?',
      options: ['A Schwarzschild black hole', 'A Kerr black hole', 'A Reissner-Nordström black hole', 'A Newtonian black hole'],
      correctIndex: 1,
      explanation: 'Rotating black holes are governed by the Kerr metric (discovered by Roy Kerr in 1963).',
    },
    {
      id: 'c22-q10',
      question: 'What is the Ergosphere of a rotating Kerr black hole?',
      options: [
        'The cold interior where matter freezes',
        'The region outside the event horizon where frame-dragging forces spacetime itself to rotate with the black hole',
        'The radio jet blasting out of the poles',
        'The cloud of dust around the companion star',
      ],
      correctIndex: 1,
      explanation: 'The ergosphere is the region outside the horizon where frame-dragging forces everything to rotate in the direction of the hole’s spin.',
    },
    {
      id: 'c22-q11',
      question: 'What was the first widely confirmed stellar-mass black hole candidate discovered in 1964?',
      options: ['Sagittarius A*', 'Cygnus X-1', 'M87*', 'Betelgeuse'],
      correctIndex: 1,
      explanation: 'Cygnus X-1 was confirmed as a ~21 M_☉ black hole in an X-ray binary with a blue supergiant star.',
    },
    {
      id: 'c22-q12',
      question: 'What historic image was captured by the Event Horizon Telescope (EHT) in 2019?',
      options: [
        'The Apollo 11 landing site',
        'The direct shadow and glowing relativistic accretion ring of supermassive black hole M87*',
        'The core of the Sun',
        'A newborn protostar inside Orion',
      ],
      correctIndex: 1,
      explanation: 'The EHT used global radio interferometry to capture the first-ever image of the shadow of the 6.5-billion-solar-mass black hole M87*.',
    },
    {
      id: 'c22-q13',
      question: 'What happens to light emitted near an event horizon climbing out to a distant observer (Gravitational Redshift)?',
      options: [
        'Its wavelength is stretched to longer, less energetic frequencies',
        'Its wavelength becomes shorter (blueshifted)',
        'Its speed drops to 100 km/s',
        'It changes into gamma rays',
      ],
      correctIndex: 0,
      explanation: 'Photons lose gravitational potential energy as they climb out of the gravitational well, stretching their wavelengths toward the red.',
    },
    {
      id: 'c22-q14',
      question: 'What quantum mechanical radiation is predicted to cause black holes to slowly evaporate over trillions of years?',
      options: ['Synchrotron radiation', 'Hawking radiation', 'Bremsstrahlung radiation', 'Cherenkov radiation'],
      correctIndex: 1,
      explanation: 'Hawking radiation arises from quantum vacuum fluctuations at the event horizon, causing black holes to very slowly radiate away mass.',
    },
    {
      id: 'c22-q15',
      question: 'What is the "No-Hair Theorem" for black holes?',
      options: [
        'Black holes have smooth event horizons with zero friction',
        'An isolated black hole is completely characterized by only three numbers: Mass, Electric Charge, and Angular Momentum (Spin)',
        'Black holes cannot exist in spiral galaxies',
        'Black holes have no magnetic fields',
      ],
      correctIndex: 1,
      explanation: 'The No-Hair theorem proves that all complex structural details of matter falling into a black hole vanish, leaving only Mass, Charge, and Spin.',
    },
    {
      id: 'c22-q16',
      question: 'What is the Penrose Process?',
      options: [
        'A way to escape from inside the event horizon',
        'A mechanism to extract rotational kinetic energy from the ergosphere of a spinning Kerr black hole',
        'A method to measure dark matter',
        'A way to cool a neutron star',
      ],
      correctIndex: 1,
      explanation: 'The Penrose process allows energy extraction from the ergosphere of a rotating black hole by splitting infalling matter.',
    },
    {
      id: 'c22-q17',
      question: 'How do astronomers detect stellar-mass black holes that have no companion star (isolated black holes)?',
      options: [
        'They listen for radio chatter from the hole',
        'Through Gravitational Microlensing (the black hole’s gravity acts as a lens, temporarily magnifying a background star)',
        'By looking for dark spots in the clouds',
        'They cannot be detected at all',
      ],
      correctIndex: 1,
      explanation: 'Isolated black holes are detected when their intense gravity bends and magnifies light from a background star (gravitational microlensing).',
    },
    {
      id: 'c22-q18',
      question: 'What instrument made the historic 2015 detection of gravitational waves from two merging black holes (GW150914)?',
      options: ['Hubble Space Telescope', 'LIGO (Laser Interferometer Gravitational-Wave Observatory)', 'James Webb Space Telescope', 'Arecibo Observatory'],
      correctIndex: 1,
      explanation: 'LIGO detected the ripples in spacetime from two colliding stellar-mass black holes (29 and 36 M_☉) in September 2015.',
    },
    {
      id: 'c22-q19',
      question: 'If you were in an elevator in deep space being accelerated upward at 9.8 m/s² with no windows, could you tell whether you were on Earth or in space?',
      options: [
        'Yes, you could measure your mass changing',
        'No, the Equivalence Principle states that uniform acceleration and uniform gravity produce identical physical effects',
        'Yes, light would bend backwards',
        'Yes, your watch would stop',
      ],
      correctIndex: 1,
      explanation: 'Einstein’s Equivalence Principle proves that no local experiment can distinguish between inertial acceleration and gravitational pull.',
    },
    {
      id: 'c22-q20',
      question: 'What happens to the radius of a black hole’s event horizon (Schwarzschild radius) if its mass is tripled (3×)?',
      options: ['It is cut to 1/3', 'It stays the same', 'It triples (3×)', 'It increases by 9 times (9×)'],
      correctIndex: 2,
      explanation: 'Because R_s = 2GM/c², the event horizon radius is directly linear with mass. Tripling the mass triples the radius.',
    },
  ],
};
