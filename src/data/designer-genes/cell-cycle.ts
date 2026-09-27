import { DesignerGenesTopic } from '@/types/designer-genes';

export const cellCycleTopic: DesignerGenesTopic = {
  slug: 'cell-cycle',
  topicNumber: 2,
  title: 'Cell Cycle, Mitosis & Meiosis',
  subtitle: 'Cellular Clock, Cyclin-CDK Checkpoints, Mitotic Division & Meiotic Reduction',
  badge: 'Topic 02 • Cellular Division',
  accentColor: 'purple',
  sourceDeck: 'Cell cycle, mitosis, meiosis 26_27 (1).pptx',
  freshmanSummary:
    'Every multicellular organism starts from a single fertilized egg that divides trillions of times. In this unit, high school freshmen explore how eukaryotic cells duplicate their contents through Interphase, strictly monitor their DNA integrity at three critical molecular checkpoints, divide identical somatic cells via Mitosis, and shuffle genetic traits into unique haploid gametes through Meiosis and crossing over.',
  diagram: {
    type: 'cell-cycle-clock',
    title: 'The Eukaryotic Cell Cycle Clock & Checkpoints',
    caption:
      'The continuous 24-hour cycle of cell life: Interphase (G1, S, G2) preparing and duplicating DNA, checked by Cyclin-CDKs at G1/S, G2/M, and Spindle checkpoints, culminating in Mitosis and Cytokinesis.',
    laymanExplanation:
      'Imagine the cell cycle as an amusement park rollercoaster with strict safety gates. During the climb (Interphase: G1, S, G2), the car gets loaded, fueled, and inspected. Before each giant drop or loop, safety inspectors (Cyclin-CDK complexes and p53) check your seatbelt: G1/S asks "Is the cell big enough and DNA healthy?", G2/M asks "Did DNA replicate completely with zero errors?", and the M Spindle gate asks "Are all chromosomes tethered to safety ropes before we pull them apart?"!',
  },
  sections: [
    {
      id: 'interphase-and-checkpoints',
      title: 'The Eukaryotic Cell Cycle & Molecular Checkpoints',
      subheading: 'G0, G1, S, G2, Cyclin-CDK complexes, and the p53 tumor suppressor',
      laymanExplanation:
        'A cell spends roughly 90% of its life in Interphase, which is divided into three functional stages: G1 (First Gap: rapid cell growth and synthesis of proteins and organelles), S (Synthesis: complete replication of the nuclear genome), and G2 (Second Gap: final preparation and synthesis of mitotic spindle proteins). Mature, non-dividing cells (like adult neurons or heart muscle cells) exit the cycle into a resting, non-dividing state called G0. Progression through the cycle is driven by Cyclin proteins binding to Cyclin-Dependent Kinases (CDKs) to phosphorylate target proteins.',
      realWorldAnalogy:
        'Think of CDKs as an ignition key and Cyclins as the driver’s foot on the gas pedal. The CDK engine cannot run by itself; it requires a specific Cyclin level to accumulate before turning the ignition switch. Meanwhile, the famous tumor suppressor protein p53 is the emergency brake! If DNA is damaged by UV rays or chemicals, p53 slams on the brakes (arresting the cell cycle in G1) to allow repair enzymes to fix the damage. If the damage is beyond repair, p53 orders cellular suicide (apoptosis) to prevent cancer.',
      keyTerms: [
        {
          term: 'Interphase (G1, S, G2)',
          definition:
            'The prolonged preparatory phase between cell divisions. G1 = growth and metabolic activity; S = DNA replication; G2 = final mitotic growth and spindle synthesis.',
        },
        {
          term: 'G0 Quiescence',
          definition:
            'A reversible or terminal non-dividing state entered from G1 by cells that do not receive growth factors (e.g., mature neurons, skeletal muscle).',
        },
        {
          term: 'Cyclins & CDKs',
          definition:
            'Regulatory protein pairs. Cyclin levels fluctuate rhythmically throughout the cycle, activating constant-concentration Cyclin-Dependent Kinases to drive phase transitions.',
        },
        {
          term: 'p53 ("Guardian of the Genome")',
          definition:
            'A crucial tumor suppressor transcription factor that halts the cell cycle at the G1/S checkpoint in response to DNA damage and triggers apoptosis if damage is irreparable.',
        },
      ],
    },
    {
      id: 'mitosis-somatic-division',
      title: 'Mitosis: Perfect Somatic Cloning',
      subheading: 'Prophase, Prometaphase, Metaphase, Anaphase, Telophase, and Cytokinesis',
      laymanExplanation:
        'Mitosis is the nuclear division process used for growth, tissue repair, and asexual reproduction in multicellular organisms. One diploid parent cell (2n = 46 in humans) produces two genetically identical diploid daughter cells (2n = 46). Mitosis proceeds through five continuous stages: Prophase (chromatin condenses into visible chromosomes), Prometaphase (nuclear envelope fragments and spindle fibers attach to kinetochores), Metaphase (chromosomes line up single-file along the metaphase plate), Anaphase (sister chromatids are pulled apart to opposite poles), and Telophase (nuclear envelopes reform around separated nuclei). Cytokinesis physically pinches the cytoplasm into two cells.',
      realWorldAnalogy:
        'Imagine you have 46 pairs of matching socks mixed in a laundry hamper. Before moving to a new house, you bundle each matching pair together with a rubber band (sister chromatids held by a centromere). You line up all 46 bundled pairs along the center of the living room (Metaphase plate). On the count of three, two movers each grab one sock from every bundle and pull them to opposite walls (Anaphase). Now both rooms have an exact, complete set of 46 individual socks!',
      keyTerms: [
        {
          term: 'Sister Chromatids & Centromere',
          definition:
            'Identical copies of a chromosome produced during S phase, conjoined at a constricted DNA region called the centromere by cohesin proteins.',
        },
        {
          term: 'Kinetochore',
          definition:
            'A specialized disc-shaped protein complex assembled on each centromere where mitotic spindle microtubules attach to maneuver chromosomes.',
        },
        {
          term: 'Metaphase Plate',
          definition:
            'The imaginary equatorial plane midway between the two spindle poles where chromosomes align during metaphase.',
        },
        {
          term: 'Cytokinesis',
          definition:
            'The physical division of cytoplasm following mitosis. Animal cells pinch inward using an actin-myosin cleavage furrow; plant cells construct a rigid cell plate from Golgi vesicles.',
        },
      ],
    },
    {
      id: 'meiosis-gamete-generation',
      title: 'Meiosis: Genetic Shuffling & Gamete Reduction',
      subheading: 'Synapsis, crossing over at chiasmata, Meiosis I reduction, and Meiosis II',
      laymanExplanation:
        'Meiosis is a specialized double-division process that converts one diploid germline cell (2n) into four genetically diverse haploid gametes (n = 23 in human sperm and eggs). Meiosis I is the "reductional division": homologous chromosomes pair up gene-for-gene (synapsis) during Prophase I to form tetrads. Non-sister chromatids exchange physical segments of DNA at cross-shaped junctions called chiasmata (crossing over), creating novel recombinant combinations. In Anaphase I, homologous pairs separate (reducing chromosome number from 2n to 1n). Meiosis II is the "equational division", similar to mitosis, where sister chromatids separate.',
      realWorldAnalogy:
        'Think of having two decks of playing cards: a blue deck from your dad and a red deck from your mom. In Meiosis I, matching cards (e.g., King of Spades from Mom and King of Spades from Dad) sit side-by-side. You cut both cards in half and tape the top of Mom’s card to the bottom of Dad’s card (crossing over!). When you deal out cards into four hands, every hand gets half the total number of cards (haploid), and no two hands have the same combination of cards!',
      keyTerms: [
        {
          term: 'Homologous Chromosomes',
          definition:
            'A maternal and paternal chromosome pair that carry the same genes at identical loci, although they may possess different alleles (e.g., blue eyes vs. brown eyes).',
        },
        {
          term: 'Synapsis & Tetrads (Bivalents)',
          definition:
            'The physical zipper-like pairing of homologous chromosomes mediated by the synaptonemal complex during Prophase I of meiosis.',
        },
        {
          term: 'Crossing Over & Chiasmata',
          definition:
            'The reciprocal exchange of genetic material between non-sister chromatids during Prophase I at microscopic anatomical cross-over points called chiasmata.',
        },
        {
          term: 'Independent Assortment',
          definition:
            'The random orientation of maternal and paternal homologous chromosome pairs at the Metaphase I plate, generating $2^n$ possible gametic combinations ($2^{23} \\approx 8.4$ million in humans).',
        },
      ],
    },
    {
      id: 'nondisjunction-aneuploidy',
      title: 'Chromosomal Errors: Nondisjunction & Aneuploidy',
      subheading: 'Meiotic failures, Down syndrome, Turner syndrome, and Klinefelter syndrome',
      laymanExplanation:
        'When chromosomes fail to separate correctly during cell division, the error is called Nondisjunction. If nondisjunction occurs in Meiosis I (homologous chromosomes fail to separate), 100% of the resulting gametes will be abnormal (50% n+1, 50% n-1). If nondisjunction occurs in Meiosis II (sister chromatids fail to separate), 50% of the gametes will be normal (n), while 25% are n+1 and 25% are n-1. Fertilization of an abnormal gamete produces Aneuploidy: Monosomy (2n - 1) or Trisomy (2n + 1).',
      realWorldAnalogy:
        'Imagine splitting a 10-piece pizza evenly into two boxes of 5 slices each. If a clumsy worker accidentally pulls 6 slices into box A, box B only gets 4 slices! That is nondisjunction. If someone later adds an extra regular 5-slice delivery, customer A receives 11 slices (trisomy) and customer B receives 9 slices (monosomy). In biology, having too much or too little genetic material disrupts delicate biochemical balances.',
      keyTerms: [
        {
          term: 'Nondisjunction',
          definition:
            'The failure of homologous chromosomes to separate in Meiosis I, or sister chromatids to separate in Meiosis II or Mitosis.',
        },
        {
          term: 'Aneuploidy',
          definition:
            'An abnormal chromosome number resulting from the gain or loss of individual chromosomes (e.g., monosomy 2n-1, trisomy 2n+1).',
        },
        {
          term: 'Trisomy 21 (Down Syndrome)',
          definition:
            'The presence of three copies of chromosome 21, the most common viable autosomal trisomy in humans (karyotype: 47, XX, +21 or 47, XY, +21).',
        },
        {
          term: 'Sex Chromosome Aneuploidies',
          definition:
            'Turner Syndrome (45, X monosomy: short stature, sterile female) and Klinefelter Syndrome (47, XXY: male phenotype with extra X, reduced testosterone).',
        },
      ],
    },
  ],
  flashcards: [
    {
      id: 'cc-fc-1',
      term: 'G0 Phase',
      category: 'Definition',
      front: 'What is the G0 phase of the cell cycle?',
      back: 'A quiescent, non-dividing cellular state entered from G1. Cells in G0 perform their normal physiological functions but do not replicate DNA or divide unless stimulated by specific mitogenic signals.',
      example: 'Mature adult neurons and skeletal muscle fibers remain permanently in G0.',
    },
    {
      id: 'cc-fc-2',
      term: 'S Phase',
      category: 'Process',
      front: 'What major biological event occurs exclusively during S phase of Interphase?',
      back: 'Complete DNA replication (Synthesis). The cell duplicates its nuclear chromosomes so that each single chromosome becomes a pair of identical sister chromatids conjoined at the centromere.',
    },
    {
      id: 'cc-fc-3',
      term: 'G1/S Checkpoint (Restriction Point)',
      category: 'Concept',
      front: 'Why is the G1/S checkpoint considered the most critical "point of no return"?',
      back: 'Once a cell passes the G1/S checkpoint, it commits irreversibly to dividing. The cell checks for sufficient growth, nutrient availability, DNA damage, and external growth factor signals.',
    },
    {
      id: 'cc-fc-4',
      term: 'Cyclin-Dependent Kinases (CDKs)',
      category: 'Definition',
      front: 'How do Cyclins and CDKs interact to regulate the cell cycle?',
      back: 'CDK enzyme concentrations remain constant, but they are inactive until bound by fluctuating partner Cyclins. Once assembled, the Cyclin-CDK complex phosphorylates specific target proteins to drive cell cycle progression.',
    },
    {
      id: 'cc-fc-5',
      term: 'p53 Tumor Suppressor',
      category: 'Disease/Example',
      front: 'Why is p53 called the "Guardian of the Genome"?',
      back: 'p53 detects DNA damage and activates p21 (a CDK inhibitor) to arrest the cycle in G1 for repair. If damage cannot be repaired, p53 activates pro-apoptotic genes (like BAX) to trigger programmed cell death, preventing cancer.',
      example: 'Over 50% of all human cancers exhibit inactivating mutations in the TP53 gene.',
    },
    {
      id: 'cc-fc-6',
      term: 'Sister Chromatids vs. Homologs',
      category: 'Concept',
      front: 'What is the crucial difference between sister chromatids and homologous chromosomes?',
      back: 'Sister chromatids are 100% identical copies of one chromosome created during S phase. Homologous chromosomes are matching maternal and paternal chromosomes carrying the same genes at the same loci, but possibly different alleles.',
    },
    {
      id: 'cc-fc-7',
      term: 'Kinetochore',
      category: 'Definition',
      front: 'What is the function of the kinetochore in mitosis and meiosis?',
      back: 'A protein structure assembled on each chromosome’s centromere that anchors mitotic spindle microtubules and coordinates motor-protein transport toward opposite poles during anaphase.',
    },
    {
      id: 'cc-fc-8',
      term: 'Metaphase Alignment',
      category: 'Process',
      front: 'How do chromosomes align differently in Mitotic Metaphase vs. Meiotic Metaphase I?',
      back: 'In Mitosis, individual duplicated chromosomes line up single-file along the metaphase plate. In Meiosis I, homologous pairs line up side-by-side as tetrads (double-file).',
    },
    {
      id: 'cc-fc-9',
      term: 'Cytokinesis in Plants vs. Animals',
      category: 'Process',
      front: 'How does cytokinesis differ between animal and plant cells?',
      back: 'Animal cells form an actin-myosin contractile ring that pinches the membrane into a cleavage furrow. Plant cells cannot pinch due to their rigid cell walls; instead, Golgi-derived vesicles coalesce to build a cell plate.',
    },
    {
      id: 'cc-fc-10',
      term: 'Synapsis and Chiasmata',
      category: 'Process',
      front: 'What are synapsis and chiasmata during Prophase I of meiosis?',
      back: 'Synapsis is the pairing of homologous chromosomes via the synaptonemal complex to form a tetrad. Chiasmata are the physical X-shaped sites where non-sister chromatids cross over and swap DNA segments.',
    },
    {
      id: 'cc-fc-11',
      term: 'Reductional vs. Equational Division',
      category: 'Concept',
      front: 'Why is Meiosis I called "reductional" while Meiosis II is called "equational"?',
      back: 'Meiosis I reduces the ploidy from diploid (2n) to haploid (1n) by separating homologous chromosome pairs. Meiosis II maintains haploid ploidy (1n -> 1n) by separating sister chromatids, exactly like mitosis.',
    },
    {
      id: 'cc-fc-12',
      term: 'Independent Assortment Formula',
      category: 'Formula',
      front: 'What formula calculates the number of gamete combinations from independent assortment alone?',
      back: 'Number of combinations = 2^n, where n is the haploid chromosome number. In humans (n = 23), 2^23 = 8,388,608 unique possible chromosome combinations per gamete!',
    },
    {
      id: 'cc-fc-13',
      term: 'Nondisjunction in Meiosis I vs. II',
      category: 'Process',
      front: 'What are the gametic outcomes of nondisjunction in Meiosis I compared to Meiosis II?',
      back: 'Meiosis I nondisjunction produces 100% abnormal gametes (two n+1, two n-1). Meiosis II nondisjunction produces 50% normal gametes (n, n) and 50% abnormal gametes (one n+1, one n-1).',
    },
    {
      id: 'cc-fc-14',
      term: 'Down Syndrome Karyotype',
      category: 'Disease/Example',
      front: 'What is the genetic cause and formal karyotype for Down Syndrome?',
      back: 'Trisomy 21, caused by meiotic nondisjunction of chromosome 21 (most commonly in maternal oogenesis). Karyotype is written as 47, XX, +21 (female) or 47, XY, +21 (male).',
    },
    {
      id: 'cc-fc-15',
      term: 'Turner Syndrome',
      category: 'Disease/Example',
      front: 'What is Turner Syndrome, and what is its karyotype?',
      back: 'Monosomy X (45, X or 45, X0). It is the only viable human monosomy. Affected females typically have short stature, webbed neck, sterile streak ovaries, and lack secondary sexual characteristics.',
    },
    {
      id: 'cc-fc-16',
      term: 'Klinefelter Syndrome',
      category: 'Disease/Example',
      front: 'What is Klinefelter Syndrome, and what is its karyotype?',
      back: 'A sex chromosome aneuploidy characterized by 47, XXY in biological males. Phenotypes include tall stature, reduced testosterone, gynecomastia, and sterility.',
    },
  ],
  quiz: [
    {
      id: 1,
      question:
        'A cell that has exited the cell cycle and entered a non-dividing, metabolically active resting state is in which phase?',
      options: ['S Phase', 'G0 Phase', 'G2 Phase', 'Metaphase'],
      correctIndex: 1,
      explanation:
        'G0 is the quiescent, non-dividing state. Many specialized human cells, such as mature cortical neurons and cardiac myocytes, spend their entire lifespan in G0.',
    },
    {
      id: 2,
      question:
        'During which specific subphase of Interphase does a cell replicate its nuclear genomic DNA?',
      options: ['G1 Phase', 'S Phase', 'G2 Phase', 'Prophase'],
      correctIndex: 1,
      explanation:
        'DNA replication occurs exclusively during the Synthesis (S) phase of Interphase, doubling the amount of nuclear DNA so that each chromosome consists of two sister chromatids.',
    },
    {
      id: 3,
      question:
        'What molecular mechanism regulates the activity of Cyclin-Dependent Kinases (CDKs) throughout the cell cycle?',
      options: [
        'CDK protein levels rise and fall dramatically while Cyclin levels remain completely constant',
        'CDK enzyme concentrations remain relatively constant, but they are enzymatically activated only when bound by fluctuating Cyclin partners',
        'CDKs are degraded by lysosomes every 15 minutes',
        'CDKs only function when chromosomes are decondensed in telophase',
      ],
      correctIndex: 1,
      explanation:
        'CDKs are present throughout the cell cycle at relatively stable concentrations. Their activation requires binding to specific Cyclin proteins, whose concentrations fluctuate periodically.',
    },
    {
      id: 4,
      question:
        'What is the physiological function of the tumor suppressor protein p53 when DNA damage is detected at the G1/S checkpoint?',
      options: [
        'It directly replicates the damaged DNA without checking for errors',
        'It activates transcription of the CDK inhibitor p21 to arrest the cycle for repair, or triggers apoptosis if damage is irreparable',
        'It speeds up mitosis to dilute the mutated DNA among daughter cells',
        'It dissolves the nuclear envelope prematurely',
      ],
      correctIndex: 1,
      explanation:
        'p53 is the "guardian of the genome." Upon sensing DNA breaks, it halts cell cycle progression by inducing p21 to inhibit G1/S Cyclin-CDKs. If repair fails, p53 induces apoptosis.',
    },
    {
      id: 5,
      question:
        'At which mitotic checkpoint does the cell verify that all kinetochores are properly anchored to spindle microtubules before sister chromatids separate?',
      options: ['G1/S Checkpoint', 'G2/M Checkpoint', 'Spindle Assembly (M) Checkpoint', 'Cytokinesis Checkpoint'],
      correctIndex: 2,
      explanation:
        'The Spindle Assembly Checkpoint (SAC) occurs at the transition from metaphase to anaphase. It prevents the Anaphase-Promoting Complex (APC/C) from activating until all kinetochores are attached with bipolar tension.',
    },
    {
      id: 6,
      question:
        'If a human somatic cell with 46 chromosomes undergoes normal Mitosis, how many chromosomes will each daughter cell possess?',
      options: ['23 chromosomes', '46 chromosomes', '92 chromosomes', '12 chromosomes'],
      correctIndex: 1,
      explanation:
        'Mitosis is an equational division for somatic cells. One diploid parent cell (2n = 46) produces two genetically identical diploid daughter cells, each containing 46 chromosomes.',
    },
    {
      id: 7,
      question:
        'During which stage of Mitosis do sister chromatids officially separate and begin migrating toward opposite spindle poles?',
      options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
      correctIndex: 2,
      explanation:
        'In Anaphase, cohesin proteins holding sister chromatids together are cleaved by separase, and the newly independent daughter chromosomes are pulled toward opposite centrosome poles.',
    },
    {
      id: 8,
      question:
        'How does cytokinesis differ between dividing animal cells and dividing plant cells?',
      options: [
        'Animal cells build a rigid cellulose cell plate; plant cells use an actin-myosin cleavage furrow',
        'Animal cells constrict via an actin-myosin cleavage furrow; plant cells form a cell plate derived from fusing Golgi vesicles',
        'Plant cells undergo cytokinesis during prophase, whereas animal cells do not divide until interphase',
        'Plant cells do not undergo cytokinesis; they remain multinucleated indefinitely',
      ],
      correctIndex: 1,
      explanation:
        'Animal cells pinch inward through an actin-myosin contractile ring forming a cleavage furrow. Plant cells cannot pinch because of their rigid cell walls; instead, Golgi vesicles deliver cell wall precursors to form a cell plate.',
    },
    {
      id: 9,
      question:
        'In which phase of Meiosis does crossing over (recombination) between non-sister chromatids take place?',
      options: ['Prophase I', 'Metaphase I', 'Anaphase II', 'Telophase I'],
      correctIndex: 0,
      explanation:
        'Crossing over occurs exclusively during Prophase I of Meiosis, where homologous chromosomes pair closely in synapsis and exchange genetic fragments at chiasmata.',
    },
    {
      id: 10,
      question:
        'What is a tetrad (or bivalent) in meiotic cell division?',
      options: [
        'A group of four distinct daughter cells produced after cytokinesis',
        'A paired complex of two homologous chromosomes, comprising four chromatids in total, aligned during Prophase I',
        'A mitotic spindle with four centrioles instead of two',
        'A mutated chromosome with four centromeres',
      ],
      correctIndex: 1,
      explanation:
        'A tetrad (bivalent) consists of two paired homologous chromosomes (one maternal, one paternal), each containing two sister chromatids, yielding four total chromatids bound together.',
    },
    {
      id: 11,
      question:
        'Why is Meiosis I specifically classified as a "reductional" division?',
      options: [
        'It reduces the physical size of the cell by half',
        'It reduces the ploidy from diploid (2n) to haploid (1n) by separating homologous chromosomes',
        'It reduces the number of genes on each individual DNA molecule',
        'It reduces the rate of protein synthesis to zero',
      ],
      correctIndex: 1,
      explanation:
        'Meiosis I separates homologous chromosomes into two separate daughter cells, reducing the chromosome count from diploid (2n) to haploid (1n).',
    },
    {
      id: 12,
      question:
        'In a species with a diploid chromosome number of 2n = 8, how many distinct gamete combinations can be produced by independent assortment alone (ignoring crossing over)?',
      options: ['4 combinations', '8 combinations', '16 combinations', '64 combinations'],
      correctIndex: 2,
      explanation:
        'The formula for independent assortment combinations is 2^n, where n is the haploid number. Here 2n = 8, so n = 4. Therefore, 2^4 = 16 unique gametic combinations.',
    },
    {
      id: 13,
      question:
        'What is the primary event that distinguishes Anaphase I of Meiosis from Anaphase of Mitosis?',
      options: [
        'In Anaphase I, sister chromatids separate; in Mitosis, homologous chromosomes separate',
        'In Anaphase I, homologous chromosome pairs separate while sister chromatids remain attached; in Mitosis, sister chromatids separate',
        'Anaphase I only occurs in bacteria; Mitosis occurs in eukaryotes',
        'Anaphase I requires DNA replication, whereas Mitosis does not',
      ],
      correctIndex: 1,
      explanation:
        'In Anaphase I of Meiosis, homologous pairs are pulled apart to opposite poles while sister chromatids remain joined at their centromeres. In Mitosis, sister chromatids are cleaved and separated.',
    },
    {
      id: 14,
      question:
        'What will be the genetic outcome if nondisjunction of a homologous chromosome pair occurs during Meiosis I?',
      options: [
        'All 4 resulting gametes will be completely normal (n)',
        '50% of gametes will be normal (n), 25% will have n+1, and 25% will have n-1',
        '100% of the resulting gametes will be abnormal: two will be n+1, and two will be n-1',
        'All 4 gametes will be diploid (2n)',
      ],
      correctIndex: 2,
      explanation:
        'Nondisjunction during Meiosis I missegregates a whole homologous pair into one daughter cell. Following normal Meiosis II, all 4 gametes are abnormal: two are n+1 and two are n-1.',
    },
    {
      id: 15,
      question:
        'If nondisjunction occurs in Meiosis II, what proportion of the resulting gametes will carry an abnormal chromosome count?',
      options: ['0%', '25%', '50%', '100%'],
      correctIndex: 2,
      explanation:
        'In Meiosis II nondisjunction, only one of the two secondary spermatocytes/oocytes fails to separate sister chromatids. This produces two normal gametes (n, n), one n+1 gamete, and one n-1 gamete—a 50% abnormal rate.',
    },
    {
      id: 16,
      question:
        'What is the cytogenetic term for an individual cell or organism having an abnormal chromosome count that is not an exact multiple of the haploid set (e.g., 2n + 1 or 2n - 1)?',
      options: ['Polyploidy', 'Aneuploidy', 'Euploidy', 'Allopolyploidy'],
      correctIndex: 1,
      explanation:
        'Aneuploidy refers to the presence of an abnormal number of individual chromosomes (such as 45 or 47 in humans). Polyploidy refers to the addition of complete haploid sets (e.g., 3n, 4n).',
    },
    {
      id: 17,
      question:
        'A child is born with intellectual disabilities, a flattened facial profile, single palmar crease, and congenital heart defects. A karyotype reveals 47 chromosomes with three copies of chromosome 21. What condition is this?',
      options: ['Edward Syndrome', 'Down Syndrome (Trisomy 21)', 'Patau Syndrome', 'Cri-du-chat Syndrome'],
      correctIndex: 1,
      explanation:
        'Down Syndrome is caused by Trisomy 21 (karyotype 47, XX, +21 or 47, XY, +21), the most frequent viable human autosomal trisomy, predominantly arising from maternal meiotic nondisjunction.',
    },
    {
      id: 18,
      question:
        'A female patient with short stature, webbed neck, broad chest, and primary amenorrhea has a karyotype of 45, X (or 45, X0). What syndrome does she have?',
      options: ['Turner Syndrome', 'Klinefelter Syndrome', 'Triple X Syndrome', 'Jacob Syndrome'],
      correctIndex: 0,
      explanation:
        'Turner Syndrome (45, X) is the only viable human monosomy. Affected biological females have only one X chromosome and lack Barr bodies.',
    },
    {
      id: 19,
      question:
        'What karyotype is diagnostic for Klinefelter Syndrome, and what is the biological sex of an affected individual?',
      options: [
        '45, X0; biological female',
        '47, XXY; biological male',
        '47, XYY; biological female',
        '46, XY with SRY deletion; biological male',
      ],
      correctIndex: 1,
      explanation:
        'Klinefelter Syndrome has the karyotype 47, XXY. Because the Y chromosome carries the SRY gene, the individual is biologically male, but the presence of an extra X chromosome causes hypogonadism, reduced fertility, and gynecomastia.',
    },
    {
      id: 20,
      question:
        'Which protein complex acts as the molecular "glue" holding sister chromatids together from S phase until anaphase onset?',
      options: ['Tubulin', 'Cohesin', 'Condensin', 'Histone H1'],
      correctIndex: 1,
      explanation:
        'Cohesin forms multi-protein rings that encircle and tether sister chromatids together along their arms and centromeres until separase cleaves it at the metaphase-to-anaphase transition.',
    },
  ],
};
