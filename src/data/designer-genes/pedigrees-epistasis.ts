import { DesignerGenesTopic } from '@/types/designer-genes';

export const pedigreesEpistasisTopic: DesignerGenesTopic = {
  slug: 'pedigrees-epistasis',
  topicNumber: 5,
  title: 'Pedigree Analysis & Epistasis',
  subtitle: 'Family Tree Charting, 6 Inheritance Modes, and Multi-Gene Epistatic Pathways',
  badge: 'Topic 05 • Pedigrees & Epistasis',
  accentColor: 'amber',
  sourceDeck: 'Pedigrees and epistasis 26_27.pptx',
  freshmanSummary:
    'Pedigrees are the diagnostic family trees used by medical geneticists and genetic counselors to trace hereditary disorders across generations. High school freshmen learn how to interpret standard pedigree symbols, identify all 6 major modes of inheritance with 100% certainty, and unravel Epistasis—where one gene acts as a master biochemical switch that masks or overrides a completely separate gene.',
  diagram: {
    type: 'pedigree-epistasis',
    title: 'Pedigree Symbol Key & Epistatic Biochemical Pathways',
    caption:
      'Standard pedigree symbols (squares, circles, proband arrows, consanguinity) alongside the classic 2-step biochemical pathway of recessive epistasis (Labrador coat colors: 9 Black, 3 Brown, 4 Yellow).',
    laymanExplanation:
      'Think of an epistatic pathway like an assembly line with two switches. Switch 1 (Gene B) decides whether to paint a car black or brown. But Switch 2 (Gene E) is the master electricity breaker! If someone flips off the master breaker (homozygous recessive ee), the entire factory goes dark, no paint can be sprayed, and all cars come out primer yellow—regardless of what Switch 1 was set to! That is Recessive Epistasis (9:3:4).',
  },
  sections: [
    {
      id: 'pedigree-conventions',
      title: 'Pedigree Structure & Standard Conventions',
      subheading: 'Squares, circles, probands, consanguinity, and generation numbering',
      laymanExplanation:
        'A pedigree is a diagrammatic representation of ancestral relationships and the transmission of genetic traits over multiple generations. By international convention: squares represent biological males, circles represent biological females, and diamonds indicate unspecified sex. Shaded shapes represent individuals affected by the trait, while open shapes represent unaffected individuals. A horizontal line between a male and female indicates mating; a double horizontal line indicates consanguinity (inbreeding between biological relatives). Roman numerals (I, II, III) designate generations from oldest to youngest, while Arabic numerals (1, 2, 3) number individuals left-to-right within each generation.',
      realWorldAnalogy:
        'Think of a pedigree as a royal family tree with detective clues. An arrow pointing to a person labeled "P" identifies the Proband—the first family member who walked into the clinic asking for genetic testing. Every branch, line, and shaded symbol helps the genetic detective determine who passed the mutation and calculate exact future risks.',
      keyTerms: [
        {
          term: 'Proband (Index Case)',
          definition:
            'The affected individual who first brings a family to medical attention for genetic investigation, denoted on pedigrees by an arrow labeled "P".',
        },
        {
          term: 'Consanguinity',
          definition:
            'Mating between closely related individuals (e.g., first cousins), represented by a double horizontal line on a pedigree, which significantly increases the risk of homozygous recessive disorders.',
        },
        {
          term: 'Obligate Carrier',
          definition:
            'An individual who must carry a mutant allele based on pedigree analysis (e.g., an unaffected father whose daughter has an X-linked recessive condition).',
        },
      ],
    },
    {
      id: 'six-modes-of-inheritance',
      title: 'Deciphering the 6 Modes of Inheritance',
      subheading: 'Autosomal, X-linked, Y-linked, and Mitochondrial transmission rules',
      laymanExplanation:
        'To identify the inheritance mode of a trait on a pedigree, geneticists follow simple diagnostic elimination rules: 1. Autosomal Recessive skips generations; unaffected parents can have affected offspring. 2. Autosomal Dominant does NOT skip generations; every affected individual has at least one affected parent. 3. X-Linked Recessive affects biological males far more frequently than females; carrier mothers pass the condition to 50% of sons, and an affected father can NEVER transmit it to his sons (he gives them a Y chromosome). 4. X-Linked Dominant: affected fathers transmit the condition to 100% of their daughters and 0% of their sons. 5. Y-Linked (Holandric): transmitted from father to 100% of sons; females are never affected. 6. Mitochondrial: 100% maternal transmission (an affected mother passes to all children; an affected father passes to none).',
      realWorldAnalogy:
        'Think of each mode of inheritance as a unique delivery truck signature: If only boys receive the package from their mothers, look for X-linked recessive. If every single child receives the package only when Mom is the sender, it is a Mitochondrial delivery (since the egg provides all cytoplasmic organelles, while the sperm only delivers a nucleus)!',
      keyTerms: [
        {
          term: 'Autosomal Recessive',
          definition:
            'Inheritance where two mutant alleles are required for disease expression; typically skips generations and affects males and females in equal frequencies.',
        },
        {
          term: 'Autosomal Dominant',
          definition:
            'Inheritance where a single mutant allele causes the disease phenotype; appears in every generation without skipping.',
        },
        {
          term: 'X-Linked Recessive',
          definition:
            'Inheritance linked to the X chromosome; predominantly affects hemizygous males ($X^b Y$) and is transmitted through asymptomatic female carriers ($X^B X^b$).',
        },
        {
          term: 'Mitochondrial (Maternal) Inheritance',
          definition:
            'Transmission of mitochondrial DNA exclusively through the maternal lineage. All children of an affected mother inherit the condition; children of an affected father never do.',
        },
      ],
    },
    {
      id: 'epistasis-pathways',
      title: 'Epistasis: Multi-Gene Biochemical Interactions',
      subheading: 'Recessive epistasis (9:3:4), Dominant epistasis (12:3:1), and Complementary genes (9:7)',
      laymanExplanation:
        'Epistasis occurs when an allele at one gene locus masks, inhibits, or overrides the phenotypic expression of alleles at a completely different gene locus. Unlike dominance (which describes interactions between alleles at the SAME locus), epistasis describes interactions between DIFFERENT gene loci. In dihybrid crosses, epistasis modifies the classic 9:3:3:1 ratio into signature sums. The most famous example is coat color in Labrador retrievers (Recessive Epistasis, 9:3:4): Gene B determines pigment color (B_ black, bb brown/chocolate), but Gene E controls pigment deposition into hair. If a dog is homozygous recessive ee, no pigment can enter the hair shaft, producing a yellow lab regardless of B or b alleles!',
      realWorldAnalogy:
        'Imagine making a neon sign. Gene B decides whether the neon gas glows Blue or Green. But Gene E is the electrical plug in the wall! If the plug is unplugged (ee), the sign will not light up at all—it stays clear glass (yellow coat). The plug is epistatic to the gas color.',
      keyTerms: [
        {
          term: 'Epistasis',
          definition:
            'A form of gene interaction in which one gene locus alters or completely masks the phenotypic expression of a second, independent gene locus.',
        },
        {
          term: 'Recessive Epistasis (9:3:4)',
          definition:
            'A dihybrid ratio where homozygous recessiveness at one locus ($ee$) masks both alleles at a second locus ($B\\_$ or $bb$), as seen in Labrador coat colors (9 Black, 3 Chocolate, 4 Yellow).',
        },
        {
          term: 'Dominant Epistasis (12:3:1)',
          definition:
            'A dihybrid ratio where a single dominant allele at one locus ($W\\_$) masks the expression of another gene, as seen in summer squash fruit color (12 White, 3 Yellow, 1 Green).',
        },
        {
          term: 'Complementary Genes (9:7)',
          definition:
            'Duplicate recessive epistasis where a dominant allele at BOTH loci ($A\\_B\\_$) is required to produce the functional phenotype; homozygous recessiveness at either locus produces a blank/white phenotype (e.g., sweet pea flower color).',
        },
      ],
      mathBreakdown: {
        name: 'Epistatic Ratio Breakdown from 9:3:3:1',
        formula: '9\\ A\\_B\\_ : 3\\ A\\_bb : 3\\ aaB\\_ : 1\\ aabb \\implies \\text{Epistatic Class Groupings}',
        variables: 'Combine the classic 16ths based on which genotypes produce identical phenotypes.',
        walkThrough:
          '1. Recessive Epistasis (9:3:4): 9 A_B_ (black) : 3 A_bb (brown) : [3 aaB_ + 1 aabb = 4 ee yellow]. 2. Dominant Epistasis (12:3:1): [9 W_Y_ + 3 W_yy = 12 White] : 3 wwY_ (Yellow) : 1 wwyy (Green). 3. Complementary (9:7): 9 C_P_ (Purple) : [3 C_pp + 3 ccP_ + 1 ccpp = 7 White]. Notice every epistatic ratio always adds up to 16!',
        practiceProblem: {
          problem:
            'A cross between two dihybrid purple sweet pea plants (CcPp × CcPp) yields purple and white flowers. How many out of 64 offspring are expected to be white?',
          solution:
            'Complementary genes give a 9 purple : 7 white ratio. The fraction of white flowers is 7/16. For 64 offspring: 64 × (7/16) = 28 white-flowered plants.',
        },
      },
    },
  ],
  flashcards: [
    {
      id: 'pe-fc-1',
      term: 'Pedigree Symbol: Square vs. Circle',
      category: 'Definition',
      front: 'What do squares and circles represent on a standard genetic pedigree chart?',
      back: 'Squares represent biological males; circles represent biological females. Diamonds represent individuals whose biological sex is unknown or unspecified.',
    },
    {
      id: 'pe-fc-2',
      term: 'Consanguinity Symbol',
      category: 'Definition',
      front: 'How is consanguineous mating (inbreeding) denoted on a pedigree chart?',
      back: 'By a double horizontal line connecting a male and female (e.g., between first cousins).',
    },
    {
      id: 'pe-fc-3',
      term: 'Proband',
      category: 'Definition',
      front: 'What is a proband, and how is it marked on a pedigree?',
      back: 'The first affected family member who seeks medical attention and brings the family to clinical genetic evaluation. Marked by an arrow pointing to the individual, often labeled with a "P".',
    },
    {
      id: 'pe-fc-4',
      term: 'Autosomal Recessive Hallmarks',
      category: 'Concept',
      front: 'What are the two primary pedigree hallmarks of an autosomal recessive condition?',
      back: '1. The trait frequently skips generations (unaffected parents have affected children: Aa × Aa -> aa). 2. Males and females are affected in roughly equal numbers.',
      example: 'Cystic Fibrosis, Tay-Sachs, Sickle Cell Disease, Albinism.',
    },
    {
      id: 'pe-fc-5',
      term: 'Autosomal Dominant Hallmarks',
      category: 'Concept',
      front: 'What are the primary pedigree hallmarks of an autosomal dominant condition?',
      back: '1. The trait does NOT skip generations (every affected individual has at least one affected parent). 2. Unaffected parents never transmit the trait. 3. Equal male/female incidence.',
      example: 'Huntington Disease, Marfan Syndrome, Achondroplasia.',
    },
    {
      id: 'pe-fc-6',
      term: 'X-Linked Recessive Transmission Rule',
      category: 'Concept',
      front: 'Can an affected father transmit an X-linked recessive condition to his biological sons?',
      back: 'No, NEVER! A father contributes a Y chromosome to his sons and his single X chromosome to his daughters. Therefore, fathers cannot pass X-linked traits to sons.',
    },
    {
      id: 'pe-fc-7',
      term: 'X-Linked Dominant Hallmarks',
      category: 'Concept',
      front: 'What is the signature transmission pattern of an X-linked dominant trait from an affected father?',
      back: 'An affected father transmits the condition to 100% of his daughters (who all receive his affected X) and 0% of his sons (who receive his Y chromosome).',
      example: 'Hypophosphatemic Rickets, Fragile X Syndrome (semi-dominant).',
    },
    {
      id: 'pe-fc-8',
      term: 'Y-Linked (Holandric) Inheritance',
      category: 'Concept',
      front: 'What defines Y-linked inheritance on a pedigree?',
      back: 'Direct father-to-son transmission only. 100% of the sons of an affected father are affected, and biological females can never inherit or transmit the condition.',
      example: 'Hypertrichosis of the ears, SRY-related sex determination.',
    },
    {
      id: 'pe-fc-9',
      term: 'Mitochondrial Maternal Inheritance',
      category: 'Concept',
      front: 'What is the definitive hallmark of mitochondrial (maternal) inheritance on a pedigree?',
      back: 'An affected mother transmits the trait to 100% of her biological children (both sons and daughters). An affected father transmits the trait to 0% of his children.',
      example: 'Leber Hereditary Optic Neuropathy (LHON), MERRF syndrome.',
    },
    {
      id: 'pe-fc-10',
      term: 'Epistasis vs. Dominance',
      category: 'Concept',
      front: 'What is the fundamental difference between dominance and epistasis?',
      back: 'Dominance describes the interaction between two different alleles at the SAME gene locus (e.g., A vs. a). Epistasis describes an interaction where alleles at ONE gene locus mask or alter alleles at a DIFFERENT gene locus (e.g., gene E masking gene B).',
    },
    {
      id: 'pe-fc-11',
      term: 'Recessive Epistasis (9:3:4)',
      category: 'Formula',
      front: 'What phenotypic ratio indicates recessive epistasis in an AaBb × AaBb dihybrid cross?',
      back: 'A 9:3:4 phenotypic ratio. Homozygosity for the recessive allele at one locus (e.g., ee) completely overrides both dominant and recessive alleles at the other locus.',
      example: 'Labrador Retriever coat color: 9 Black (B_E_), 3 Chocolate (bbE_), 4 Yellow (__ee).',
    },
    {
      id: 'pe-fc-12',
      term: 'Labrador Retriever Coat Genetics',
      category: 'Disease/Example',
      front: 'What are the genotypes for Black, Chocolate (Brown), and Yellow Labrador retrievers?',
      back: 'Black: B_E_ (at least one B and one E). Chocolate: bbE_ (homozygous recessive bb with at least one E). Yellow: __ee (homozygous recessive ee masks B and b).',
    },
    {
      id: 'pe-fc-13',
      term: 'Dominant Epistasis (12:3:1)',
      category: 'Formula',
      front: 'What phenotypic ratio indicates dominant epistasis, and what is a classic example?',
      back: 'A 12:3:1 ratio. A single dominant allele at the epistatic locus (e.g., W_) suppresses pigment formation regardless of the second locus (e.g., summer squash color: 12 White, 3 Yellow, 1 Green).',
    },
    {
      id: 'pe-fc-14',
      term: 'Complementary Gene Interaction (9:7)',
      category: 'Formula',
      front: 'What is duplicate recessive epistasis (complementary genes), and what ratio does it produce?',
      back: 'A 9:7 phenotypic ratio. Both genes encode successive enzymes in a single pathway; at least one dominant allele at BOTH loci (A_B_) is required to produce the final trait (e.g., purple sweet peas).',
    },
    {
      id: 'pe-fc-15',
      term: 'Obligate Heterozygote Carrier',
      category: 'Definition',
      front: 'In an autosomal recessive pedigree, how do you know with 100% certainty that parents are obligate carriers?',
      back: 'If two phenotypically normal parents have a child with the recessive disorder (aa), both parents MUST be heterozygous carriers (Aa) to have contributed the recessive alleles.',
    },
    {
      id: 'pe-fc-16',
      term: 'Duplicate Dominant Epistasis (15:1)',
      category: 'Formula',
      front: 'What phenotypic ratio describes duplicate dominant epistasis, and what does it mean?',
      back: 'A 15:1 ratio. Having a single dominant allele at EITHER of two independent loci (A_ or B_) is sufficient to produce the dominant phenotype. Only the double homozygous recessive (aabb) shows the recessive phenotype.',
      example: 'Seed capsule shape in Shepherd’s Purse (15 triangular : 1 ovoid).',
    },
  ],
  quiz: [
    {
      id: 1,
      question:
        'On a standard clinical genetic pedigree chart, what does a shaded circular symbol represent?',
      options: ['An unaffected biological male', 'An affected biological female', 'A deceased individual', 'An affected biological male'],
      correctIndex: 1,
      explanation:
        'By international standard pedigree nomenclature, circles represent biological females and squares represent biological males. Shading indicates that the individual exhibits the trait or condition being tracked.',
    },
    {
      id: 2,
      question:
        'What does a double horizontal line connecting a male and female on a pedigree indicate?',
      options: ['Divorce', 'Consanguinity (mating between biological relatives)', 'Fraternal twins', 'Adoption'],
      correctIndex: 1,
      explanation:
        'A double horizontal line represents consanguinity—mating between blood relatives such as first cousins—which substantially elevates the risk of rare autosomal recessive conditions.',
    },
    {
      id: 3,
      question:
        'An arrow pointing to an affected individual labeled "P" on a pedigree identifies what person?',
      options: ['The Proband (the initial index patient seeking genetic consultation)', 'The Primary ancestor who originated the mutation', 'The Parent with the highest fitness', 'A Physician who certified the chart'],
      correctIndex: 0,
      explanation:
        'The Proband (or index case) is the individual whose diagnosis or clinical evaluation first brings the family to the attention of medical geneticists, designated on the pedigree by an arrow.',
    },
    {
      id: 4,
      question:
        'A pedigree shows that two unaffected parents have an affected child. What mode of inheritance is definitively ruled OUT by this single observation?',
      options: ['Autosomal recessive', 'Autosomal dominant', 'X-linked recessive', 'Mitochondrial'],
      correctIndex: 1,
      explanation:
        'In autosomal dominant inheritance, an affected child MUST have at least one affected parent. Two unaffected parents cannot produce an affected child (barring rare de novo mutations). Thus, autosomal dominant is ruled out.',
    },
    {
      id: 5,
      question:
        'Which mode of inheritance is characterized by the complete absence of father-to-son transmission, while carrier females transmit the condition to approximately 50% of their sons?',
      options: ['Autosomal dominant', 'Y-linked', 'X-linked recessive', 'Mitochondrial'],
      correctIndex: 2,
      explanation:
        'In X-linked recessive inheritance, mothers pass their X chromosomes to sons, so carrier mothers ($X^B X^b$) transmit the condition to 50% of sons ($X^b Y$). Fathers pass their Y chromosome to sons, meaning father-to-son transmission is impossible.',
    },
    {
      id: 6,
      question:
        'In an X-linked dominant condition, what proportion of daughters born to an affected father and an unaffected mother will inherit the condition?',
      options: ['0%', '25%', '50%', '100%'],
      correctIndex: 3,
      explanation:
        'An affected father has genotype $X^D Y$. He contributes his single affected $X^D$ chromosome to 100% of his biological daughters. Since the trait is dominant, 100% of his daughters will manifest the condition.',
    },
    {
      id: 7,
      question:
        'In a pedigree tracing a rare metabolic defect, an affected mother transmits the disorder to 100% of her children (both sons and daughters). An affected father transmits the disorder to NONE of his children. What mode of inheritance is this?',
      options: ['Autosomal dominant', 'X-linked dominant', 'Mitochondrial (Maternal) inheritance', 'Y-linked inheritance'],
      correctIndex: 2,
      explanation:
        'Mitochondria and their circular DNA are inherited exclusively through the egg cytoplasm. Affected mothers transmit the condition to all progeny, whereas affected fathers do not contribute mitochondria to the zygote and transmit it to 0% of offspring.',
    },
    {
      id: 8,
      question:
        'A condition is transmitted exclusively from fathers to 100% of their biological sons, while biological daughters are never affected and never transmit the trait. What is this mode of inheritance?',
      options: ['Autosomal recessive', 'X-linked recessive', 'Y-linked (Holandric) inheritance', 'Mitochondrial inheritance'],
      correctIndex: 2,
      explanation:
        'Y-linked (holandric) genes reside on the non-recombining portion of the Y chromosome. They pass exclusively from father to all biological sons, with zero female transmission.',
    },
    {
      id: 9,
      question:
        'How does epistasis differ from classical allelic dominance?',
      options: [
        'Dominance occurs between alleles at the same locus; epistasis occurs between alleles at different gene loci',
        'Dominance only occurs in animals; epistasis only occurs in plants',
        'Dominance always produces 3:1 ratios; epistasis always produces 1:1:1:1 ratios',
        'Dominance involves three chromosomes; epistasis involves only mitochondrial DNA',
      ],
      correctIndex: 0,
      explanation:
        'Dominance describes how different alleles of the SAME gene interact (e.g., A dominant over a). Epistasis describes how an allele of ONE gene masks or alters the phenotypic expression of a completely SEPARATE gene locus.',
    },
    {
      id: 10,
      question:
        'In Labrador retrievers, coat color is determined by two genes: B/b (black vs. brown) and E/e (pigment deposition). Dogs with genotype ee are always yellow, regardless of their B or b alleles. What type of gene interaction is this?',
      options: ['Dominant epistasis', 'Recessive epistasis', 'Incomplete dominance', 'Codominance'],
      correctIndex: 1,
      explanation:
        'Because homozygous recessiveness at the E locus (ee) masks the B locus, this is recessive epistasis. The dihybrid phenotypic ratio is modified to 9 Black : 3 Chocolate : 4 Yellow.',
    },
    {
      id: 11,
      question:
        'What is the genotype of a pure-breeding Chocolate (brown) Labrador retriever?',
      options: ['BBEE', 'bbEE', 'BBee', 'bbee'],
      correctIndex: 1,
      explanation:
        'Chocolate Labs require homozygous recessive bb (to make brown eumelanin) and at least one dominant E allele (to deposit pigment into the hair shaft). A pure-breeding chocolate lab has the genotype bbEE.',
    },
    {
      id: 12,
      question:
        'In summer squash, fruit color is governed by dominant epistasis where dominant allele W produces white fruit regardless of alleles at the Y locus (Y_ yellow, yy green). What phenotypic ratio results from crossing two dihybrids (WwYy × WwYy)?',
      options: ['9:3:3:1', '9:3:4', '12:3:1', '15:1'],
      correctIndex: 2,
      explanation:
        'Dominant epistasis produces a 12:3:1 ratio. The 9 W_Y_ and 3 W_yy classes both have at least one W allele and are white (9 + 3 = 12 White). The 3 wwY_ are yellow, and the 1 wwyy is green.',
    },
    {
      id: 13,
      question:
        'In sweet peas, purple flower color requires at least one dominant allele at both the C locus and the P locus (C_P_). Plants that are cc__, __pp, or ccpp are white. What phenotypic ratio is produced from CcPp × CcPp?',
      options: ['9 purple : 7 white', '12 purple : 4 white', '15 purple : 1 white', '9 purple : 3 pink : 4 white'],
      correctIndex: 0,
      explanation:
        'This is duplicate recessive epistasis (complementary gene action). Only the 9 C_P_ genotypes produce purple pigment. The remaining genotypes (3 C_pp + 3 ccP_ + 1 ccpp = 7) are white, creating a 9:7 ratio.',
    },
    {
      id: 14,
      question:
        'In Shepherd’s Purse plants, triangular seed capsules are produced if at least one dominant allele is present at either the A locus or the B locus (A_B_, A_bb, or aaB_). Only aabb plants produce ovoid capsules. What ratio results from AaBb × AaBb?',
      options: ['9:3:3:1', '9:7', '13:3', '15:1'],
      correctIndex: 3,
      explanation:
        'This is duplicate dominant epistasis. Any plant with a dominant A or B allele (9 + 3 + 3 = 15) develops triangular capsules. Only the double homozygous recessive aabb (1) produces ovoid capsules, giving a 15:1 ratio.',
    },
    {
      id: 15,
      question:
        'A pedigree of an autosomal recessive disease shows a marriage between first cousins (III-1 and III-2). Why does consanguinity increase the incidence of autosomal recessive traits in offspring?',
      options: [
        'It causes new spontaneous mutations to occur at 100 times the normal rate',
        'Related individuals share common ancestors and are much more likely to carry the exact same ancestral recessive mutant allele',
        'Consanguinity converts recessive alleles into dominant alleles',
        'It damages the spindle apparatus during meiosis',
      ],
      correctIndex: 1,
      explanation:
        'Related parents share a significant fraction of their genome inherited from common ancestors. If an ancestor carried a deleterious recessive allele, both cousins have an elevated probability of being carriers, greatly increasing the risk of homozygous recessive children.',
    },
    {
      id: 16,
      question:
        'If a father exhibits an X-linked recessive disorder and the mother is homozygous wild-type, what will be the phenotypes and carrier status of their children?',
      options: [
        'All sons will be affected; all daughters will be unaffected non-carriers',
        'All daughters will be asymptomatic carriers; all sons will be unaffected non-carriers',
        'All children will be affected',
        '50% of sons and 50% of daughters will be affected',
      ],
      correctIndex: 1,
      explanation:
        'The father ($X^b Y$) passes his $X^b$ to all daughters, making 100% of them obligate heterozygous carriers ($X^B X^b$). He passes his Y chromosome to all sons, who inherit their normal $X^B$ from the mother, making 100% of sons unaffected ($X^B Y$).',
    },
    {
      id: 17,
      question:
        'In a pedigree, generation II individual 3 is denoted by the label "II-3". How are pedigree generations and individuals indexed?',
      options: [
        'Generations are labeled with Roman numerals (I, II, III) from top to bottom; individuals are numbered with Arabic numerals (1, 2, 3) from left to right',
        'Generations are labeled with letters (A, B, C); individuals are labeled with Roman numerals',
        'Individuals are numbered strictly by age in descending order',
        'Only affected individuals receive index numbers',
      ],
      correctIndex: 0,
      explanation:
        'Pedigrees use Roman numerals (I, II, III...) to indicate successive generations vertically, and Arabic numerals (1, 2, 3...) to identify individuals sequentially from left to right within each generation.',
    },
    {
      id: 18,
      question:
        'What is the expected phenotypic ratio for a cross between a black Labrador retriever of genotype BbEe and a yellow Labrador retriever of genotype Bbee?',
      options: [
        '3 Black : 1 Chocolate : 4 Yellow',
        '3 Black : 3 Chocolate : 2 Yellow',
        '1 Black : 1 Chocolate : 2 Yellow',
        '9 Black : 3 Chocolate : 4 Yellow',
      ],
      correctIndex: 0,
      explanation:
        'Cross Bb × Bb -> 3/4 B_ (black) and 1/4 bb (chocolate). Cross Ee × ee -> 1/2 Ee (pigmented) and 1/2 ee (yellow). Multiplying probabilities: Black (B_Ee) = (3/4) × (1/2) = 3/8; Chocolate (bbEe) = (1/4) × (1/2) = 1/8; Yellow (__ee) = 1/2 = 4/8. Ratio = 3 Black : 1 Chocolate : 4 Yellow.',
    },
    {
      id: 19,
      question:
        'A male patient is diagnosed with Leber Hereditary Optic Neuropathy (LHON), a mitochondrial disease. If he marries an unaffected woman, what is the probability that their children will inherit LHON?',
      options: ['100%', '50%', '25%', '0%'],
      correctIndex: 3,
      explanation:
        'Because mitochondrial DNA is transmitted exclusively through the maternal oocyte lineage, affected fathers NEVER pass mitochondrial conditions to their offspring (0% risk).',
    },
    {
      id: 20,
      question:
        'Which epistatic ratio results when two gene loci act in the same linear biochemical pathway, such that a recessive defect in EITHER gene blocks production of the final colored pigment?',
      options: ['9:3:4', '12:3:1', '9:7', '15:1'],
      correctIndex: 2,
      explanation:
        'Complementary gene interaction (duplicate recessive epistasis) gives a 9:7 ratio. Because both functional enzymes are required to synthesize the end product, only A_B_ (9/16) is colored, while any homozygous recessive condition (A_bb, aaB_, or aabb = 7/16) blocks the pathway.',
    },
  ],
};
