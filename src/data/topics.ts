export interface Subtopic {
  id: string;
  name: string;
  description: string;
  badge?: string;
  externalUrl?: string;
  keyConcepts: string[];
}

export interface TopicDefinition {
  slug: string;
  title: string;
  webmdTabLabel: string;
  shortDescription: string;
  fullOverview: string;
  categoryFilter: string;
  accentColor: string; // for UI accents
  iconName: 'Compass' | 'Atom' | 'Flame' | 'Binary' | 'Trophy' | 'Sparkles';
  subtopics: Subtopic[];
  keyFormulas: {
    name: string;
    formula: string;
    explanation: string;
  }[];
  featuredGuide: {
    title: string;
    publisher: string;
    url: string;
    summary: string;
  };
}

export const SPACE_TOPICS: TopicDefinition[] = [
  {
    slug: 'aerodynamics',
    title: 'Flight & Aerodynamics',
    webmdTabLabel: 'Aerodynamics',
    shortDescription: 'Airfoil lift, supersonic compressible shockwaves, and boundary layer fluid dynamics.',
    fullOverview:
      'Aerodynamics is the branch of fluid dynamics focused on the motion of air and other gaseous fluids and with the forces acting on bodies in motion relative to such fluids. In aerospace engineering, understanding subsonic airfoils, transonic shock formation, supersonic boundary layer transitions, and hypersonic heating is critical for launch vehicles, hypersonic gliders, and atmospheric re-entry capsules.',
    categoryFilter: 'Aerodynamics & Fluid Dynamics',
    accentColor: 'cyan',
    iconName: 'Compass',
    subtopics: [
      {
        id: 'airfoils-lift',
        name: 'Airfoils, Camber & Circulation Theory',
        description: 'Kutta-Joukowski theorem, Bernoulli pressure differential, and angle of attack stall limits.',
        badge: 'NASA Glenn',
        externalUrl: 'https://www.grc.nasa.gov/www/k-12/airplane/foil3.html',
        keyConcepts: ['Camber & Chord Line', 'Kutta Condition', 'Stall Angle', 'Pressure Coefficient Cp'],
      },
      {
        id: 'supersonic-shock',
        name: 'Supersonic Flow & Oblique Shockwaves',
        description: 'Mach angles, normal vs oblique shockwaves, expansion fans, and aerodynamic wave drag.',
        badge: 'Transonic / Mach',
        externalUrl: 'https://www.grc.nasa.gov/www/k-12/airplane/mach.html',
        keyConcepts: ['Mach Number M = v/a', 'Prandtl-Meyer Expansion', 'Wave Drag', 'Thermal Choking'],
      },
      {
        id: 'boundary-layers',
        name: 'Boundary Layers & Reynolds Numbers',
        description: 'Laminar-to-turbulent shear stress transitions and skin-friction drag on flight surfaces.',
        badge: 'Fluid Dynamics',
        externalUrl: 'https://www.grc.nasa.gov/www/k-12/airplane/boundlay.html',
        keyConcepts: ['Reynolds Number Re', 'Laminar Flow', 'Turbulent Separation', 'Blasius Solution'],
      },
      {
        id: 'wind-tunnels',
        name: 'Wind Tunnel Testing & Aerodynamic Scaling',
        description: 'Similitude criteria, force balance measurement, and schlieren imaging of shock structures.',
        badge: 'Lab Testing',
        keyConcepts: ['Dynamic Similitude', 'Pitot-Static Tube', 'Schlieren Photography', 'Drag Polar'],
      },
    ],
    keyFormulas: [
      {
        name: 'Aerodynamic Lift Equation',
        formula: 'L = (1/2) · ρ · v² · S · Cl',
        explanation: 'Lift equals dynamic pressure multiplied by reference wing area and lift coefficient.',
      },
      {
        name: 'Reynolds Number',
        formula: 'Re = (ρ · v · L) / μ',
        explanation: 'Ratio of inertial forces to viscous forces in fluid flow.',
      },
      {
        name: 'Mach Number',
        formula: 'M = v / a = v / √(γ · R · T)',
        explanation: 'Ratio of flow speed to the local speed of sound.',
      },
    ],
    featuredGuide: {
      title: "NASA Beginner's Guide to Aeronautics",
      publisher: 'NASA Glenn Research Center',
      url: 'https://www.grc.nasa.gov/www/k-12/airplane/bga.html',
      summary:
        'A comprehensive, interactive educational portal covering lift, drag, propulsion, and compressible fluid dynamics written for pre-college and collegiate cadets.',
    },
  },
  {
    slug: 'propulsion',
    title: 'Propulsion & Rocket Engines',
    webmdTabLabel: 'Propulsion & Rockets',
    shortDescription: 'Chemical combustion, de Laval supersonic nozzles, and electric ion propulsion.',
    fullOverview:
      'Rocket propulsion generates thrust through the ejection of reaction mass accelerated at high velocity. From liquid bipropellant cryogenic engines (LH2/LOX, Methane/LOX) and solid rocket motors to Hall-effect plasma thrusters and nuclear thermal rockets, mastering propulsion equations governs whether payloads achieve low Earth orbit, lunar transfer, or interplanetary transit.',
    categoryFilter: 'Aerospace Engineering & Propulsion',
    accentColor: 'orange',
    iconName: 'Flame',
    subtopics: [
      {
        id: 'rocket-equation',
        name: 'Tsiolkovsky Rocket Equation & Δv Budgets',
        description: 'Mass ratios, dry mass penalties, and multistage vehicle optimization for orbital insertion.',
        badge: 'Core Physics',
        keyConcepts: ['Delta-v Budget', 'Mass Ratio (m0/mf)', 'Specific Impulse Isp', 'Multistaging Gains'],
      },
      {
        id: 'nozzle-expansion',
        name: 'De Laval Supersonic Nozzle Dynamics',
        description: 'Converging-diverging throat geometries, sonic choking, underexpanded vs overexpanded exhaust.',
        badge: 'NASA JPL',
        externalUrl: 'https://www.grc.nasa.gov/www/k-12/airplane/nozzleh.html',
        keyConcepts: ['Choked Flow (M=1)', 'Expansion Ratio Ae/At', 'Flow Separation', 'Altitude Adaptation'],
      },
      {
        id: 'propellant-chemistries',
        name: 'Cryogenic Liquid, Solid & Hypergolic Chemistries',
        description: 'Comparative thermodynamics of Hydrolox, Methalox, RP-1, and solid composite propellants.',
        badge: 'Propellant Lab',
        keyConcepts: ['Specific Impulse Comparison', 'Combustion Chamber Pressure', 'Turbopump Cycles', 'Staging'],
      },
      {
        id: 'electric-propulsion',
        name: 'Electric, Ion & Plasma Thrusters',
        description: 'Hall-effect thrusters, gridded ion engines, and high-Isp low-thrust deep space trajectories.',
        badge: 'Deep Space',
        keyConcepts: ['Electrostatic Acceleration', 'Isp > 3000s', 'Xenon Propellant', 'Ion Beam Neutralizer'],
      },
    ],
    keyFormulas: [
      {
        name: 'Tsiolkovsky Rocket Equation',
        formula: 'Δv = Isp · g₀ · ln(m₀ / mf)',
        explanation: 'Governs the change in velocity based on exhaust velocity and propellant mass fraction.',
      },
      {
        name: 'Thrust Equation',
        formula: 'F = ṁ · ve + (pe - p₀) · Ae',
        explanation: 'Thrust produced by mass flow rate times effective exhaust velocity plus nozzle pressure thrust.',
      },
      {
        name: 'Specific Impulse',
        formula: 'Isp = F / (ṁ · g₀) = c / g₀',
        explanation: 'Thrust delivered per unit propellant weight flow rate at Earth sea level.',
      },
    ],
    featuredGuide: {
      title: 'NASA JPL Basics of Space Flight: Rocket Propulsion',
      publisher: 'NASA Jet Propulsion Laboratory',
      url: 'https://science.nasa.gov/learn/basics-of-space-flight/',
      summary:
        'The definitive operational guide from NASA JPL explaining propulsion cycles, interplanetary trajectory burns, and attitude thruster mechanics.',
    },
  },
  {
    slug: 'astronomy',
    title: 'Astronomy & Planetary Science',
    webmdTabLabel: 'Astronomy & Planets',
    shortDescription: 'Stellar evolution, Hertzsprung-Russell diagrams, and exoplanetary transit photometry.',
    fullOverview:
      'Astronomy investigates the origin, evolution, physics, and chemistry of celestial objects outside Earth atmosphere. High school and pre-college students explore stellar nucleosynthesis, black holes, galactic structures, and planetary geology while utilizing real light-curve photometry data from missions like Kepler and TESS.',
    categoryFilter: 'Astronomy & Planetary Science',
    accentColor: 'purple',
    iconName: 'Atom',
    subtopics: [
      {
        id: 'stellar-evolution',
        name: 'Stellar Evolution & Nucleosynthesis',
        description: 'Main sequence burning, red giants, supernovae, neutron stars, and white dwarf remnants.',
        badge: 'MIT 8.282J',
        externalUrl: 'https://ocw.mit.edu/courses/8-282j-introduction-to-astronomy-spring-2006/',
        keyConcepts: ['H-R Diagram', 'Proton-Proton Chain', 'Chandrasekhar Limit', 'Core Collapse'],
      },
      {
        id: 'exoplanet-photometry',
        name: 'Exoplanet Transit Photometry & Radial Velocity',
        description: 'Detecting exoplanets via transit light curve dips and Doppler spectral line wobbles.',
        badge: 'NASA TESS',
        keyConcepts: ['Transit Depth (ΔF/F = Rp²/R*²)', 'Radial Velocity', 'Habitable Zone', 'Spectroscopy'],
      },
      {
        id: 'planetary-geology',
        name: 'Planetary Geology & Atmospheric Escapes',
        description: 'Comparative planetology of Martian regolith, Jovian moon oceans, and atmospheric retention.',
        badge: 'OpenStax OER',
        externalUrl: 'https://openstax.org/details/books/astronomy-2e',
        keyConcepts: ['Jeans Escape', 'Cryovolcanism', 'Tidal Heating', 'Planetary Magnetospheres'],
      },
      {
        id: 'telescopes-optics',
        name: 'Astronomical Optics & Spectroscopy',
        description: 'Refracting vs reflecting telescopes, diffraction limits, interferometry, and infrared sensors.',
        badge: 'James Webb (JWST)',
        keyConcepts: ['Rayleigh Criterion θ = 1.22 λ / D', 'Diffraction Spikes', 'CCD Spectroscopy', 'Redshift z'],
      },
    ],
    keyFormulas: [
      {
        name: "Stefan-Boltzmann Luminosity Law",
        formula: 'L = 4π · R² · σ · T⁴',
        explanation: 'Total power radiated by a star as a blackbody in terms of stellar radius and temperature.',
      },
      {
        name: 'Exoplanet Transit Depth',
        formula: 'ΔF / F = (R_planet / R_star)²',
        explanation: 'Fractional drop in stellar flux during planetary transit reveals exoplanet radius.',
      },
      {
        name: "Wien's Displacement Law",
        formula: 'λ_peak = b / T  (where b ≈ 2.898 × 10⁻³ m·K)',
        explanation: 'Peak emission wavelength of blackbody radiation inversely relates to surface temperature.',
      },
    ],
    featuredGuide: {
      title: 'OpenStax Astronomy 2e Textbook',
      publisher: 'OpenStax / Rice University',
      url: 'https://openstax.org/details/books/astronomy-2e',
      summary:
        'A comprehensive, peer-reviewed, free textbook used in introductory university courses and AP advanced astronomy sequences worldwide.',
    },
  },
  {
    slug: 'physics',
    title: 'Physics & Classical Mechanics',
    webmdTabLabel: 'Physics & Mechanics',
    shortDescription: 'Newtonian dynamics, conservation laws, rotational kinematics, and orbital gravity.',
    fullOverview:
      'Classical mechanics forms the bedrock of aerospace engineering and astrophysics. From analyzing reaction forces during rocket liftoff and calculating center-of-pressure vs center-of-gravity stability margins to gyroscopic momentum storage in reaction wheels, classical physics translates mathematical equations into spacecraft reality.',
    categoryFilter: 'Physics & Classical Mechanics',
    accentColor: 'emerald',
    iconName: 'Atom',
    subtopics: [
      {
        id: 'newton-gravity',
        name: "Newton's Laws & Universal Gravitation",
        description: 'Inverse-square gravity, inertial reference frames, and free-fall microgravity trajectories.',
        badge: 'AP Physics C',
        keyConcepts: ['F = G·M·m/r²', 'Action-Reaction Pairs', 'Apparent Weightlessness', 'Escape Velocity'],
      },
      {
        id: 'rotational-dynamics',
        name: 'Rotational Inertia & Spacecraft Attitude',
        description: 'Moments of inertia, torque, angular momentum conservation, and reaction wheel stabilization.',
        badge: 'Spacecraft Control',
        keyConcepts: ['Angular Momentum L = I·ω', 'Gyroscopic Precession', 'Torque τ = r × F', 'Reaction Wheels'],
      },
      {
        id: 'energy-conservation',
        name: 'Conservation of Mechanical Energy & Momentum',
        description: 'Work-energy theorem, gravitational potential wells, and inelastic orbital collisions.',
        badge: 'HyperPhysics',
        externalUrl: 'https://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html',
        keyConcepts: ['Vis-Viva Equation', 'Potential Energy U = -G·M·m/r', 'Kinetic Energy K = 1/2 m·v²', 'Work W'],
      },
      {
        id: 'oscillations-damping',
        name: 'Simple Harmonic Motion & Launch Vibration',
        description: 'Resonance, acoustic vibration modes, and payload isolation during rocket max-Q flight.',
        badge: 'Vibration Labs',
        keyConcepts: ['Natural Frequency ω₀ = √(k/m)', 'Damped Oscillations', 'Acoustic Fatigue', 'Pogo Oscillation'],
      },
    ],
    keyFormulas: [
      {
        name: 'Universal Gravitation',
        formula: 'F_g = (G · M · m) / r²',
        explanation: 'Attractive gravitational force between two point masses separated by distance r.',
      },
      {
        name: 'Escape Velocity',
        formula: 'v_esc = √(2 · G · M / r)',
        explanation: 'Minimum speed needed for an unpropelled object to escape the gravitational field of a primary body.',
      },
      {
        name: 'Vis-Viva Orbital Energy Equation',
        formula: 'v² = G · M · (2/r - 1/a)',
        explanation: 'Computes velocity at any point r in an elliptical orbit with semi-major axis a.',
      },
    ],
    featuredGuide: {
      title: 'OpenStax University Physics Volume 1 (Mechanics)',
      publisher: 'OpenStax / Rice University',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      summary:
        'Calculus-based university physics textbook covering kinematics, rotational dynamics, gravitation, and oscillations for STEM students.',
    },
  },
  {
    slug: 'applied-math',
    title: 'Applied Space Mathematics',
    webmdTabLabel: 'Space Mathematics',
    shortDescription: 'Vector calculus, differential equations, state vectors, and numerical trajectory solving.',
    fullOverview:
      'Modern aerospace requires mastery of mathematical tools: vector cross products for torque and orbital angular momentum, differential equations for two-body orbital motion, matrix transformations for body-to-inertial frame attitude determination, and numerical integrators (Runge-Kutta) for real-world spaceflight trajectory simulation.',
    categoryFilter: 'Applied Space Mathematics',
    accentColor: 'sky',
    iconName: 'Binary',
    subtopics: [
      {
        id: 'vector-calculus',
        name: 'Vector Algebra & Coordinate Transformations',
        description: 'Dot products, cross products, Euler angles, and direction cosine matrices in 3D space.',
        badge: 'Calculus III',
        keyConcepts: ['Cross Product r × v', 'Dot Product', 'Euler Angles (Roll, Pitch, Yaw)', 'Quaternions'],
      },
      {
        id: 'differential-equations',
        name: 'Ordinary Differential Equations in Flight Dynamics',
        description: 'Second-order ODEs for drag deceleration, orbital motion, and rocket vertical ascent.',
        badge: 'Pauls Online Notes',
        externalUrl: 'https://tutorial.math.lamar.edu/',
        keyConcepts: ['Second-Order ODEs', 'Initial Value Problems', 'State Vectors [r, v]', 'Linearization'],
      },
      {
        id: 'numerical-integration',
        name: 'Numerical Integration & Orbital Solvers',
        description: 'Euler vs Runge-Kutta (RK4) integration of orbital trajectories with planetary perturbations.',
        badge: 'Simulation Code',
        keyConcepts: ['RK4 Algorithm', 'Step Size Truncation', 'N-Body Simulation', 'Perturbation Theory'],
      },
      {
        id: 'conic-sections',
        name: 'Conic Sections & Keplerian Orbital Elements',
        description: 'Semi-major axis, eccentricity, inclination, RAAN, argument of periapsis, and true anomaly.',
        badge: 'Orbital Elements',
        keyConcepts: ['Eccentricity e', 'Semi-Major Axis a', 'Inclination i', 'Kepler Third Law T² ∝ a³'],
      },
    ],
    keyFormulas: [
      {
        name: "Kepler's Third Law (Newtonian Form)",
        formula: 'T² = (4π² / (G · (M + m))) · a³',
        explanation: 'Relates orbital period T to semi-major axis a accounting for combined system mass.',
      },
      {
        name: 'Specific Orbital Angular Momentum',
        formula: 'h = r × v = |r| · |v| · sin(θ)',
        explanation: 'Conserved vector perpendicular to the orbital plane in a central force field.',
      },
      {
        name: 'Hohmann Transfer Velocity Delta',
        formula: 'Δv₁ = √(μ/r₁) · (√(2·r₂ / (r₁ + r₂)) - 1)',
        explanation: 'Impulsive velocity increment to inject from initial orbit r1 into elliptical transfer to r2.',
      },
    ],
    featuredGuide: {
      title: "Paul's Online Math Notes: Calculus & Differential Equations",
      publisher: 'Lamar University',
      url: 'https://tutorial.math.lamar.edu/',
      summary:
        'The gold-standard free collegiate reference for calculus, vector algebra, and differential equations.',
    },
  },
  {
    slug: 'competitions',
    title: 'Competitions & Hands-On Radar',
    webmdTabLabel: 'Competitions & Labs',
    shortDescription: 'The American Rocketry Challenge (TARC), NASA App Challenge, and High School CubeSats.',
    fullOverview:
      'Direct hands-on engineering competitions bridge theoretical science into tangible rocket launches and space mission designs. High school students collaborate in multidisciplinary teams to design, simulate, build, test, and fly rockets, payload software, and 1U CubeSats evaluated against real NASA engineering standards.',
    categoryFilter: 'Applied Space Mathematics',
    accentColor: 'amber',
    iconName: 'Trophy',
    subtopics: [
      {
        id: 'tarc-competition',
        name: 'The American Rocketry Challenge (TARC)',
        description: 'Premier national high school rocketry contest: hit exact altitude & flight duration with egg payload.',
        badge: 'Grades 9-12',
        externalUrl: 'https://rocketcontest.org/',
        keyConcepts: ['OpenRocket Trajectory Modeling', 'Altimeter Instrumentation', 'Parachute Sizing', 'Stability Margin'],
      },
      {
        id: 'nasa-app-challenge',
        name: 'NASA App Development Challenge (ADC)',
        description: 'Code a 3D visual app displaying Lunar South Pole terrain and rover navigation for Artemis missions.',
        badge: 'NASA Artemis',
        externalUrl: 'https://www.nasa.gov/learning-resources/app-development-challenge/',
        keyConcepts: ['Lunar Topography (LROC Data)', 'Artemis Exploration', 'Communications Line-of-Sight', '3D Graphics'],
      },
      {
        id: 'cubesat-initiative',
        name: 'NASA CubeSat Launch Initiative (CSLI)',
        description: 'High school and university guidelines to build, test, and launch miniature 1U CubeSat satellites.',
        badge: 'Satellite Design',
        externalUrl: 'https://www.nasa.gov/cubesat-launch-initiative/',
        keyConcepts: ['1U Standard (10cm³)', 'Power Budget & Solar Panels', 'Vibration Qualification', 'Ground Station Radio'],
      },
      {
        id: 'openrocket-design',
        name: 'OpenRocket CAD & Trajectory Simulation',
        description: 'Free open-source 6-DOF rocket stability simulator for high school aerospace engineers.',
        badge: 'CAD & Simulation',
        externalUrl: 'https://openrocket.info/',
        keyConcepts: ['Center of Pressure (CP)', 'Center of Gravity (CG)', 'Caliber Stability Rule (>1.5)', 'Motor Thrust Curves'],
      },
    ],
    keyFormulas: [
      {
        name: 'Static Rocket Stability Margin',
        formula: 'Margin = (CP_location - CG_location) / Body_Diameter',
        explanation: 'Must exceed 1.0 to 2.0 calibers for aerodynamically stable flight without weathercocking.',
      },
      {
        name: 'Parachute Descent Rate',
        formula: 'v_descent = √( (2 · m · g) / (ρ · S · Cd) )',
        explanation: 'Determines terminal touchdown velocity to protect scientific payloads upon recovery.',
      },
      {
        name: 'Satellite Orbital Decay Rate',
        formula: 'da/dt ≈ - (2π · Cd · A · ρ · a²) / m',
        explanation: 'Governs low Earth orbit orbital decay rate for CubeSats due to upper atmospheric drag.',
      },
    ],
    featuredGuide: {
      title: 'The American Rocketry Challenge (TARC) Handbook',
      publisher: 'Aerospace Industries Association (AIA)',
      url: 'https://rocketcontest.org/',
      summary:
        'Official rules, aerospace safety codes, motor specifications, and engineering team workbook for nationwide competition.',
    },
  },
];

export function getTopicBySlug(slug: string): TopicDefinition | undefined {
  return SPACE_TOPICS.find((t) => t.slug === slug);
}
