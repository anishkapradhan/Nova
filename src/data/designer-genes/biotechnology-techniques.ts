import { DesignerGenesTopic } from '@/types/designer-genes';

export const biotechnologyTechniquesTopic: DesignerGenesTopic = {
  slug: 'biotechnology-techniques',
  topicNumber: 8,
  title: 'Biotechnology Tools & Molecular Techniques',
  subtitle: 'PCR Thermal Cycling, Gel Electrophoresis, Molecular Cloning, Sanger Sequencing & CRISPR-Cas9',
  badge: 'Topic 08 • Biotech & Lab Methods',
  accentColor: 'teal',
  sourceDeck: 'vi Technology and Techniques 26_27.pptx',
  freshmanSummary:
    'Modern molecular biology empowers scientists to edit, amplify, and read DNA like computer code. In this capstone unit, high school freshmen master the core laboratory toolkit tested in Science Olympiad Designer Genes: how thermal cyclers copy millions of DNA fragments via PCR, how electrical fields sort invisible nucleic acid fragments on agarose gels, how restriction enzymes and plasmids engineer recombinant bacteria, how fluorescent ddNTPs power Sanger sequencing, and how CRISPR-Cas9 makes precision genetic cuts.',
  diagram: {
    type: 'pcr-gel-electrophoresis',
    title: 'PCR Thermal Cycling & Agarose Gel Electrophoresis',
    caption:
      'The 3-step PCR amplification cycle (Denaturation, Annealing, Extension) paired with horizontal agarose gel electrophoresis ("Running to the Red" from cathode to anode).',
    laymanExplanation:
      'PCR is like an ultra-fast biological photocopier: you heat DNA up to unzip the two strands (denaturation at 95°C), cool it down so small guide flags can stick to the start and end lines (annealing at 55°C), and let a heat-proof enzyme build the new strands (extension at 72°C). Repeating this 30 times produces a billion copies! Then, you pour the liquid onto a molecular obstacle course (an agarose gel) and zap it with electricity. Because DNA is negatively charged, it runs toward the positive red electrode—with tiny DNA fragments sprinting to the bottom while heavy, bulky fragments get stuck near the top!',
  },
  sections: [
    {
      id: 'pcr-thermal-cycling-steps',
      title: 'Polymerase Chain Reaction (PCR) & Thermal Cycling',
      subheading: 'Denaturation, annealing, extension, and Taq polymerase biology',
      laymanExplanation:
        'Invented by Kary Mullis in 1983, PCR amplifies a tiny trace of DNA into millions or billions of identical copies through repeated thermal cycles. Every cycle consists of three discrete temperature phases inside a thermal cycler: 1) Denaturation (94–98°C, typically 95°C for 15–30 seconds): High heat disrupts the hydrogen bonds holding the two complementary strands together, unzipping the double helix into single-stranded DNA (ssDNA). Strands high in G-C content require extra time or heat because G-C pairs share 3 hydrogen bonds instead of 2. 2) Annealing (55–65°C): The temperature is lowered to 3–5°C below the melting temperature (Tm) of the primers. This allows short synthetic single-stranded DNA primers (18–25 nucleotides) to find and bind specifically to complementary sequences flanking the target region. 3) Extension / Elongation (68–72°C): Optimal temperature for Taq DNA polymerase (isolated from the hot-spring bacterium Thermus aquaticus). Taq synthesizes new complementary DNA in the 5′ to 3′ direction at a rate of ~1 minute per kilobase.',
      realWorldAnalogy:
        'Think of PCR like opening a locked zipper on a winter coat (denaturation), placing two safety pins at the exact top and bottom of the patch you want to mend (primer annealing), and then running an automated sewing needle between the pins to weave a duplicate strip (extension).',
      keyTerms: [
        {
          term: 'Denaturation Phase (94-98°C)',
          definition:
            'The first stage of PCR where intense heat breaks hydrogen bonds between bases, separating double-stranded DNA into single strands without breaking covalent phosphodiester bonds.',
        },
        {
          term: 'Annealing Phase (55-65°C)',
          definition:
            'The second stage of PCR where cooling allows forward and reverse single-stranded DNA primers to hybridize to their complementary flanking target sequences.',
        },
        {
          term: 'Extension Phase (68-72°C)',
          definition:
            'The third stage of PCR where heat-stable Taq DNA polymerase synthesizes a new complementary strand by adding free dNTPs in the 5′-to-3′ direction.',
        },
        {
          term: 'Taq DNA Polymerase',
          definition:
            'A thermostable DNA polymerase isolated from the extremophile Thermus aquaticus that survives repeated 95°C heating cycles without denaturing.',
        },
        {
          term: 'PCR Limitations',
          definition:
            'Requires prior knowledge of flanking sequences to design primers; basic Taq lacks 3′->5′ proofreading exonuclease activity; susceptible to false-positive aerosol contamination.',
        },
      ],
      mathBreakdown: {
        name: 'Exponential DNA Amplification Formula',
        formula: 'Final Copies = Initial Copies x 2^n, where n = number of completed thermal cycles',
        variables: 'n = total number of PCR cycles performed in the thermal cycler.',
        walkThrough:
          'If a forensic sample starts with just 10 double-stranded target DNA molecules, how many copies exist after 30 PCR cycles? Using Final = 10 * 2^30: 2^10 ~ 1,024, so 2^30 ~ 1,073,741,824. 10 * 1,073,741,824 = 10,737,418,240 copies (over 10.7 billion copies from 10 initial molecules)!',
        practiceProblem: {
          problem:
            'A diagnostic COVID-19 RT-PCR reaction starts with 4 target cDNA molecules. How many theoretical target copies are generated after 25 complete cycles?',
          solution:
            'Final copies = 4 * 2^25 = 4 * 33,554,432 = 134,217,728 copies (over 134 million copies)!',
        },
      },
    },
    {
      id: 'molecular-cloning-and-plasmids',
      title: 'Molecular Cloning & Recombinant DNA Plasmids',
      subheading: 'Restriction endonucleases, vectors, transformation, and antibiotic selection',
      laymanExplanation:
        'Molecular cloning inserts a gene of interest into a host organism (like E. coli) so bacteria can produce proteins like human insulin. The five-step workflow is: 1) Isolate Gene of Interest: Extract target DNA, either by PCR amplification or by converting cellular mRNA into cDNA using reverse transcriptase (to remove introns!). 2) Prepare the Vector: Plasmids are circular extrachromosomal bacterial DNA containing three essential features: an Origin of Replication (Ori) to replicate independently, a Selectable Marker (e.g., ampicillin resistance gene amp^R), and a Multiple Cloning Site (MCS) containing unique restriction sites under a promoter. The vector is treated with alkaline phosphatase to remove 5′-phosphates and prevent self-closing! 3) Digestion & Ligation: Restriction endonucleases cleave specific palindromic DNA sequences, leaving staggered sticky ends with overhangs. DNA ligase seals the phosphodiester backbone with ATP. 4) Bacterial Transformation: E. coli cells are made chemically competent using cold Calcium Chloride (CaCl2). Because both plasmid DNA and the bacterial cell wall are negatively charged, Ca2+ cations shield the negative charges. A brief heat shock (42°C for 45-90 seconds) opens transient pores in the membrane for plasmid entry. 5) Antibiotic Selection & Screening: Cells are plated on agar containing the antibiotic. Only successfully transformed bacteria carrying the plasmid survive and form colonies!',
      realWorldAnalogy:
        'Think of the plasmid like an empty digital USB thumb drive with a security badge (antibiotic resistance). You use molecular scissors (restriction enzymes) to cut open a file folder, copy-paste your favorite song (gene of interest), and use digital glue (DNA ligase) to save it. Then you sneak the thumb drive into a computer factory (E. coli via heat shock) that manufactures millions of exact replicas.',
      keyTerms: [
        {
          term: 'Restriction Endonuclease',
          definition:
            'A bacterial enzyme that recognizes specific palindromic DNA sequences (e.g., EcoRI: 5′-GAATTC-3′) and cleaves phosphodiester bonds, generating sticky or blunt ends.',
        },
        {
          term: 'Plasmid Vector',
          definition:
            'A circular, double-stranded DNA vehicle used in gene cloning containing an origin of replication (Ori), a selectable marker, and a multiple cloning site (MCS).',
        },
        {
          term: 'Alkaline Phosphatase',
          definition:
            'An enzyme that removes 5′-phosphate groups from linearized vector DNA, preventing the plasmid from self-ligating without incorporating the gene insert.',
        },
        {
          term: 'CaCl2 & Heat Shock Transformation',
          definition:
            'A method to make bacterial cells competent: Ca2+ neutralizes electrostatic repulsion between DNA and membrane, while rapid 42°C heating induces transient membrane pores.',
        },
      ],
      mathBreakdown: {
        name: 'Transformation Efficiency Calculation',
        formula: 'Transformation Efficiency (CFU/ug) = [Total Colonies on Plate (CFU) / ug of Plasmid DNA Plated] x Dilution Factor',
        variables: 'CFU = Colony Forming Units; ug = micrograms of plasmid DNA added to the competent cells.',
        walkThrough:
          'A student transforms E. coli with 0.05 ug of pUC19 plasmid DNA and plates the entire recovery broth. The next morning, 250 colonies are counted on the ampicillin plate. Transformation efficiency = 250 CFU / 0.05 ug = 5,000 CFU/ug (or 5.0 x 10^3 CFU/ug).',
        practiceProblem: {
          problem:
            'If 0.002 ug of plasmid DNA yields 180 colonies on an LB/amp plate, what is the transformation efficiency in CFU/ug?',
          solution:
            'Transformation Efficiency = 180 CFU / 0.002 ug = 90,000 CFU/ug (9.0 x 10^4 CFU/ug).',
        },
      },
    },
    {
      id: 'gel-electrophoresis-principles',
      title: 'Agarose Gel Electrophoresis & Band Sizing',
      subheading: 'Matrix sieving, charge-to-mass ratio, ladders, and "Running to the Red"',
      laymanExplanation:
        'Gel electrophoresis separates DNA, RNA, or protein fragments according to molecular size using an electric field. The components are: 1) Agarose Gel: A porous polysaccharide mesh cast from seaweed agar. Higher gel percentages (e.g., 2.0%) have smaller pores to resolve tiny fragments (100–500 bp), while lower percentages (0.8%) resolve large genomic fragments. 2) Electrophoresis Tank & Buffer: The gel is submerged in TAE (Tris-Acetate-EDTA) or TBE buffer, which maintains a stable neutral pH and conducts electrical current. 3) Loading Dye: Mixed with DNA samples; contains glycerol to make the sample dense so it sinks to the bottom of the submerged well, plus tracking dyes (bromophenol blue/xylene cyanol). 4) DNA Ladder ("Molecular Ruler"): Loaded into Lane 1; contains fragments of known base-pair sizes. 5) Running the Gel: The wells must face the NEGATIVE electrode (black cathode). Because DNA’s phosphate backbone is uniformly negatively charged, it is repelled by the cathode and migrates toward the POSITIVE electrode (red anode)—hence the famous lab motto: "Run to the Red!" Smaller fragments navigate the microscopic agarose obstacle course faster and travel farther down the gel. Bands are visualized under UV or blue light using fluorescent intercalating dyes like Ethidium Bromide or GelRed.',
      realWorldAnalogy:
        'Imagine running through a dense jungle packed with tangled vines (the agarose matrix). A tiny mouse (a 200 bp DNA fragment) zips right under and through the vines and reaches the finish line in minutes. But a giant elephant (a 10,000 bp fragment) gets tangled and moves at a snail’s pace, remaining near the starting line!',
      keyTerms: [
        {
          term: 'Agarose Gel',
          definition:
            'A porous carbohydrate matrix derived from seaweed that sifts and separates charged nucleic acid molecules based on physical length.',
        },
        {
          term: 'Cathode vs. Anode',
          definition:
            'The cathode is the negative electrode (black) near the sample wells; the anode is the positive electrode (red). DNA runs from cathode to anode.',
        },
        {
          term: 'DNA Ladder',
          definition:
            'A commercial standard mixture of DNA fragments of predetermined lengths run simultaneously in a reference lane to determine unknown sample sizes.',
        },
        {
          term: 'Loading Dye with Glycerol',
          definition:
            'A reagent containing glycerol (providing high density so samples sink into submerged wells) and colored tracking dyes to monitor electrical migration.',
        },
      ],
      mathBreakdown: {
        name: 'Semi-Logarithmic Gel Migration Relationship',
        formula: 'Distance Migrated (d) is inversely proportional to log10(Molecular Weight in bp)',
        variables: 'Plotting Migration Distance (mm) on X-axis vs. log10(bp) on Y-axis yields a straight calibration line.',
        walkThrough:
          'If a 1,000 bp fragment travels 25 mm from the well and a 100 bp fragment travels 75 mm, an unknown fragment migrating 50 mm corresponds to the logarithmic midpoint: log10(bp) = (log10(1000) + log10(100)) / 2 = (3 + 2)/2 = 2.5. 10^2.5 ~ 316 base pairs!',
        practiceProblem: {
          problem:
            'On an agarose gel, Sample A runs 62 mm from the well while Sample B runs 28 mm from the well. Which DNA sample contains the larger molecular weight fragment?',
          solution:
            'Sample B is larger! In gel electrophoresis, smaller fragments migrate faster and farther through the agarose pores. The 28 mm fragment moved slower and remained closer to the well, indicating greater size.',
        },
      },
    },
    {
      id: 'sanger-sequencing-and-crispr-cas9',
      title: 'Sanger Dideoxy Sequencing, CRISPR-Cas9 & Blotting',
      subheading: 'Chain-terminating ddNTPs, RNA-guided gene editing, and the SNOW DROP mnemonic',
      laymanExplanation:
        'Sanger Sequencing (dideoxy chain termination) uses DNA polymerase alongside normal dNTPs and a small concentration of fluorescently labeled dideoxynucleotides (ddNTPs). Crucially, ddNTPs lack the 3′-hydroxyl (-OH) group required to form a phosphodiester bond with incoming nucleotides. Whenever a ddNTP is incorporated, DNA synthesis halts immediately. The resulting fragments of every possible length are separated by capillary electrophoresis, and a laser detects the fluorescent color of the terminal base to read the sequence. Meanwhile, CRISPR-Cas9 is a revolutionary gene-editing technology adapted from a bacterial antiviral immune system. It requires two parts: 1) a synthetic single guide RNA (sgRNA) that targets a 20-nucleotide sequence complementary to target DNA, and 2) the Cas9 endonuclease. Cas9 scans for a Protospacer Adjacent Motif (PAM sequence, 5′-NGG-3′) directly adjacent to the target. Once found, Cas9 cuts both strands of DNA, making a double-strand break (DSB). The cell fixes this either via Non-Homologous End Joining (NHEJ, which introduces random insertions/deletions that knock out the gene) or Homology-Directed Repair (HDR, providing a donor template for precise gene replacement). Finally, memorize the classic molecular blotting techniques with the beloved Science Olympiad mnemonic: SNOW DROP (Southern = DNA; Northern = RNA; Western = Protein; O-O = nothing)!',
      realWorldAnalogy:
        'Sanger sequencing is like a bricklayer who occasionally picks up a "terminator brick" with no cement on top: the wall immediately stops, and its height tells you the exact position of that brick. CRISPR-Cas9 is like the "Find and Replace" tool in Microsoft Word: the guide RNA searches for the exact word, Cas9 hits backspace, and HDR types in the new corrected sentence!',
      keyTerms: [
        {
          term: 'Dideoxynucleotide (ddNTP)',
          definition:
            'A modified nucleotide lacking both 2′ and 3′ hydroxyl groups (-OH). Its incorporation terminates elongation because DNA polymerase requires a 3′-OH to attach the next nucleotide.',
        },
        {
          term: 'CRISPR-Cas9 System',
          definition:
            'An adaptive bacterial immune system engineered for RNA-guided genome editing, consisting of a guide RNA (gRNA) and the Cas9 double-stranded DNA endonuclease.',
        },
        {
          term: 'PAM Sequence (Protospacer Adjacent Motif)',
          definition:
            'A short 2-6 base pair DNA sequence (5′-NGG-3′ for SpCas9) immediately downstream of the target site required for Cas9 binding and cleavage.',
        },
        {
          term: 'NHEJ vs. HDR',
          definition:
            'NHEJ (Non-Homologous End Joining) is an error-prone repair mechanism causing frameshift knockouts; HDR (Homology-Directed Repair) uses a homologous DNA donor template for precise gene insertion.',
        },
        {
          term: 'SNOW DROP Mnemonic',
          definition:
            'Southern blot detects DNA; Northern blot detects RNA; Western blot detects Protein. (O-O has no match).',
        },
      ],
      mathBreakdown: {
        name: 'CRISPR PAM Specificity Probability',
        formula: 'P(PAM 5\'-NGG-3\') = 1 x (1/4) x (1/4) = 1/16 in a random genome',
        variables: 'N = any base (probability 1.0); G = guanine (probability 0.25).',
        walkThrough:
          'In a random genome with 50% GC content, the SpCas9 PAM sequence 5\'-NGG-3\' occurs on average once every 16 base pairs (1 * 0.25 * 0.25 = 1/16). This high frequency ensures that nearly any gene in the human genome contains accessible Cas9 target sites!',
        practiceProblem: {
          problem:
            'Which molecular blotting technique would a geneticist use to measure the expression levels of CFTR mRNA in human lung tissue?',
          solution:
            'Northern Blot! Using the SNOW DROP mnemonic: Southern = DNA, Northern = RNA, Western = Protein. Since mRNA is being measured, Northern blotting (or RT-qPCR) is the correct technique.',
        },
      },
    },
  ],
  flashcards: [
    {
      id: 'fc-bio-1',
      term: 'PCR 3 Thermal Cycling Steps',
      category: 'Process',
      front: 'List the three steps of a PCR cycle and their typical operational temperatures.',
      back: '1) Denaturation: 94-98°C (separates strands); 2) Annealing: 50-65°C (primers bind); 3) Extension: 68-72°C (Taq polymerase synthesizes complementary strand).',
      tip: 'Remember: Heat up to unzip (95°), cool down to stick (55°), warm up to build (72°).',
    },
    {
      id: 'fc-bio-2',
      term: 'Taq Polymerase Source',
      category: 'Definition',
      front: 'Why is Taq polymerase used in PCR instead of human or E. coli DNA polymerase?',
      back: 'Taq was isolated from the thermophilic bacterium Thermus aquaticus living in boiling hot springs. It remains stable and active after dozens of cycles at 95°C without denaturing.',
    },
    {
      id: 'fc-bio-3',
      term: 'PCR Annealing Temperature Rule',
      category: 'Technique',
      front: 'How is the annealing temperature determined relative to primer melting temperature (Tm)?',
      back: 'Set typically 3°C to 5°C BELOW the lowest melting temperature (Tm) of the primer pair. Too high = primers do not bind (no yield); too low = nonspecific binding to wrong sequences.',
    },
    {
      id: 'fc-bio-4',
      term: 'Why DNA Runs to the Red',
      category: 'Process',
      front: 'Why does DNA migrate toward the positive electrode in gel electrophoresis?',
      back: 'The phosphate backbone of DNA carries a permanent negative charge at neutral pH. Opposites attract, so negatively charged DNA is pulled toward the positive anode (red). "Run to the Red!"',
    },
    {
      id: 'fc-bio-5',
      term: 'Agarose Gel Sizing Principle',
      category: 'Concept',
      front: 'In agarose gel electrophoresis, which DNA fragments travel farthest from the wells?',
      back: 'Small DNA fragments travel farthest because they easily weave through the microscopic pores of the agarose polymer matrix, whereas large bulky fragments are retarded.',
    },
    {
      id: 'fc-bio-6',
      term: 'Role of Glycerol in Loading Dye',
      category: 'Technique',
      front: 'What is the function of glycerol in DNA loading buffer?',
      back: 'Glycerol increases the density of the sample so that the DNA sinks to the bottom of the buffer-submerged agarose well instead of diffusing away into the buffer tank.',
    },
    {
      id: 'fc-bio-7',
      term: 'Restriction Endonuclease',
      category: 'Definition',
      front: 'What is a restriction endonuclease, and what type of DNA sequences does it typically recognize?',
      back: 'A bacterial enzyme that cuts double-stranded DNA at specific recognition sites, almost always palindromic sequences (e.g., 5\'-GAATTC-3\' reading identical in reverse on the opposite strand).',
    },
    {
      id: 'fc-bio-8',
      term: 'Alkaline Phosphatase in Cloning',
      category: 'Technique',
      front: 'Why is linearized plasmid vector treated with alkaline phosphatase before ligation?',
      back: 'It removes the 5\'-phosphate groups from the vector ends. Without 5\'-phosphates, DNA ligase cannot self-ligate the empty plasmid back together, dramatically reducing empty vector background colonies.',
    },
    {
      id: 'fc-bio-9',
      term: 'CaCl2 in Chemical Transformation',
      category: 'Technique',
      front: 'What is the specific role of CaCl2 during bacterial transformation?',
      back: 'Calcium chloride dissociates into Ca2+ divalent cations that electrostatically neutralize the negative charges on both the plasmid DNA backbone and the bacterial outer membrane, reducing repulsion.',
    },
    {
      id: 'fc-bio-10',
      term: 'ddNTPs in Sanger Sequencing',
      category: 'Definition',
      front: 'What structural feature makes dideoxynucleotides (ddNTPs) chain terminators?',
      back: 'ddNTPs lack the 3\'-hydroxyl (-OH) group on the pentose sugar. DNA polymerase requires a free 3\'-OH to attach the next nucleotide, so addition of a ddNTP immediately halts chain elongation.',
      tip: 'Deoxy (dNTP) = missing 2\'-OH; Dideoxy (ddNTP) = missing BOTH 2\'-OH and 3\'-OH!',
    },
    {
      id: 'fc-bio-11',
      term: 'CRISPR Cas9 Endonuclease',
      category: 'Definition',
      front: 'What are the two core molecular components of the engineered CRISPR-Cas9 system?',
      back: '1) A single guide RNA (sgRNA) that provides target sequence complementarity (~20 nucleotides); 2) The Cas9 endonuclease protein that creates a double-strand break (DSB).',
    },
    {
      id: 'fc-bio-12',
      term: 'PAM Sequence',
      category: 'Definition',
      front: 'What is a PAM sequence, and what is the PAM motif for Streptococcus pyogenes Cas9?',
      back: 'Protospacer Adjacent Motif; a short essential DNA sequence adjacent to the target site required for Cas9 binding. For SpCas9, the PAM is 5\'-NGG-3\' (any nucleotide followed by two guanines).',
    },
    {
      id: 'fc-bio-13',
      term: 'SNOW DROP Mnemonic',
      category: 'Genetics Rule',
      front: 'What does the SNOW DROP mnemonic stand for in molecular biology?',
      back: 'Southern blot = DNA | Northern blot = RNA | (O - O = blank) | Western blot = Protein.',
      tip: 'Match letters vertically: S-D, N-R, W-P.',
    },
    {
      id: 'fc-bio-14',
      term: 'NHEJ vs. HDR',
      category: 'Process',
      front: 'In CRISPR editing, what is the difference between NHEJ and HDR repair?',
      back: 'NHEJ (Non-Homologous End Joining) directly glues broken ends with frequent random insertions/deletions (indels) to knock out a gene. HDR uses a homologous donor template for precise sequence knock-in.',
    },
    {
      id: 'fc-bio-15',
      term: 'Reverse Transcriptase in Cloning',
      category: 'Technique',
      front: 'Why must eukaryotic genes be converted to cDNA using reverse transcriptase before expression in E. coli?',
      back: 'Bacteria lack spliceosomes and cannot remove non-coding introns. Reverse transcribing mature spliced cytoplasmic mRNA into complementary DNA (cDNA) provides an intron-free coding sequence.',
    },
    {
      id: 'fc-bio-16',
      term: 'Ethidium Bromide',
      category: 'Technique',
      front: 'How does ethidium bromide allow visualization of DNA bands in agarose gels?',
      back: 'Ethidium bromide is an intercalating agent that slips between stacked DNA base pairs. When exposed to ultraviolet (UV) light, it fluoresces bright orange-red.',
    },
  ],
  quiz: [
    {
      id: 1,
      question:
        'During the denaturation step of a standard PCR cycle, what temperature is typically applied to separate the double-stranded DNA template?',
      options: ['50-55°C', '68-72°C', '94-98°C', '37°C'],
      correctIndex: 2,
      explanation:
        'Denaturation requires heating to 94-98°C (most commonly 95°C) to break the hydrogen bonds between complementary strands without cleaving the covalent phosphodiester backbones.',
    },
    {
      id: 2,
      question:
        'If the annealing temperature in a PCR reaction is set 10°C too LOW, what is the most likely consequence?',
      options: [
        'Primers will fail to bind completely, producing zero yield',
        'Taq polymerase will be irreversibly denatured',
        'Primers will bind non-specifically to unintended DNA sequences, creating spurious bands',
        'The phosphodiester backbone will hydrolyze',
      ],
      correctIndex: 2,
      explanation:
        'When the annealing temperature is too low, primers can tolerate base mismatches and hybridize to unintended, non-specific locations, causing amplification of incorrect sequences.',
    },
    {
      id: 3,
      question:
        'Why does DNA migrate toward the positive anode (red electrode) during agarose gel electrophoresis?',
      options: [
        'Nitrogenous bases have strong positive charges',
        'Deoxyribose sugars lose electrons in TAE buffer',
        'The repeating phosphate backbone carries negatively charged oxygen atoms',
        'The loading dye imparts a temporary negative dipole',
      ],
      correctIndex: 2,
      explanation:
        'DNA nucleotides possess negatively charged phosphate groups (PO4^3-). Under an electrical potential, negative ions migrate toward the positive anode ("Run to the Red").',
    },
    {
      id: 4,
      question:
        'An agarose gel is run with four DNA fragments: 200 bp, 850 bp, 1,500 bp, and 4,000 bp. Which fragment will be found closest to the bottom of the gel (farthest from the well)?',
      options: ['200 bp', '850 bp', '1,500 bp', '4,000 bp'],
      correctIndex: 0,
      explanation:
        'Smaller DNA fragments experience less friction and steric hindrance through the porous agarose network, allowing them to migrate faster and travel farthest (200 bp is closest to the bottom).',
    },
    {
      id: 5,
      question:
        'What is the primary function of glycerol in a DNA gel loading buffer?',
      options: [
        'To stain the DNA so it glows under UV light',
        'To increase sample density so the DNA sinks into the submerged agarose well',
        'To denature double-stranded DNA into single strands',
        'To provide ions that conduct the electric current',
      ],
      correctIndex: 1,
      explanation:
        'Glycerol has higher density than the surrounding electrophoresis running buffer, ensuring that the loaded DNA sample sinks to the bottom of the well instead of floating away.',
    },
    {
      id: 6,
      question:
        'Which component is an essential requirement in a plasmid vector to allow it to be replicated inside host bacteria independently of the bacterial chromosome?',
      options: ['Selectable antibiotic resistance marker', 'Origin of replication (Ori)', 'Multiple cloning site (MCS)', 'LacZ reporter gene'],
      correctIndex: 1,
      explanation:
        'The Origin of Replication (Ori) is the specific DNA sequence recognized by host cellular DNA replication enzymes to initiate plasmid duplication.',
    },
    {
      id: 7,
      question:
        'Why is a linearized plasmid vector treated with alkaline phosphatase before mixing with the target gene insert and ligase?',
      options: [
        'To add sticky ends to blunt DNA',
        'To remove 5′-phosphate groups, preventing the empty vector from self-ligating back together',
        'To permeabilize the bacterial plasma membrane',
        'To digest genomic DNA from the host bacteria',
      ],
      correctIndex: 1,
      explanation:
        'Alkaline phosphatase removes terminal 5′-phosphate groups from the vector. Because DNA ligase requires a 5′-phosphate and a 3′-OH to form a phosphodiester bond, the vector cannot close on itself without incorporating an insert.',
    },
    {
      id: 8,
      question:
        'In bacterial transformation via heat shock, what is the role of divalent calcium ions (Ca2+) in the CaCl2 solution?',
      options: [
        'They activate bacterial DNA polymerase',
        'They neutralize the negative electrostatic charges on both the plasmid DNA and the bacterial outer membrane',
        'They denature protective restriction enzymes in the cytoplasm',
        'They phosphorylate ATP to power active transport',
      ],
      correctIndex: 1,
      explanation:
        'Both DNA and bacterial membrane lipopolysaccharides carry negative charges, creating electrostatic repulsion. Divalent Ca2+ ions shield these charges, permitting plasmid DNA to adhere to the cell surface.',
    },
    {
      id: 9,
      question:
        'What structural property distinguishes dideoxynucleoside triphosphates (ddNTPs) from standard deoxynucleoside triphosphates (dNTPs)?',
      options: [
        'ddNTPs contain ribose instead of deoxyribose',
        'ddNTPs possess an extra phosphate group on the 3′ carbon',
        'ddNTPs lack the 3′-hydroxyl (-OH) group on the pentose sugar ring',
        'ddNTPs contain uracil instead of thymine',
      ],
      correctIndex: 2,
      explanation:
        'ddNTPs lack both the 2′-OH and 3′-OH groups on the pentose ring. Without a 3′-OH, DNA polymerase cannot attach subsequent incoming nucleotides, causing chain termination.',
    },
    {
      id: 10,
      question:
        'In automated Sanger sequencing, how are the different terminal dideoxynucleotides (ddATP, ddTTP, ddCTP, ddGTP) differentiated in a single capillary tube?',
      options: [
        'By radioactive phosphorus-32 decay rates',
        'Each of the four ddNTPs is conjugated to a unique fluorescent dye that emits light at a distinct wavelength',
        'By running each nucleotide in a separate lane at 100°C',
        'By mass spectrometry collision fragmentation',
      ],
      correctIndex: 1,
      explanation:
        'Modern Sanger sequencing uses four distinct fluorescent fluorophores attached to each specific ddNTP (e.g., green for A, red for T, blue for C, yellow/black for G) detected by an automated laser scanner.',
    },
    {
      id: 11,
      question:
        'Which component provides sequence-specific targeting to direct the Cas9 endonuclease to its precise cleavage site in the genome?',
      options: ['The PAM motif', 'The single guide RNA (sgRNA)', 'The recA protein', 'The origin of replication'],
      correctIndex: 1,
      explanation:
        'The single guide RNA (sgRNA) contains a 20-nucleotide custom sequence that pairs complementarily with the target genomic DNA, guiding Cas9 to make a double-strand break.',
    },
    {
      id: 12,
      question:
        'What is the Protospacer Adjacent Motif (PAM) sequence recognized by Streptococcus pyogenes Cas9 (SpCas9)?',
      options: ['5′-AAT-3′', '5′-NGG-3′', '5′-TATA-3′', '5′-GAATTC-3′'],
      correctIndex: 1,
      explanation:
        'SpCas9 requires a 5′-NGG-3′ PAM motif (where N is any nucleotide and G is guanine) immediately adjacent to the 3′ end of the target sequence to trigger cleavage.',
    },
    {
      id: 13,
      question:
        'When CRISPR-Cas9 induces a double-strand break, repairing the cut via Non-Homologous End Joining (NHEJ) typically leads to:',
      options: [
        'Insertion of a designed therapeutic gene sequence',
        'Random nucleotide insertions or deletions (indels) that cause frameshifts and knock out gene function',
        'Exact, flawless regeneration of the wild-type sequence',
        'Duplication of the entire chromosome',
      ],
      correctIndex: 1,
      explanation:
        'NHEJ is an error-prone repair pathway that directly ligates broken DNA ends, frequently introducing small insertions or deletions (indels) that disrupt the open reading frame, knocking out the gene.',
    },
    {
      id: 14,
      question:
        'Using the SNOW DROP mnemonic, which molecular biology blotting technique is used to detect specific RNA transcripts?',
      options: ['Southern blot', 'Northern blot', 'Western blot', 'Eastern blot'],
      correctIndex: 1,
      explanation:
        'According to SNOW DROP: Southern = DNA, Northern = RNA, Western = Protein. Northern blotting detects specific RNA molecules.',
    },
    {
      id: 15,
      question:
        'Why must eukaryotic human insulin mRNA be converted to cDNA using reverse transcriptase before being inserted into a plasmid for expression in E. coli?',
      options: [
        'E. coli cannot transcribe double-stranded DNA',
        'E. coli lacks spliceosomes and cannot remove eukaryotic introns from pre-mRNA',
        'cDNA is resistant to bacterial restriction enzymes',
        'Human mRNA is toxic to bacterial ribosomes',
      ],
      correctIndex: 1,
      explanation:
        'Prokaryotes like E. coli lack spliceosomes and nuclear pre-mRNA processing machinery. Recombinant genes must be derived from cDNA (reverse-transcribed mature mRNA) so that only uninterrupted coding exons are present.',
    },
    {
      id: 16,
      question:
        'If a PCR reaction begins with 5 molecules of target double-stranded DNA, how many molecules will be present after 4 complete thermal cycles (assuming 100% efficiency)?',
      options: ['20', '40', '80', '160'],
      correctIndex: 2,
      explanation:
        'Using Final = Initial * 2^n: Final = 5 * 2^4 = 5 * 16 = 80 molecules.',
    },
    {
      id: 17,
      question:
        'A restriction enzyme recognizes the 6-bp palindromic sequence 5′-GAATTC-3′ and cuts between G and A. What type of ends are generated?',
      options: ['Blunt ends with no overhangs', '5′ sticky overhangs', '3′ sticky overhangs', 'Poly-A tails'],
      correctIndex: 1,
      explanation:
        'EcoRI cuts 5′-G|AATTC-3′ on the top strand and 3′-CTTAA|G-5′ on the bottom strand, leaving a single-stranded 5′-AATT overhang called a 5′ sticky end.',
    },
    {
      id: 18,
      question:
        'Which DNA stain intercalates between stacked nitrogenous bases and fluoresces with an orange-red glow under ultraviolet (UV) illumination?',
      options: ['Bromophenol blue', 'Ethidium bromide', 'Xylene cyanol', 'Coomassie brilliant blue'],
      correctIndex: 1,
      explanation:
        'Ethidium bromide (EtBr) intercalates between stacked DNA base pairs and exhibits strong fluorescence when excited by UV light.',
    },
    {
      id: 19,
      question:
        'What is the key limitation of standard Taq DNA polymerase during high-fidelity PCR cloning applications?',
      options: [
        'It cannot synthesize DNA past 50°C',
        'It lacks 3′ to 5′ exonuclease proofreading activity, resulting in higher error rates',
        'It can only synthesize in the 3′ to 5′ direction',
        'It requires RNA primers rather than DNA primers',
      ],
      correctIndex: 1,
      explanation:
        'Basic Taq polymerase lacks 3′ to 5′ exonuclease proofreading capability, giving it an error rate of ~1 in 10,000 nucleotides. Proofreading enzymes like Pfu or Q5 are used when high fidelity is required.',
    },
    {
      id: 20,
      question:
        'In blue-white screening of recombinant plasmids, why do bacterial colonies containing the successful recombinant gene insert appear WHITE?',
      options: [
        'The insert encodes a white fluorescent protein',
        'The insert disrupts the lacZ alpha-peptide coding sequence within the MCS, preventing beta-galactosidase from cleaving X-gal into a blue pigment',
        'The antibiotic ampicillin bleaches the colonies white',
        'DNA ligase inhibits cellular pigment synthesis',
      ],
      correctIndex: 1,
      explanation:
        'Successful insertion of the foreign gene into the Multiple Cloning Site interrupts the lacZ gene (insertional inactivation). The cells cannot produce functional beta-galactosidase to cleave X-gal, leaving the recombinant colonies white.',
    },
  ],
};
