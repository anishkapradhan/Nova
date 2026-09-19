import { CurriculumTopic } from '@/types/curriculum';

export const stellarEvolutionMainSequenceAndAfterTopic: CurriculumTopic = {
  slug: 'stellar-evolution-main-sequence-and-after',
  chapterNumber: 19,
  title: 'Stellar Evolution: On and After the Main Sequence',
  subtitle: 'Red Giants, The Helium Flash, Cepheid Variables, and Cluster Turnoff Ages',
  badge: 'Chapter 19 • Post-Main-Sequence Life',
  accentColor: 'orange',
  freshmanSummary:
    'Stars do not live forever. What happens when a star runs out of hydrogen in its core? In this chapter, you will trace the dramatic mid-life crisis of stars. You will see how low-to-intermediate mass stars (like our Sun) swell into enormous Red Giants, ignite core helium in a runaway explosive flash (the Triple-Alpha Process), wander across the Horizontal and Asymptotic Giant Branches, pulsate as cosmic standard candles (Cepheid variables), and how star clusters allow astronomers to date the age of the galaxy.',
  readingSections: 'Sections 19.1 – 19.7 (Core Exhaustion, Red Giant Branch, Helium Flash, AGB Stars, Cepheids & RR Lyrae, Cluster Turnoff Dating)',
  deepSkyObjects: [
    {
      name: 'Messier 82 (Cigar Galaxy)',
      designation: 'M82 / NGC 3034',
      type: 'Starburst Galaxy / High-Energy Laboratory',
      constellation: 'Ursa Major',
      distanceLightYears: '12 million light-years',
      significance:
        'A starburst galaxy with intense star formation triggered by gravitational interaction with M81. Hosts famous ultraluminous X-ray sources (M82 X-1, an intermediate-mass black hole candidate; M82 X-2, a pulsating neutron star) and the bright Type Ia supernova SN 2014J.',
      observationTip: 'Visible in small telescopes as a bright silver needle near M81; binoculars show both galaxies in a single field.',
    },
    {
      name: 'GW170817',
      designation: 'AT 2017gfo / SSS17a in NGC 4993',
      type: 'Binary Neutron Star Merger & Kilonova',
      constellation: 'Hydra',
      distanceLightYears: '130 million light-years',
      significance:
        'The historic first multi-messenger astronomical event ever observed: simultaneously detected in gravitational waves (LIGO/Virgo) and electromagnetic light (gamma-ray burst GRB 170817A and optical kilonova), proving that neutron star mergers synthesize heavy elements like gold and platinum.',
    },
  ],
  sections: [
    {
      id: 'core-exhaustion-red-giants',
      title: 'Leaving the Main Sequence: Core Exhaustion and Red Giants',
      subheading: 'Why running out of fuel in the core makes the outer star balloon to giant sizes',
      laymanExplanation:
        'A main-sequence star lives in peaceful hydrostatic equilibrium. But after billions of years, the hydrogen fuel in the core is converted completely into helium "ash". Without fusion heat to support it, the core contracts under gravity. Gravitational compression heats up a shell of hydrogen immediately surrounding the core, igniting Hydrogen Shell Burning. This shell burns so fiercely that outward radiation pressure forces the star’s outer atmospheric layers to expand outward by hundreds of times! As the outer envelope swells, it cools down from yellow to red, transforming the star into a colossal Red Giant.',
      realWorldAnalogy:
        'Think of a car engine: when the fuel in the main cylinder runs out, a backup turbocharger turns on in the exhaust pipe. It burns so hot that the hood of the car swells to the size of a blimp! When our Sun becomes a red giant in ~5 billion years, its outer surface will expand to swallow Mercury, Venus, and possibly Earth!',
      keyTerms: [
        {
          term: 'Subgiant Branch',
          definition: 'The evolutionary phase where core hydrogen is exhausted and the star moves horizontally rightward on the H-R diagram as its envelope expands and cools at constant luminosity.',
        },
        {
          term: 'Red Giant Branch (RGB)',
          definition: 'The steep, nearly vertical ascent on the H-R diagram where a star swells in radius and luminosity powered by a thin, fiercely burning hydrogen-fusion shell surrounding an inert, contracting helium core.',
        },
        {
          term: 'Hydrogen Shell Burning',
          definition: 'Nuclear fusion of hydrogen into helium taking place in a thin spherical shell immediately outside an inert, degenerate helium core.',
        },
      ],
      mathBreakdown: {
        name: 'Main Sequence Lifespan Scaling',
        formula: '\\tau_{\\text{MS}} \\propto \\frac{M}{L} \\propto \\frac{M}{M^{3.5}} = \\frac{1}{M^{2.5}} \\times 10^{10} \\text{ years}',
        variables: 'τ_MS = main sequence lifetime; M = mass in solar masses; 10¹⁰ years = Sun’s lifetime (~10 billion years).',
        walkThrough:
          'For a star with 2 solar masses (M = 2): τ = 10¹⁰ / (2)².⁵ = 10¹⁰ / 5.66 ≈ 1.77 billion years. For a star with 10 solar masses (M = 10): τ = 10¹⁰ / (10)².⁵ = 10¹⁰ / 316 ≈ 31.6 million years!',
        practiceProblem: {
          problem: 'How long does a 0.5 solar mass red dwarf star live on the main sequence?',
          solution: 'τ = 10¹⁰ / (0.5)².⁵ = 10¹⁰ / 0.177 ≈ 5.6 × 10¹⁰ years (~56 billion years—longer than the current age of the universe!).',
        },
      },
    },
    {
      id: 'helium-flash-horizontal-branch',
      title: 'The Helium Flash and the Triple-Alpha Process',
      subheading: 'Igniting degenerate helium in a runaway thermonuclear flash',
      laymanExplanation:
        'As the red giant’s inert helium core contracts, its electrons are squeezed so tightly together that they reach quantum mechanical limits: Electron Degeneracy Pressure. In degenerate matter, pressure depends only on density, NOT temperature! When contraction finally heats the core to 100 million Kelvin, helium fusion ignites via the Triple-Alpha Process (three helium-4 nuclei fuse into one carbon-12 nucleus). Because degenerate pressure cannot expand the core to cool it, temperature skyrockets, causing fusion to accelerate exponentially in a runaway explosion called the Helium Flash! Within minutes, the core produces more power than an entire galaxy, lifting degeneracy and settling the star stably onto the Horizontal Branch.',
      realWorldAnalogy:
        'Normal gas acts like a balloon: heat it up, it expands and cools. Degenerate gas acts like a solid iron pressure cooker: heat it up, it cannot expand, so temperature and pressure skyrocket until the safety valve blows! That explosive release is the helium flash.',
      keyTerms: [
        {
          term: 'Electron Degeneracy Pressure',
          definition: 'A quantum mechanical pressure arising from the Pauli Exclusion Principle, which forbids two identical electrons from occupying the same quantum energy state simultaneously.',
        },
        {
          term: 'Helium Flash',
          definition: 'The brief, nearly explosive runaway ignition of core helium fusion in low-mass stars (0.8 to 2.0 M_☉) with degenerate helium cores.',
        },
        {
          term: 'Triple-Alpha Process',
          definition: 'The two-step nuclear fusion reaction converting three helium-4 nuclei (alpha particles) into one carbon-12 nucleus: 3 ⁴He → ¹²C + γ at temperatures ≥ 100,000,000 K.',
        },
        {
          term: 'Horizontal Branch (HB)',
          definition: 'A horizontal band on the H-R diagram where post-helium-flash stars stably burn helium in their non-degenerate cores surrounded by a hydrogen-burning shell.',
        },
        {
          term: 'Asymptotic Giant Branch (AGB)',
          definition: 'The second giant phase where an inert carbon-oxygen core is surrounded by double burning shells (helium shell inside, hydrogen shell outside).',
        },
      ],
    },
    {
      id: 'variable-stars-clusters',
      title: 'Pulsating Variable Stars and Star Cluster Dating',
      subheading: 'Cosmic yardsticks and calculating the age of the universe',
      laymanExplanation:
        'When stars evolve across the Instability Strip on the H-R diagram, their atmospheres become unstable. Doubly ionized helium acts like an opaque thermal blanket that traps heat, expanding the star outward; as it expands, it cools, turns transparent, lets heat escape, and gravity pulls it back down. This cyclical pulsation creates Variable Stars. In 1912, Henrietta Swan Leavitt discovered the Period-Luminosity Relation: brighter Cepheid variables take longer to pulsate! By measuring a Cepheid’s pulsation period, you instantly know its absolute luminosity, making it a cosmic standard candle. Furthermore, by plotting an entire star cluster on an H-R diagram, the Main-Sequence Turnoff Point reveals the exact age of the cluster!',
      realWorldAnalogy:
        'Think of a lighthouse with a blinking light whose blink rate tells you its exact wattage. If a bulb flashes once every 10 days, you know it is a 10,000-Watt bulb. Measuring how dim it looks from your ship immediately tells you how many miles away the shore is! That is Henrietta Leavitt’s Cepheid yardstick.',
      keyTerms: [
        {
          term: 'Cepheid Variable Star',
          definition: 'A massive, highly luminous pulsating yellow supergiant star whose period of pulsation is directly proportional to its true absolute luminosity (the Period-Luminosity relation).',
        },
        {
          term: 'Period-Luminosity Relation',
          definition: 'The direct correlation discovered by Henrietta Swan Leavitt connecting a Cepheid’s pulsation period (in days) to its absolute magnitude M.',
        },
        {
          term: 'RR Lyrae Star',
          definition: 'A lower-mass pulsating horizontal-branch variable star with periods under 1 day and nearly constant absolute magnitude (M_V ≈ +0.6), used to measure distances to globular clusters.',
        },
        {
          term: 'Main-Sequence Turnoff Point',
          definition: 'The location on the H-R diagram of a star cluster where stars are currently exhausting core hydrogen and peeling off the main sequence toward the giant branch. The turnoff mass directly gives the cluster’s age.',
        },
      ],
    },
  ],
  diagram: {
    type: 'stellar-evolution',
    title: 'Post-Main-Sequence Evolutionary Track on the H-R Diagram',
    caption: 'Main Sequence (V) → Subgiant Branch → Red Giant Branch (RGB) → Helium Flash → Horizontal Branch (core He burning) → Asymptotic Giant Branch (AGB double shell burning).',
  },
  flashcards: [
    {
      id: 'c19-f1',
      term: 'Hydrogen Shell Burning',
      category: 'Concept',
      front: 'What triggers hydrogen shell burning in an evolving star?',
      back: 'The exhaustion of hydrogen in the central core causes the core to contract gravitationally, heating the surrounding hydrogen layer enough to ignite shell fusion.',
    },
    {
      id: 'c19-f2',
      term: 'Red Giant Radius Expansion',
      category: 'Concept',
      front: 'Why does a star expand into a red giant when its core contracts?',
      back: 'Intense energy output from the compressed hydrogen-burning shell pushes the outer envelope outward by hundreds of times, causing it to cool and turn red.',
    },
    {
      id: 'c19-f3',
      term: 'Electron Degeneracy Pressure',
      category: 'Definition',
      front: 'What is electron degeneracy pressure and what physical rule governs it?',
      back: 'Quantum pressure arising from the Pauli Exclusion Principle: electrons cannot be squeezed into identical quantum states. Unlike ideal gas, it is independent of temperature.',
    },
    {
      id: 'c19-f4',
      term: 'Triple-Alpha Process',
      category: 'Formula',
      front: 'What is the Triple-Alpha reaction and at what temperature does it ignite?',
      back: '3 ⁴He (alpha particles) → ¹²C (carbon-12) + gamma-ray energy. It ignites when core temperatures reach approximately 100 million Kelvin (10⁸ K).',
    },
    {
      id: 'c19-f5',
      term: 'The Helium Flash',
      category: 'Concept',
      front: 'What is the Helium Flash and which stars experience it?',
      back: 'The explosive runaway ignition of core helium fusion in stars between ~0.8 and 2.0 solar masses with degenerate helium cores.',
    },
    {
      id: 'c19-f6',
      term: 'Horizontal Branch (HB)',
      category: 'Definition',
      front: 'What nuclear fusion reactions occur in a Horizontal Branch star?',
      back: 'Core helium fusion (triple-alpha process into carbon) PLUS an outer hydrogen-burning shell.',
    },
    {
      id: 'c19-f7',
      term: 'Asymptotic Giant Branch (AGB)',
      category: 'Definition',
      front: 'What is the internal structure of an Asymptotic Giant Branch (AGB) star?',
      back: 'An inert carbon-oxygen core surrounded by a helium-burning shell, which in turn is surrounded by a hydrogen-burning shell ("double shell burning").',
    },
    {
      id: 'c19-f8',
      term: 'Cepheid Variable Star',
      category: 'Concept',
      front: 'What is a Cepheid variable star and why is it crucial for cosmology?',
      back: 'A pulsating yellow supergiant star whose pulsation period directly reveals its absolute luminosity (Leavitt’s Law), enabling accurate distance measurements across the universe.',
    },
    {
      id: 'c19-f9',
      term: 'Period-Luminosity Relation (Leavitt’s Law)',
      category: 'Formula',
      front: 'State Henrietta Leavitt’s Period-Luminosity relation.',
      back: 'The longer the pulsation period of a Cepheid variable, the higher its intrinsic absolute luminosity (longer period = brighter star).',
    },
    {
      id: 'c19-f10',
      term: 'Main-Sequence Turnoff Point',
      category: 'Concept',
      front: 'What is the main-sequence turnoff point of a star cluster?',
      back: 'The point on the cluster’s H-R diagram where stars are currently exhausting core hydrogen and bending rightward toward the giant branch. Reveals the cluster’s age!',
    },
    {
      id: 'c19-f11',
      term: 'Open Cluster vs Globular Cluster',
      category: 'Concept',
      front: 'Contrast an open cluster with a globular cluster.',
      back: 'Open clusters: young, loose, hundreds of metal-rich stars located in galactic disks. Globular clusters: ancient (10–13 billion yrs), dense, hundreds of thousands of metal-poor stars in the galactic halo.',
    },
    {
      id: 'c19-f12',
      term: 'RR Lyrae Stars',
      category: 'Definition',
      front: 'What are RR Lyrae stars and what is their absolute magnitude?',
      back: 'Pulsating horizontal-branch stars with short periods (< 1 day) and nearly constant absolute magnitude (M_V ≈ +0.6), ideal for measuring distances to globular clusters.',
    },
    {
      id: 'c19-f13',
      term: 'The Instability Strip',
      category: 'Definition',
      front: 'What is the Instability Strip on the H-R diagram?',
      back: 'A narrow, nearly vertical region of the H-R diagram where stars develop atmospheric pulsation instabilities driven by the kappa-mechanism (ionized helium opacity).',
    },
    {
      id: 'c19-f14',
      term: 'M82 (Cigar Galaxy) & SN 2014J',
      category: 'DSO',
      front: 'What notable supernova was observed in starburst galaxy M82 in 2014?',
      back: 'SN 2014J, the closest Type Ia (white dwarf thermonuclear) supernova discovered in over two decades (~11.4 million light-years away).',
    },
    {
      id: 'c19-f15',
      term: 'GW170817',
      category: 'DSO',
      front: 'Why was the detection of GW170817 a turning point in modern astrophysics?',
      back: 'It was the first multi-messenger event: a binary neutron star merger observed both via gravitational waves (LIGO/Virgo) and electromagnetic radiation (gamma-rays, kilonova light).',
    },
    {
      id: 'c19-f16',
      term: 'Thermal Pulses & Dredge-Up',
      category: 'Concept',
      front: 'What is a dredge-up in an AGB star?',
      back: 'Periodic explosive flashes in the helium shell trigger deep convective currents that dredge freshly synthesized carbon and heavy elements up to the surface.',
    },
  ],
  quiz: [
    {
      id: 'c19-q1',
      question: 'What physical event causes a main-sequence star to begin its transition into a subgiant and red giant?',
      options: [
        'The complete exhaustion of hydrogen fuel in the central core',
        'An asteroid colliding with the star',
        'The star’s rotation stopping completely',
        'The outer atmosphere freezing into ice',
      ],
      correctIndex: 0,
      explanation: 'When core hydrogen is exhausted, fusion shuts down in the center, causing the inert helium core to contract and triggering hydrogen shell burning.',
    },
    {
      id: 'c19-q2',
      question: 'Why does a star’s outer envelope expand by hundreds of times when it becomes a red giant?',
      options: [
        'Gravity suddenly turns off',
        'Fierce energy generation in the hydrogen-burning shell pushes the outer layers outward',
        'The core cools to absolute zero',
        'Centrifugal force from faster rotation flings the envelope off',
      ],
      correctIndex: 1,
      explanation: 'The hydrogen-burning shell generates energy at a furious rate, exerting massive radiation pressure that inflates the outer envelope into a giant.',
    },
    {
      id: 'c19-q3',
      question: 'What type of quantum pressure supports an inert helium core in a low-mass red giant before helium fusion ignites?',
      options: ['Thermal gas pressure', 'Electron degeneracy pressure', 'Neutron degeneracy pressure', 'Magnetic pressure'],
      correctIndex: 1,
      explanation: 'Electron degeneracy pressure, governed by the Pauli Exclusion Principle, prevents degenerate electrons from being squeezed closer together.',
    },
    {
      id: 'c19-q4',
      question: 'What is the name of the nuclear reaction that fuses three helium-4 nuclei into one carbon-12 nucleus?',
      options: ['The CNO cycle', 'The proton-proton chain', 'The Triple-Alpha process', 'Silicon burning'],
      correctIndex: 2,
      explanation: 'The Triple-Alpha process fuses three alpha particles (⁴He nuclei) into carbon-12 (3 ⁴He → ¹²C + γ) at temperatures ≥ 100 million Kelvin.',
    },
    {
      id: 'c19-q5',
      question: 'Why does helium ignition in low-mass stars result in an explosive "Helium Flash" rather than a gentle transition?',
      options: [
        'Helium has zero mass',
        'Degenerate electron pressure is independent of temperature, so the core cannot expand and cool as temperature skyrockets',
        'The core is made of antimatter',
        'The star absorbs a black hole',
      ],
      correctIndex: 1,
      explanation: 'In degenerate matter, pressure does not increase with temperature. The core cannot expand to cool itself, causing a runaway thermonuclear flash.',
    },
    {
      id: 'c19-q6',
      question: 'After the helium flash, where does a low-mass star settle on the H-R diagram while stably burning core helium?',
      options: ['The Main Sequence', 'The Horizontal Branch', 'The White Dwarf sequence', 'The Instability Strip peak'],
      correctIndex: 1,
      explanation: 'The star contracts, its surface heats up, and it settles stably onto the Horizontal Branch (HB).',
    },
    {
      id: 'c19-q7',
      question: 'What nuclear burning shells surround the inert carbon-oxygen core of an Asymptotic Giant Branch (AGB) star?',
      options: [
        'An inner helium-burning shell and an outer hydrogen-burning shell (double shell burning)',
        'An iron-burning shell and a neon shell',
        'A single uranium shell',
        'No shells; fusion is completely dead',
      ],
      correctIndex: 0,
      explanation: 'AGB stars possess an inert carbon-oxygen core surrounded by a helium-burning shell and an outermost hydrogen-burning shell.',
    },
    {
      id: 'c19-q8',
      question: 'Who discovered the groundbreaking Period-Luminosity relation for Cepheid variable stars in 1912?',
      options: ['Edwin Hubble', 'Henrietta Swan Leavitt', 'Albert Einstein', 'Subrahmanyan Chandrasekhar'],
      correctIndex: 1,
      explanation: 'Henrietta Swan Leavitt discovered that longer-period Cepheids in the Magellanic Clouds have greater intrinsic luminosity.',
    },
    {
      id: 'c19-q9',
      question: 'According to the Period-Luminosity relation, a Cepheid variable star with a 30-day pulsation period is:',
      options: [
        'Less luminous than a Cepheid with a 3-day period',
        'Vastly more luminous than a Cepheid with a 3-day period',
        'Identical in luminosity to a 3-day Cepheid',
        'A dying black hole',
      ],
      correctIndex: 1,
      explanation: 'Luminosity scales directly with period: a 30-day Cepheid is intrinsically much more luminous than a short-period Cepheid.',
    },
    {
      id: 'c19-q10',
      question: 'Why are Cepheid variables and RR Lyrae stars referred to as "standard candles"?',
      options: [
        'They produce smoke like candles',
        'Their intrinsic luminosity is known from their pulsation period, allowing astronomers to calculate their exact distance via the distance modulus',
        'They are the coolest stars in the universe',
        'They never change their apparent brightness',
      ],
      correctIndex: 1,
      explanation: 'A standard candle is an object of known absolute luminosity. Measuring its apparent brightness reveals its distance via m - M = 5 log(d) - 5.',
    },
    {
      id: 'c19-q11',
      question: 'How do astronomers determine the precise age of a star cluster using the H-R diagram?',
      options: [
        'By counting the total number of planets in the cluster',
        'By identifying the mass and spectral type of stars at the Main-Sequence Turnoff Point',
        'By measuring the cluster’s total radio emission',
        'By checking the color of the central white dwarf',
      ],
      correctIndex: 1,
      explanation: 'All stars in a cluster formed at the same time. The most massive stars die first; the turnoff point marks the highest mass still on the main sequence, dating the cluster.',
    },
    {
      id: 'c19-q12',
      question: 'Which of the following describes an ancient Globular Cluster?',
      options: [
        'A loose collection of 50 young blue stars in the galactic disk',
        'A spherical swarm of 100,000 to 1,000,000 ancient, metal-poor stars in the galactic halo (10–13 billion years old)',
        'A cloud of interstellar gas where stars are currently forming',
        'A pair of interacting galaxies',
      ],
      correctIndex: 1,
      explanation: 'Globular clusters are ancient spherical swarms of hundreds of thousands of Population II stars orbiting in the galactic halo.',
    },
    {
      id: 'c19-q13',
      question: 'What valve mechanism drives the rhythmic pulsation of variable stars in the Instability Strip?',
      options: [
        'The kappa-mechanism (cyclic ionization and opacity changes of helium in the stellar envelope)',
        'Periodic impacts of comets into the star',
        'Gravitational waves passing through the core',
        'Nuclear fusion turning completely on and off every few days',
      ],
      correctIndex: 0,
      explanation: 'The kappa-mechanism: doubly ionized helium (He III) traps radiation when compressed, heating and expanding the star, then becomes transparent when expanded, allowing cooling.',
    },
    {
      id: 'c19-q14',
      question: 'How does a star’s main-sequence lifetime scale with its mass (using L ∝ M³.⁵)?',
      options: ['τ ∝ M', 'τ ∝ M²', 'τ ∝ 1 / M².⁵', 'τ is independent of mass'],
      correctIndex: 2,
      explanation: 'Lifetime τ = Fuel / Burn Rate ∝ M / L ∝ M / M³.⁵ = 1 / M².⁵. Higher mass stars live dramatically shorter lives.',
    },
    {
      id: 'c19-q15',
      question: 'What process dredges freshly synthesized carbon from the interior of an AGB star up to its outer surface?',
      options: ['Thermal pulses in the helium shell driving deep convective zones', 'Magnetic reconnection flares', 'Asteroid bombardments', 'Nuclear fission'],
      correctIndex: 0,
      explanation: 'Thermal pulses in the helium shell induce deep convective currents (dredge-up episodes) that bring carbon and s-process elements to the surface.',
    },
    {
      id: 'c19-q16',
      question: 'What is an RR Lyrae variable star?',
      options: [
        'A massive blue supergiant with a 50-year period',
        'A low-mass pulsating horizontal-branch star with a period under 1 day and absolute magnitude M_V ≈ +0.6',
        'A protostar that has not yet ignited hydrogen',
        'A white dwarf accreting gas from a red giant',
      ],
      correctIndex: 1,
      explanation: 'RR Lyrae stars are pulsating horizontal-branch stars (periods < 1 day) whose uniform absolute luminosity makes them excellent distance indicators for globular clusters.',
    },
    {
      id: 'c19-q17',
      question: 'Starburst galaxy M82 hosted a famous Type Ia supernova in January 2014 designated as:',
      options: ['SN 1987A', 'SN 2014J', 'Kepler’s Supernova', 'Tycho’s Nova'],
      correctIndex: 1,
      explanation: 'SN 2014J was a bright Type Ia supernova in M82, located approximately 11.4 million light-years away.',
    },
    {
      id: 'c19-q18',
      question: 'What kind of stellar remnant collision produced the historic gravitational wave event GW170817?',
      options: ['Two supermassive black holes', 'Two merging neutron stars', 'A white dwarf and a red giant', 'Two colliding protostars'],
      correctIndex: 1,
      explanation: 'GW170817 was the coalescence of two neutron stars, observed both in gravitational waves and across the electromagnetic spectrum as a kilonova.',
    },
    {
      id: 'c19-q19',
      question: 'When our Sun becomes a Red Giant in ~5 billion years, its radius will expand to approximately:',
      options: ['1.1 solar radii', '2 solar radii', 'Over 200 solar radii (~1 AU, swallowing the inner planets)', '10,000 solar radii'],
      correctIndex: 2,
      explanation: 'The Sun will expand to ~1 AU (over 200 times its current radius), engulfing Mercury, Venus, and likely Earth.',
    },
    {
      id: 'c19-q20',
      question: 'Why do old globular clusters have no bright, hot O or B main-sequence stars?',
      options: [
        'They never had any gas to make massive stars',
        'All high-mass O and B stars exhausted their fuel and died billions of years ago',
        'O and B stars are invisible in globular clusters',
        'Globular clusters are too cold for O stars',
      ],
      correctIndex: 1,
      explanation: 'Because globular clusters are >10 billion years old, all short-lived massive stars (O, B, A) have long since died, leaving only low-mass stars on the main sequence.',
    },
  ],
};
