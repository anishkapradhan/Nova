import { RemoteSensingTopic } from '@/types/remote-sensing';

export const REMOTE_SENSING_TOPIC: RemoteSensingTopic = {
  slug: 'remote-sensing',
  title: 'Remote Sensing & Earth Observation',
  subtitle: 'Electromagnetic Radiation Physics, Satellite Fleets & Spectral Indices (NDVI)',
  badge: 'Science Olympiad Division C • Earth Observation',
  division: 'Science Olympiad Division C',
  freshmanSummary:
    'A complete beginner’s guide to looking at Earth from space. Learn how satellite sensors detect invisible wavelengths of light, measure plant health using NDVI, pierce through cloud cover with microwave radar, and monitor global climate change without touching the ground.',
  diagram: {
    title: 'Spectral Reflectance Signatures & NDVI Band Ratios',
    caption:
      'Comparison of spectral reflectance across visible to shortwave-infrared wavelengths for healthy green vegetation, bare dry soil, and clear open water, highlighting the "Red Edge" jump utilized in NDVI.',
    laymanExplanation:
      'Healthy plants absorb red light for energy but reflect near-infrared like a mirror. Water absorbs nearly all infrared light and appears dark, while dry soil reflects evenly across visible and infrared spectrums.',
  },
  sections: [
    {
      id: 'em-radiation-physics',
      title: 'Electromagnetic Radiation & Blackbody Radiation Laws',
      subheading: 'How Heat Becomes Light and How Satellites Measure Temperature from Orbit',
      laymanExplanation:
        'Remote sensing begins with light. Everything in the universe with a temperature above absolute zero (-273.15°C or 0 Kelvin) constantly radiates energy in the form of electromagnetic waves. Hot objects (like our Sun at ~5,800 K) radiate extremely energetic, short wavelengths—mostly visible light. Cooler objects (like Earth’s surface at ~288 K) radiate longer, lower-energy wavelengths called thermal infrared. Satellite cameras don’t just take snapshots of visible colors; they carry specialized thermal detectors that measure this emitted heat to calculate sea-surface temperatures, volcanic lava flows, and urban heat islands.',
      realWorldAnalogy:
        'Think of an electric stovetop burner. When it is turned off or warm, you cannot see any light, but if you hold your hand nearby, your skin feels the invisible heat (thermal infrared). When you turn the burner to maximum heat, it begins glowing dull red, and if it got hotter like the Sun, it would glow bright white. The hotter something gets, the shorter and brighter its light waves become.',
      keyTerms: [
        {
          term: 'Blackbody',
          definition:
            'An idealized physical object that absorbs all incident electromagnetic radiation regardless of frequency or angle, and emits radiation at the maximum possible rate for any given temperature.',
          analogy: 'A perfect thermal radiator, like an iron furnace cavity with a tiny pinhole.',
        },
        {
          term: 'Wien’s Displacement Law',
          definition:
            'A physical law stating that the peak emission wavelength (λ_max) of a blackbody is inversely proportional to its absolute temperature: λ_max = b / T, where b ≈ 2.898 × 10⁻³ m·K.',
          analogy:
            'Hotter objects shift ("displace") their color towards shorter wavelengths (blue/UV), while cooler objects emit longer wavelengths (red/infrared).',
        },
        {
          term: 'Stefan-Boltzmann Law',
          definition:
            'States that the total radiant energy emitted per unit surface area of a blackbody is directly proportional to the fourth power of its thermodynamic temperature: E = σT⁴, where σ ≈ 5.670 × 10⁻⁸ W/(m²·K⁴).',
          analogy:
            'Doubling an object’s absolute temperature multiplies its radiated energy output by 16 times (2⁴ = 16)!',
        },
        {
          term: 'Atmospheric Transmission Windows',
          definition:
            'Specific wavelength intervals in the electromagnetic spectrum where gases in Earth’s atmosphere (like water vapor, CO₂, and ozone) do not absorb incoming or outgoing radiation, allowing satellite sensors to view the surface clearly.',
          analogy:
            'Clear window panes in a house that let visible light through while walls block the rest.',
        },
        {
          term: 'Rayleigh Scattering',
          definition:
            'Scattering of electromagnetic radiation by particles much smaller than the wavelength of light (such as nitrogen and oxygen molecules). Scattering intensity is inversely proportional to the fourth power of wavelength (1/λ⁴), explaining why the daytime sky appears blue and sunsets look red.',
        },
        {
          term: 'Mie Scattering',
          definition:
            'Scattering caused by particles roughly equal in size to the wavelength of light (such as dust, pollen, smoke, and water droplets). Affects longer wavelengths more than Rayleigh scattering and causes the whitish haze in overcast skies.',
        },
      ],
      mathBreakdown: {
        name: 'Wien’s Displacement Law Calculation',
        formula: 'λ_max = 2898 / T  (where T is in Kelvin, λ_max in micrometers μm)',
        variables: [
          { symbol: 'λ_max', meaning: 'Peak emission wavelength', units: 'micrometers (μm)' },
          { symbol: 'T', meaning: 'Absolute thermodynamic temperature', units: 'Kelvin (K)' },
          { symbol: 'b', meaning: 'Wien displacement constant', units: '2898 μm·K' },
        ],
        sampleProblem:
          'Calculate the peak emission wavelength of Earth’s surface assuming an average temperature of 15°C (288.15 K), and compare it to a forest wildfire burning at 700°C (973.15 K).',
        stepByStepSolution: [
          'Step 1: Convert temperature to Kelvin: T_earth = 288 K, T_fire = 973 K.',
          'Step 2: Apply Wien’s formula for Earth: λ_max(Earth) = 2898 / 288 ≈ 10.06 μm (Thermal Infrared).',
          'Step 3: Apply Wien’s formula for Wildfire: λ_max(Fire) = 2898 / 973 ≈ 2.98 μm (Shortwave/Mid-Infrared).',
          'Conclusion: Earth naturally glows in thermal infrared (10 μm), while raging wildfires peak in shortwave infrared (3 μm), allowing satellites like Landsat and GOES to detect forest fires through smoke using shortwave infrared bands!',
        ],
      },
    },
    {
      id: 'orbits-and-resolutions',
      title: 'Satellite Orbits & The Four Resolutions Matrix',
      subheading: 'Where Satellites Fly and the Fundamental Tradeoffs in Remote Sensing Sensors',
      laymanExplanation:
        'To observe Earth effectively, engineers must decide where to put the satellite and what kind of camera to build. There is no single "perfect" satellite. If you fly very high in Geostationary Orbit (~35,786 km above the equator), your satellite orbits at the exact same rotational speed as Earth, allowing you to watch storms develop over an entire hemisphere 24 hours a day, but your photos will be relatively blurry. If you fly low in a Sun-Synchronous Polar Orbit (~700 km altitude), you get crisp, high-resolution snapshots of city streets, but you can only revisit that exact spot once every 1 to 2 weeks.',
      realWorldAnalogy:
        'Imagine security cameras at a football stadium. A wide-angle camera mounted on the Goodyear Blimp high overhead sees the entire stadium at once and never leaves, but cannot read player jersey numbers. Meanwhile, a cameraman walking along the sidelines gets razor-sharp close-ups of players, but can only look at one yard of the field at a time.',
      keyTerms: [
        {
          term: 'Sun-Synchronous Orbit (SSO)',
          definition:
            'A near-polar low Earth orbit (~700–800 km altitude) inclined at approximately 98° that precesses at the same rate Earth orbits the Sun. The satellite crosses the equator at the exact same local solar time (e.g. 10:30 AM) on every pass, providing consistent solar illumination angles and shadow lengths for year-over-year comparison.',
          analogy:
            'Scheduling your landscape photos every day at precisely 10:30 AM so shadows don’t trick your eyes into thinking hills moved.',
        },
        {
          term: 'Geostationary Orbit (GEO)',
          definition:
            'A circular prograde orbit at an altitude of approximately 35,786 km directly above Earth’s equator with an orbital period of exactly 24 sidereal hours. The satellite remains locked above a single geographic point on Earth.',
          analogy: 'A celestial flagpole planted permanently over the Americas for continuous weather tracking.',
        },
        {
          term: 'Spatial Resolution',
          definition:
            'The physical ground dimensions represented by a single pixel in an image (Ground Sample Distance, GSD). For example, Landsat 8/9 has a 30-meter spatial resolution, meaning one pixel covers a 30m × 30m square on the ground.',
        },
        {
          term: 'Spectral Resolution',
          definition:
            'The number and narrowness of individual electromagnetic wavelength bands a sensor can measure. Multispectral sensors capture 4 to 15 broad bands; hyperspectral sensors capture hundreds of contiguous, ultra-narrow bands.',
        },
        {
          term: 'Radiometric Resolution',
          definition:
            'The sensitivity of a sensor to minute differences in radiant energy, measured in bit depth. An 8-bit sensor distinguishes 256 gray levels (2⁸), while a modern 14-bit sensor distinguishes 16,384 distinct brightness levels (2¹⁴).',
        },
        {
          term: 'Temporal Resolution',
          definition:
            'The revisit time—how often a satellite returns to image the exact same geographic footprint on Earth (e.g., Landsat is 16 days, Sentinel-2 is 5 days with constellation pair, and GOES weather satellites are 5 to 10 minutes).',
        },
      ],
    },
    {
      id: 'satellite-fleets-active-passive',
      title: 'Global Satellite Fleets: Active vs. Passive Sensors',
      subheading: 'Landsat, Sentinel, MODIS, Radar (SAR) & Photon-Counting LiDAR',
      laymanExplanation:
        'Remote sensing instruments are divided into two fundamental families: Passive and Active. Passive sensors are like standard digital cameras; they do not emit any energy of their own. They simply record sunlight reflected off Earth’s surface or natural heat radiated upward. Active sensors, on the other hand, carry their own built-in light or energy source! Synthetic Aperture Radar (SAR) pulses microwave radiation toward Earth and times the return echo, enabling it to map terrain through dense rain clouds and in total midnight darkness. LiDAR (Light Detection and Ranging) fires laser pulses to measure tree canopy height and ice sheet thickness down to the millimeter.',
      realWorldAnalogy:
        'Taking a picture outside during the day using natural sunlight is passive sensing. Walking into a dark cave with a flashlight and laser tape-measure is active sensing.',
      keyTerms: [
        {
          term: 'Passive Remote Sensing',
          definition:
            'Systems that measure naturally occurring radiation reflected from the Sun or emitted thermal radiation from Earth (e.g., Landsat OLI/TIRS, Sentinel-2 MSI, Terra/Aqua MODIS).',
        },
        {
          term: 'Active Remote Sensing',
          definition:
            'Systems that transmit their own electromagnetic pulses toward Earth and detect the backscattered signal (e.g., Synthetic Aperture Radar SAR, radar altimeters, LiDAR).',
        },
        {
          term: 'USGS/NASA Landsat 8 & 9',
          definition:
            'The gold standard of Earth observation since 1972. Landsat 8 and 9 carry two instruments: the Operational Land Imager (OLI, 9 spectral bands at 30m resolution, plus a 15m panchromatic band) and the Thermal Infrared Sensor (TIRS, 2 thermal bands at 100m resampled to 30m). Combined revisit time is 8 days.',
        },
        {
          term: 'ESA Copernicus Sentinel-2',
          definition:
            'European Space Agency constellation of twin satellites (Sentinel-2A and 2B) carrying the MultiSpectral Instrument (MSI) with 13 spectral bands, featuring 10-meter spatial resolution in visible and near-infrared bands, with a 5-day global revisit rate.',
        },
        {
          term: 'NASA Terra & Aqua MODIS',
          definition:
            'Moderate Resolution Imaging Spectroradiometer with 36 spectral bands spanning visible to thermal infrared. Operates with 250m to 1km resolution, covering the entire Earth every 1 to 2 days for global ocean chlorophyll and atmospheric aerosol monitoring.',
        },
        {
          term: 'Synthetic Aperture Radar (SAR)',
          definition:
            'An active microwave radar technique that utilizes the forward motion of the satellite platform to synthetically simulate an extremely large physical antenna aperture. Microwave frequencies (such as C-band or L-band) easily penetrate cloud cover, fog, and rain.',
        },
        {
          term: 'ICESat-2 (ATLAS LiDAR)',
          definition:
            'NASA’s Ice, Cloud, and land Elevation Satellite-2, carrying the Advanced Topographic Laser Altimeter System (ATLAS). Fires 10,000 green laser pulses (532 nm) per second to time individual photon flight paths, measuring ice sheet height changes to within 4 millimeters.',
        },
      ],
    },
    {
      id: 'spectral-indices-ndvi',
      title: 'Digital Image Interpretation, False Color & Spectral Indices (NDVI)',
      subheading: 'Why Healthy Leaves Glow in Infrared and How Math Reveals Crop Health',
      laymanExplanation:
        'To human eyes, a forest just looks green. But if you look through an infrared sensor, healthy plants reflect an astonishing 50% of near-infrared light! Inside a plant leaf, green chlorophyll absorbs red and blue light to power photosynthesis. Meanwhile, the spongy internal cell structure (the mesophyll) acts like a kaleidoscope of tiny mirrors, scattering near-infrared light right back out to avoid overheating. When a plant gets sick, dehydrated, or dies, the spongy cells collapse, and infrared reflection plummets. By subtracting red light from infrared light and dividing by their sum, scientists calculate the Normalized Difference Vegetation Index (NDVI), a single number between -1.0 and +1.0 that tells farmers exactly which crops are thriving and which need water.',
      realWorldAnalogy:
        'Imagine looking at a parking lot full of cars on a freezing morning. Looking with your eyes, they all look normal. But looking through thermal goggles, the cars whose engines are running glow brilliant orange, while the turned-off cars look dark blue. False-color infrared imagery does the exact same thing for plant health.',
      keyTerms: [
        {
          term: 'The "Red Edge"',
          definition:
            'The steep spectral reflectance jump in vegetation between 0.68 μm (intense chlorophyll absorption in the red band) and 0.73 μm (massive internal cellular scattering in the near-infrared band).',
        },
        {
          term: 'NDVI (Normalized Difference Vegetation Index)',
          definition:
            'Formula: NDVI = (NIR - Red) / (NIR + Red). Ranges from -1.0 to +1.0. Dense healthy forest typically yields values between +0.6 and +0.8; grassland/crops between +0.2 and +0.5; bare rock and sand near 0.0; and water bodies negative values (-0.1 to -0.5).',
        },
        {
          term: 'Standard False-Color Composite (CIR)',
          definition:
            'Color-Infrared composite where Near-Infrared is mapped to the Red display gun, Red is mapped to Green, and Green is mapped to Blue. In this view, healthy green vegetation appears bright red/crimson, urban concrete appears cyan/gray, and clear water appears jet black.',
        },
        {
          term: 'NDWI (Normalized Difference Water Index)',
          definition:
            'Formula: NDWI = (Green - NIR) / (Green + NIR). Enhances open water bodies while eliminating soil and terrestrial vegetation features.',
        },
        {
          term: 'NBR (Normalized Burn Ratio)',
          definition:
            'Formula: NBR = (NIR - SWIR) / (NIR + SWIR). Utilizes the fact that healthy vegetation reflects NIR and absorbs SWIR, whereas fire scars and bare soil reflect SWIR and absorb NIR, enabling burn severity mapping.',
        },
      ],
      mathBreakdown: {
        name: 'Calculating NDVI Step-by-Step',
        formula: 'NDVI = (NIR - Red) / (NIR + Red)',
        variables: [
          { symbol: 'NIR', meaning: 'Near-Infrared band surface reflectance (0.0 to 1.0)', units: 'dimensionless' },
          { symbol: 'Red', meaning: 'Red band surface reflectance (0.0 to 1.0)', units: 'dimensionless' },
          { symbol: 'NDVI', meaning: 'Normalized index value', units: 'range: -1.0 to +1.0' },
        ],
        sampleProblem:
          'A Sentinel-2 pixel over an Iowa cornfield records a Near-Infrared reflectance of 0.62 and a Red reflectance of 0.08. A second pixel over a nearby muddy river records NIR = 0.02 and Red = 0.09. Calculate NDVI for both and interpret the land cover.',
        stepByStepSolution: [
          'Step 1 (Cornfield): Subtract Red from NIR: 0.62 - 0.08 = 0.54.',
          'Step 2 (Cornfield): Add NIR and Red: 0.62 + 0.08 = 0.70.',
          'Step 3 (Cornfield): Divide: NDVI = 0.54 / 0.70 = +0.771. Interpretation: Dense, highly vigorous photosynthetic crop canopy.',
          'Step 4 (River): Subtract: 0.02 - 0.09 = -0.07.',
          'Step 5 (River): Add: 0.02 + 0.09 = 0.11.',
          'Step 6 (River): Divide: NDVI = -0.07 / 0.11 = -0.636. Interpretation: Open water body (absorbs almost all NIR light).',
        ],
      },
    },
  ],
  flashcards: [
    {
      id: 'rs-fc-01',
      term: 'Wien’s Displacement Law',
      category: 'Physics & EM Law',
      front: 'What is Wien’s Displacement Law, and what does it tell remote sensing scientists about the Sun vs. Earth?',
      back: 'λ_max = b / T. It states that the peak emission wavelength of a blackbody is inversely proportional to its absolute temperature. The Sun (~5,800 K) peaks in visible light (~0.5 μm), while Earth (~288 K) peaks in thermal infrared (~10 μm).',
      tip: 'Mnemonic: Hot = Short Waves (Sun = Visible), Cool = Long Waves (Earth = Thermal IR).',
    },
    {
      id: 'rs-fc-02',
      term: 'Stefan-Boltzmann Law',
      category: 'Physics & EM Law',
      front: 'State the Stefan-Boltzmann equation and explain how radiated energy changes if temperature doubles.',
      back: 'E = σT⁴ (where σ = 5.670 × 10⁻⁸ W/m²·K⁴). Total radiant energy emitted per unit area scales with the 4th power of absolute temperature. If temperature doubles, energy increases by 2⁴ = 16 times!',
      tip: 'Remember the 4th power: small temperature increases cause huge spikes in emitted radiation.',
    },
    {
      id: 'rs-fc-03',
      term: 'Rayleigh vs. Mie Scattering',
      category: 'Physics & EM Law',
      front: 'What is the physical difference between Rayleigh Scattering and Mie Scattering?',
      back: 'Rayleigh scattering occurs when atmospheric gas molecules are much smaller than the wavelength of light (scales as 1/λ⁴; scatters blue light most, making skies blue). Mie scattering occurs when particles (dust, smoke, water droplets) are comparable in size to the wavelength, scattering all visible wavelengths fairly equally (producing gray/white haze and clouds).',
      tip: 'Rayleigh = Tiny gas molecules (Blue sky). Mie = Big droplets & pollution (White haze).',
    },
    {
      id: 'rs-fc-04',
      term: 'Atmospheric Transmission Windows',
      category: 'Physics & EM Law',
      front: 'What is an atmospheric transmission window, and why are they vital for Earth observation?',
      back: 'Regions of the electromagnetic spectrum where greenhouse gases (H₂O, CO₂, O₃) do not absorb radiation, allowing light to travel freely between Earth’s surface and satellite sensors. Key windows exist in the Visible (0.4–0.7 μm), NIR/SWIR (0.8–2.5 μm), and Thermal IR (8–14 μm).',
      tip: 'If an atmospheric window did not exist, satellites would only see the top of greenhouse gas clouds!',
    },
    {
      id: 'rs-fc-05',
      term: 'Sun-Synchronous Orbit (SSO)',
      category: 'Sensor Architecture',
      front: 'What are the defining characteristics and advantages of a Sun-Synchronous Polar Orbit?',
      back: 'Altitude: ~700–800 km, Inclination: ~98° (retrograde). Precesses eastward by ~1° per day to match Earth’s orbit around the Sun. Crosses the equator at the exact same local solar time (e.g., 10:30 AM) on every pass, providing consistent lighting and shadow conditions for change detection.',
      tip: 'Consistent sun angle = No confusing shadows when comparing images taken months apart.',
    },
    {
      id: 'rs-fc-06',
      term: 'Geostationary Orbit (GEO)',
      category: 'Sensor Architecture',
      front: 'Where is Geostationary Orbit located, and what is its primary remote sensing application?',
      back: 'Altitude: exactly 35,786 km directly above the equator. Orbital period: 24 hours. Because the satellite moves at the exact same rotational rate as Earth, it hovers over a fixed longitude. Used for real-time weather tracking (GOES-16/18, Meteosat) and hurricane monitoring.',
      tip: 'High altitude + stationary view = Low spatial resolution, but unbeatable 5-minute temporal revisit.',
    },
    {
      id: 'rs-fc-07',
      term: 'The Four Resolutions',
      category: 'Resolution',
      front: 'Name and define the four fundamental resolutions in remote sensing.',
      back: '1. Spatial: Ground area of one pixel (e.g. 10m Sentinel, 30m Landsat).\n2. Spectral: Number and width of wavelength bands measured.\n3. Radiometric: Sensitivity to brightness levels (bit depth: 8-bit = 256 vs 12-bit = 4096).\n4. Temporal: Revisit time over the same footprint (e.g. 16 days vs 5 minutes).',
      tip: 'Four dimensions of sensor capability: Space, Spectrum, Sensitivity, Time.',
    },
    {
      id: 'rs-fc-08',
      term: 'Active vs. Passive Sensors',
      category: 'Sensor Architecture',
      front: 'Contrast active vs. passive remote sensing and provide two examples of each.',
      back: 'Passive sensors record natural radiation reflected from the Sun or emitted thermal heat (Examples: Landsat 8/9 OLI, Sentinel-2 MSI). Active sensors transmit their own artificial electromagnetic radiation and record the return bounce (Examples: Synthetic Aperture Radar SAR, LiDAR ICESat-2).',
      tip: 'Passive = Camera with available light. Active = Camera with a flash or laser ranger.',
    },
    {
      id: 'rs-fc-09',
      term: 'Synthetic Aperture Radar (SAR)',
      category: 'Satellite Fleet',
      front: 'How does Synthetic Aperture Radar (SAR) work, and what is its chief operational advantage?',
      back: 'SAR transmits microwave pulses and uses the physical forward flight of the spacecraft to synthetically synthesize an antenna kilometers long. Because microwaves have long wavelengths (e.g., C-band ~5.6 cm), SAR can image the ground through dense storm clouds, smoke, and complete darkness.',
      tip: 'All-weather, 24/7 vision. Sees through clouds because microwave wavelengths are bigger than cloud droplets.',
    },
    {
      id: 'rs-fc-10',
      term: 'Landsat 8 & 9 Payload',
      category: 'Satellite Fleet',
      front: 'What two primary instruments are aboard Landsat 8 and 9, and what are their spatial resolutions?',
      back: '1. OLI (Operational Land Imager): 9 bands (Visible, NIR, SWIR, Cirrus) at 30m resolution, plus a 15m Panchromatic band.\n2. TIRS (Thermal Infrared Sensor): 2 thermal bands (10.8 μm and 12.0 μm) at 100m native resolution (resampled to 30m). Revisit: 16 days (8 days combined pair).',
      tip: 'OLI sees reflected sunlight; TIRS sees surface temperature heat.',
    },
    {
      id: 'rs-fc-11',
      term: 'Copernicus Sentinel-2',
      category: 'Satellite Fleet',
      front: 'What are the key technical specifications of ESA’s Sentinel-2 constellation?',
      back: 'Twin satellites (Sentinel-2A and 2B) carrying the MultiSpectral Instrument (MSI). Measures 13 spectral bands with spatial resolutions of 10m (Blue, Green, Red, NIR), 20m (Red Edge, SWIR), and 60m (Atmospheric). Global revisit rate is 5 days at the equator.',
      tip: 'Sentinel-2’s 10-meter bands give 9x more spatial detail per pixel than Landsat’s 30-meter pixels!',
    },
    {
      id: 'rs-fc-12',
      term: 'ICESat-2 & ATLAS LiDAR',
      category: 'Satellite Fleet',
      front: 'How does NASA’s ICESat-2 measure ice sheet elevations and tree canopies?',
      back: 'Carries the ATLAS photon-counting LiDAR instrument. Fires 10,000 laser pulses per second at 532 nm (green light). Detects individual returning photons and times their round trip at nanosecond precision, measuring surface elevation changes within 4 millimeters.',
      tip: 'Photon counting laser altimeter: tracks Antarctic melting and global biomass height.',
    },
    {
      id: 'rs-fc-13',
      term: 'The "Red Edge"',
      category: 'Spectral Index',
      front: 'What causes the "Red Edge" in healthy vegetation reflectance curves?',
      back: 'Occurs between 0.68 μm and 0.73 μm. Chlorophyll strongly absorbs red light for photosynthesis (~90% absorbed), but the spongy internal mesophyll tissue intensely scatters and reflects near-infrared light (~50% reflected) to prevent overheating. This creates an abrupt, dramatic reflectance cliff.',
      tip: 'The sharp jump between Red absorption and NIR reflection is the hallmark signature of life.',
    },
    {
      id: 'rs-fc-14',
      term: 'NDVI Formula & Range',
      category: 'Spectral Index',
      front: 'Write the formula for NDVI and describe the typical values for healthy forest, bare soil, and open water.',
      back: 'NDVI = (NIR - Red) / (NIR + Red). Ranges from -1.0 to +1.0.\n• Dense, healthy green vegetation: +0.6 to +0.85\n• Sparse vegetation/crops: +0.2 to +0.5\n• Bare rock and dry soil: 0.0 to +0.15\n• Clear water and snow: negative values (-0.1 to -0.5).',
      tip: 'Remember: Water absorbs NIR (negative NDVI); healthy plants bounce NIR (high positive NDVI).',
    },
    {
      id: 'rs-fc-15',
      term: 'Standard False-Color Composite (CIR)',
      category: 'Image Processing',
      front: 'In a standard False-Color Infrared (CIR) image, what bands are assigned to RGB, and how do trees appear?',
      back: 'Bands assigned:\n• Red channel = Near-Infrared (NIR)\n• Green channel = Red band\n• Blue channel = Green band\nHealthy green vegetation reflects high NIR, so it glows brilliant crimson RED. Urban areas appear cyan/gray, and deep water appears black.',
      tip: 'If trees look bright red, you are looking at a classic Color-Infrared (CIR) composite.',
    },
    {
      id: 'rs-fc-16',
      term: 'NDWI (Water Index)',
      category: 'Spectral Index',
      front: 'What is the NDWI equation, and why is Green light used instead of Red?',
      back: 'NDWI = (Green - NIR) / (Green + NIR). Clear water reflects green light slightly but absorbs virtually all near-infrared. Terrestrial vegetation reflects high NIR. This index maximizes open water delineation while eliminating land vegetation false alarms.',
      tip: 'Water loves green reflectance and swallows NIR whole.',
    },
    {
      id: 'rs-fc-17',
      term: 'Normalized Burn Ratio (NBR)',
      category: 'Spectral Index',
      front: 'State the NBR equation and explain why Shortwave Infrared (SWIR) is used for wildfire scar mapping.',
      back: 'NBR = (NIR - SWIR) / (NIR + SWIR). Healthy vegetation has high NIR and low SWIR reflection. Burned areas and charcoal have low NIR reflection and high SWIR reflection. Post-fire differencing (dNBR = NBR_pre - NBR_post) reveals burn severity.',
      tip: 'SWIR reflects strongly off dry ash, scorched earth, and dead wood.',
    },
    {
      id: 'rs-fc-18',
      term: 'Hyperspectral vs. Multispectral',
      category: 'Resolution',
      front: 'What is the fundamental difference between a multispectral sensor and a hyperspectral sensor?',
      back: 'Multispectral sensors (like Landsat with 11 bands or Sentinel-2 with 13 bands) measure wide, discrete spectral bands. Hyperspectral sensors (like NASA’s EMIT or AVIRIS) record hundreds of narrow, continuous, contiguous wavelength channels (e.g., 200+ bands), producing a continuous reflectance curve capable of identifying specific mineral chemical formulas and tree species.',
      tip: 'Multispectral is like a 12-color crayon box; hyperspectral is a continuous rainbow spectrometer.',
    },
  ],
  quiz: [
    {
      id: 1,
      question:
        'According to Wien’s Displacement Law (λ_max = b / T), what happens to the peak emission wavelength of an object as its temperature increases?',
      options: [
        'The peak emission shifts to longer wavelengths (towards thermal infrared)',
        'The peak emission shifts to shorter wavelengths (towards visible and ultraviolet)',
        'The peak emission wavelength remains constant while only total amplitude increases',
        'The peak emission fluctuates randomly based on atmospheric pressure',
      ],
      correctIndex: 1,
      explanation:
        'Wien’s Law states that peak wavelength is inversely proportional to temperature (λ_max = 2898 / T). As temperature rises, peak wavelength decreases to shorter, higher-energy wavelengths (such as blue and UV).',
    },
    {
      id: 2,
      question:
        'If the absolute temperature of Earth’s surface were to double from 300 K to 600 K, by what factor would the total radiated energy increase according to the Stefan-Boltzmann Law?',
      options: [
        '2 times (2¹)',
        '4 times (2²)',
        '8 times (2³)',
        '16 times (2⁴)',
      ],
      correctIndex: 3,
      explanation:
        'The Stefan-Boltzmann Law states that E = σT⁴. When temperature doubles (2×), the total radiated energy increases by 2⁴ = 16 times.',
    },
    {
      id: 3,
      question:
        'Why does Earth’s clear daytime sky appear blue to human observers and visible satellite sensors?',
      options: [
        'Rayleigh scattering by atmospheric gas molecules scatters shorter wavelengths (blue light) far more strongly than red light',
        'Mie scattering by clouds preferentially reflects blue light down to Earth',
        'Ozone in the stratosphere absorbs all red light, letting only blue pass through',
        'Earth’s ocean reflects blue light upward into the atmosphere like a mirror',
      ],
      correctIndex: 0,
      explanation:
        'Rayleigh scattering occurs when particles are much smaller than the wavelength of light. Scattering intensity is proportional to 1/λ⁴, meaning short blue wavelengths (~0.45 μm) are scattered roughly 10 times more effectively than red wavelengths (~0.7 μm).',
    },
    {
      id: 4,
      question:
        'Which atmospheric gas is primarily responsible for absorbing incoming ultraviolet (UV) radiation between 0.2 and 0.3 μm?',
      options: [
        'Water vapor (H₂O)',
        'Carbon dioxide (CO₂)',
        'Stratospheric ozone (O₃)',
        'Molecular nitrogen (N₂)',
      ],
      correctIndex: 2,
      explanation:
        'Stratospheric ozone (O₃) absorbs almost 100% of lethal ultraviolet-C and most ultraviolet-B radiation, creating an atmospheric absorption band between 0.2 and 0.3 μm.',
    },
    {
      id: 5,
      question:
        'What is the defining orbital characteristic of a Sun-Synchronous Orbit (SSO) used by Landsat and Sentinel-2?',
      options: [
        'The satellite stays fixed over one point on the equator at an altitude of 35,786 km',
        'The satellite orbits in the retrograde direction so that it crosses the equator at the same local solar time on every pass',
        'The satellite passes directly through the center of the Sun’s corona during each revolution',
        'The satellite’s orbit matches the Moon’s monthly orbital period to prevent lunar eclipses',
      ],
      correctIndex: 1,
      explanation:
        'A Sun-Synchronous Orbit precesses ~1° eastward per day to match Earth’s orbit around the Sun, crossing the equator at the exact same local solar time (e.g. 10:30 AM) on every pass for uniform shadow angles.',
    },
    {
      id: 6,
      question:
        'At what approximate altitude above Earth’s equator must a weather satellite (such as GOES-16) be placed to achieve a Geostationary Orbit (GEO)?',
      options: [
        '705 km',
        '2,000 km',
        '35,786 km',
        '384,400 km',
      ],
      correctIndex: 2,
      explanation:
        'Geostationary orbit is located at approximately 35,786 km (about 22,236 miles) above Earth’s equator. At this precise distance, the orbital period is exactly 24 sidereal hours, matching Earth’s rotation.',
    },
    {
      id: 7,
      question:
        'A satellite sensor that can distinguish 4,096 distinct brightness levels in each spectral band has what radiometric resolution?',
      options: [
        '8-bit (2⁸)',
        '10-bit (2¹⁰)',
        '12-bit (2¹²)',
        '16-bit (2¹⁶)',
      ],
      correctIndex: 2,
      explanation:
        'Bit depth dictates radiometric resolution: 2¹² = 4,096 discrete numerical brightness values (DN). Landsat 8/9 OLI records in 12-bit (scaled to 16-bit).',
    },
    {
      id: 8,
      question:
        'Which of the following describes an ACTIVE remote sensing instrument rather than a passive instrument?',
      options: [
        'Landsat 9 Operational Land Imager (OLI)',
        'Copernicus Sentinel-2 MultiSpectral Instrument (MSI)',
        'Synthetic Aperture Radar (SAR) on Sentinel-1',
        'Terra MODIS Spectroradiometer',
      ],
      correctIndex: 2,
      explanation:
        'Synthetic Aperture Radar (SAR) is an active sensor: it emits its own microwave radio pulses and measures the backscattered echo, operating independently of solar illumination.',
    },
    {
      id: 9,
      question:
        'What enables Synthetic Aperture Radar (SAR) to image the ground through dense overcast clouds, dust, and rain?',
      options: [
        'Microwaves have long wavelengths (several centimeters) that do not scatter off microscopic cloud water droplets',
        'SAR uses ultraviolet lasers that burn holes through cloud cover',
        'SAR sensors fly underneath the clouds at an altitude of 500 meters',
        'The satellite takes thermal photographs of the cloud tops and subtracts them mathematically',
      ],
      correctIndex: 0,
      explanation:
        'Microwave wavelengths (e.g. C-band ~5.6 cm, L-band ~24 cm) are vastly larger than cloud droplets (~10-20 μm). Rayleigh and Mie scattering do not affect them, allowing radar waves to penetrate clouds freely.',
    },
    {
      id: 10,
      question:
        'What is the native spatial resolution of the visible and near-infrared (VNIR) bands on Landsat 8 and 9’s Operational Land Imager (OLI)?',
      options: [
        '10 meters',
        '15 meters',
        '30 meters',
        '250 meters',
      ],
      correctIndex: 2,
      explanation:
        'Landsat 8 and 9 OLI multispectral bands (Bands 1–7 and 9) have a 30-meter ground sample distance. The panchromatic Band 8 has a 15-meter resolution.',
    },
    {
      id: 11,
      question:
        'What is the highest spatial resolution available on the European Space Agency’s Copernicus Sentinel-2 MSI sensor?',
      options: [
        '1 meter',
        '10 meters (Bands 2, 3, 4, and 8)',
        '30 meters (All bands)',
        '100 meters',
      ],
      correctIndex: 1,
      explanation:
        'Sentinel-2 provides 10-meter spatial resolution in its 4 primary bands: Blue (Band 2), Green (Band 3), Red (Band 4), and Broad NIR (Band 8).',
    },
    {
      id: 12,
      question:
        'NASA’s ICESat-2 satellite uses what active laser measurement method to map polar ice sheet changes?',
      options: [
        'Continuous-wave CO₂ laser heating',
        'Micro-pulse photon-counting LiDAR (ATLAS) measuring individual photon travel times at 532 nm',
        'Interferometric X-band radar dish',
        'Passive ultraviolet fluorescence imaging',
      ],
      correctIndex: 1,
      explanation:
        'The ATLAS instrument on ICESat-2 fires 10,000 laser pulses per second at 532 nm (green) and times the return flight path of individual photons to measure ice elevation to sub-centimeter accuracy.',
    },
    {
      id: 13,
      question:
        'What physiological feature of plant leaves is primarily responsible for the massive reflection of Near-Infrared (NIR) light?',
      options: [
        'Green chlorophyll pigments inside the chloroplasts',
        'Multiple internal scattering of light within the spongy mesophyll cell structure',
        'Carotenoid pigments that absorb blue light',
        'Waxy cuticle layer on the outer epidermal surface',
      ],
      correctIndex: 1,
      explanation:
        'While chlorophyll absorbs visible blue and red light for photosynthesis, the refractive index differences between hydrated cell walls and intercellular air spaces in the spongy mesophyll scatter up to 50% of NIR light out of the leaf.',
    },
    {
      id: 14,
      question:
        'What is the formula for the Normalized Difference Vegetation Index (NDVI)?',
      options: [
        'NDVI = (Red - NIR) / (Red + NIR)',
        'NDVI = (NIR - Red) / (NIR + Red)',
        'NDVI = (Green - NIR) / (Green + NIR)',
        'NDVI = (NIR - SWIR) / (NIR + SWIR)',
      ],
      correctIndex: 1,
      explanation:
        'NDVI = (NIR - Red) / (NIR + Red). By subtracting the absorbed Red band from the reflected NIR band and normalizing by their sum, it highlights active photosynthesizing vegetation.',
    },
    {
      id: 15,
      question:
        'A pixel over a dense tropical rainforest records a Red reflectance of 0.05 and a Near-Infrared (NIR) reflectance of 0.65. What is the calculated NDVI?',
      options: [
        '+0.50',
        '+0.60',
        '+0.857',
        '+0.950',
      ],
      correctIndex: 2,
      explanation:
        'NDVI = (0.65 - 0.05) / (0.65 + 0.05) = 0.60 / 0.70 ≈ +0.857. This very high positive value is indicative of a dense, healthy rainforest canopy.',
    },
    {
      id: 16,
      question:
        'In a standard Color-Infrared (CIR) false-color composite image, what color does healthy, vigorously growing vegetation appear?',
      options: [
        'Bright emerald green',
        'Brilliant crimson red',
        'Deep navy blue',
        'Golden yellow',
      ],
      correctIndex: 1,
      explanation:
        'In a standard CIR composite (NIR -> Red gun, Red -> Green gun, Green -> Blue gun), the high NIR reflectance of vegetation is displayed through the red color channel, making healthy vegetation appear vivid bright red.',
    },
    {
      id: 17,
      question:
        'What mathematical value would you expect for the NDVI of a deep, clear freshwater lake on a sunny day?',
      options: [
        'High positive value (+0.7 to +0.9)',
        'Moderate positive value (+0.3 to +0.5)',
        'Zero exactly (0.00)',
        'Negative value (-0.2 to -0.6)',
      ],
      correctIndex: 3,
      explanation:
        'Clear open water absorbs virtually 100% of Near-Infrared radiation (NIR ≈ 0.01), while reflecting a tiny fraction of red light (Red ≈ 0.05). This results in a numerator that is negative: (0.01 - 0.05) / (0.01 + 0.05) = -0.04 / 0.06 = -0.67.',
    },
    {
      id: 18,
      question:
        'Which spectral index uses Near-Infrared and Shortwave-Infrared (SWIR) to map wildfire burn scars and forest fire severity?',
      options: [
        'NDVI (Normalized Difference Vegetation Index)',
        'NDWI (Normalized Difference Water Index)',
        'NBR (Normalized Burn Ratio)',
        'EVI (Enhanced Vegetation Index)',
      ],
      correctIndex: 2,
      explanation:
        'The Normalized Burn Ratio: NBR = (NIR - SWIR) / (NIR + SWIR). Burned areas reflect strongly in SWIR and have low NIR reflectance, creating a stark contrast against unburned vegetation.',
    },
    {
      id: 19,
      question:
        'How does a hyperspectral sensor (such as NASA’s EMIT) differ from a multispectral sensor (such as Landsat 9)?',
      options: [
        'Hyperspectral sensors only operate at night using infrared headlights',
        'Hyperspectral sensors measure hundreds of contiguous, narrow spectral bands to extract laboratory-quality absorption spectra',
        'Hyperspectral sensors have no spatial resolution and can only measure one entire continent at a time',
        'Hyperspectral sensors only detect radio waves below 1 MHz',
      ],
      correctIndex: 1,
      explanation:
        'Hyperspectral instruments collect continuous spectra across hundreds of narrow bands (~5-10 nm bandwidths), enabling specific chemical and mineral diagnostic identification that broad multispectral bands cannot resolve.',
    },
    {
      id: 20,
      question:
        'If an Earth-observing satellite has an 8-day revisit period and a 30m pixel size, but a disaster response team needs an image within 1 hour, what sensor tradeoff must be made?',
      options: [
        'Use an active LiDAR laser to scan the entire continent in 1 millisecond',
        'Rely on a geostationary weather satellite with high temporal resolution (minutes) at the cost of coarser spatial resolution (500m-2km)',
        'Decrease the satellite’s orbital speed so it stays over the disaster zone permanently',
        'Convert the satellite from Sun-synchronous to elliptical lunar transfer orbit',
      ],
      correctIndex: 1,
      explanation:
        'Remote sensing always involves the four-resolutions tradeoff: geostationary satellites offer rapid temporal revisit (every 5-10 minutes) suitable for rapid disaster tracking, but cannot provide 30-meter spatial detail due to their 35,786 km distance.',
    },
  ],
};
