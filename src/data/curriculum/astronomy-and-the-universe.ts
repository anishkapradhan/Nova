import { CurriculumTopic } from '@/types/curriculum';

export const astronomyAndTheUniverseTopic: CurriculumTopic = {
  slug: 'astronomy-and-the-universe',
  chapterNumber: 1,
  title: 'Astronomy and the Universe',
  subtitle: 'The Cosmic Scale, Celestial Sphere, and Angular Measurement',
  badge: 'Chapter 1 • Foundations',
  accentColor: 'cyan',
  freshmanSummary:
    'Welcome to Astronomy! In this opening unit, we step outside our everyday human scale to measure the unimaginable expanse of the cosmos. You will learn how astronomers express cosmic distances using scientific notation and light-years, map the night sky using the celestial sphere, and calculate the actual physical sizes of distant moons and planets using simple angular measurements.',
  readingSections: 'Sections 1.5 – 1.7 (Powers of Ten, Celestial Sphere, Angles & Small-Angle Formula)',
  deepSkyObjects: [
    {
      name: 'North Star (Polaris)',
      designation: 'Alpha Ursae Minoris',
      type: 'Multiple Star System / Cepheid Variable',
      constellation: 'Ursa Minor (The Little Dipper)',
      distanceLightYears: '433 light-years',
      significance:
        'The current northern pole star, marking where Earth’s rotational axis projects onto the celestial sphere. Its altitude above the northern horizon exactly equals the observer’s northern latitude.',
      observationTip: 'Locate the two pointer stars (Merak and Dubhe) at the outer edge of the Big Dipper bowl and trace a straight line northward.',
    },
  ],
  sections: [
    {
      id: 'powers-of-ten',
      title: 'Cosmic Scales: Powers of Ten and Astronomical Units',
      subheading: 'Why miles and kilometers fail in deep space',
      laymanExplanation:
        'If you tried measuring the distance from New York to Tokyo in inches, you would end up with giant numbers that are impossible to talk about. Space is so mind-bogglingly vast that standard terrestrial units become useless. Instead, astronomers use the Astronomical Unit (AU)—the average distance between Earth and the Sun (~93 million miles or 150 million km)—for our solar neighborhood, and the Light-Year (the distance light travels in one Earth year, about 9.46 trillion km or 6 trillion miles) for stars and galaxies.',
      realWorldAnalogy:
        'Imagine Earth is the size of a standard green pea (about 1 cm across). On this scaled model, the Moon is a tiny grain of sand 30 cm (1 foot) away. The Sun is a beach ball 1.1 meters (3.5 feet) across, located 117 meters (more than a football field) away! The nearest star system, Alpha Centauri, would be over 31,000 kilometers away—more than three-quarters of the way around the real planet Earth!',
      keyTerms: [
        {
          term: 'Astronomical Unit (AU)',
          definition: 'The average distance between Earth and the Sun, approximately 1.496 × 10⁸ km (93 million miles). Used primarily within planetary systems.',
        },
        {
          term: 'Light-Year (ly)',
          definition: 'The distance a beam of light travels through vacuum in one Julian year (365.25 days), equal to 9.461 × 10¹² km (roughly 6 trillion miles).',
        },
        {
          term: 'Parsec (pc)',
          definition: 'A unit of distance equal to 3.26 light-years (206,265 AU), defined as the distance at which an object has a parallax angle of exactly one arcsecond.',
        },
        {
          term: 'Scientific Notation',
          definition: 'A mathematical shorthand expressing numbers as a product of a coefficient (between 1 and 10) and a power of ten (e.g., 3.0 × 10⁸ m/s).',
        },
      ],
      mathBreakdown: {
        name: 'Scientific Notation & Unit Conversion',
        formula: '1 \\text{ ly} = c \\times 1 \\text{ yr} = (3.0 \\times 10^5 \\text{ km/s}) \\times (3.156 \\times 10^7 \\text{ s}) \\approx 9.46 \\times 10^{12} \\text{ km}',
        variables: 'c = speed of light (3.0 × 10⁵ km/s); 1 yr = seconds in a year (~3.156 × 10⁷ s).',
        walkThrough:
          'To find how long light takes to reach Earth from the Sun: Distance = 1.5 × 10⁸ km. Time = Distance / Speed = (1.5 × 10⁸ km) / (3.0 × 10⁵ km/s) = 500 seconds, which is 8 minutes and 20 seconds!',
        practiceProblem: {
          problem: 'Proxima Centauri is 4.24 light-years away. How many kilometers is that in scientific notation?',
          solution: '4.24 ly × (9.46 × 10¹² km / 1 ly) = 4.01 × 10¹³ km (40.1 trillion kilometers).',
        },
      },
    },
    {
      id: 'celestial-sphere',
      title: 'The Celestial Sphere and Navigating the Night Sky',
      subheading: 'Mapping the dome of the heavens like an imaginary globe',
      laymanExplanation:
        'When you look up at night, all the stars seem glued to the inside of an enormous transparent sphere surrounding Earth. Even though stars are actually scattered at wildly different physical distances, ancient astronomers found it useful to treat the sky as a spherical map called the Celestial Sphere. Just like Earth has an equator and north/south poles, the celestial sphere has a Celestial Equator and North/South Celestial Poles.',
      realWorldAnalogy:
        'Think of the celestial sphere as an oversized planetarium dome. You are standing in the center. Even though a spotlight, a projector, and an exit sign are at different physical distances from you, you can point at any of them using just two angular coordinates: how high up to look (altitude) and which compass direction to face (azimuth).',
      keyTerms: [
        {
          term: 'Zenith',
          definition: 'The imaginary point in the sky directly above an observer’s head (altitude 90°).',
        },
        {
          term: 'Nadir',
          definition: 'The point directly beneath an observer’s feet, opposite the zenith.',
        },
        {
          term: 'Celestial Equator',
          definition: 'The projection of Earth’s terrestrial equator out into space onto the celestial sphere.',
        },
        {
          term: 'Right Ascension (RA)',
          definition: 'The celestial equivalent of longitude, measured eastward along the celestial equator in hours, minutes, and seconds (0h to 24h).',
        },
        {
          term: 'Declination (Dec)',
          definition: 'The celestial equivalent of latitude, measured in degrees, arcminutes, and arcseconds north (+) or south (-) of the celestial equator (-90° to +90°).',
        },
      ],
    },
    {
      id: 'angular-measurement',
      title: 'Angular Measurement and the Small-Angle Formula',
      subheading: 'How holding your thumb at arm’s length unlocks the size of planets',
      laymanExplanation:
        'Astronomers cannot measure the linear size of a moon or galaxy with a tape measure. Instead, we measure its angular size—the angle the object subtends (covers) from our vantage point on Earth. A full circle is 360 degrees (°). Each degree is divided into 60 arcminutes (\'), and each arcminute is divided into 60 arcseconds ("). The Small-Angle Formula directly connects three things: the angular size (α), the distance to the object (d), and its true linear diameter (D). If you know any two, you can solve for the third!',
      realWorldAnalogy:
        'Hold your hand at arm’s length: your pinky fingernail covers roughly 1 degree of sky. Both the full Moon and the Sun happen to cover about 0.5 degrees (30 arcminutes) in our sky! Even though the Sun is 400 times physically larger than the Moon, it is also 400 times farther away, so they subtend the exact same angle.',
      keyTerms: [
        {
          term: 'Arcminute (\')',
          definition: 'A unit of angular measurement equal to 1/60th of a degree (1° = 60\').',
        },
        {
          term: 'Arcsecond (")',
          definition: 'A unit of angular measurement equal to 1/60th of an arcminute, or 1/3600th of a degree (1\' = 60").',
        },
        {
          term: 'Small-Angle Formula',
          definition: 'The mathematical relation D = (α × d) / 206,265, where α is in arcseconds, d is distance, and D is physical diameter in the same units as d.',
        },
      ],
      mathBreakdown: {
        name: 'The Small-Angle Formula',
        formula: 'D = \\frac{\\alpha \\times d}{206{,}265}',
        variables: 'D = linear diameter; d = distance to the object; α = angular diameter in arcseconds ("); 206,265 = number of arcseconds in one radian.',
        walkThrough:
          'Suppose Mars is at a distance of d = 8.0 × 10⁷ km, and telescope measurements show its angular diameter is α = 17.5 arcseconds. The actual diameter D is: D = (17.5 × 8.0 × 10⁷) / 206,265 ≈ 6,787 km!',
        practiceProblem: {
          problem: 'Jupiter has a diameter of 142,984 km. When it is 6.0 × 10⁸ km from Earth, what is its angular diameter in arcseconds?',
          solution: 'α = (D × 206,265) / d = (142,984 × 206,265) / (6.0 × 10⁸) ≈ 49.2 arcseconds.',
        },
      },
    },
  ],
  diagram: {
    type: 'celestial-sphere',
    title: 'The Celestial Sphere & Angular Coordinates',
    caption: 'Earth in the center with its rotational axis pointing to the North and South Celestial Poles. Angular size α subtends physical diameter D at distance d.',
  },
  flashcards: [
    {
      id: 'c1-f1',
      term: 'Astronomical Unit (AU)',
      category: 'Definition',
      front: 'What is an Astronomical Unit (AU) and when is it typically used?',
      back: 'An AU is the average distance from Earth to the Sun (~1.5 × 10⁸ km or 93 million miles). It is the standard yardstick for distances within our solar system.',
      tip: 'Think: Earth-to-Sun = 1 AU.',
    },
    {
      id: 'c1-f2',
      term: 'Light-Year (ly)',
      category: 'Definition',
      front: 'Is a light-year a measure of time or distance? What is its definition?',
      back: 'A light-year is a measure of DISTANCE, not time! It is the distance light travels in one Julian year (approx. 9.46 × 10¹² km or 6 trillion miles).',
      tip: 'Distance = speed × time (c × 1 year).',
    },
    {
      id: 'c1-f3',
      term: 'Parsec (pc)',
      category: 'Definition',
      front: 'What is a parsec and how many light-years is it equal to?',
      back: 'A parsec (parallax second) is the distance where 1 AU subtends an angle of 1 arcsecond. 1 parsec ≈ 3.26 light-years or 206,265 AU.',
    },
    {
      id: 'c1-f4',
      term: 'Small-Angle Formula',
      category: 'Formula',
      front: 'State the Small-Angle Formula and define all variables.',
      back: 'D = (α × d) / 206,265. D is physical diameter, d is distance, α is angular size in arcseconds ("), and 206,265 is arcseconds per radian.',
    },
    {
      id: 'c1-f5',
      term: 'Degrees, Arcminutes, Arcseconds',
      category: 'Concept',
      front: 'How many arcminutes are in a degree, and how many arcseconds are in an arcminute?',
      back: '1 degree (°) = 60 arcminutes (\'). 1 arcminute (\') = 60 arcseconds ("). Therefore, 1 degree contains 3,600 arcseconds.',
    },
    {
      id: 'c1-f6',
      term: 'Zenith & Nadir',
      category: 'Definition',
      front: 'What are the zenith and nadir points?',
      back: 'The zenith is the point on the celestial sphere directly overhead (90° altitude). The nadir is the point directly below the observer’s feet.',
    },
    {
      id: 'c1-f7',
      term: 'Celestial Equator',
      category: 'Definition',
      front: 'What is the Celestial Equator?',
      back: 'The great circle on the celestial sphere produced by projecting Earth’s terrestrial equator straight out into deep space.',
    },
    {
      id: 'c1-f8',
      term: 'Right Ascension (RA)',
      category: 'Concept',
      front: 'What is Right Ascension and what units is it measured in?',
      back: 'The celestial coordinate analogous to terrestrial longitude, measured eastward along the celestial equator from the vernal equinox in hours, minutes, and seconds (0h to 24h).',
    },
    {
      id: 'c1-f9',
      term: 'Declination (Dec)',
      category: 'Concept',
      front: 'What is Declination and what range of values can it take?',
      back: 'The celestial coordinate analogous to terrestrial latitude, measuring angular distance north (+) or south (-) of the celestial equator, from -90° (South Pole) to +90° (North Pole).',
    },
    {
      id: 'c1-f10',
      term: 'Polaris (North Star)',
      category: 'DSO',
      front: 'Why does Polaris appear stationary in the northern night sky?',
      back: 'Polaris is located almost exactly at the North Celestial Pole, along the northward projection of Earth’s rotational axis. All other stars appear to rotate around it.',
    },
    {
      id: 'c1-f11',
      term: 'Angular Size of Sun and Moon',
      category: 'Concept',
      front: 'What is the approximate angular diameter of both the Sun and Moon in Earth’s sky?',
      back: 'About 0.5 degrees, or 30 arcminutes (\'). This coincidence is why total solar eclipses are possible!',
    },
    {
      id: 'c1-f12',
      term: 'Lookback Time',
      category: 'Concept',
      front: 'What is lookback time in astronomy?',
      back: 'Because light has a finite speed (c ≈ 300,000 km/s), when we look at a star 100 light-years away, we see it as it existed 100 years ago.',
    },
    {
      id: 'c1-f13',
      term: 'Scientific Notation Conversion',
      category: 'Formula',
      front: 'How do you convert 150,000,000 km into scientific notation?',
      back: '1.5 × 10⁸ km. Move the decimal 8 places to the left.',
    },
    {
      id: 'c1-f14',
      term: 'Meridian',
      category: 'Definition',
      front: 'What is the local celestial meridian?',
      back: 'An imaginary great circle passing through the observer’s north horizon, the north celestial pole, the zenith, and the south horizon.',
    },
    {
      id: 'c1-f15',
      term: 'Ecliptic',
      category: 'Definition',
      front: 'What is the ecliptic path?',
      back: 'The apparent annual path of the Sun against the background stars of the celestial sphere, tilted at 23.5° relative to the celestial equator.',
    },
    {
      id: 'c1-f16',
      term: 'Precession of the Equinoxes',
      category: 'Concept',
      front: 'What is axial precession and what is its cycle duration?',
      back: 'The slow, wobbling motion of Earth’s rotational axis like a spinning top, tracing out a complete cone in the sky every 26,000 years.',
    },
  ],
  quiz: [
    {
      id: 'c1-q1',
      question: 'Which of the following represents the average distance from the Earth to the Sun?',
      options: ['1 Light-Year', '1 Astronomical Unit (AU)', '1 Parsec', '1 Megameter'],
      correctIndex: 1,
      explanation: '1 AU is defined as the average distance between Earth and the Sun, which is approximately 1.496 × 10⁸ km (93 million miles).',
    },
    {
      id: 'c1-q2',
      question: 'A light-year is a unit used to measure which of the following physical quantities?',
      options: ['Time', 'Luminosity', 'Distance', 'Orbital speed'],
      correctIndex: 2,
      explanation: 'Despite having the word "year" in its name, a light-year measures distance—specifically the distance light travels in one Earth year (approx. 9.46 × 10¹² km).',
    },
    {
      id: 'c1-q3',
      question: 'How many arcminutes are contained in an angle of 3 degrees?',
      options: ['60 arcminutes', '120 arcminutes', '180 arcminutes', '360 arcminutes'],
      correctIndex: 2,
      explanation: 'Each degree contains 60 arcminutes: 3° × 60\'/° = 180 arcminutes.',
    },
    {
      id: 'c1-q4',
      question: 'How many arcseconds are contained within one single arcminute?',
      options: ['10', '60', '360', '3,600'],
      correctIndex: 1,
      explanation: 'There are 60 arcseconds (") in 1 arcminute (\'), just like there are 60 seconds in a minute of time.',
    },
    {
      id: 'c1-q5',
      question: 'What is the point on the celestial sphere directly above an observer’s head called?',
      options: ['Nadir', 'Celestial Pole', 'Zenith', 'Equinox'],
      correctIndex: 2,
      explanation: 'The zenith is the point straight overhead (altitude 90°). Nadir is the opposite point directly below.',
    },
    {
      id: 'c1-q6',
      question: 'What is the approximate angular diameter of the full Moon as viewed from Earth?',
      options: ['0.05 degrees (3 arcmin)', '0.5 degrees (30 arcmin)', '5.0 degrees', '15.0 degrees'],
      correctIndex: 1,
      explanation: 'The Moon and Sun both subtend approximately 0.5 degrees (or 30 arcminutes) in Earth’s sky.',
    },
    {
      id: 'c1-q7',
      question: 'In the Small-Angle Formula D = (α × d) / 206,265, what does the number 206,265 represent?',
      options: [
        'The speed of light in miles per second',
        'The number of arcseconds in one radian',
        'The distance to the Moon in miles',
        'The number of meters in an AU',
      ],
      correctIndex: 1,
      explanation: 'There are 206,265 arcseconds in one radian. This constant converts angular measure in arcseconds into radians.',
    },
    {
      id: 'c1-q8',
      question: 'Which coordinate on the celestial sphere is directly analogous to longitude on Earth?',
      options: ['Declination', 'Right Ascension', 'Altitude', 'Azimuth'],
      correctIndex: 1,
      explanation: 'Right Ascension (RA) measures eastward along the celestial equator, analogous to terrestrial longitude.',
    },
    {
      id: 'c1-q9',
      question: 'Declination on the celestial sphere is measured in which units and ranges?',
      options: [
        'Hours from 0h to 24h',
        'Degrees from -90° to +90°',
        'Radians from 0 to 2π',
        'Kilometers from 0 to 1,000,000 km',
      ],
      correctIndex: 1,
      explanation: 'Declination measures north (+) or south (-) from 0° at the celestial equator to +90° at the North Celestial Pole and -90° at the South Celestial Pole.',
    },
    {
      id: 'c1-q10',
      question: 'If an object is 1 parsec away from Earth, what is its measured stellar parallax angle?',
      options: ['1 degree', '1 arcminute', '1 arcsecond', '1 radian'],
      correctIndex: 2,
      explanation: 'By definition, one parsec is the distance at which the radius of Earth’s orbit (1 AU) subtends an angle of exactly 1 arcsecond.',
    },
    {
      id: 'c1-q11',
      question: 'Why does light from distant stars provide us with a historical look into the past?',
      options: [
        'Space acts as a giant mirror reflecting ancient light',
        'Light travels at a finite speed, so it takes time to reach us across space',
        'Stars only shine in the past and turn off in the present',
        'Gravitational lensing slows light down to a stop',
      ],
      correctIndex: 1,
      explanation: 'Because light travels at a finite velocity (c ≈ 300,000 km/s), the light we receive today left distant objects thousands, millions, or billions of years ago.',
    },
    {
      id: 'c1-q12',
      question: 'How long does it take light emitted by the Sun to travel 1 AU and reach Earth?',
      options: ['Instantaneous (0 seconds)', '8.3 seconds', '8 minutes and 20 seconds', '24 hours'],
      correctIndex: 2,
      explanation: 'Time = 1.5 × 10⁸ km / 3.0 × 10⁵ km/s = 500 seconds = 8 minutes and 20 seconds.',
    },
    {
      id: 'c1-q13',
      question: 'An astronomer notes that a planet covers an angle of 20 arcseconds at a distance of 1.0 × 10⁸ km. Using D = (α × d)/206,265, its diameter is approximately:',
      options: ['970 km', '4,850 km', '9,696 km', '24,500 km'],
      correctIndex: 2,
      explanation: 'D = (20 × 1.0 × 10⁸) / 206,265 ≈ 9,696 km.',
    },
    {
      id: 'c1-q14',
      question: 'What causes the apparent daily rising and setting of stars across the sky?',
      options: [
        'The rotation of the celestial sphere around a static Earth',
        'The rotation of Earth eastward on its internal axis once every 24 hours',
        'The orbital motion of Earth around the Sun',
        'The gravitational pull of the galactic core',
      ],
      correctIndex: 1,
      explanation: 'Earth rotates from west to east once every 24 hours, making celestial objects appear to rotate east-to-west.',
    },
    {
      id: 'c1-q15',
      question: 'What is the altitude of Polaris for an observer standing at the North Pole (latitude 90° N)?',
      options: ['0° (at the horizon)', '45°', '90° (at the zenith)', '-90°'],
      correctIndex: 2,
      explanation: 'The altitude of Polaris equals the observer’s northern latitude. At 90° N, Polaris sits directly at the zenith (90°).',
    },
    {
      id: 'c1-q16',
      question: 'What is the apparent annual path of the Sun across the celestial sphere called?',
      options: ['Celestial Meridian', 'Ecliptic', 'Prime Horizon', 'Galactic Equator'],
      correctIndex: 1,
      explanation: 'The ecliptic is the plane of Earth’s orbit projected onto the sky, representing the Sun’s apparent annual pathway.',
    },
    {
      id: 'c1-q17',
      question: 'What is the angle between Earth’s celestial equator and the ecliptic?',
      options: ['0.0°', '12.5°', '23.5°', '45.0°'],
      correctIndex: 2,
      explanation: 'Earth’s rotational axis is tilted by 23.5° relative to its orbital plane, causing a 23.5° tilt between the celestial equator and ecliptic.',
    },
    {
      id: 'c1-q18',
      question: 'One parsec is approximately equivalent to how many light-years?',
      options: ['0.33 light-years', '1.00 light-years', '3.26 light-years', '206,265 light-years'],
      correctIndex: 2,
      explanation: '1 parsec ≈ 3.26 light-years (which is also 206,265 AU).',
    },
    {
      id: 'c1-q19',
      question: 'Which of the following is written correctly in standard scientific notation?',
      options: ['45.2 × 10⁵', '0.452 × 10⁷', '4.52 × 10⁶', '452 × 10⁴'],
      correctIndex: 2,
      explanation: 'Standard scientific notation requires the leading coefficient to be greater than or equal to 1 and strictly less than 10 (4.52 × 10⁶).',
    },
    {
      id: 'c1-q20',
      question: 'Earth’s rotational axis wobbles in a slow 26,000-year cycle known as:',
      options: ['Retrograde motion', 'Axial precession', 'Nutational oscillation', 'Orbital resonance'],
      correctIndex: 1,
      explanation: 'Precession of the equinoxes is the 26,000-year wobbling of Earth’s rotational axis caused by tidal forces from the Moon and Sun.',
    },
  ],
};
