import { CurriculumTopic } from '@/types/curriculum';

export const ourStarTheSunTopic: CurriculumTopic = {
  slug: 'our-star-the-sun',
  chapterNumber: 16,
  title: 'Our Star, the Sun',
  subtitle: 'The Nuclear Engine, Atmospheric Layers, Magnetic Dynamos, and Solar Storms',
  badge: 'Chapter 16 • Solar Physics',
  accentColor: 'amber',
  freshmanSummary:
    'The Sun is our personal cosmic laboratory—the only star close enough for us to study its surface features, magnetic storms, and inner furnace in exquisite detail. In this chapter, you will journey from the 15-million-degree thermonuclear core where 600 million tons of hydrogen fuse into helium every second, out through the radiative and convective zones, through the granulated photosphere and ghostly million-degree corona, and witness how violent coronal mass ejections unleash space weather on Earth.',
  readingSections: 'Sections 16.1 – 16.9 (Solar Interior, Nuclear Fusion, Neutrinos, Solar Atmosphere, Sunspots & Magnetic Cycle, Solar Storms)',
  deepSkyObjects: [
    {
      name: 'MCG+07-33-027',
      designation: 'LEDA 51430',
      type: 'Starburst Galaxy',
      constellation: 'Hercules',
      distanceLightYears: '300 million light-years',
      significance:
        'A starburst galaxy producing new stars at a rate hundreds of times higher than the Milky Way. Its massive stellar nurseries burn millions of times more hydrogen fusion per year than our solitary Sun.',
    },
    {
      name: 'NGC 1569',
      designation: 'UGC 3056',
      type: 'Dwarf Starburst Galaxy',
      constellation: 'Camelopardalis',
      distanceLightYears: '11 million light-years',
      significance:
        'A compact dwarf galaxy experiencing intense bursts of star formation, hosting two super star clusters powered by massive young stars whose stellar winds drive super-bubbles into intergalactic space.',
    },
    {
      name: 'NGC 4536',
      designation: 'UGC 7732',
      type: 'Intermediate Spiral Galaxy',
      constellation: 'Virgo',
      distanceLightYears: '48 million light-years',
      significance:
        'A luminous spiral galaxy with an active starburst nucleus, harboring young O- and B-type stars whose high-energy UV radiation ionizes vast hydrogen clouds.',
    },
  ],
  sections: [
    {
      id: 'solar-interior-fusion',
      title: 'The Solar Engine: The Proton-Proton Chain and E = mc²',
      subheading: 'How fusing hydrogen into helium powers our solar system',
      laymanExplanation:
        'Deep in the Sun’s core, the temperature reaches a searing 15 million Kelvin and the pressure is 250 billion times greater than Earth’s atmosphere. Under these extreme conditions, hydrogen nuclei (protons) move so fast that they overcome their mutual electrostatic repulsion and slam together to fuse into helium. This reaction is called the Proton-Proton (p-p) Chain. Because a single helium-4 nucleus has slightly less mass (about 0.7% less) than the four separate protons that created it, the missing mass is converted into raw energy according to Albert Einstein’s famous equation: E = mc²!',
      realWorldAnalogy:
        'Imagine weighing four individual LEGO bricks, snapping them tightly together into a single block, and discovering the combined block weighs slightly less than the four separate bricks! That tiny missing fraction of a gram didn’t vanish—it burst out as blinding light and heat!',
      keyTerms: [
        {
          term: 'Proton-Proton (p-p) Chain',
          definition: 'The primary nuclear fusion reaction sequence in low-to-intermediate mass stars like our Sun, converting four hydrogen protons into one helium-4 nucleus plus positrons, neutrinos, and gamma-ray energy.',
        },
        {
          term: 'Hydrostatic Equilibrium',
          definition: 'The stable balance between the inward pull of gravity trying to crush a star and the outward thermal gas and radiation pressure pushing back.',
        },
        {
          term: 'Mass Defect',
          definition: 'The difference between the total mass of individual constituent nucleons and the slightly lower bound mass of the combined nucleus, converted into binding energy via E = mc².',
        },
        {
          term: 'Solar Neutrino',
          definition: 'An elusive, virtually massless subatomic particle produced during nuclear fusion in the core that travels out of the Sun at near-light speed in just 2.3 seconds.',
        },
      ],
      mathBreakdown: {
        name: 'Mass-to-Energy Conversion (E = mc²)',
        formula: 'E = \\Delta m \\cdot c^2 \\quad \\text{where } \\Delta m = 4m_p - m_{\\text{He}} \\approx 0.0071 \\times 4m_p',
        variables: 'E = energy released; Δm = converted mass defect (~0.71%); c = speed of light (3.0 × 10⁸ m/s).',
        walkThrough:
          'Each second, the Sun converts ~600 million tons of hydrogen into ~596 million tons of helium. The missing ~4.3 million tons of mass is converted into 3.8 × 10²⁶ Watts of pure luminosity!',
        practiceProblem: {
          problem: 'If 1 kilogram of hydrogen undergoes complete p-p chain fusion, converting 0.71% into energy (Δm = 0.0071 kg), how much energy is released?',
          solution: 'E = (0.0071 kg) × (3.0 × 10⁸ m/s)² = 6.39 × 10¹⁴ Joules (equivalent to burning ~15 million liters of gasoline!).',
        },
      },
    },
    {
      id: 'solar-layers',
      title: 'Journey from Core to Corona: The Anatomy of the Sun',
      subheading: 'Radiative diffusion, convective bubbling, and the million-degree mystery',
      laymanExplanation:
        'Energy created in the Core must fight its way through three distinct internal zones: 1) The Radiative Zone, where photons are absorbed and re-emitted millions of times by dense plasma, taking over 100,000 years to travel across! 2) The Convective Zone, where giant columns of boiling plasma rise and sink like oatmeal on a stove, creating the granulated pattern seen on the surface. 3) The Photosphere, the visible 5,800 K "surface" of the Sun. Above that lies the Chromosphere, and finally the tenuous Corona, which mysteriously reaches 1 to 3 million Kelvin!',
      realWorldAnalogy:
        'Think of a campfire: the air gets cooler as you step away from the flame. But in the Sun, moving from the 5,800 K surface out into the corona makes the temperature skyrocket to 2,000,000 K! This is like walking away from a fireplace and suddenly stepping into an oven. Astronomers discovered this coronal heating is driven by magnetic reconnection.',
      keyTerms: [
        {
          term: 'Radiative Zone',
          definition: 'The region between 0.25 and 0.70 solar radii where energy is transported outward primarily by photon radiation and radiative diffusion.',
        },
        {
          term: 'Convective Zone',
          definition: 'The outer layer of the solar interior (0.70 to 1.0 solar radii) where heat is carried outward by circulating convection currents of hot rising and cool sinking plasma.',
        },
        {
          term: 'Photosphere',
          definition: 'The visible 500-km-thick atmospheric surface layer of the Sun with an effective temperature of approximately 5,778 K.',
        },
        {
          term: 'Corona',
          definition: 'The outermost, ultra-low-density layer of the solar atmosphere, visible during total solar eclipses as a pearly white halo, heated to 1–3 million Kelvin.',
        },
        {
          term: 'Granulation',
          definition: 'The rice-grain-like cellular pattern on the photosphere caused by the tops of convective boiling cells (each ~1,000 km across).',
        },
      ],
    },
    {
      id: 'magnetism-space-weather',
      title: 'The Solar Magnetic Dynamo and Space Weather',
      subheading: 'Sunspots, the 11-year cycle, coronal mass ejections, and auroras',
      laymanExplanation:
        'Because the Sun is a ball of swirling plasma, it does not rotate as a solid body. The equator rotates every 25 days, while the poles take 35 days (differential rotation). This stretches and wraps the internal magnetic field lines like rubber bands. Where magnetic ropes knot and poke through the photosphere, they choke off rising heat, creating cooler, darker patches called Sunspots. When twisted magnetic field lines snap and cross (magnetic reconnection), they trigger colossal explosions called Solar Flares and Coronal Mass Ejections (CMEs) that propel billions of tons of magnetized plasma toward Earth!',
      realWorldAnalogy:
        'Twist a rubber band repeatedly between your fingers: eventually, it forms tight kinks and knots that bulge outward. If you keep twisting, the tension snaps violently. That snap is a solar flare!',
      keyTerms: [
        {
          term: 'Sunspot',
          definition: 'A temporary dark, cooler region on the photosphere (typically ~4,000 K vs 5,800 K surroundings) caused by concentrated magnetic field bundles inhibiting convection.',
        },
        {
          term: '11-Year Solar Cycle',
          definition: 'The periodic cycle in which the number of sunspots increases to a solar maximum and decreases to a solar minimum every ~11 years (~22-year full magnetic cycle).',
        },
        {
          term: 'Coronal Mass Ejection (CME)',
          definition: 'A massive eruption of magnetized plasma ejected from the solar corona into interplanetary space at velocities from 250 to 3,000 km/s.',
        },
        {
          term: 'Aurora Borealis / Australis',
          definition: 'Luminous light displays in Earth’s polar skies produced when solar wind particles collide with atmospheric oxygen and nitrogen atoms along geomagnetic field lines.',
        },
      ],
    },
  ],
  diagram: {
    type: 'solar-interior',
    title: 'The Sun’s Internal Architecture & Atmospheric Layers',
    caption: 'Core (fusion) → Radiative Zone (photons diffuse) → Convective Zone (plasma boiling) → Photosphere (sunspots) → Chromosphere → Corona (magnetic loops & CMEs).',
  },
  flashcards: [
    {
      id: 'c16-f1',
      term: 'Proton-Proton (p-p) Chain',
      category: 'Concept',
      front: 'What is the net reaction of the proton-proton chain powering the Sun?',
      back: '4 ¹H (protons) → 1 ⁴He nucleus + 2 positrons (e⁺) + 2 electron neutrinos (ν_e) + 2 gamma-ray photons (γ) + energy.',
    },
    {
      id: 'c16-f2',
      term: 'Hydrostatic Equilibrium',
      category: 'Definition',
      front: 'What is hydrostatic equilibrium in a star?',
      back: 'The exact physical balance between inward gravitational collapse and outward gas/radiation pressure generated by nuclear fusion.',
    },
    {
      id: 'c16-f3',
      term: 'Solar Core Temperature',
      category: 'Formula',
      front: 'What is the temperature at the center of the Sun’s core?',
      back: 'Approximately 15 million Kelvin (1.5 × 10⁷ K), hot and dense enough for hydrogen fusion to ignite.',
    },
    {
      id: 'c16-f4',
      term: 'Solar Photosphere Temperature',
      category: 'Definition',
      front: 'What is the effective surface temperature of the solar photosphere?',
      back: 'Approximately 5,800 Kelvin (~5,778 K).',
    },
    {
      id: 'c16-f5',
      term: 'Radiative Diffusion Time',
      category: 'Concept',
      front: 'How long does it take a gamma-ray photon created in the core to reach the surface?',
      back: 'Over 100,000 years! Because of countless absorptions and scatterings by dense electrons in the radiative zone (a "random walk").',
    },
    {
      id: 'c16-f6',
      term: 'Solar Neutrino Problem',
      category: 'Concept',
      front: 'What was the historic "Solar Neutrino Problem" and how was it resolved?',
      back: 'Experiments detected only 1/3 of predicted solar electron neutrinos. Solution: Neutrino Oscillations—neutrinos change flavors (electron, muon, tau) en route to Earth!',
    },
    {
      id: 'c16-f7',
      term: 'Sunspot Temperature Difference',
      category: 'Definition',
      front: 'Why do sunspots appear dark against the solar disk?',
      back: 'They are cooler (~4,000 K) than the surrounding 5,800 K photosphere. Because flux scales as T⁴, they radiate only ~25% as much light per area.',
    },
    {
      id: 'c16-f8',
      term: 'Differential Rotation',
      category: 'Concept',
      front: 'What is differential rotation on the Sun?',
      back: 'The Sun rotates faster at its equator (~25 Earth days per rotation) than at its poles (~35 days). This wraps and tangles the magnetic field.',
    },
    {
      id: 'c16-f9',
      term: 'Solar Sunspot Cycle Duration',
      category: 'Concept',
      front: 'How long is the sunspot cycle, and how long is the full solar magnetic cycle?',
      back: 'The sunspot frequency cycle is ~11 years. The full magnetic cycle (Hale cycle) is ~22 years because the magnetic polarity flips every 11 years.',
    },
    {
      id: 'c16-f10',
      term: 'Coronal Heating Paradox',
      category: 'Concept',
      front: 'Why is the solar corona much hotter than the surface photosphere?',
      back: 'The photosphere is 5,800 K, but the corona reaches 1–3 million K. Heat is pumped into the corona via magnetic reconnection and Alfvén plasma waves.',
    },
    {
      id: 'c16-f11',
      term: 'Solar Wind',
      category: 'Definition',
      front: 'What is the solar wind?',
      back: 'A continuous stream of charged particles (mostly protons and electrons) escaping the corona and blowing outward through the solar system at 400–800 km/s.',
    },
    {
      id: 'c16-f12',
      term: 'Coronal Mass Ejection (CME)',
      category: 'Definition',
      front: 'What is a Coronal Mass Ejection (CME) and how can it affect Earth?',
      back: 'A billion-ton bubble of magnetized plasma hurled into space. When directed at Earth, it can induce geomagnetic storms, disrupt satellite electronics, and knock out power grids.',
    },
    {
      id: 'c16-f13',
      term: 'Granule Cell Size & Lifetime',
      category: 'Concept',
      front: 'What is a solar granule and what is its typical lifespan?',
      back: 'A granule is the top of a convection cell, roughly 1,000 km across (about the size of Texas). Hot gas rises in the bright center and sinks in the dark edges over 10–20 minutes.',
    },
    {
      id: 'c16-f14',
      term: 'Zeeman Effect',
      category: 'Concept',
      front: 'How do astronomers measure the magnetic field strength of sunspots from Earth?',
      back: 'Using the Zeeman Effect: strong magnetic fields split atomic spectral lines into multiple distinct components.',
    },
    {
      id: 'c16-f15',
      term: 'NGC 1569',
      category: 'DSO',
      front: 'What kind of galaxy is NGC 1569 and how does it relate to solar fusion?',
      back: 'NGC 1569 is a dwarf starburst galaxy forming massive young stars at a ferocious pace, undergoing orders of magnitude more nuclear fusion than calm galaxies.',
    },
    {
      id: 'c16-f16',
      term: 'Solar Core Mass Fraction',
      category: 'Concept',
      front: 'What fraction of the Sun’s mass does the central core contain?',
      back: 'The core extends to ~0.25 solar radii but contains roughly 50% of the Sun’s total mass due to extreme gravitational compression.',
    },
  ],
  quiz: [
    {
      id: 'c16-q1',
      question: 'What is the primary nuclear fusion reaction sequence that powers our Sun?',
      options: ['Carbon-Nitrogen-Oxygen (CNO) cycle', 'Triple-alpha process', 'Proton-proton (p-p) chain', 'Uranium fission'],
      correctIndex: 2,
      explanation: 'In low-mass stars like our Sun, the proton-proton chain accounts for ~99% of energy generation.',
    },
    {
      id: 'c16-q2',
      question: 'What is the approximate temperature required at the center of the Sun to initiate hydrogen fusion?',
      options: ['5,800 K', '100,000 K', '15 million K', '1 billion K'],
      correctIndex: 2,
      explanation: 'Core temperatures must reach approximately 15 million Kelvin (1.5 × 10⁷ K) for protons to overcome electrostatic repulsion.',
    },
    {
      id: 'c16-q3',
      question: 'When four hydrogen protons fuse into one helium-4 nucleus, what fraction of their mass is converted into energy?',
      options: ['0.001%', '0.71%', '10.0%', '100%'],
      correctIndex: 1,
      explanation: 'About 0.71% of the original proton mass is converted into pure energy (E = mc²).',
    },
    {
      id: 'c16-q4',
      question: 'What state of balance keeps the Sun from either collapsing under its own gravity or blowing itself apart?',
      options: ['Thermal convection', 'Hydrostatic equilibrium', 'Magnetic reconnection', 'Differential rotation'],
      correctIndex: 1,
      explanation: 'Hydrostatic equilibrium is the exact balance between inward gravitational weight and outward thermal pressure.',
    },
    {
      id: 'c16-q5',
      question: 'Why do sunspots appear dark on the solar photosphere?',
      options: [
        'They are completely solid rocks floating on the plasma',
        'They are holes looking down to the dark solar core',
        'They are approximately 1,500–2,000 K cooler than the surrounding 5,800 K photosphere',
        'They are shadows cast by passing planets',
      ],
      correctIndex: 2,
      explanation: 'Sunspots are ~4,000 K compared to the 5,800 K photosphere. Because radiation scales with T⁴, they appear dark by contrast.',
    },
    {
      id: 'c16-q6',
      question: 'What mechanism causes sunspots to form on the photosphere?',
      options: [
        'Asteroid impacts splashing into the solar surface',
        'Strong localized magnetic fields that choke off the upward convective flow of heat',
        'Nuclear fusion suddenly halting in random patches',
        'Cold gas clouds falling into the Sun from interstellar space',
      ],
      correctIndex: 1,
      explanation: 'Concentrated bundles of magnetic flux inhibit the convective circulation of hot plasma, causing the surface above them to cool.',
    },
    {
      id: 'c16-q7',
      question: 'How long is the average cycle between solar maximums in sunspot activity?',
      options: ['24 hours', '1 year', '11 years', '26,000 years'],
      correctIndex: 2,
      explanation: 'The sunspot frequency peaks roughly every 11 years (the full magnetic polarity reversal takes 22 years).',
    },
    {
      id: 'c16-q8',
      question: 'What subatomic particles produced in core fusion escape the Sun in just 2.3 seconds without being absorbed?',
      options: ['Electrons', 'Solar Neutrinos', 'Gamma-ray photons', 'Protons'],
      correctIndex: 1,
      explanation: 'Neutrinos interact only via the weak nuclear force and gravity, streaming straight out of the dense core at near-light speed.',
    },
    {
      id: 'c16-q9',
      question: 'How was the historic "Solar Neutrino Problem" successfully resolved by physicists?',
      options: [
        'By realizing the Sun had turned off 100,000 years ago',
        'By discovering that neutrinos oscillate between three different types (electron, muon, tau) en route to Earth',
        'By finding that Earth’s atmosphere absorbed all the neutrinos',
        'By recalculating the distance to the Sun',
      ],
      correctIndex: 1,
      explanation: 'Neutrino oscillation proved that electron neutrinos change flavors during flight, matching the total predicted solar output.',
    },
    {
      id: 'c16-q10',
      question: 'In which zone of the solar interior is energy carried upward by buoyant, boiling columns of hot plasma?',
      options: ['The Core', 'The Radiative Zone', 'The Convective Zone', 'The Corona'],
      correctIndex: 2,
      explanation: 'In the convective zone (outer ~30% of solar radius), heat is transported by bulk circulation of plasma.',
    },
    {
      id: 'c16-q11',
      question: 'What is the thin, visible layer of the Sun often described as its "surface"?',
      options: ['Photosphere', 'Chromosphere', 'Corona', 'Heliosphere'],
      correctIndex: 0,
      explanation: 'The photosphere is the 500-km-thick layer from which most visible light escapes into space.',
    },
    {
      id: 'c16-q12',
      question: 'What is the temperature of the tenuous solar corona?',
      options: ['5,800 K', '15,000 K', '1 to 3 million K', '150 million K'],
      correctIndex: 2,
      explanation: 'The solar corona is heated to an astonishing 1–3 million Kelvin by magnetic reconnection and plasma waves.',
    },
    {
      id: 'c16-q13',
      question: 'What is the rice-grain-like pattern covering the solar photosphere called?',
      options: ['Spicules', 'Granulation', 'Coronal loops', 'Prominences'],
      correctIndex: 1,
      explanation: 'Granules are convective cell tops (~1,000 km across) where hot plasma wells up in the center and sinks at the boundaries.',
    },
    {
      id: 'c16-q14',
      question: 'What is differential rotation in the Sun?',
      options: [
        'The Sun rotates faster at its equator than at its poles',
        'The Sun rotates faster at its poles than at its equator',
        'The northern hemisphere rotates clockwise and the southern rotates counter-clockwise',
        'The core spins backwards relative to the surface',
      ],
      correctIndex: 0,
      explanation: 'The solar equator rotates once every ~25 days, while the polar regions take ~35 days.',
    },
    {
      id: 'c16-q15',
      question: 'What occurs when twisted magnetic field lines snap and explosively reconnect in the solar atmosphere?',
      options: ['A solar eclipse', 'A solar flare and coronal mass ejection', 'A supernova explosion', 'The formation of a black hole'],
      correctIndex: 1,
      explanation: 'Magnetic reconnection releases immense magnetic tension, blasting radiation (flares) and billions of tons of plasma (CMEs).',
    },
    {
      id: 'c16-q16',
      question: 'What causes the vivid shimmering curtains of light known as Auroras in Earth’s polar skies?',
      options: [
        'Sunlight reflecting off polar ice caps',
        'Solar wind charged particles colliding with atmospheric nitrogen and oxygen atoms',
        'Nuclear radiation from high-altitude aircraft',
        'Lightning striking the upper ionosphere',
      ],
      correctIndex: 1,
      explanation: 'Electrons and protons from the solar wind guided by Earth’s magnetic field collide with and excite oxygen and nitrogen gas.',
    },
    {
      id: 'c16-q17',
      question: 'How do astronomers detect and measure magnetic field strengths in sunspots?',
      options: ['The Doppler shift', 'The Zeeman effect (spectral line splitting)', 'Wien’s law', 'Kepler’s third law'],
      correctIndex: 1,
      explanation: 'The Zeeman effect splits single atomic absorption lines into multiple lines in the presence of strong magnetic fields.',
    },
    {
      id: 'c16-q18',
      question: 'About how long does it take an individual gamma-ray photon created in the core to diffuse to the photosphere?',
      options: ['8.3 minutes', '2.3 seconds', 'Over 100,000 years', '4.6 billion years'],
      correctIndex: 2,
      explanation: 'Due to dense plasma scattering (a random walk), core photons take 100,000+ years to reach the surface, shifting to visible light along the way.',
    },
    {
      id: 'c16-q19',
      question: 'What is a Coronal Mass Ejection (CME)?',
      options: [
        'A dark spot that sinks into the core',
        'A gigantic bubble of magnetized plasma hurled into interplanetary space',
        'A meteor crashing into the Sun',
        'The complete collapse of the corona into a white dwarf',
      ],
      correctIndex: 1,
      explanation: 'A CME is an eruption of up to billions of tons of magnetized coronal plasma traveling at hundreds or thousands of km/s.',
    },
    {
      id: 'c16-q20',
      question: 'Dwarf galaxy NGC 1569 is classified as a "starburst" galaxy because it:',
      options: [
        'Has zero nuclear fusion occurring',
        'Is forming massive young stars at a furiously high rate compared to its size',
        'Is entirely composed of iron and carbon',
        'Is collapsing directly into a supermassive black hole',
      ],
      correctIndex: 1,
      explanation: 'NGC 1569 is a starburst galaxy experiencing rapid, energetic star formation with super star clusters.',
    },
  ],
};
