import { CurriculumTopic } from '@/types/curriculum';

export const galaxiesTopic: CurriculumTopic = {
  slug: 'galaxies',
  chapterNumber: 24,
  title: 'Galaxies and the Universe',
  subtitle: 'The Hubble Tuning Fork, Colliding Island Universes, and Supermassive AGN Monsters',
  badge: 'Chapter 24 • Extragalactic Astronomy',
  accentColor: 'indigo',
  freshmanSummary:
    'Beyond the Milky Way lies a universe filled with hundreds of billions of other galaxies. In this climactic chapter, you will master Edwin Hubble’s iconic Tuning Fork diagram for classifying Spirals, Barred Spirals, Ellipticals, and Irregulars. You will climb the Cosmic Distance Ladder, watch what happens when giant galaxies collide (hint: stars never crash, but gas explodes into starbursts!), and peer into the ferocious hearts of Active Galactic Nuclei (Quasars and Blazars) powered by supermassive black hole engines.',
  readingSections: 'Section 24.4 (Hubble Classification Tuning Fork, Distance Ladder, Galaxy Interactions & Mergers, Active Galactic Nuclei & Quasars)',
  deepSkyObjects: [
    {
      name: 'Centaurus A',
      designation: 'NGC 5128',
      type: 'Peculiar Active Radio Galaxy',
      constellation: 'Centaurus',
      distanceLightYears: '13 million light-years',
      significance:
        'The closest active radio galaxy to Earth. Formed by a recent merger between an elliptical galaxy and a smaller spiral galaxy, it features a prominent warped dark dust belt, twin relativistic plasma jets, and giant radio lobes spanning over 1.5 million light-years.',
      observationTip: 'One of the brightest extragalactic objects in the southern sky; easily visible in binoculars as a bright round glow bisected by a dramatic dark dust lane.',
    },
    {
      name: 'Messier 87 (Virgo A)',
      designation: 'M87 / NGC 4486',
      type: 'Giant Elliptical Galaxy (cD)',
      constellation: 'Virgo',
      distanceLightYears: '53.5 million light-years',
      significance:
        'The dominant supergiant elliptical galaxy at the heart of the Virgo Cluster. Contains over 12,000 globular clusters (compared to the Milky Way’s ~150) and fires a dramatic 5,000-light-year-long relativistic jet of synchrotron plasma from its central 6.5-billion-solar-mass black hole.',
    },
  ],
  sections: [
    {
      id: 'hubble-tuning-fork',
      title: 'The Hubble Classification: The Tuning Fork Diagram',
      subheading: 'Ellipticals, Lenticulars, Spirals, and Irregulars',
      laymanExplanation:
        'In 1926, Edwin Hubble organized galaxies by their visible shapes into the famous Hubble Tuning Fork diagram. The handle is made of Elliptical galaxies (labeled E0 for spherical to E7 for highly flattened), which are smooth, reddish-yellow balls of ancient stars with little gas or active star formation. At the fork’s juncture sit Lenticular galaxies (S0), which have a disk and bulge but no spiral arms. The prongs split into two families: Normal Spirals (Sa, Sb, Sc) on the top prong, and Barred Spirals (SBa, SBb, SBc) on the bottom prong. Class "a" spirals have massive bulges and tightly wound arms, while class "c" spirals have tiny bulges and loose, open, knotty arms. Galaxies that fit neither category are Irregulars (Irr).',
      realWorldAnalogy:
        'Think of a vehicle showroom: Ellipticals are like old, sturdy city buses (massive, round, filled with senior citizen stars, moving on random paths). Spirals are sleek sports cars (flat, spinning fast, with shiny blue newborn stars racing along the track). Irregulars are demolition derby cars (dented and distorted by cosmic collisions)!',
      keyTerms: [
        {
          term: 'Elliptical Galaxy (E0–E7)',
          definition: 'A smooth, featureless, spheroidal galaxy composed almost entirely of older Population II stars with very little interstellar gas or ongoing star formation.',
        },
        {
          term: 'Spiral Galaxy (Sa, Sb, Sc)',
          definition: 'A disk galaxy possessing spiral arms and a central bulge. Moving from "a" to "c", the central bulge shrinks while the spiral arms become looser, more open, and more active in star formation.',
        },
        {
          term: 'Barred Spiral Galaxy (SBa, SBb, SBc)',
          definition: 'A spiral galaxy whose central bulge is bisected by an elongated bar of stars from which the spiral arms originate (our Milky Way is an SBb/SBc).',
        },
        {
          term: 'Lenticular Galaxy (S0 / SB0)',
          definition: 'A transitional disk galaxy with a prominent central bulge and a thin stellar disk, but with no visible spiral arms and virtually no interstellar gas.',
        },
        {
          term: 'Irregular Galaxy (Irr I / Irr II)',
          definition: 'An asymmetrical galaxy lacking rotational symmetry or regular spiral/elliptical structure, often rich in gas and undergoing chaotic starbursts (e.g., the Magellanic Clouds).',
        },
      ],
    },
    {
      id: 'distance-ladder-mergers',
      title: 'The Cosmic Distance Ladder and Colliding Galaxies',
      subheading: 'Stepping outward across the cosmos, and why colliding galaxies never crash stars',
      laymanExplanation:
        'Astronomers cannot measure the distance to a billion-light-year-away galaxy with a single tool. We build a Cosmic Distance Ladder, where each rung calibrates the next: Radar Ranging (Solar System) → Trigonometric Parallax (nearby stars) → Main-Sequence Fitting (star clusters) → Cepheid Variables (nearby galaxies out to ~100 Mly) → The Tully-Fisher Relation (spiral galaxy rotation speed v_rot vs luminosity L) → Type Ia Supernovae (out to billions of light-years). What happens when two giant galaxies collide? Because the empty space between stars is so unfathomably huge, practically zero individual stars ever physically collide! Instead, their gas clouds crash together, compressing into millions of newborn stars (a Starburst), while gravitational tides stretch stars into sweeping Tidal Tails.',
      realWorldAnalogy:
        'If two swarms of 100 billion gnats pass through each other in an open football stadium, the odds of two individual gnats bumping heads is nearly zero! But if they are blowing smoke rings, the smoke clouds will crash, mix, and ignite into sparks. That’s what happens when galaxies collide.',
      keyTerms: [
        {
          term: 'Cosmic Distance Ladder',
          definition: 'The succession of overlapping astronomical distance-measurement methods used to gauge distances to progressively farther celestial objects across the universe.',
        },
        {
          term: 'Tully-Fisher Relation',
          definition: 'An empirical relation for spiral galaxies: intrinsic luminosity is proportional to the fourth power of maximum rotational velocity (L ∝ v_rot⁴), allowing distances to be calculated from 21-cm line widths.',
        },
        {
          term: 'Tidal Tails',
          definition: 'Elongated, curved streams of stars and interstellar gas gravitationally stripped and hurled into space by differential tidal forces during galaxy collisions.',
        },
        {
          term: 'Starburst Galaxy',
          definition: 'A galaxy undergoing an exceptionally intense, rapid burst of star formation (often triggered by a collision or merger) that consumes its entire gas reservoir in a fraction of its lifetime.',
        },
      ],
      mathBreakdown: {
        name: 'The Tully-Fisher Relation',
        formula: 'L \\propto v_{\\text{rot}}^4 \\quad \\text{or} \\quad M_B \\approx -10 \\log_{10}(v_{\\text{max}}) + \\text{constant}',
        variables: 'L = total optical/infrared luminosity; v_rot = maximum circular rotation speed measured from 21-cm radio line width Doppler broadening.',
        walkThrough:
          'Measure the 21-cm Doppler broadening of a distant spiral galaxy to find v_rot = 200 km/s. The Tully-Fisher relation gives its absolute luminosity L (and absolute magnitude M). Measure its apparent brightness m, and the distance modulus m - M = 5 log(d) - 5 gives the distance!',
        practiceProblem: {
          problem: 'If spiral galaxy A rotates twice as fast as spiral galaxy B (v_A = 2 v_B), how do their intrinsic luminosities compare according to L ∝ v⁴?',
          solution: 'L_A / L_B = (v_A / v_B)⁴ = (2)⁴ = 16 times more luminous!',
        },
      },
    },
    {
      id: 'agn-and-quasars',
      title: 'Active Galactic Nuclei (AGN), Quasars, and Cosmic Feedback',
      subheading: 'Monsters at the centers of galaxies outshining 1,000 Milky Ways',
      laymanExplanation:
        'In the 1960s, astronomers discovered "quasi-stellar radio sources" (Quasars): tiny point-like objects with colossal redshifts, meaning they were billions of light-years away yet brighter than hundreds of galaxies combined! What powers them? Active Galactic Nuclei (AGN) are fueled by Supermassive Black Holes (millions to billions of solar masses) actively gorging on interstellar gas. Infalling matter forms a superheated accretion disk reaching millions of Kelvin, converting up to 10–40% of its rest mass directly into pure radiation (compared to just 0.7% in nuclear fusion!). Magnetic fields channel relativistic plasma into twin jets shooting out across millions of light-years. In the Unified Model, whether an AGN looks like a Quasar, a Seyfert galaxy, a Radio Galaxy, or a Blazar depends solely on our viewing angle!',
      realWorldAnalogy:
        'A quasar’s central engine is no larger than our Solar System, yet it shines with the light of a trillion suns! If a typical galaxy were the size of a giant city illuminated by billions of house lights, a central quasar is like a blinding nuclear flashbulb in the center of town that completely outshines the entire city!',
      keyTerms: [
        {
          term: 'Active Galactic Nucleus (AGN)',
          definition: 'An unusually luminous, compact central region of a galaxy powered by accretion of matter onto a central supermassive black hole.',
        },
        {
          term: 'Quasar (QSO)',
          definition: 'The most luminous subclass of AGN: an actively feeding supermassive black hole in the early universe whose central accretion disk outshines its entire host galaxy.',
        },
        {
          term: 'Unified Model of AGN',
          definition: 'The paradigm explaining diverse AGN classes (Seyfert 1, Seyfert 2, Quasar, Blazar, Radio Galaxy) as the same physical engine—a central black hole, accretion disk, dusty torus, and jets—viewed from different inclination angles.',
        },
        {
          term: 'Blazar',
          definition: 'An active galactic nucleus whose relativistic plasma jet happens to point almost directly down our line of sight toward Earth, causing extreme Doppler beaming and rapid variability.',
        },
      ],
    },
  ],
  diagram: {
    type: 'hubble-tuning-fork',
    title: 'The Hubble Tuning Fork Diagram & Galaxy Classification',
    caption: 'Ellipticals (E0 to E7) along the handle → Lenticulars (S0) at the fork → Normal Spirals (Sa, Sb, Sc) on the top prong; Barred Spirals (SBa, SBb, SBc) on the bottom prong; Irregulars (Irr).',
  },
  flashcards: [
    {
      id: 'c24-f1',
      term: 'Hubble Tuning Fork Diagram',
      category: 'Concept',
      front: 'What is the Hubble Tuning Fork diagram?',
      back: 'A morphological classification scheme dividing galaxies into Ellipticals (E0–E7), Lenticulars (S0), Normal Spirals (Sa–Sc), Barred Spirals (SBa–SBc), and Irregulars (Irr).',
    },
    {
      id: 'c24-f2',
      term: 'Elliptical Galaxy Classification (E0–E7)',
      category: 'Definition',
      front: 'What does the number in an Elliptical galaxy designation (e.g., E0 vs E7) signify?',
      back: 'The degree of apparent flattening, calculated as 10 × (1 - b/a), where a is the semi-major axis and b is the semi-minor axis. E0 is a perfect circle/sphere; E7 is the most flattened oval.',
    },
    {
      id: 'c24-f3',
      term: 'Spiral Classification (Sa vs Sc)',
      category: 'Concept',
      front: 'How do Sa, Sb, and Sc spiral galaxies differ in bulge size and arm winding?',
      back: 'Sa: Large central bulge, tightly wrapped smooth arms. Sc: Tiny central bulge, loose open knotty arms with active starbursts. Sb is intermediate.',
    },
    {
      id: 'c24-f4',
      term: 'Lenticular Galaxy (S0)',
      category: 'Definition',
      front: 'What is a Lenticular galaxy (S0 or SB0)?',
      back: 'A disk galaxy with a prominent central bulge and a disk, but with NO spiral arms and almost no gas/dust ("an armless spiral" or "disk-shaped elliptical").',
    },
    {
      id: 'c24-f5',
      term: 'Do Stars Collide in Galaxy Mergers?',
      category: 'Concept',
      front: 'Why do individual stars virtually never collide when two galaxies merge?',
      back: 'Because stars are minuscule compared to the immense empty space separating them. (Like two grains of sand separated by miles of empty air).',
    },
    {
      id: 'c24-f6',
      term: 'Starburst Galaxy Trigger',
      category: 'Concept',
      front: 'What triggers a Starburst in interacting galaxies?',
      back: 'Interstellar gas clouds from the two colliding galaxies slam into each other, creating shockwaves that compress gas and trigger millions of newborn stars at once.',
    },
    {
      id: 'c24-f7',
      term: 'The Cosmic Distance Ladder Rungs',
      category: 'Concept',
      front: 'List the main rungs of the Cosmic Distance Ladder from nearest to farthest.',
      back: 'Radar Ranging → Stellar Parallax → Main-Sequence Cluster Fitting → Cepheid Variable Stars → Tully-Fisher / Type Ia Supernovae → Hubble-Lemaître Redshift.',
    },
    {
      id: 'c24-f8',
      term: 'Tully-Fisher Relation',
      category: 'Formula',
      front: 'State the Tully-Fisher relation and what it is used for.',
      back: 'L ∝ v_rot⁴. A spiral galaxy’s intrinsic luminosity is proportional to the 4th power of its rotational velocity (measured by 21-cm Doppler broadening), revealing its distance.',
    },
    {
      id: 'c24-f9',
      term: 'Quasar Definition & Power Source',
      category: 'Definition',
      front: 'What is a Quasar and what powers its colossal luminosity?',
      back: 'A supermassive black hole at the center of a distant galaxy actively accreting gas. Gravitational energy in the superheated accretion disk outshines hundreds of galaxies combined.',
    },
    {
      id: 'c24-f10',
      term: 'Accretion Efficiency of Black Holes',
      category: 'Formula',
      front: 'What percentage of rest mass is converted into energy in a black hole accretion disk compared to nuclear fusion?',
      back: 'Black hole accretion converts 10% to 42% of rest mass into radiation! Nuclear hydrogen fusion in stars converts only 0.7%. Black holes are the most efficient engines in nature.',
    },
    {
      id: 'c24-f11',
      term: 'Blazar Definition',
      category: 'Definition',
      front: 'What is a Blazar in the Unified Model of AGN?',
      back: 'An active galactic nucleus whose relativistic plasma jet points almost directly down our line of sight toward Earth, producing extreme relativistic Doppler brightening.',
    },
    {
      id: 'c24-f12',
      term: 'Seyfert Galaxies',
      category: 'Definition',
      front: 'What is a Seyfert galaxy?',
      back: 'A nearby spiral galaxy with an exceptionally bright, star-like active nucleus showing broad or narrow emission lines powered by a moderate-luminosity supermassive black hole.',
    },
    {
      id: 'c24-f13',
      term: 'Centaurus A (NGC 5128)',
      category: 'DSO',
      front: 'What makes Centaurus A an extraordinary active galaxy?',
      back: 'The closest active radio galaxy (~13 Mly): an elliptical galaxy with a dramatic warped dust belt from a recent spiral merger, shooting relativistic plasma jets into giant radio lobes.',
    },
    {
      id: 'c24-f14',
      term: 'Messier 87 (Virgo A)',
      category: 'DSO',
      front: 'What notable extragalactic features characterize giant elliptical galaxy M87?',
      back: 'A giant cD elliptical in the Virgo Cluster with >12,000 globular clusters, a 5,000-light-year relativistic plasma jet, and a 6.5-billion-solar-mass central black hole.',
    },
    {
      id: 'c24-f15',
      term: 'AGN Cosmic Feedback',
      category: 'Concept',
      front: 'What is AGN feedback and how does it regulate galaxy growth?',
      back: 'Powerful radiation winds and relativistic jets from the active black hole blow cold gas out of the host galaxy, shutting down star formation and capping galaxy mass.',
    },
    {
      id: 'c24-f16',
      term: 'Tidal Tails in Mergers',
      category: 'Definition',
      front: 'What are tidal tails in galaxy collisions?',
      back: 'Long, curved streams of stars and gas gravitationally stripped by differential tidal forces during close galactic encounters (as seen in the Antennae Galaxies).',
    },
  ],
  quiz: [
    {
      id: 'c24-q1',
      question: 'Which of the following galaxies on the Hubble Tuning Fork is completely smooth, round, and has zero ellipticity?',
      options: ['E0', 'E7', 'Sa', 'SBc'],
      correctIndex: 0,
      explanation: 'E0 represents a perfectly spherical or circular elliptical galaxy. E7 is the most elongated elliptical.',
    },
    {
      id: 'c24-q2',
      question: 'How do the spiral arms of an Sc galaxy differ from the spiral arms of an Sa galaxy?',
      options: [
        'Sc arms are tightly wound and smooth; Sa arms are loose and open',
        'Sc arms are loosely wound, open, and clumpy with active star formation; Sa arms are tightly wound around a large bulge',
        'Sc galaxies have no spiral arms at all',
        'Sc arms rotate backwards',
      ],
      correctIndex: 1,
      explanation: 'Moving from Sa to Sc, the central bulge becomes smaller and the spiral arms become looser, more open, and richer in gas and newborn star clusters.',
    },
    {
      id: 'c24-q3',
      question: 'What is a Lenticular galaxy (designated S0 or SB0)?',
      options: [
        'A galaxy shaped like an eyeball with no core',
        'A transitional disk galaxy with a central bulge and disk, but with no spiral arms and little interstellar gas',
        'A dwarf galaxy with only 100 stars',
        'A galaxy with two central supermassive black holes',
      ],
      correctIndex: 1,
      explanation: 'Lenticular (S0) galaxies have disks and bulges like spirals, but have exhausted their interstellar gas and lack spiral arms.',
    },
    {
      id: 'c24-q4',
      question: 'Why do individual stars almost never collide when two massive spiral galaxies collide and merge?',
      options: [
        'Stars have identical magnetic poles that repel each other',
        'The physical distances separating stars are immense compared to the microscopic physical sizes of the stars themselves',
        'Stars are pushed out of the way by dark matter',
        'Stars move too slowly to hit anything',
      ],
      correctIndex: 1,
      explanation: 'Interstellar distances are vastly larger than stellar diameters (millions of times larger), making direct physical stellar collisions exceedingly rare.',
    },
    {
      id: 'c24-q5',
      question: 'What happens to the interstellar gas clouds when two spiral galaxies collide?',
      options: [
        'They pass through each other with zero interaction',
        'They collide and compress into violent shockwaves, triggering explosive starbursts of millions of new stars',
        'They instantly freeze into liquid helium',
        'They bounce off the galactic halos',
      ],
      correctIndex: 1,
      explanation: 'Unlike stars, diffuse interstellar gas clouds collide directly, compressing into dense clumps that trigger furious starburst star formation.',
    },
    {
      id: 'c24-q6',
      question: 'What is the Tully-Fisher relation used for in extragalactic astronomy?',
      options: [
        'Determining the age of the solar system',
        'Determining the intrinsic luminosity and distance of a spiral galaxy from its rotational velocity (L ∝ v_rot⁴)',
        'Measuring the speed of sound in the core of the Sun',
        'Counting how many planets a star has',
      ],
      correctIndex: 1,
      explanation: 'The Tully-Fisher relation links rotational speed (measured from 21-cm Doppler broadening) to absolute luminosity, yielding distance.',
    },
    {
      id: 'c24-q7',
      question: 'What is the central engine that powers all Active Galactic Nuclei (AGN) and Quasars?',
      options: [
        'Millions of white dwarfs colliding simultaneously',
        'Accretion of interstellar gas and stars onto a supermassive black hole (millions to billions of solar masses)',
        'An immense cloud of antimatter at the center of the galaxy',
        'Nuclear fusion of pure iron',
      ],
      correctIndex: 1,
      explanation: 'All AGN are powered by gravitational accretion onto a central supermassive black hole, where friction converts gravitational energy into radiation.',
    },
    {
      id: 'c24-q8',
      question: 'Approximately how efficient is accretion onto a spinning black hole at converting rest mass into radiant energy?',
      options: ['0.001%', '0.7% (same as hydrogen fusion)', '10% to 42%', '100%'],
      correctIndex: 2,
      explanation: 'Accretion onto a black hole converts between 10% (Schwarzschild) and 42% (maximally spinning Kerr) of mass into energy—far exceeding nuclear fusion (0.7%).',
    },
    {
      id: 'c24-q9',
      question: 'In the Unified Model of AGN, what is a "Blazar"?',
      options: [
        'An AGN whose host galaxy has no dark matter',
        'An active galaxy whose relativistic plasma jet happens to point almost directly at Earth',
        'A dead black hole that has stopped accreting',
        'A galaxy with zero radio emission',
      ],
      correctIndex: 1,
      explanation: 'A blazar is an AGN viewed straight down the barrel of its relativistic plasma jet, creating intense, variable Doppler-boosted radiation.',
    },
    {
      id: 'c24-q10',
      question: 'What active radio galaxy, located ~13 million light-years away in Centaurus, shows twin radio lobes spanning over 1.5 million light-years?',
      options: ['Centaurus A (NGC 5128)', 'The Whirlpool Galaxy (M51)', 'The Andromeda Galaxy (M31)', 'The Small Magellanic Cloud'],
      correctIndex: 0,
      explanation: 'Centaurus A is the nearest radio galaxy, featuring a conspicuous warped dust belt and colossal relativistic radio lobes.',
    },
    {
      id: 'c24-q11',
      question: 'What notable structure extends 5,000 light-years out from the center of giant elliptical galaxy Messier 87 (M87)?',
      options: [
        'A bridge of hydrogen gas connecting to the Milky Way',
        'A high-speed relativistic jet of plasma emitting synchrotron light from its 6.5-billion-solar-mass black hole',
        'A ring of 100 million white dwarfs',
        'A dark matter wall',
      ],
      correctIndex: 1,
      explanation: 'M87 features a famous relativistic synchrotron jet blasted outward by its 6.5-billion-M_☉ central supermassive black hole.',
    },
    {
      id: 'c24-q12',
      question: 'What is the "Cosmic Distance Ladder"?',
      options: [
        'A physical elevator built between Earth and the Moon',
        'A succession of interlocking astronomical distance measurement techniques, each calibrating the next for greater cosmic distances',
        'A theory that galaxies are arranged in a straight vertical line',
        'The method used to measure the height of mountains on Mars',
      ],
      correctIndex: 1,
      explanation: 'The cosmic distance ladder is the hierarchy of overlapping distance methods: parallax → Cepheids → Tully-Fisher / Type Ia → Hubble law.',
    },
    {
      id: 'c24-q13',
      question: 'Why were quasars originally called "quasi-stellar radio sources"?',
      options: [
        'They looked like sharp single stars in early optical photographs, but emitted enormous radio energy and had huge redshifts',
        'They were made of frozen gas',
        'They orbited our Sun inside the Kuiper Belt',
        'They were artificial radio beacons from alien civilizations',
      ],
      correctIndex: 0,
      explanation: 'Quasars appeared as point-like "stars" in optical images, but their huge redshifts proved they were energetic galactic cores billions of light-years away.',
    },
    {
      id: 'c24-q14',
      question: 'What are the long, curved ribbons of stars and gas pulled out of interacting galaxies during collisions called?',
      options: ['Accretion disks', 'Tidal tails', 'Planetary rings', 'Cosmic strings'],
      correctIndex: 1,
      explanation: 'Differential gravitational tides pull long streams of stars and gas out of colliding galaxies, forming tidal tails.',
    },
    {
      id: 'c24-q15',
      question: 'What is "AGN Feedback" in galactic evolution?',
      options: [
        'Radio antennas interfering with television sets on Earth',
        'Winds and jets from an active supermassive black hole blowing cold gas out of a galaxy, shutting off further star formation',
        'Planets crashing into the central black hole',
        'A galaxy changing from an elliptical to a spiral',
      ],
      correctIndex: 1,
      explanation: 'AGN feedback heats and expels the host galaxy’s gas reservoir, self-regulating the growth of both the galaxy and its central black hole.',
    },
    {
      id: 'c24-q16',
      question: 'Which of the following galaxy types typically contains almost NO cold gas or dust, and consists primarily of ancient, red Population II stars?',
      options: ['Sc spiral galaxy', 'Irregular galaxy (Irr I)', 'Giant Elliptical galaxy (E)', 'Starburst galaxy'],
      correctIndex: 2,
      explanation: 'Elliptical galaxies have exhausted or lost their interstellar gas and dust, so they contain almost exclusively older, reddish Population II stars.',
    },
    {
      id: 'c24-q17',
      question: 'How do astronomers estimate the ellipticity of an elliptical galaxy designated as E5?',
      options: ['It has 5 spiral arms', '10 × (1 - b/a) = 5, meaning the minor axis b is half the length of the major axis a', 'It is 5 billion years old', 'It contains 5 black holes'],
      correctIndex: 1,
      explanation: 'Ellipticity is defined as 10 × (1 - b/a). For an E5 galaxy, b/a = 0.5 (the minor axis is 50% of the major axis).',
    },
    {
      id: 'c24-q18',
      question: 'What class of spiral galaxy features a prominent central bar of stars running through its nucleus?',
      options: ['Barred Spiral (SB)', 'Elliptical (E)', 'Irregular (Irr)', 'Lenticular (S0)'],
      correctIndex: 0,
      explanation: 'Barred spirals (designated SB) have a central rectangular or elongated bar of stars from which the spiral arms emerge.',
    },
    {
      id: 'c24-q19',
      question: 'What are the two dwarf irregular satellite galaxies orbiting the Milky Way visible to the naked eye from the Southern Hemisphere?',
      options: ['The Andromeda and Triangulum Galaxies', 'The Large and Small Magellanic Clouds', 'M81 and M82', 'Centaurus A and Virgo A'],
      correctIndex: 1,
      explanation: 'The Large and Small Magellanic Clouds (LMC and SMC) are gas-rich irregular satellite galaxies of the Milky Way.',
    },
    {
      id: 'c24-q20',
      question: 'When the Milky Way and Andromeda (M31) merge in approximately 4.5 billion years, what type of galaxy will they most likely form?',
      options: ['A single giant Elliptical galaxy ("Milkomeda")', 'A tiny irregular dwarf galaxy', 'A ring galaxy with no core', 'They will completely vaporize into pure radiation'],
      correctIndex: 0,
      explanation: 'The collision will scramble the orderly disk orbits into random 3D orbits, merging the two spirals into a single giant elliptical galaxy ("Milkomeda").',
    },
  ],
};
