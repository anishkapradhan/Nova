import { CurriculumTopic } from '@/types/curriculum';

export const natureOfStarsTopic: CurriculumTopic = {
  slug: 'nature-of-stars',
  chapterNumber: 17,
  title: 'The Nature of Stars',
  subtitle: 'Stellar Parallax, Magnitudes, Spectral Types, and the Hertzsprung-Russell Diagram',
  badge: 'Chapter 17 • Stellar Properties',
  accentColor: 'blue',
  freshmanSummary:
    'Look at the night sky: some stars look red, some blue, some diamond-bright, some barely visible. How do we know how far away they are, how hot they burn, or how massive they are? In this pivotal chapter, you will master the astronomer’s ultimate map: the Hertzsprung-Russell (H-R) Diagram. You will calculate cosmic distances using stellar parallax and the distance modulus, decode spectral classifications (OBAFGKM), and weigh stars in binary orbits.',
  readingSections: 'Sections 17.1 – 17.8 (Parallax, Magnitudes, Spectral Types OBAFGKM, H-R Diagram, Luminosity Classes, Binary Masses)',
  recordingUrl: 'https://youtu.be/u-UwHUVwbXQ',
  deepSkyObjects: [
    {
      name: 'Antennae Galaxies',
      designation: 'NGC 4038 / NGC 4039 (Arp 244)',
      type: 'Interacting Spiral Galaxies',
      constellation: 'Corvus',
      distanceLightYears: '65 million light-years',
      significance:
        'A spectacular cosmic collision between two spiral galaxies. Tidal gravitational forces have flung out two enormous tidal tails resembling insect antennae, while collisions between interstellar gas clouds have triggered hundreds of massive young super star clusters.',
      observationTip: 'Best observed with an 8-inch or larger telescope under dark skies as two overlapping hearts or comma shapes.',
    },
    {
      name: 'Arp 143',
      designation: 'VV 117 / UGC 3804',
      type: 'Collisional Ring Galaxy System',
      constellation: 'Gemini',
      distanceLightYears: '180 million light-years',
      significance:
        'A head-on collision between a spiral galaxy (NGC 2445) and an elliptical companion (NGC 2444). The bullet-like impact produced a shockwave ring of rapid star formation teeming with newly formed luminous blue stars.',
    },
  ],
  sections: [
    {
      id: 'parallax-magnitudes',
      title: 'Stellar Parallax, Apparent vs. Absolute Magnitude',
      subheading: 'How triangulation and brightness reveal true stellar distances',
      laymanExplanation:
        'Hold your thumb up in front of your nose and blink back and forth between your left and right eyes. Your thumb appears to jump back and forth against the distant wall! This shift is Parallax. As Earth orbits the Sun, nearby stars appear to shift slightly against the background of much farther stars. Because this angle is tiny, we measure it in arcseconds. The distance in parsecs is simply d = 1 / p! We also distinguish between Apparent Magnitude (m)—how bright a star looks from Earth—and Absolute Magnitude (M)—how bright a star would look if placed at a standardized distance of exactly 10 parsecs.',
      realWorldAnalogy:
        'Imagine two lightbulbs: a tiny 10-Watt bicycle light held 2 inches from your eyes, and a 1,000-Watt stadium floodlight located 5 miles away. The bicycle light appears brighter to your eye (greater apparent brightness), but the stadium light has vastly greater true power (absolute luminosity)! Absolute magnitude lets astronomers compare stars on a fair, equal playing field.',
      keyTerms: [
        {
          term: 'Stellar Parallax (p)',
          definition: 'The apparent shift in a nearby star’s position relative to distant background stars as Earth moves around its orbit, measured in arcseconds (").',
        },
        {
          term: 'Parsec (pc)',
          definition: 'The distance at which a star exhibits a parallax angle of 1 arcsecond: d (pc) = 1 / p (arcsec). 1 pc ≈ 3.26 light-years.',
        },
        {
          term: 'Apparent Magnitude (m)',
          definition: 'A logarithmic measure of a star’s brightness as observed from Earth. Lower and more negative numbers indicate brighter objects (e.g., Sun is -26.7; Vega is ~0.0; human eye limit is +6.0).',
        },
        {
          term: 'Absolute Magnitude (M)',
          definition: 'The apparent magnitude a star would have if placed at a standard distance of exactly 10 parsecs (32.6 light-years) from Earth.',
        },
        {
          term: 'Distance Modulus',
          definition: 'The mathematical difference (m - M) that directly calculates a star’s distance: m - M = 5 log(d) - 5.',
        },
      ],
      mathBreakdown: {
        name: 'The Parallax & Distance Modulus Formulas',
        formula: 'd = \\frac{1}{p} \\quad \\text{and} \\quad m - M = 5 \\log_{10}(d) - 5',
        variables: 'd = distance in parsecs; p = parallax angle in arcseconds; m = apparent magnitude; M = absolute magnitude.',
        walkThrough:
          'A star has a measured parallax of p = 0.1 arcseconds. Distance d = 1 / 0.1 = 10 parsecs. If its apparent magnitude is m = +4.5, then since d = 10 pc, its absolute magnitude M is also +4.5 (because 5 log(10) - 5 = 0)!',
        practiceProblem: {
          problem: 'Proxima Centauri has a parallax angle of p = 0.772 arcseconds. How far away is it in parsecs and light-years?',
          solution: 'd = 1 / 0.772 ≈ 1.30 parsecs. 1.30 pc × 3.26 ly/pc ≈ 4.24 light-years.',
        },
      },
    },
    {
      id: 'spectral-classification',
      title: 'Stellar Temperatures and the OBAFGKM Spectral Sequence',
      subheading: 'Decoding starlight: From scorching blue giants to cool red dwarfs',
      laymanExplanation:
        'In the early 1900s at Harvard Observatory, pioneering female astronomer Annie Jump Cannon classified hundreds of thousands of stellar spectra. She arranged them by temperature into seven famous spectral classes: O, B, A, F, G, K, and M. Class O stars are blazing hot blue powerhouses (above 30,000 K), while Class M stars are cool, reddish embers (below 3,500 K). Our Sun is a comfortable yellow G-type star (specifically G2V, with a surface temperature of ~5,800 K).',
      realWorldAnalogy:
        'Remember the classic mnemonic: "Oh, Be A Fine Girl/Guy, Kiss Me!" Each letter represents a temperature bucket. Just like an electric stove burner glows from cool dull red up to hot orange, stars glow red (M), orange (K), yellow (G), yellow-white (F), white (A), blue-white (B), or intense electric blue (O).',
      keyTerms: [
        {
          term: 'Spectral Sequence (OBAFGKM)',
          definition: 'The classification of stars by surface temperature from hottest to coolest: O (>30,000 K), B (10,000–30,000 K), A (7,500–10,000 K), F (6,000–7,500 K), G (5,200–6,000 K), K (3,700–5,200 K), M (2,400–3,700 K).',
        },
        {
          term: 'Balmer Hydrogen Lines',
          definition: 'Hydrogen absorption lines that peak in strength in Class A stars (around 10,000 K), where electrons occupy the n=2 energy level.',
        },
        {
          term: 'Brown Dwarf',
          definition: 'A substellar object ("failed star") with mass below 0.08 solar masses (80 Jupiter masses) that is never hot enough in its core to sustain stable hydrogen fusion.',
        },
      ],
    },
    {
      id: 'hr-diagram-binaries',
      title: 'The Hertzsprung-Russell Diagram and Weighing Stars',
      subheading: 'The most powerful graph in astronomy, and measuring mass with binary orbits',
      laymanExplanation:
        'The Hertzsprung-Russell (H-R) diagram plots stellar Luminosity (or Absolute Magnitude) on the vertical axis against Surface Temperature (or Spectral Type) on the horizontal axis (running backwards: hot blue on the left, cool red on the right!). About 90% of all stars fall along a smooth diagonal stripe called the Main Sequence. Cool red giants and supergiants swell up in the upper right, while tiny, hot white dwarfs lurk in the lower left. How do we know how heavy these stars are? We look for Binary Stars! By measuring their orbital period P and separation a, Newton’s gravity gives us their exact masses: M₁ + M₂ = a³ / P².',
      realWorldAnalogy:
        'Imagine plotting every student in your high school on a chart: Height vs Weight. Most students lie along a normal diagonal trend (the "main sequence"). But you might find a tall, ultra-light basketball player (a giant) or a short, dense weightlifter (a white dwarf)!',
      keyTerms: [
        {
          term: 'Hertzsprung-Russell (H-R) Diagram',
          definition: 'A scatter plot of stars showing the relationship between luminosity (vertical) and effective temperature / spectral type (horizontal, decreasing left to right).',
        },
        {
          term: 'Main Sequence',
          definition: 'The prominent diagonal band on the H-R diagram containing stars fusing hydrogen into helium in their cores. Higher mass stars are hotter and vastly more luminous.',
        },
        {
          term: 'Luminosity Classes (I to V)',
          definition: 'Class I = Supergiants; Class II = Bright Giants; Class III = Regular Giants; Class IV = Subgiants; Class V = Main Sequence Stars (Dwarfs). The Sun is G2V.',
        },
        {
          term: 'Binary Star System',
          definition: 'Two stars orbiting a common center of mass held together by mutual gravitation. The only direct method astronomers have to measure stellar masses.',
        },
      ],
      mathBreakdown: {
        name: 'Binary Orbit Mass Formula (Newtonian Kepler)',
        formula: 'M_1 + M_2 = \\frac{a^3}{P^2}',
        variables: 'M₁, M₂ = stellar masses in solar masses (M_☉); a = average separation in AU; P = orbital period in Earth years.',
        walkThrough:
          'Two stars orbit each other with an orbital period of P = 4 years and an average separation of a = 4 AU. The total mass is: M₁ + M₂ = (4)³ / (4)² = 64 / 16 = 4.0 Solar Masses!',
        practiceProblem: {
          problem: 'A binary pair has a separation of a = 2 AU and an orbital period of P = 1 year. What is the combined mass of the system?',
          solution: 'M₁ + M₂ = (2)³ / (1)² = 8 / 1 = 8 Solar Masses.',
        },
      },
    },
  ],
  diagram: {
    type: 'hr-diagram',
    title: 'The Hertzsprung-Russell (H-R) Diagram',
    caption: 'Luminosity (vertical) vs Temperature (horizontal, decreasing left to right). Main Sequence (V), Red Giants (III), Supergiants (I), and White Dwarfs. The Sun sits at G2V (L=1, T=5800K).',
  },
  flashcards: [
    {
      id: 'c17-f1',
      term: 'Stellar Parallax Equation',
      category: 'Formula',
      front: 'State the formula relating distance (d) in parsecs to parallax angle (p) in arcseconds.',
      back: 'd = 1 / p. A star with a parallax of 0.5 arcseconds is 1 / 0.5 = 2 parsecs away.',
    },
    {
      id: 'c17-f2',
      term: 'Apparent vs Absolute Magnitude',
      category: 'Definition',
      front: 'What is the difference between apparent magnitude (m) and absolute magnitude (M)?',
      back: 'Apparent magnitude (m) is how bright a star looks from Earth. Absolute magnitude (M) is how bright it would be if placed at a standard distance of 10 parsecs.',
    },
    {
      id: 'c17-f3',
      term: 'Magnitude Scale Direction',
      category: 'Concept',
      front: 'Does a brighter star have a higher or lower numerical magnitude?',
      back: 'LOWER (and more negative)! A magnitude -1 star is brighter than a magnitude +4 star. Every step of 5 magnitudes equals a factor of 100 in brightness.',
    },
    {
      id: 'c17-f4',
      term: 'Spectral Sequence Order',
      category: 'Concept',
      front: 'List the 7 primary spectral classes from hottest to coolest.',
      back: 'O, B, A, F, G, K, M. (Hottest = O, >30,000 K; Coolest = M, <3,500 K). Mnemonic: "Oh Be A Fine Girl/Guy, Kiss Me!"',
    },
    {
      id: 'c17-f5',
      term: 'The Sun’s Full Spectral Classification',
      category: 'Definition',
      front: 'What is the Sun’s complete spectral type and luminosity class?',
      back: 'G2V (A Class G yellow star, subclass 2, on the Main Sequence / Luminosity Class V).',
    },
    {
      id: 'c17-f6',
      term: 'H-R Diagram Axes',
      category: 'Concept',
      front: 'What physical properties are plotted on the vertical and horizontal axes of an H-R Diagram?',
      back: 'Vertical Axis: Luminosity (or Absolute Magnitude). Horizontal Axis: Surface Temperature (or Spectral Type), plotted DECREASING from left (hot) to right (cool).',
    },
    {
      id: 'c17-f7',
      term: 'Main Sequence Definition',
      category: 'Definition',
      front: 'What nuclear process unites all stars located on the Main Sequence of the H-R diagram?',
      back: 'Core hydrogen fusion (fusing hydrogen into helium in their cores). ~90% of a star’s active life is spent on the main sequence.',
    },
    {
      id: 'c17-f8',
      term: 'Luminosity Class Roman Numerals',
      category: 'Concept',
      front: 'Match Luminosity Classes I, III, and V to their stellar types.',
      back: 'Class I = Supergiants; Class III = Giants; Class V = Main Sequence (Dwarfs).',
    },
    {
      id: 'c17-f9',
      term: 'Measuring Stellar Mass',
      category: 'Concept',
      front: 'What is the ONLY direct observational method astronomers have to calculate the masses of stars?',
      back: 'Observing Binary Star Systems and applying Newton’s generalized form of Kepler’s Third Law (M₁ + M₂ = a³ / P²).',
    },
    {
      id: 'c17-f10',
      term: 'Visual vs Spectroscopic Binary',
      category: 'Definition',
      front: 'What is the difference between a visual binary and a spectroscopic binary?',
      back: 'A visual binary can be resolved as two separate points of light in a telescope. A spectroscopic binary appears as one point, but Doppler-shifting double spectral lines reveal two stars.',
    },
    {
      id: 'c17-f11',
      term: 'Eclipsing Binary',
      category: 'Definition',
      front: 'What is an eclipsing binary and what valuable data does it yield?',
      back: 'A binary system whose orbital plane is aligned with our line of sight so the stars periodically pass in front of each other, creating dips in light curves that reveal stellar radii.',
    },
    {
      id: 'c17-f12',
      term: 'Mass-Luminosity Relation',
      category: 'Formula',
      front: 'How does luminosity scale with mass for main-sequence stars?',
      back: 'L ∝ M³.⁵. A star with twice the mass of the Sun burns (2)³.⁵ ≈ 11 times more luminous and exhausts its nuclear fuel much faster!',
    },
    {
      id: 'c17-f13',
      term: 'Distance Modulus Equation',
      category: 'Formula',
      front: 'State the distance modulus formula.',
      back: 'm - M = 5 log₁₀(d) - 5. If m = M, the object is located at exactly 10 parsecs.',
    },
    {
      id: 'c17-f14',
      term: 'White Dwarf on the H-R Diagram',
      category: 'Concept',
      front: 'Where do white dwarfs sit on the H-R diagram and why?',
      back: 'Lower left: they are very hot (blue/white, far left) but have tiny surface areas (Earth-sized), so their total luminosity is very low (bottom).',
    },
    {
      id: 'c17-f15',
      term: 'Antennae Galaxies (NGC 4038/4039)',
      category: 'DSO',
      front: 'What is the primary scientific significance of the Antennae Galaxies?',
      back: 'They are two colliding spiral galaxies undergoing an epic starburst collision, demonstrating how gravitational tidal forces trigger massive star cluster formation.',
    },
    {
      id: 'c17-f16',
      term: 'Arp 143',
      category: 'DSO',
      front: 'What physical event created the shape of Arp 143?',
      back: 'A head-on collisional impact between two galaxies, sending out a circular ring shockwave that compresses gas and ignites newborn blue stars.',
    },
  ],
  quiz: [
    {
      id: 'c17-q1',
      question: 'A star has a measured parallax angle of p = 0.05 arcseconds. What is its distance from Earth in parsecs?',
      options: ['0.05 pc', '5 pc', '20 pc', '50 pc'],
      correctIndex: 2,
      explanation: 'd = 1 / p = 1 / 0.05 = 20 parsecs (approx. 65.2 light-years).',
    },
    {
      id: 'c17-q2',
      question: 'Which of the following apparent magnitudes represents the brightest star in the night sky?',
      options: ['m = +6.0', 'm = +1.5', 'm = 0.0', 'm = -1.4'],
      correctIndex: 3,
      explanation: 'The astronomical magnitude scale is inverted: smaller and more negative numbers indicate greater brightness. Sirius has m = -1.46.',
    },
    {
      id: 'c17-q3',
      question: 'By definition, absolute magnitude (M) is the apparent magnitude a star would have if placed at a distance of:',
      options: ['1 AU', '1 light-year', '10 parsecs', '100 parsecs'],
      correctIndex: 2,
      explanation: 'Absolute magnitude is calibrated to a standard baseline distance of 10 parsecs (32.6 light-years).',
    },
    {
      id: 'c17-q4',
      question: 'Which of the following spectral classifications represents the hottest surface temperature?',
      options: ['Class A', 'Class G', 'Class O', 'Class M'],
      correctIndex: 2,
      explanation: 'Class O stars are the hottest, with surface temperatures exceeding 30,000 K.',
    },
    {
      id: 'c17-q5',
      question: 'What is the full spectral classification of our Sun?',
      options: ['O5V', 'A0Ia', 'G2V', 'M3III'],
      correctIndex: 2,
      explanation: 'The Sun is classified as G2V: a yellow dwarf with surface temperature ~5,778 K on the Main Sequence (Luminosity Class V).',
    },
    {
      id: 'c17-q6',
      question: 'What is plotted on the horizontal axis of the Hertzsprung-Russell (H-R) diagram?',
      options: [
        'Stellar mass in solar masses',
        'Surface temperature (or spectral type), decreasing from left to right',
        'Distance in light-years',
        'Apparent visual magnitude',
      ],
      correctIndex: 1,
      explanation: 'The horizontal axis plots surface temperature (or spectral type OBAFGKM), which decreases from left (hot blue, 30,000+ K) to right (cool red, 3,000 K).',
    },
    {
      id: 'c17-q7',
      question: 'What common property unites all stars located on the Main Sequence of the H-R diagram?',
      options: [
        'They are all fusing hydrogen into helium in their cores',
        'They are all dying remnants supported by electron degeneracy',
        'They all have identical radii equal to the Sun',
        'They are all binary star systems',
      ],
      correctIndex: 0,
      explanation: 'Main sequence stars are in hydrostatic equilibrium, stably generating energy by fusing hydrogen into helium in their cores.',
    },
    {
      id: 'c17-q8',
      question: 'Which Roman numeral corresponds to supergiant stars on the H-R diagram?',
      options: ['Class I', 'Class II', 'Class III', 'Class V'],
      correctIndex: 0,
      explanation: 'Luminosity Class I denotes Supergiants (e.g., Betelgeuse, Rigel). Class V denotes Main Sequence dwarfs.',
    },
    {
      id: 'c17-q9',
      question: 'Why are White Dwarfs located in the lower-left corner of the H-R diagram?',
      options: [
        'They are extremely cool and have huge surface areas',
        'They are extremely hot (blue-white) but very small (low surface area), giving them low total luminosity',
        'They are moving away from Earth at relativistic speeds',
        'They do not obey the laws of thermal physics',
      ],
      correctIndex: 1,
      explanation: 'White dwarfs are scorching hot remnants (left side), but because they are only the physical size of Earth, their total surface area and luminosity are very low (bottom).',
    },
    {
      id: 'c17-q10',
      question: 'What is the only direct observational method astronomers have to calculate the mass of stars?',
      options: [
        'Measuring their peak emission with Wien’s law',
        'Observing the orbital periods and separations of Binary Star Systems',
        'Measuring their apparent magnitude with a photometer',
        'Counting sunspots on their surfaces',
      ],
      correctIndex: 1,
      explanation: 'Applying Newton’s version of Kepler’s Third Law (M₁ + M₂ = a³ / P²) to binary stars is the only direct way to determine stellar masses.',
    },
    {
      id: 'c17-q11',
      question: 'A binary star system has an orbital period of P = 2 years and an average separation of a = 2 AU. What is the total mass of the system?',
      options: ['1 Solar Mass', '2 Solar Masses', '4 Solar Masses', '8 Solar Masses'],
      correctIndex: 1,
      explanation: 'M₁ + M₂ = a³ / P² = (2)³ / (2)² = 8 / 4 = 2 Solar Masses.',
    },
    {
      id: 'c17-q12',
      question: 'Which type of binary star system is identified by periodic dips in its light curve as one star passes in front of the other?',
      options: ['Visual binary', 'Spectroscopic binary', 'Eclipsing binary', 'Astrometric binary'],
      correctIndex: 2,
      explanation: 'Eclipsing binaries cross in front of each other along our line of sight, creating measurable dips in brightness.',
    },
    {
      id: 'c17-q13',
      question: 'If star A and star B have the exact same surface temperature, but star A is 100 times more luminous than star B, what must be true?',
      options: [
        'Star A is 100 times closer to Earth',
        'Star A has 10 times the radius of star B',
        'Star A is rotating 100 times faster',
        'Star A is a white dwarf',
      ],
      correctIndex: 1,
      explanation: 'Luminosity scales with surface area: L = 4π R² σ T⁴. If temperatures are identical, L ∝ R². A 100× increase in L requires √(100) = 10× greater radius.',
    },
    {
      id: 'c17-q14',
      question: 'What is the distance to a star whose apparent magnitude m equals its absolute magnitude M (m - M = 0)?',
      options: ['1 AU', '1 parsec', '10 parsecs', '100 light-years'],
      correctIndex: 2,
      explanation: 'm - M = 5 log(d) - 5. When m = M, 5 log(d) = 5, which means log(d) = 1, so d = 10 parsecs.',
    },
    {
      id: 'c17-q15',
      question: 'Hydrogen Balmer absorption lines are strongest in which spectral class of stars (where surface temperatures are around 10,000 K)?',
      options: ['Class O', 'Class A', 'Class G', 'Class M'],
      correctIndex: 1,
      explanation: 'In Class A stars (~10,000 K), temperatures are optimal for exciting electrons into hydrogen’s n=2 orbital, producing maximum Balmer absorption.',
    },
    {
      id: 'c17-q16',
      question: 'What happens to a main-sequence star’s lifespan as its mass increases?',
      options: [
        'Its lifespan increases dramatically because it has more fuel',
        'Its lifespan stays exactly the same',
        'Its lifespan decreases drastically because luminosity scales as M³.⁵, burning fuel at an extreme rate',
        'It never dies',
      ],
      correctIndex: 2,
      explanation: 'High-mass stars have more fuel, but burn it thousands to millions of times faster (L ∝ M³.⁵), living only millions of years instead of billions.',
    },
    {
      id: 'c17-q17',
      question: 'What is a "Brown Dwarf"?',
      options: [
        'A star that has collapsed into a black hole',
        'A substellar object with mass less than 0.08 solar masses that cannot sustain hydrogen fusion',
        'A planet with a thick iron atmosphere',
        'A white dwarf that has cooled to absolute zero',
      ],
      correctIndex: 1,
      explanation: 'Brown dwarfs lack the mass (~0.08 M_☉ or ~80 Jupiter masses) to reach the 10–15 million K core temperatures required for hydrogen fusion.',
    },
    {
      id: 'c17-q18',
      question: 'The Antennae Galaxies (NGC 4038/4039) are famous for:',
      options: [
        'Being the oldest stars in the universe',
        'Two long streaming tidal tails of stars and gas produced by an ongoing galactic collision',
        'A solitary black hole with no surrounding galaxy',
        'Having zero gravitational interaction',
      ],
      correctIndex: 1,
      explanation: 'Tidal forces from the colliding galaxies have ejected two sweeping antennae-like streams of stars and gas into space.',
    },
    {
      id: 'c17-q19',
      question: 'What technique determines a star’s distance by matching its spectral type and luminosity class to the H-R diagram to find absolute magnitude M?',
      options: ['Trigonometric parallax', 'Spectroscopic parallax', 'Radar ranging', 'Doppler spectroscopy'],
      correctIndex: 1,
      explanation: 'Spectroscopic parallax uses the H-R diagram to deduce absolute magnitude M from spectral features, then calculates distance via m - M = 5 log(d) - 5.',
    },
    {
      id: 'c17-q20',
      question: 'Collisional ring galaxy Arp 143 was formed by which physical process?',
      options: [
        'Two supermassive black holes merging silently',
        'A smaller galaxy passing straight through the disk of a spiral galaxy like a bullet',
        'A single star exploding into a planetary nebula',
        'The slow evaporation of a globular cluster',
      ],
      correctIndex: 1,
      explanation: 'A bullet-like head-on galactic penetration sent an expanding density shockwave through the gas disk, triggering a ring of young starburst clusters.',
    },
  ],
};
