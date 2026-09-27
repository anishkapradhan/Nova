import { DesignerGenesTopic } from '@/types/designer-genes';

export const centralDogmaTopic: DesignerGenesTopic = {
  slug: 'central-dogma',
  topicNumber: 1,
  title: 'Molecular Genetics & The Central Dogma',
  subtitle: 'DNA Structure, Replication Fork, Transcription, Splicing & Translation',
  badge: 'Topic 01 • Molecular Core',
  accentColor: 'emerald',
  sourceDeck: '8_30 Intro & Central Dogma 26_27.pptx',
  freshmanSummary:
    'Every living cell carries a microscopic instruction manual written in a 4-letter chemical alphabet: DNA. In this opening unit, high school freshmen learn how double-stranded DNA stores biological blueprints, how molecular machines faithfully duplicate it, how RNA transcripts carry the message outside the nucleus, and how ribosomes translate nucleotide triplets into life-giving functional proteins.',
  diagram: {
    type: 'central-dogma-flow',
    title: 'The Central Dogma Information Highway',
    caption:
      'DNA stores genetic information in the nucleus, RNA Polymerase transcribes it into pre-mRNA, the spliceosome trims non-coding introns, and the ribosome translates codons into folded proteins.',
    laymanExplanation:
      'Think of DNA as a rare, master recipe book locked in a vault (the nucleus). You cannot take the book into the messy kitchen. Instead, you photocopy one recipe (transcription into mRNA), trim out the advertisements (RNA splicing), and take the clean recipe card to the chef (the ribosome) who assembles the ingredients (amino acids) into a delicious cake (a functional protein)!',
  },
  sections: [
    {
      id: 'dna-structure',
      title: 'DNA & RNA Molecular Architecture',
      subheading: 'Antiparallel double helices, nitrogenous bases, and Chargaff rules',
      laymanExplanation:
        'DNA (deoxyribonucleic acid) is a polymer made of repeating building blocks called nucleotides. Each nucleotide consists of three parts: a 5-carbon deoxyribose sugar, a phosphate group, and one of four nitrogenous bases: Adenine (A), Thymine (T), Cytosine (C), and Guanine (G). The two strands run in opposite directions—one runs 5′ to 3′ while its partner runs 3′ to 5′ (antiparallel). The sugar-phosphate groups form the sturdy outer handrails of a winding spiral staircase, while the nitrogen bases pair up inside to form the steps via hydrogen bonds.',
      realWorldAnalogy:
        'Imagine a two-way escalator where one side moves up and the other moves down. That is antiparallel orientation! Furthermore, think of the bases like puzzle pieces with magnetic locks: Adenine only fits with Thymine (held by 2 magnetic latches), and Cytosine only fits with Guanine (held by 3 magnetic latches). You can never plug a C into an A—they simply will not click.',
      keyTerms: [
        {
          term: 'Nucleotide',
          definition:
            'The fundamental monomer of nucleic acids, consisting of a 5-carbon pentose sugar, a negatively charged phosphate group, and a nitrogenous base.',
        },
        {
          term: 'Purines vs. Pyrimidines',
          definition:
            'Purines (Adenine and Guanine) are double-ringed nitrogenous bases. Pyrimidines (Cytosine, Thymine, and Uracil) are single-ringed structures. (Mnemonic: CUT the Py; Pure As Gold).',
        },
        {
          term: 'Antiparallel Orientation',
          definition:
            'The arrangement where the two complementary strands of DNA run in opposite directions: one 5′-to-3′ and the other 3′-to-5′.',
        },
        {
          term: 'Chargaff’s Rules',
          definition:
            'In double-stranded DNA, the percentage of Adenine equals Thymine (%A = %T), and the percentage of Guanine equals Cytosine (%G = %C), meaning total purines equal total pyrimidines.',
        },
      ],
      mathBreakdown: {
        name: 'Chargaff’s Percentage Calculation',
        formula: '%A + %T + %G + %C = 100%, where %A = %T and %G = %C',
        variables: 'A, T, C, G = percentage of each nitrogenous base in double-stranded DNA.',
        walkThrough:
          'If a sample of human double-stranded DNA contains 28% Adenine, what is the percentage of Guanine? Since %T = %A = 28%, A + T = 56%. The remaining percentage is 100% - 56% = 44% for G + C. Because %G = %C, divide by 2: %G = 44% / 2 = 22%!',
        practiceProblem: {
          problem:
            'A viral double-stranded DNA genome contains 18% Cytosine. What are the percentages of Guanine, Adenine, and Thymine?',
          solution:
            '%G = %C = 18%. Total G + C = 36%. Therefore, A + T = 100% - 36% = 64%. Since %A = %T, %A = 64% / 2 = 32%, and %T = 32%.',
        },
      },
    },
    {
      id: 'dna-replication',
      title: 'DNA Replication: Copying the Code',
      subheading: 'Semiconservative replication, helicase, DNA Polymerase, and Okazaki fragments',
      laymanExplanation:
        'Before a cell can divide into two new daughter cells, it must make an exact, error-free copy of its entire DNA genome. This process is semiconservative: each newly created double helix contains one original "parental" template strand and one newly synthesized strand. DNA Polymerase is the superstar enzyme that reads the template and attaches matching nucleotides, but it has two major quirks: it can only add nucleotides to the 3′ end of an existing strand (synthesizing 5′ to 3′), and it cannot start from scratch—it requires a temporary RNA primer laid down by Primase.',
      realWorldAnalogy:
        'Think of DNA Helicase as a zipper slider unzipping a jacket. On one side (the leading strand), a tailor can sew continuously following right behind the zipper. But on the other side (the lagging strand), the zipper is opening in the opposite direction from how the tailor sews! So the tailor has to sew in short backward dashes, wait for more zipper to open, sew another dash, and then glue the patches together with tape (DNA Ligase). These stitched backward patches are Okazaki fragments!',
      keyTerms: [
        {
          term: 'Helicase',
          definition:
            'The enzyme that unwinds and unzips the DNA double helix by breaking hydrogen bonds between complementary base pairs at the replication fork.',
        },
        {
          term: 'Topoisomerase (Gyrase)',
          definition:
            'An enzyme that relieves the torsional strain and supercoiling ahead of the replication fork by making temporary nicks in the phosphate backbone.',
        },
        {
          term: 'Leading vs. Lagging Strand',
          definition:
            'The leading strand is synthesized continuously toward the replication fork in the 5′-to-3′ direction. The lagging strand is synthesized discontinuously away from the fork in short Okazaki fragments.',
        },
        {
          term: 'DNA Ligase',
          definition:
            'The molecular "glue" enzyme that seals phosphodiester nicks between Okazaki fragments on the lagging strand.',
        },
      ],
    },
    {
      id: 'transcription-and-splicing',
      title: 'Transcription & Eukaryotic RNA Processing',
      subheading: 'Copying DNA to mRNA, promoters, introns, exons, and the spliceosome',
      laymanExplanation:
        'In transcription, RNA Polymerase binds to a specific starting sequence on DNA called a promoter (often containing a TATA box) and copies a gene into a single-stranded messenger RNA (pre-mRNA) transcript. RNA uses Uracil (U) instead of Thymine (T) and ribose sugar instead of deoxyribose. Before leaving the nucleus, the pre-mRNA gets protected with a 5′ modified guanosine cap and a 3′ poly-A tail. Crucially, non-coding interruptions called introns ("junk DNA") are sliced out by molecular machines called spliceosomes, while the coding segments called exons are stitched together.',
      realWorldAnalogy:
        'Think of filming a movie. You shoot hours of footage, including bloopers, false starts, and lunch breaks (introns). In the editing room (the spliceosome), the director cuts out all the bloopers and splices together only the dramatic scenes (exons) into the final 2-hour movie release. By cutting and pasting different scenes, you can even make a director’s cut or a theatrical cut from the same raw footage—this is Alternative Splicing, allowing one gene to produce multiple distinct proteins!',
      keyTerms: [
        {
          term: 'Promoter & TATA Box',
          definition:
            'A DNA control region upstream of a gene where transcription factors and RNA Polymerase bind to initiate RNA synthesis.',
        },
        {
          term: 'Introns vs. Exons',
          definition:
            'Introns are intervening, non-coding RNA sequences excised during splicing. Exons are expressed sequences spliced together to form mature mRNA.',
        },
        {
          term: 'Spliceosome',
          definition:
            'A large ribonucleoprotein complex composed of snRNAs and proteins (snRNPs) that recognizes splice sites and cuts out introns.',
        },
        {
          term: '5′ Cap and Poly-A Tail',
          definition:
            'Protective modifications added to eukaryotic pre-mRNA: a 7-methylguanosine cap at the 5′ end and a string of 100–250 adenines at the 3′ end to facilitate nuclear export and prevent enzymatic degradation.',
        },
      ],
    },
    {
      id: 'translation-and-genetic-code',
      title: 'Translation: The Ribosomal Assembly Line',
      subheading: 'Codons, tRNA anticodons, A-P-E ribosomal sites, and mutations',
      laymanExplanation:
        'Translation occurs in the cytoplasm on ribosomes. The mature mRNA is read in 3-letter words called codons. Transfer RNA (tRNA) molecules serve as bilingual translators: each tRNA has a 3-letter anticodon at one end that matches an mRNA codon, and carries the corresponding specific amino acid at the other end. The ribosome has three active slots: the A (aminoacyl) site where incoming tRNAs land, the P (peptidyl) site where the growing protein chain is held, and the E (exit) site where empty tRNAs depart. Translation always begins at the start codon AUG (encoding Methionine) and stops when a release factor binds to UAA, UAG, or UGA.',
      realWorldAnalogy:
        'Think of translation as a high-tech robotic factory assembly line. The mRNA is a long punch-tape blueprint. Small delivery drones (tRNAs) read each 3-letter stamp on the blueprint, deliver the exact specified colored LEGO brick (amino acid), click it onto the growing tower, and fly away through the exit door (E site). When the blueprint reaches a STOP stamp, the crane releases the finished tower into the cell!',
      keyTerms: [
        {
          term: 'Codon & Anticodon',
          definition:
            'A codon is a 3-nucleotide sequence on mRNA specifying an amino acid or stop signal. An anticodon is the complementary 3-nucleotide sequence on tRNA.',
        },
        {
          term: 'Degenerate / Redundant Code',
          definition:
            'The property that 64 possible codons specify only 20 standard amino acids, meaning multiple codons can code for the same amino acid (e.g., UUU and UUC both code for Phenylalanine).',
        },
        {
          term: 'Wobble Hypothesis',
          definition:
            'Flexibility in base pairing between the 3rd nucleotide of an mRNA codon and the 1st nucleotide of a tRNA anticodon, allowing one tRNA to recognize multiple synonymous codons.',
        },
        {
          term: 'Point Mutations: Silent, Missense, Nonsense',
          definition:
            'A silent mutation changes a codon without changing the amino acid. A missense mutation changes one amino acid into another (e.g., sickle cell hemoglobin). A nonsense mutation changes an amino acid codon into a premature STOP codon, truncating the protein.',
        },
      ],
    },
  ],
  flashcards: [
    {
      id: 'cd-fc-1',
      term: 'Central Dogma',
      category: 'Process',
      front: 'What is the Central Dogma of Molecular Biology?',
      back: 'The foundational concept proposed by Francis Crick stating that genetic information flows unidirectionally from DNA to RNA to Protein: DNA -(transcription)-> RNA -(translation)-> Protein.',
      example: 'Retroviruses like HIV violate this flow by using reverse transcriptase to copy RNA back into DNA.',
      tip: 'Mnemonic: Do Not Alter Really Pretty People (DNA -> RNA -> Protein).',
    },
    {
      id: 'cd-fc-2',
      term: 'Purines vs. Pyrimidines',
      category: 'Definition',
      front: 'How do you distinguish Purines from Pyrimidines structurally and by base names?',
      back: 'Purines have two carbon-nitrogen rings and include Adenine (A) and Guanine (G). Pyrimidines have a single carbon-nitrogen ring and include Cytosine (C), Thymine (T), and Uracil (U).',
      tip: 'Mnemonic: "Pure As Gold" (A, G = Purines). "CUT the Py" (C, U, T = Pyrimidines).',
    },
    {
      id: 'cd-fc-3',
      term: 'Antiparallel Strands',
      category: 'Concept',
      front: 'What does it mean that DNA strands are "antiparallel"?',
      back: 'The two strands run in opposite 5′-to-3′ chemical orientations relative to each other: one strand runs 5′ -> 3′, while its complementary partner runs 3′ -> 5′.',
      example: 'DNA Polymerase reads the template 3′ -> 5′ and synthesizes the new strand 5′ -> 3′.',
    },
    {
      id: 'cd-fc-4',
      term: 'DNA Helicase',
      category: 'Definition',
      front: 'What is the primary function of DNA Helicase during replication?',
      back: 'Helicase breaks the hydrogen bonds holding complementary base pairs together, unwinding and separating the double helix to create the replication fork.',
    },
    {
      id: 'cd-fc-5',
      term: 'Topoisomerase (Gyrase)',
      category: 'Definition',
      front: 'Why is Topoisomerase essential ahead of the replication fork?',
      back: 'As helicase unwinds the double helix, the DNA ahead becomes supercoiled and overwound. Topoisomerase cuts, unswivels, and reseals the backbone to relieve this torsional strain.',
    },
    {
      id: 'cd-fc-6',
      term: 'Okazaki Fragments',
      category: 'Concept',
      front: 'Why are Okazaki fragments formed on the lagging strand?',
      back: 'Because DNA Polymerase can only synthesize in the 5′ -> 3′ direction, the lagging strand must be synthesized discontinuously in short chunks as the replication fork opens.',
      tip: 'Fragments are later joined into a continuous strand by DNA Ligase.',
    },
    {
      id: 'cd-fc-7',
      term: 'DNA Polymerase III vs. I',
      category: 'Process',
      front: 'What are the distinct roles of DNA Polymerase III and DNA Polymerase I in E. coli?',
      back: 'DNA Pol III synthesizes the bulk of the new DNA strands. DNA Pol I removes the RNA primers using 5′->3′ exonuclease activity and replaces them with DNA nucleotides.',
    },
    {
      id: 'cd-fc-8',
      term: 'RNA Splicing',
      category: 'Process',
      front: 'What occurs during eukaryotic RNA splicing?',
      back: 'The spliceosome removes non-coding sequences (introns) from pre-mRNA and ligates coding sequences (exons) together to generate a continuous, translatable mature mRNA.',
      tip: 'Exons EXit the nucleus and are EXpressed. Introns stay IN the nucleus.',
    },
    {
      id: 'cd-fc-9',
      term: '5′ Cap and Poly-A Tail',
      category: 'Definition',
      front: 'What are the two major end-modifications added to eukaryotic pre-mRNA?',
      back: 'A 7-methylguanosine cap at the 5′ end (facilitates ribosome binding and protects from 5′ exonucleases) and a poly-A tail of 100–250 adenines at the 3′ end (protects from degradation and aids nuclear export).',
    },
    {
      id: 'cd-fc-10',
      term: 'Start and Stop Codons',
      category: 'Definition',
      front: 'What are the standard universal START and STOP codons?',
      back: 'START: AUG (codes for Methionine). STOP codons: UAA, UAG, UGA (do not code for amino acids; bind release factors to terminate translation).',
      tip: 'Mnemonic for stop codons: U Are Away (UAA), U Are Gone (UAG), U Go Away (UGA).',
    },
    {
      id: 'cd-fc-11',
      term: 'Ribosomal Sites (A, P, E)',
      category: 'Process',
      front: 'What are the functions of the A, P, and E sites in the ribosome?',
      back: 'A site (Aminoacyl): binds incoming charged tRNA. P site (Peptidyl): holds the tRNA carrying the growing polypeptide chain. E site (Exit): where uncharged tRNAs detach.',
      tip: 'Mnemonic: APE - Arrival, Polypeptide, Exit.',
    },
    {
      id: 'cd-fc-12',
      term: 'Wobble Hypothesis',
      category: 'Concept',
      front: 'What is Francis Crick’s Wobble Hypothesis?',
      back: 'The third base of an mRNA codon and the first base of a tRNA anticodon have flexible, non-standard hydrogen bonding, allowing a single tRNA to pair with multiple codons specifying the same amino acid.',
    },
    {
      id: 'cd-fc-13',
      term: 'Silent Mutation',
      category: 'Concept',
      front: 'What defines a silent (synonymous) mutation?',
      back: 'A nucleotide substitution that alters a codon but, due to genetic code degeneracy, still codes for the exact same amino acid, causing no change in the resulting protein.',
      example: 'GAA mutating to GAG both code for Glutamic acid.',
    },
    {
      id: 'cd-fc-14',
      term: 'Missense Mutation',
      category: 'Disease/Example',
      front: 'What is a missense mutation, and what is a classic human disease caused by one?',
      back: 'A single nucleotide substitution that changes one amino acid into a different amino acid. Sickle Cell Anemia is caused by a missense mutation in the beta-globin gene (GAG -> GUG, replacing Glutamic acid with Valine).',
    },
    {
      id: 'cd-fc-15',
      term: 'Nonsense Mutation',
      category: 'Definition',
      front: 'What is a nonsense mutation, and why is it usually disastrous?',
      back: 'A point mutation that converts an amino acid codon into a premature STOP codon (UAA, UAG, UGA), leading to early termination and a nonfunctional, truncated protein.',
    },
    {
      id: 'cd-fc-16',
      term: 'Frameshift Mutation',
      category: 'Concept',
      front: 'What causes a frameshift mutation, and how does it affect translation?',
      back: 'The insertion or deletion of a number of nucleotides not divisible by 3, altering the triplet reading frame for all subsequent codons downstream and drastically changing the amino acid sequence.',
    },
  ],
  quiz: [
    {
      id: 1,
      question:
        'Which pairing correctly represents the hydrogen bonding between complementary nitrogenous bases in double-stranded DNA?',
      options: [
        'Adenine pairs with Thymine (2 hydrogen bonds); Guanine pairs with Cytosine (3 hydrogen bonds)',
        'Adenine pairs with Cytosine (3 hydrogen bonds); Guanine pairs with Thymine (2 hydrogen bonds)',
        'Adenine pairs with Guanine (2 hydrogen bonds); Thymine pairs with Cytosine (3 hydrogen bonds)',
        'Adenine pairs with Uracil (3 hydrogen bonds); Guanine pairs with Cytosine (2 hydrogen bonds)',
      ],
      correctIndex: 0,
      explanation:
        'Adenine and Thymine pair via 2 hydrogen bonds (A=T), while Guanine and Cytosine pair via 3 hydrogen bonds (G≡C). This makes G-C rich DNA thermally more stable than A-T rich DNA.',
    },
    {
      id: 2,
      question:
        'A forensic DNA sample contains 32% Adenine in its double-stranded genome. What is the expected percentage of Cytosine according to Chargaff’s Rules?',
      options: ['32%', '18%', '36%', '64%'],
      correctIndex: 1,
      explanation:
        'According to Chargaff’s Rules, %T = %A = 32%, so A + T = 64%. The remaining bases must be G + C = 100% - 64% = 36%. Since %G = %C, Cytosine constitutes 36% / 2 = 18%.',
    },
    {
      id: 3,
      question:
        'Why are the two complementary strands of a DNA double helix referred to as "antiparallel"?',
      options: [
        'They rotate in clockwise and counterclockwise directions simultaneously',
        'One strand has a purine backbone while the opposite strand has a pyrimidine backbone',
        'One strand is oriented in the 5′-to-3′ direction while the complementary strand runs in the 3′-to-5′ direction',
        'One strand codes for functional proteins while the opposite strand is never transcribed or replicated',
      ],
      correctIndex: 2,
      explanation:
        'DNA strands run in opposite polarities: the 5′ end of one strand matches the 3′ end of its complementary partner strand. This antiparallel orientation is fundamental to how polymerases read and synthesize nucleic acids.',
    },
    {
      id: 4,
      question:
        'Which enzyme is directly responsible for relieving the torsional strain and positive supercoiling created ahead of the advancing replication fork?',
      options: ['DNA Helicase', 'Topoisomerase (DNA Gyrase)', 'DNA Ligase', 'Single-Strand DNA-Binding Protein (SSB)'],
      correctIndex: 1,
      explanation:
        'As DNA Helicase unwinds the double helix, tension builds ahead of the fork. Topoisomerase (DNA Gyrase) introduces transient cuts in the phosphodiester backbone to allow unwinding, preventing torsional snapping.',
    },
    {
      id: 5,
      question:
        'Why does DNA synthesis on the lagging strand occur discontinuously in Okazaki fragments?',
      options: [
        'DNA Polymerase can only synthesize DNA in the 5′-to-3′ direction, moving away from the opening replication fork on that template',
        'RNA primers cannot bind to the lagging strand due to steric hindrance',
        'Topoisomerase constantly breaks the lagging strand into pieces to prevent transcription',
        'The lagging strand contains Uracil instead of Thymine, which stalls DNA Polymerase',
      ],
      correctIndex: 0,
      explanation:
        'Because DNA Polymerase can only add nucleotides to the 3′-OH end of an existing strand (synthesizing 5′ to 3′), the lagging strand must be synthesized in backward segments (Okazaki fragments) as the replication fork unzips.',
    },
    {
      id: 6,
      question:
        'What is the primary role of Primase during DNA replication?',
      options: [
        'It seals the nicks between adjacent Okazaki fragments on the lagging strand',
        'It synthesizes a short complementary RNA primer to provide a free 3′-OH group for DNA Polymerase to extend',
        'It proofreads newly synthesized DNA strands and excises mismatched bases',
        'It hydrolyzes the hydrogen bonds between parental DNA strands at the origin',
      ],
      correctIndex: 1,
      explanation:
        'DNA Polymerase cannot begin synthesis de novo (from scratch); it requires an existing 3′-OH group. Primase synthesizes a short complementary RNA oligonucleotide primer that DNA Polymerase can extend.',
    },
    {
      id: 7,
      question:
        'Which enzyme in E. coli removes the RNA primers and replaces them with deoxyribonucleotides?',
      options: ['DNA Polymerase III', 'DNA Polymerase I', 'DNA Ligase', 'RNA Polymerase II'],
      correctIndex: 1,
      explanation:
        'DNA Polymerase I possesses unique 5′->3′ exonuclease activity that allows it to chew up RNA primers ahead while simultaneously synthesizing replacement DNA. DNA Ligase then seals the final phosphodiester nick.',
    },
    {
      id: 8,
      question:
        'What is the function of the 5′ 7-methylguanosine cap added to eukaryotic pre-mRNA?',
      options: [
        'It serves as the binding site for DNA Polymerase during transcription initiation',
        'It protects the transcript from 5′ exonucleases and assists in ribosome recognition and nuclear export',
        'It acts as an intron splicing signal recognized by snRNPs',
        'It codes for the initial Methionine residue in the synthesized polypeptide',
      ],
      correctIndex: 1,
      explanation:
        'The 5′ cap protects nascent pre-mRNA from enzymatic degradation by cytoplasmic nucleases and serves as an essential recognition beacon for the small ribosomal subunit during translation initiation.',
    },
    {
      id: 9,
      question:
        'In eukaryotic gene expression, what are introns and exons?',
      options: [
        'Introns are protein-coding regions; exons are non-coding regulatory sequences',
        'Introns are non-coding sequences excised by the spliceosome; exons are coding sequences spliced together to form mature mRNA',
        'Introns are found only in prokaryotes; exons are found exclusively in eukaryotes',
        'Introns are translated by ribosomes; exons form the poly-A tail',
      ],
      correctIndex: 1,
      explanation:
        'Introns are intervening sequences removed from pre-mRNA transcripts. Exons are expressed sequences that are ligated together to produce the translatable mRNA coding sequence.',
    },
    {
      id: 10,
      question:
        'What molecular machine carries out RNA splicing in the eukaryotic nucleus?',
      options: ['The Proteasome', 'The Spliceosome (composed of snRNAs and proteins)', 'The Ribosome', 'DNA Polymerase II'],
      correctIndex: 1,
      explanation:
        'The spliceosome is a large ribonucleoprotein complex consisting of small nuclear RNAs (snRNAs) and associated proteins (snRNPs, pronounced "snurps") that catalyzes intron excision and exon ligation.',
    },
    {
      id: 11,
      question:
        'If a mature mRNA contains the codon sequence 5′-AUG-3′, what is the complementary anticodon sequence found on the corresponding initiator tRNA?',
      options: ['5′-AUG-3′', '3′-UAC-5′', '5′-UAC-3′', '3′-AUG-5′'],
      correctIndex: 1,
      explanation:
        'Complementary base pairing is antiparallel. To match mRNA 5′-AUG-3′, the tRNA anticodon must be antiparallel: 3′-UAC-5′ (or written 5′-CAU-3′).',
    },
    {
      id: 12,
      question:
        'Which codon is universally recognized as the canonical START codon in eukaryotic translation, and which amino acid does it encode?',
      options: [
        'UAA, encoding Tryptophan',
        'AUG, encoding Methionine',
        'UAG, encoding Alanine',
        'GAU, encoding Aspartic acid',
      ],
      correctIndex: 1,
      explanation:
        'AUG is the universal start codon in messenger RNA. It sets the reading frame and codes for the amino acid Methionine (Met).',
    },
    {
      id: 13,
      question:
        'What happens when a translating ribosome encounters an in-frame stop codon such as UAA, UAG, or UGA?',
      options: [
        'A specialized stop tRNA carrying Methionine binds and stalls the ribosome',
        'A protein release factor binds to the A site, catalyzing hydrolysis and detachment of the finished polypeptide',
        'The ribosome reverses direction and re-transcribes the mRNA into cDNA',
        'The spliceosome cuts the mRNA transcript at that point',
      ],
      correctIndex: 1,
      explanation:
        'Stop codons do not specify amino acids and have no matching tRNAs. Instead, protein release factors recognize the stop codon in the ribosomal A site, hydrolyzing the ester bond between the tRNA and the polypeptide, releasing the protein.',
    },
    {
      id: 14,
      question:
        'What does it mean that the genetic code is "degenerate" (or redundant)?',
      options: [
        'One codon can specify multiple different amino acids depending on cellular temperature',
        'Multiple distinct codons can specify the exact same amino acid',
        'The genetic code degrades and mutates over time within an organism',
        'Only 20 of the 64 codons code for anything; the rest cause cell death',
      ],
      correctIndex: 1,
      explanation:
        'With 64 possible 3-letter codons ($4^3$) and only 20 standard amino acids, most amino acids are encoded by more than one codon (e.g., Leucine is encoded by 6 different codons). The code is redundant, but never ambiguous.',
    },
    {
      id: 15,
      question:
        'According to the Wobble Hypothesis, non-standard base pairing is most frequently tolerated at which position?',
      options: [
        'Between the first base of the mRNA codon and the third base of the tRNA anticodon',
        'Between the third base (3′ end) of the mRNA codon and the first base (5′ end) of the tRNA anticodon',
        'Between the second base of both codon and anticodon',
        'Exclusively at the 5′ cap of the mRNA transcript',
      ],
      correctIndex: 1,
      explanation:
        'Francis Crick’s Wobble Hypothesis explains that spatial constraints at the third position (3′ base) of the mRNA codon are less strict, allowing non-Watson-Crick base pairing (wobble) with the 5′ base of the tRNA anticodon.',
    },
    {
      id: 16,
      question:
        'A point mutation changes a codon from 5′-UUC-3′ to 5′-UUU-3′. Both codons code for the amino acid Phenylalanine. What type of mutation is this?',
      options: ['Missense mutation', 'Silent (synonymous) mutation', 'Nonsense mutation', 'Frameshift mutation'],
      correctIndex: 1,
      explanation:
        'A silent (or synonymous) mutation alters the nucleotide sequence of a codon, but because of genetic code degeneracy, the translated amino acid remains identical, typically producing an unaltered protein.',
    },
    {
      id: 17,
      question:
        'Sickle Cell Anemia is caused by a point mutation in the beta-globin gene that converts a GAG codon into a GUG codon, replacing Glutamic acid with Valine. What class of mutation is this?',
      options: ['Silent mutation', 'Missense mutation', 'Nonsense mutation', 'Neutral chromosomal inversion'],
      correctIndex: 1,
      explanation:
        'A missense mutation is a single nucleotide substitution that results in a codon specifying a different amino acid. The substitution of hydrophobic Valine for hydrophilic Glutamic acid causes hemoglobin to polymerize into sickle fibers.',
    },
    {
      id: 18,
      question:
        'What type of mutation converts an amino acid-specifying codon into a premature STOP codon (e.g., UAC to UAA)?',
      options: ['Silent mutation', 'Missense mutation', 'Nonsense mutation', 'Splice-site retention'],
      correctIndex: 2,
      explanation:
        'A nonsense mutation creates an early STOP codon, leading to premature termination of translation. The resulting truncated polypeptide is almost always nonfunctional or targeted for rapid degradation.',
    },
    {
      id: 19,
      question:
        'Which of the following genetic alterations will definitively cause a frameshift mutation during translation?',
      options: [
        'Insertion of exactly 3 nucleotides into the coding sequence',
        'Deletion of 1 nucleotide from an exon',
        'Substitution of Adenine for Guanine in a wobble position',
        'Deletion of 6 consecutive nucleotides from a gene',
      ],
      correctIndex: 1,
      explanation:
        'Because the ribosome reads mRNA in triplets (codons of 3 bases), inserting or deleting any number of nucleotides not divisible by 3 (such as 1 or 2 bases) alters the downstream reading frame, causing a catastrophic frameshift mutation.',
    },
    {
      id: 20,
      question:
        'In which direction does RNA Polymerase read the template DNA strand, and in which direction does it synthesize the nascent RNA transcript?',
      options: [
        'Reads template 3′ to 5′; synthesizes RNA 5′ to 3′',
        'Reads template 5′ to 3′; synthesizes RNA 3′ to 5′',
        'Reads template 5′ to 3′; synthesizes RNA 5′ to 3′',
        'Reads template 3′ to 5′; synthesizes RNA 3′ to 5′',
      ],
      correctIndex: 0,
      explanation:
        'All known nucleic acid polymerases (DNA and RNA polymerases) synthesize new strands in the 5′-to-3′ direction by adding nucleotides to the 3′-OH group. To maintain antiparallel alignment, they must read the template strand in the 3′-to-5′ direction.',
    },
  ],
};
