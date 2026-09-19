import { CurriculumTopic } from '@/types/curriculum';

export const natureOfLightTopic: CurriculumTopic = {
  slug: 'nature-of-light',
  chapterNumber: 5,
  title: 'The Nature of Light',
  subtitle: 'Waves, Photons, Blackbody Radiation, and the Secrets of Spectroscopy',
  badge: 'Chapter 5 • Radiation & Optics',
  accentColor: 'purple',
  freshmanSummary:
    'Light is the ultimate cosmic messenger. Almost everything we know about distant stars, nebulae, and galaxies arrives in the form of electromagnetic radiation. In this chapter, you will discover the dual personality of light as both wave and particle, explore the full electromagnetic spectrum, decode the temperature of glowing stars using Wien’s and Stefan-Boltzmann’s laws, and read the chemical barcodes written in starlight using spectroscopy.',
  readingSections: 'Sections 5.1 – 5.9 (EM Waves & Photons, EM Spectrum, Blackbody Laws, Kirchhoff’s Laws, Bohr Atom, Doppler Effect)',
  recordingUrl: 'Chapter 5',
  deepSkyObjects: [
    {
      name: 'Sombrero Galaxy',
      designation: 'M104 / NGC 4594',
      type: 'Unbarred Spiral Galaxy / Lenticular',
      constellation: 'Virgo',
      distanceLightYears: '31.1 million light-years',
      significance:
        'Famous for its brilliant white bulbous core and dramatic dark dust lane absorbing visible background starlight. Multiwavelength infrared observations reveal a flat inner star-forming disk hidden within the dust.',
      observationTip: 'Visible in small telescopes as a bright oval with a subtle dark horizontal dust lane splitting the nucleus.',
    },
    {
      name: 'Whirlpool Galaxy',
      designation: 'M51a / NGC 5194',
      type: 'Grand Design Spiral Galaxy',
      constellation: 'Canes Venatici',
      distanceLightYears: '23 million light-years',
      significance:
        'The archetype of a grand-design spiral galaxy, interacting with companion galaxy NGC 5195. Compression shockwaves along its spiral arms trigger intense star formation, glowing pink in H-alpha emission lines.',
      observationTip: 'Located near the end star of the Big Dipper handle (Alkaid); binoculars reveal two glowing cores.',
    },
  ],
  sections: [
    {
      id: 'wave-particle-duality',
      title: 'The Dual Nature of Light: Waves and Photons',
      subheading: 'How light acts like ripples on a pond AND like tiny flying packets of energy',
      laymanExplanation:
        'Is light a wave or a stream of particles? In physics, the surprising answer is: it is both! As an electromagnetic wave, light consists of oscillating electric and magnetic fields traveling through empty space at 300,000 km/s (186,000 miles/s). The distance between successive wave crests is its wavelength (λ), and the number of crests passing each second is its frequency (ν). But when light hits matter, it acts like discrete packets of energy called photons. Blue light has short wavelengths, high frequencies, and high-energy photons, while red light has long wavelengths, low frequencies, and low-energy photons.',
      realWorldAnalogy:
        'Imagine throwing ping-pong balls (low-energy red photons) vs baseballs (high-energy blue/UV photons) at a glass window. If you throw 1,000 gentle ping-pong balls, the glass won’t break. But throw a single fastball, and the glass shatters! In Einstein’s photoelectric effect, only photons with enough individual energy can kick electrons out of metal atoms.',
      keyTerms: [
        {
          term: 'Wavelength (λ)',
          definition: 'The spatial distance between two successive wave crests or troughs, measured in meters or nanometers (1 nm = 10⁻⁹ m).',
        },
        {
          term: 'Frequency (ν or f)',
          definition: 'The number of wave cycles passing a stationary point per second, measured in Hertz (1 Hz = 1 cycle/second).',
        },
        {
          term: 'Photon',
          definition: 'A discrete quantum packet of electromagnetic energy with energy E = h × ν.',
        },
        {
          term: 'Planck’s Constant (h)',
          definition: 'The fundamental quantum constant h ≈ 6.626 × 10⁻³⁴ Joule-seconds.',
        },
      ],
      mathBreakdown: {
        name: 'The Wave Equation & Photon Energy',
        formula: 'c = \\lambda \\cdot \\nu \\quad \\text{and} \\quad E = h \\cdot \\nu = \\frac{h \\cdot c}{\\lambda}',
        variables: 'c = speed of light (3.0 × 10⁸ m/s); λ = wavelength (m); ν = frequency (Hz); E = photon energy (Joules); h = 6.626 × 10⁻³⁴ J·s.',
        walkThrough:
          'Green light has a wavelength of λ = 500 nm (5.0 × 10⁻⁷ m). Frequency ν = c / λ = (3.0 × 10⁸) / (5.0 × 10⁻⁷) = 6.0 × 10¹⁴ Hz. Energy E = (6.626 × 10⁻³⁴) × (6.0 × 10¹⁴) = 3.98 × 10⁻¹⁹ Joules.',
        practiceProblem: {
          problem: 'If you double the frequency of a photon, what happens to its energy and its wavelength?',
          solution: 'Because E = hν, the energy doubles. Because c = λν, the wavelength is cut in half.',
        },
      },
    },
    {
      id: 'em-spectrum-blackbody',
      title: 'The Electromagnetic Spectrum and Blackbody Laws',
      subheading: 'Why hot objects glow: Wien’s Law and the Stefan-Boltzmann Law',
      laymanExplanation:
        'Human eyes only see a tiny sliver of light called visible light (from 400 nm violet to 700 nm red). But the full electromagnetic spectrum stretches from kilometer-long radio waves, microwaves, and infrared, all the way to ultra-energetic ultraviolet, X-rays, and gamma rays. Any dense, hot object (like an electric stove coil or a star) glows across all wavelengths as a blackbody. Wilhelm Wien showed that hotter stars glow bluer (their peak emission shifts to shorter wavelengths), while Josef Stefan and Ludwig Boltzmann showed that hotter objects radiate vastly more total energy.',
      realWorldAnalogy:
        'Watch a blacksmith heating an iron horseshoe: at first, it radiates invisible infrared heat you can feel with your hands. As it gets hotter, it glows dull red, then cherry red, then bright orange, then incandescent white-hot. If it got hot enough without vaporizing, it would glow blue-white!',
      keyTerms: [
        {
          term: 'Blackbody',
          definition: 'An idealized physical body that absorbs 100% of incident radiation and emits thermal radiation following Planck’s blackbody spectrum.',
        },
        {
          term: 'Wien’s Displacement Law',
          definition: 'λ_max = b / T (where b ≈ 2.898 × 10⁻³ m·K). The wavelength of peak radiation is inversely proportional to temperature. Hotter stars peak at shorter (bluer) wavelengths.',
        },
        {
          term: 'Stefan-Boltzmann Law',
          definition: 'F = σ × T⁴ (where σ ≈ 5.67 × 10⁻⁸ W/m²·K⁴). The total thermal energy radiated per unit surface area is proportional to the fourth power of temperature.',
        },
      ],
      mathBreakdown: {
        name: 'Wien’s Law & Temperature of the Sun',
        formula: '\\lambda_{\\text{max}} = \\frac{2.898 \\times 10^{-3} \\text{ m}\\cdot\\text{K}}{T}',
        variables: 'λ_max = peak wavelength in meters; T = surface temperature in Kelvin.',
        walkThrough:
          'The Sun has a surface temperature of T ≈ 5,800 K. Peak wavelength: λ_max = (2.898 × 10⁻³) / 5,800 ≈ 5.0 × 10⁻⁷ m = 500 nm (in the green-yellow part of the visible spectrum)!',
        practiceProblem: {
          problem: 'A blue star has a temperature of 11,600 K (twice that of the Sun). At what wavelength does it peak?',
          solution: 'λ_max = (2.898 × 10⁻³) / 11,600 = 250 nm (in the ultraviolet spectrum!).',
        },
      },
    },
    {
      id: 'spectroscopy-doppler',
      title: 'Kirchhoff’s Spectroscopy Laws and the Doppler Shift',
      subheading: 'Reading chemical barcodes and measuring cosmic velocities',
      laymanExplanation:
        'When starlight passes through a prism or diffraction grating, it spreads out into a spectrum. In 1859, Gustav Kirchhoff discovered three rules: 1) A hot dense object produces a smooth Continuous Spectrum. 2) A hot thin gas produces bright Emission Lines (only specific colors). 3) A cool gas placed in front of a continuous source produces dark Absorption Lines. Because each chemical element has unique electron energy levels, absorption lines act as an infallible chemical fingerprint! Furthermore, if a star is moving toward us, its spectral lines shift toward the blue (blueshift); if it is moving away, they shift toward the red (redshift).',
      realWorldAnalogy:
        'The Doppler effect is why an ambulance siren sounds high-pitched as it races toward you (sound waves bunched up) and drops to a low pitch as it speeds away (sound waves stretched out). Light does the exact same thing: bunching into blue or stretching into red!',
      keyTerms: [
        {
          term: 'Continuous Spectrum',
          definition: 'An uninterrupted rainbow of colors emitted across a continuous range of wavelengths by a hot, dense solid, liquid, or high-pressure gas.',
        },
        {
          term: 'Emission Spectrum',
          definition: 'A series of bright, discrete spectral lines emitted at characteristic wavelengths by atoms in a hot, low-density cloud of gas.',
        },
        {
          term: 'Absorption Spectrum',
          definition: 'A continuous spectrum crossed by dark lines created when cool, low-density gas absorbs specific photon wavelengths corresponding to electron energy transitions.',
        },
        {
          term: 'Doppler Shift',
          definition: 'The change in observed wavelength due to relative motion between source and observer: Δλ / λ₀ = v / c.',
        },
      ],
      mathBreakdown: {
        name: 'The Radial Velocity Doppler Formula',
        formula: '\\frac{\\Delta \\lambda}{\\lambda_0} = \\frac{\\lambda_{\\text{obs}} - \\lambda_0}{\\lambda_0} = \\frac{v}{c}',
        variables: 'λ_obs = measured wavelength; λ₀ = laboratory rest wavelength; v = radial velocity; c = speed of light (3.0 × 10⁵ km/s).',
        walkThrough:
          'A hydrogen Balmer-alpha line at rest is λ₀ = 656.3 nm. In a distant star, it is observed at λ_obs = 658.5 nm. Δλ = +2.2 nm. Radial velocity v = (2.2 / 656.3) × 300,000 km/s ≈ +1,005 km/s (positive means red-shifted, moving away)!',
        practiceProblem: {
          problem: 'A star moves toward Earth at v = -30 km/s. What is its fractional wavelength shift Δλ / λ₀?',
          solution: 'Δλ / λ₀ = (-30) / (300,000) = -0.0001 (a 0.01% blueshift).',
        },
      },
    },
  ],
  diagram: {
    type: 'em-spectrum',
    title: 'The Electromagnetic Spectrum & Spectroscopy',
    caption: 'Wavelengths from Radio to Gamma Rays with visible light expanded. Kirchhoff’s 3 spectra: Continuous, Emission lines, and Absorption lines. Doppler red/blue shifts.',
  },
  flashcards: [
    {
      id: 'c5-f1',
      term: 'Speed of Light (c)',
      category: 'Formula',
      front: 'What is the speed of light in a vacuum?',
      back: 'c ≈ 3.0 × 10⁸ meters per second (300,000 km/s, or ~186,000 miles per second). Nothing in the universe can travel faster than c.',
    },
    {
      id: 'c5-f2',
      term: 'Electromagnetic Wave Equation',
      category: 'Formula',
      front: 'State the relationship between speed of light, wavelength, and frequency.',
      back: 'c = λ × ν (Speed of light = wavelength × frequency). If wavelength increases, frequency must decrease.',
    },
    {
      id: 'c5-f3',
      term: 'Photon Energy Equation',
      category: 'Formula',
      front: 'State the equation for the energy of a photon.',
      back: 'E = h × ν = (h × c) / λ. Shorter wavelength means higher frequency and higher photon energy.',
    },
    {
      id: 'c5-f4',
      term: 'Electromagnetic Spectrum Order',
      category: 'Concept',
      front: 'List the 7 regions of the EM spectrum in order from longest wavelength (lowest energy) to shortest wavelength (highest energy).',
      back: 'Radio → Microwave → Infrared → Visible → Ultraviolet → X-ray → Gamma ray.',
      tip: 'Mnemonic: "Raging Martians Invaded Venus Using X-ray Guns"',
    },
    {
      id: 'c5-f5',
      term: 'Wien’s Law',
      category: 'Formula',
      front: 'What does Wien’s Displacement Law state, and what is its equation?',
      back: 'λ_max = (2.898 × 10⁻³ m·K) / T. As temperature increases, the peak emission wavelength shifts to shorter (bluer) wavelengths.',
    },
    {
      id: 'c5-f6',
      term: 'Stefan-Boltzmann Law',
      category: 'Formula',
      front: 'What does the Stefan-Boltzmann Law state?',
      back: 'F = σ × T⁴. The energy flux radiated by a blackbody increases with the fourth power of absolute temperature (double T → 16× more energy radiated!).',
    },
    {
      id: 'c5-f7',
      term: 'Continuous Spectrum',
      category: 'Definition',
      front: 'What produces a continuous spectrum?',
      back: 'A luminous, hot, dense solid, liquid, or high-pressure gas (like a star’s dense interior or an incandescent lightbulb filament).',
    },
    {
      id: 'c5-f8',
      term: 'Emission Line Spectrum',
      category: 'Definition',
      front: 'What produces an emission line spectrum?',
      back: 'A hot, low-density cloud of gas. Atoms excited by heat or radiation emit photons at specific discrete wavelengths as electrons jump down to lower energy levels.',
    },
    {
      id: 'c5-f9',
      term: 'Absorption Line Spectrum',
      category: 'Definition',
      front: 'What produces an absorption line spectrum?',
      back: 'A continuous light source shining through a cooler, low-density gas. Atoms absorb photons matching exact electron energy jumps, leaving dark gaps.',
    },
    {
      id: 'c5-f10',
      term: 'Doppler Redshift vs Blueshift',
      category: 'Concept',
      front: 'What is the difference between a blueshift and a redshift?',
      back: 'Blueshift: Object moving toward the observer (wavelengths compressed shorter). Redshift: Object moving away from observer (wavelengths stretched longer).',
    },
    {
      id: 'c5-f11',
      term: 'Bohr Model of the Atom',
      category: 'Concept',
      front: 'How does the Bohr model explain spectral lines in starlight?',
      back: 'Electrons orbit atomic nuclei in quantized energy orbits. Moving up absorbs a photon of exact energy; falling down emits a photon of exact energy.',
    },
    {
      id: 'c5-f12',
      term: 'Visible Light Wavelength Range',
      category: 'Definition',
      front: 'What is the approximate wavelength range of human visible light?',
      back: 'Approximately 400 nm (violet) to 700 nm (red). 1 nm = 10⁻⁹ meters.',
    },
    {
      id: 'c5-f13',
      term: 'Whirlpool Galaxy (M51)',
      category: 'DSO',
      front: 'Why do the spiral arms of the Whirlpool Galaxy (M51) glow with pink/red knots?',
      back: 'The pink knots are H-alpha emission nebulae (ionized hydrogen at 656.3 nm) triggered by spiral density waves compressing gas clouds into newborn stars.',
    },
    {
      id: 'c5-f14',
      term: 'Sombrero Galaxy (M104)',
      category: 'DSO',
      front: 'What creates the dramatic dark band across the Sombrero Galaxy (M104)?',
      back: 'Interstellar dust particles absorbing and scattering visible starlight from the luminous nuclear bulge behind it.',
    },
    {
      id: 'c5-f15',
      term: 'Atmospheric Windows',
      category: 'Concept',
      front: 'Which two spectral bands pass through Earth’s atmosphere down to sea level?',
      back: 'Visible light and Radio waves (the "optical window" and "radio window"). Most infrared, UV, X-rays, and gamma rays are blocked by ozone, water vapor, and oxygen.',
    },
    {
      id: 'c5-f16',
      term: 'Thermal Equilibrium',
      category: 'Definition',
      front: 'What does it mean for an object to be in radiative equilibrium?',
      back: 'The rate at which the body absorbs energy equals the rate at which it emits energy, maintaining a constant steady-state temperature.',
    },
  ],
  quiz: [
    {
      id: 'c5-q1',
      question: 'Which region of the electromagnetic spectrum has the shortest wavelengths and highest photon energies?',
      options: ['Radio waves', 'Infrared', 'Visible green light', 'Gamma rays'],
      correctIndex: 3,
      explanation: 'Gamma rays have the shortest wavelengths (< 0.01 nm) and highest frequencies, packing the highest photon energies in the universe.',
    },
    {
      id: 'c5-q2',
      question: 'According to the wave equation c = λ · ν, if the wavelength of light is tripled (3×), what happens to its frequency?',
      options: ['It triples (3×)', 'It is cut to one-third (1/3)', 'It increases by nine times (9×)', 'It remains constant'],
      correctIndex: 1,
      explanation: 'Because c is constant in vacuum, wavelength and frequency are inversely proportional: ν = c / λ. Tripling λ reduces ν to 1/3.',
    },
    {
      id: 'c5-q3',
      question: 'According to Wien’s Law (λ_max ∝ 1/T), what color does a star with a very high surface temperature (e.g., 25,000 K) appear?',
      options: ['Deep red', 'Bright yellow', 'Blue-white', 'Green'],
      correctIndex: 2,
      explanation: 'Hotter stars peak at shorter, more energetic wavelengths. A 25,000 K star peaks in the ultraviolet and emits predominantly blue-white visible light.',
    },
    {
      id: 'c5-q4',
      question: 'If the surface temperature of a star is doubled (2×), by what factor does its radiated energy flux F increase (Stefan-Boltzmann Law)?',
      options: ['2 times', '4 times', '8 times', '16 times'],
      correctIndex: 3,
      explanation: 'F = σ T⁴. Doubling temperature yields (2)⁴ = 16 times more energy flux emitted per unit surface area.',
    },
    {
      id: 'c5-q5',
      question: 'What kind of spectrum is produced when a continuous light beam passes through a cooler, low-density cloud of gas?',
      options: ['Continuous spectrum', 'Dark absorption line spectrum', 'Bright emission line spectrum', 'Synchrotron spectrum'],
      correctIndex: 1,
      explanation: 'According to Kirchhoff’s third law, cool gas absorbs photons at characteristic wavelengths, producing dark absorption lines across the continuous rainbow.',
    },
    {
      id: 'c5-q6',
      question: 'What happens inside an atom when it emits an emission line photon?',
      options: [
        'An electron drops from a higher energy level to a lower energy level',
        'An electron jumps from a lower energy level to a higher energy level',
        'A proton leaves the atomic nucleus',
        'A neutron decays into an electron and antineutrino',
      ],
      correctIndex: 0,
      explanation: 'When an electron de-excites from a high orbital to a lower orbital, conservation of energy requires the emitted energy difference to be released as a photon (E = hν).',
    },
    {
      id: 'c5-q7',
      question: 'If a star’s spectral lines are observed at longer wavelengths than their laboratory rest wavelengths (Δλ > 0), the star is:',
      options: [
        'Moving toward the observer (blueshifted)',
        'Moving away from the observer (redshifted)',
        'Stationary relative to Earth',
        'Rotating on its axis backwards',
      ],
      correctIndex: 1,
      explanation: 'When an object moves away from the observer, its waves are stretched to longer wavelengths: a redshift.',
    },
    {
      id: 'c5-q8',
      question: 'What is the speed of an electromagnetic wave in a vacuum?',
      options: ['300,000 m/s', '3,000 km/s', '300,000 km/s', 'Infinite speed'],
      correctIndex: 2,
      explanation: 'c = 3.0 × 10⁸ m/s = 300,000 km/s (approx. 186,000 miles per second).',
    },
    {
      id: 'c5-q9',
      question: 'Why are gamma-ray and X-ray astronomical observatories placed in space rather than on high mountaintops?',
      options: [
        'Space telescopes are cheaper to maintain than ground telescopes',
        'Earth’s atmosphere completely blocks gamma rays and X-rays',
        'There is less gravity in orbit to distort the mirrors',
        'X-rays only travel in a vacuum',
      ],
      correctIndex: 1,
      explanation: 'Earth’s atmosphere is opaque to X-rays and gamma rays, shielding life on Earth but requiring space telescopes (like Chandra and Fermi) to observe them.',
    },
    {
      id: 'c5-q10',
      question: 'What is the energy of a single photon directly proportional to?',
      options: ['Its wavelength', 'Its frequency', 'Its amplitude', 'Its mass'],
      correctIndex: 1,
      explanation: 'Planck’s relation E = h · ν states photon energy is directly proportional to frequency.',
    },
    {
      id: 'c5-q11',
      question: 'Which visible light color has the longest wavelength and lowest photon energy?',
      options: ['Violet', 'Blue', 'Green', 'Red'],
      correctIndex: 3,
      explanation: 'Red visible light has the longest wavelength (~700 nm) and the lowest frequency and photon energy.',
    },
    {
      id: 'c5-q12',
      question: 'A laboratory hydrogen Balmer line has a rest wavelength of 656.3 nm. An astronomer measures this line in a star at 654.3 nm. What is happening?',
      options: [
        'The star is moving away from Earth at high velocity',
        'The star is moving toward Earth (blueshifted)',
        'The star has lost all its hydrogen',
        'The star has cooled to absolute zero',
      ],
      correctIndex: 1,
      explanation: 'The observed wavelength (654.3 nm) is shorter than rest (656.3 nm), which represents a blueshift indicating motion toward Earth.',
    },
    {
      id: 'c5-q13',
      question: 'What feature distinguishes the Sombrero Galaxy (M104) in optical photographs?',
      options: ['Bright green ring nebulae', 'A prominent dark dust lane bisecting its luminous bulge', 'Multiple spiral bars', 'A glowing ring of quasars'],
      correctIndex: 1,
      explanation: 'M104 is characterized by an immense halo/bulge and a sharp dark interstellar dust lane encircling its disk.',
    },
    {
      id: 'c5-q14',
      question: 'Why do glowing emission nebulae in galaxies like M51 typically appear pinkish-red in astronomical photos?',
      options: [
        'Reflection of sunlight from iron dust',
        'Hydrogen-alpha (Hα) emission at 656.3 nm',
        'Oxygen gas glowing in the ultraviolet',
        'Doppler redshift of ancient light',
      ],
      correctIndex: 1,
      explanation: 'When excited electrons cascade from n=3 to n=2 in hydrogen atoms, they emit red H-alpha photons at 656.3 nm.',
    },
    {
      id: 'c5-q15',
      question: 'Which physical property of a star can be determined directly from the wavelength of its blackbody peak using Wien’s Law?',
      options: ['Total chemical mass', 'Surface temperature', 'Radial velocity', 'Distance in parsecs'],
      correctIndex: 1,
      explanation: 'Wien’s Law (λ_max = b / T) allows astronomers to calculate a star’s surface temperature directly from its peak emission wavelength.',
    },
    {
      id: 'c5-q16',
      question: 'What happens to the frequency of sound or light when the emitting source moves directly away from the observer?',
      options: ['Frequency increases', 'Frequency decreases', 'Frequency oscillates wildly', 'Frequency drops to zero'],
      correctIndex: 1,
      explanation: 'When moving away, the wave crests are stretched out over greater distances, resulting in fewer waves reaching the observer per second (lower frequency).',
    },
    {
      id: 'c5-q17',
      question: 'What do the unique dark absorption lines in a star’s spectrum reveal to astronomers?',
      options: [
        'The exact chemical elements present in the star’s atmosphere',
        'The date the star was born',
        'The number of planets orbiting the star',
        'The diameter of the telescope used',
      ],
      correctIndex: 0,
      explanation: 'Every element possesses unique electron orbital energies, creating a distinct "atomic barcode" of absorption lines that reveals its chemical composition.',
    },
    {
      id: 'c5-q18',
      question: 'Which of the following has higher frequency than visible light?',
      options: ['Microwaves', 'AM Radio waves', 'Infrared radiation', 'Ultraviolet light'],
      correctIndex: 3,
      explanation: 'Ultraviolet light has shorter wavelengths and higher frequencies than visible light.',
    },
    {
      id: 'c5-q19',
      question: 'If a star is moving perpendicular (sideways) to our line of sight, what radial Doppler shift will be measured?',
      options: ['Maximum redshift', 'Maximum blueshift', 'Zero Doppler shift', 'Infinite redshift'],
      correctIndex: 2,
      explanation: 'The standard Doppler shift only measures radial velocity (motion along the direct line of sight toward or away from the observer). Pure transverse motion produces zero radial shift.',
    },
    {
      id: 'c5-q20',
      question: 'An astronomer observes a blackbody peaking at 290 nm (in the ultraviolet). What is its surface temperature?',
      options: ['1,000 K', '5,800 K', '10,000 K', '50,000 K'],
      correctIndex: 2,
      explanation: 'Using Wien’s law: T = b / λ_max = (2.898 × 10⁻³ m·K) / (2.9 × 10⁻⁷ m) ≈ 10,000 K.',
    },
  ],
};
