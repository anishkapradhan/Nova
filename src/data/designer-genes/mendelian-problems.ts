import { DesignerGenesTopic } from '@/types/designer-genes';

export const mendelianProblemsTopic: DesignerGenesTopic = {
  slug: 'mendelian-problems',
  topicNumber: 3,
  title: 'Mendelian Genetics & Problem Solving',
  subtitle: 'Probability Rules, Test Crosses, Carrier Mathematics & Linkage Mapping',
  badge: 'Topic 03 • Quantitative Genetics',
  accentColor: 'cyan',
  sourceDeck: '26_27 Mendelian problems.pptx',
  freshmanSummary:
    'Genetics is not just memorization—it is a quantitative science! In this problem-solving unit, high school freshmen master the core mathematical rules of probability (Multiplication and Addition rules), calculate exact risk chances for genetic counseling (including the famous 2/3 carrier probability), evaluate multi-generational crosses, and use recombination frequencies to build physical chromosome maps in centimorgans (cM).',
  diagram: {
    type: 'recombination-map',
    title: 'Gene Linkage & Centimorgan Chromosome Mapping',
    caption:
      'Crossing over between linked genes produces recombinant offspring. The Recombination Frequency (RF = Recombinants / Total × 100%) directly translates to genetic distance: 1% RF = 1 centimorgan (cM).',
    laymanExplanation:
      'Imagine two friends sitting together on a subway train. If they sit on the same bench right next to each other, it is very unlikely a crowded door opening will separate them. But if one sits at the front car and the other at the back car, almost any disturbance will break them apart! In genetics, genes located far apart on the same chromosome are separated by crossing over very often (high recombination frequency), while genes huddled close together rarely separate.',
  },
  sections: [
    {
      id: 'probability-rules',
      title: 'Probability Mathematics in Genetics',
      subheading: 'Rule of Multiplication (AND), Rule of Addition (OR), and the "At Least One" Rule',
      laymanExplanation:
        'Instead of drawing giant 64-square Punnett grids for 3 or 4 genes, geneticists calculate odds using basic probability laws. The Rule of Multiplication applies to independent events occurring together ("AND"): multiply their separate probabilities. The Rule of Addition applies to mutually exclusive outcomes that can happen in different ways ("OR"): add their probabilities together. For "at least one" questions, calculate the chance that none occur and subtract from 1: P(at least one) = 1 - P(none).',
      realWorldAnalogy:
        'If you flip a regular coin, the chance of heads is 1/2. The chance of getting Heads on flip 1 AND Heads on flip 2 is 1/2 × 1/2 = 1/4 (Multiplication Rule). If you want to roll a standard die and get a 1 OR a 6, the chance is 1/6 + 1/6 = 2/6 = 1/3 (Addition Rule).',
      keyTerms: [
        {
          term: 'Rule of Multiplication ("AND")',
          definition:
            'The probability that two or more independent events will occur simultaneously is calculated by multiplying their individual probabilities: $P(A \\text{ and } B) = P(A) \\times P(B)$.',
        },
        {
          term: 'Rule of Addition ("OR")',
          definition:
            'The probability that any one of two or more mutually exclusive events will occur is calculated by adding their individual probabilities: $P(A \\text{ or } B) = P(A) + P(B)$.',
        },
        {
          term: '"At Least One" Principle',
          definition:
            'The statistical identity $P(\\text{at least one}) = 1 - P(\\text{none})$, essential for calculating the chance that at least one child among siblings inherits a specific genetic phenotype.',
        },
      ],
      mathBreakdown: {
        name: 'The "At Least One" Calculation',
        formula: 'P(\\text{at least 1 affected child in } n \\text{ children}) = 1 - [P(\\text{unaffected})]^n',
        variables: 'n = number of children born; P(unaffected) = probability of having an unaffected child from the cross.',
        walkThrough:
          'Two carrier parents ($Aa \\times Aa$) have an autosomal recessive risk: P(affected aa) = 1/4, so P(unaffected) = 3/4. If they plan to have 3 children, what is the probability that AT LEAST ONE child will be affected? P(no affected children in 3 births) = (3/4) × (3/4) × (3/4) = 27/64. Therefore, P(at least one affected) = 1 - 27/64 = 37/64 (approx. 57.8%)!',
        practiceProblem: {
          problem:
            'Two parents heterozygous for albinism (an autosomal recessive trait) have 4 children. What is the probability that AT LEAST ONE child has albinism?',
          solution:
            'P(unaffected) = 3/4. For 4 children, P(all 4 unaffected) = (3/4)^4 = 81/256. Therefore, P(at least 1 albino child) = 1 - 81/256 = 175/256 ≈ 68.4%.',
        },
      },
    },
    {
      id: 'carrier-probabilities',
      title: 'Pedigree Carrier Calculations: The 2/3 Rule',
      subheading: 'Calculating carrier risks for unaffected siblings in autosomal recessive families',
      laymanExplanation:
        'In medical genetics counseling, one of the most famous and frequently tested principles is the 2/3 Carrier Rule. When two carrier parents (Aa × Aa) have children, the Mendelian ratio is 1 AA : 2 Aa : 1 aa. However, if an individual is an unaffected sibling of an affected child, we already know with 100% certainty that they are NOT aa! This eliminates the homozygous recessive box from the Punnett square, leaving only 3 possibilities: 1 AA and 2 Aa. Therefore, their probability of being an asymptomatic carrier is exactly 2/3, not 1/2!',
      realWorldAnalogy:
        'Imagine drawing a raffle ticket from a hat that had 1 Gold (AA), 2 Silver (Aa), and 1 Black ticket (aa). If the referee looks at your hand and announces: "You definitely did not draw a Black ticket!", only 3 tickets remain in play: 1 Gold and 2 Silver. Your chance of holding a Silver ticket is now 2 out of 3 (66.7%), because the black outcome was ruled out.',
      keyTerms: [
        {
          term: 'The 2/3 Carrier Rule',
          definition:
            'The conditional probability that a phenotypically normal offspring of two heterozygous parents ($Aa \\times Aa$) is a carrier ($Aa$). Since the $aa$ genotype is ruled out, $P(Aa \\mid \\text{unaffected}) = 2/3$.',
        },
        {
          term: 'Conditional Probability',
          definition:
            'The probability of an event occurring given that another condition has already been verified to be true.',
        },
        {
          term: 'Obligate Carrier',
          definition:
            'An individual who must carry a recessive mutant allele based on pedigree evidence (e.g., all children of an individual with an autosomal recessive condition like cystic fibrosis).',
        },
      ],
      mathBreakdown: {
        name: 'Autosomal Recessive Offspring Risk Calculation',
        formula: 'P(\\text{affected child}) = P(\\text{Father is carrier}) \\times P(\\text{Mother is carrier}) \\times P(\\text{both transmit mutant allele})',
        variables: 'P(Carrier) = probability that a parent carries the mutant allele (often 2/3 if unaffected sibling of affected); P(transmit) = 1/4.',
        walkThrough:
          'Suppose a healthy man has a brother with Cystic Fibrosis (autosomal recessive). His carrier probability is 2/3. He marries a healthy woman who also has a sister with Cystic Fibrosis (her carrier probability is 2/3). What is the probability that their first child will have Cystic Fibrosis? Multiply all probabilities: P = (2/3) × (2/3) × (1/4) = 4/36 = 1/9 (approx 11.1%)!',
        practiceProblem: {
          problem:
            'A healthy man whose sister has Tay-Sachs disease (autosomal recessive) marries a known carrier woman. What is the chance their child has Tay-Sachs?',
          solution:
            'P(Man is carrier) = 2/3. P(Woman is carrier) = 1.0 (given). P(two carriers have affected child) = 1/4. Total probability = (2/3) × 1.0 × (1/4) = 2/12 = 1/6.',
        },
      },
    },
    {
      id: 'test-crosses',
      title: 'The Testcross: Unmasking Hidden Genotypes',
      subheading: 'Crossing dominant phenotypes with homozygous recessives to reveal alleles',
      laymanExplanation:
        'When an organism displays a dominant phenotype (like a purple pea flower), its genotype could be either homozygous dominant (PP) or heterozygous (Pp). You cannot tell by looking at it! Gregor Mendel invented the Testcross: breed the organism with a homozygous recessive individual (pp). If the unknown parent was PP, 100% of offspring will be purple (Pp). But if the unknown parent was Pp, half (50%) of the offspring will be white (pp). A single recessive offspring definitively unmasks the parent as a heterozygote!',
      realWorldAnalogy:
        'Think of testing whether a closed mystery box has a magnet inside. You bring a known piece of steel (homozygous recessive tester) close to the box. If there is even the slightest pull, you have proved a magnet is inside! If there is no magnet, nothing happens.',
      keyTerms: [
        {
          term: 'Testcross',
          definition:
            'A breeding experiment where an individual of unknown dominant genotype is crossed with a homozygous recessive tester to determine whether the dominant individual is homozygous or heterozygous.',
        },
        {
          term: '1:1 Testcross Ratio',
          definition:
            'The classic monohybrid testcross outcome ($Aa \\times aa \\to 1/2\\ Aa : 1/2\\ aa$), proving the tested individual is heterozygous.',
        },
        {
          term: '1:1:1:1 Testcross Ratio',
          definition:
            'The expected dihybrid testcross outcome ($AaBb \\times aabb$) when the two genes reside on different chromosomes and assort independently.',
        },
      ],
    },
    {
      id: 'linkage-and-mapping',
      title: 'Gene Linkage & Centimorgan Chromosome Mapping',
      subheading: 'Recombination frequencies, map units, and three-point testcrosses',
      laymanExplanation:
        'Mendel’s Law of Independent Assortment only works for genes on different chromosomes. When two genes are physically located on the same chromosome, they are "linked" and tend to travel together into gametes. However, crossing over during Prophase I can break this linkage, producing "recombinant" offspring with non-parental allele combinations. Alfred Sturtevant discovered that the frequency of recombinant offspring is directly proportional to the physical distance between the genes. One percent recombination frequency equals one map unit or centimorgan (cM).',
      realWorldAnalogy:
        'Think of a highway map. If Town A and Town B are 5 miles apart, a detour roadwork crew (crossing over) rarely falls between them (5% recombination). If Town A and Town C are 40 miles apart, there is a much higher chance a detour happens between them (40% recombination). By measuring how often detours separate pairs of towns, you can draw an exact road map of the entire highway!',
      keyTerms: [
        {
          term: 'Linked Genes',
          definition:
            'Genes located near each other on the same chromosome that tend to be inherited together and do not assort independently.',
        },
        {
          term: 'Recombination Frequency (RF)',
          definition:
            'The percentage of recombinant offspring in a testcross: $RF = \\frac{\\text{Number of Recombinants}}{\\text{Total Offspring}} \\times 100\\%$.',
        },
        {
          term: 'Centimorgan (cM) / Map Unit',
          definition:
            'A unit of genetic distance corresponding to a 1% recombination frequency between two linked loci.',
        },
        {
          term: 'Maximum Recombination Frequency (50%)',
          definition:
            'The theoretical upper limit of recombination frequency. Two genes on the same chromosome that are more than 50 cM apart exhibit 50% RF, assorting as if they were on separate chromosomes.',
        },
      ],
      mathBreakdown: {
        name: 'Recombination Frequency & Gene Distance Calculation',
        formula: 'RF = \\frac{\\text{Recombinant Offspring}}{\\text{Total Offspring}} \\times 100\\%',
        variables: 'RF = Recombination Frequency in % (equals distance in centimorgans, cM).',
        walkThrough:
          'In fruit flies, a testcross produces: 42 wild-type parental, 46 black/vestigial parental, 7 black/normal recombinant, and 5 wild-type/vestigial recombinant. Total offspring = 42 + 46 + 7 + 5 = 100. Total recombinants = 7 + 5 = 12. RF = (12 / 100) × 100% = 12%. The two genes are exactly 12 centimorgans (cM) apart on the chromosome!',
        practiceProblem: {
          problem:
            'A testcross between two linked loci yields: 188 Parental Type 1, 192 Parental Type 2, 11 Recombinant Type 1, and 9 Recombinant Type 2. What is the map distance between these two genes?',
          solution:
            'Total offspring = 188 + 192 + 11 + 9 = 400. Total recombinants = 11 + 9 = 20. RF = (20 / 400) × 100% = 5%. The loci are 5 cM apart.',
        },
      },
    },
  ],
  flashcards: [
    {
      id: 'mp-fc-1',
      term: 'Multiplication Rule ("AND")',
      category: 'Formula',
      front: 'When do you use the Multiplication Rule in genetics problems?',
      back: 'Whenever you need to calculate the probability of two or more independent events happening together: P(A and B) = P(A) × P(B).',
      example: 'Chance of an offspring being homozygous recessive aa from Aa × Aa AND being male: (1/4) × (1/2) = 1/8.',
    },
    {
      id: 'mp-fc-2',
      term: 'Addition Rule ("OR")',
      category: 'Formula',
      front: 'When do you use the Addition Rule in genetics problems?',
      back: 'Whenever you calculate the probability of mutually exclusive outcomes that can occur in different alternate ways: P(A or B) = P(A) + P(B).',
      example: 'Chance of rolling a 1 or a 6 on a die: 1/6 + 1/6 = 1/3.',
    },
    {
      id: 'mp-fc-3',
      term: 'The "At Least One" Rule',
      category: 'Formula',
      front: 'What shortcut formula solves "at least one" genetics probability problems?',
      back: 'P(at least one) = 1 - P(none). Calculate the probability that none of the children have the trait, then subtract that value from 1.',
      example: 'Two Aa parents with 3 kids: P(at least one aa) = 1 - (3/4)^3 = 1 - 27/64 = 37/64.',
    },
    {
      id: 'mp-fc-4',
      term: 'The 2/3 Carrier Rule',
      category: 'Concept',
      front: 'Why is an unaffected sibling of an autosomal recessive child assigned a 2/3 carrier chance?',
      back: 'Because their phenotype is normal, the homozygous recessive genotype (aa) is ruled out. Of the remaining 3 Mendelian outcomes (1 AA, 2 Aa), two are carriers. Thus, P(Aa | normal) = 2/3.',
    },
    {
      id: 'mp-fc-5',
      term: 'Testcross Purpose',
      category: 'Definition',
      front: 'What is the definition and diagnostic purpose of a testcross?',
      back: 'Breeding an individual with an unknown dominant phenotype (A_) against a homozygous recessive tester (aa). If any offspring are recessive (aa), the unknown parent is proven to be heterozygous (Aa).',
    },
    {
      id: 'mp-fc-6',
      term: 'Monohybrid Testcross Ratio',
      category: 'Concept',
      front: 'What phenotypic ratio indicates that a testcrossed parent was heterozygous?',
      back: 'A 1:1 phenotypic ratio (50% dominant, 50% recessive) proves the parent was heterozygous (Aa × aa -> 1/2 Aa : 1/2 aa). If homozygous dominant (AA × aa), 100% of offspring show the dominant trait.',
    },
    {
      id: 'mp-fc-7',
      term: 'Dihybrid Testcross Ratio',
      category: 'Concept',
      front: 'What phenotypic ratio indicates independent assortment in a dihybrid testcross?',
      back: 'A 1:1:1:1 phenotypic ratio (AaBb × aabb -> 25% AB, 25% Ab, 25% aB, 25% ab). Significant deviation from 1:1:1:1 indicates that the two genes are linked on the same chromosome.',
    },
    {
      id: 'mp-fc-8',
      term: 'Linked Genes',
      category: 'Definition',
      front: 'What are linked genes, and what Mendel law do they violate?',
      back: 'Linked genes are loci located physically close together on the same chromosome. Because they tend to be transmitted into gametes as a single unit, they violate Mendel’s Law of Independent Assortment.',
    },
    {
      id: 'mp-fc-9',
      term: 'Recombination Frequency Formula',
      category: 'Formula',
      front: 'How is Recombination Frequency (RF) calculated from testcross progeny?',
      back: 'RF = (Number of Recombinant Offspring / Total Number of Offspring) × 100%. Recombinants are those displaying non-parental combinations of traits.',
    },
    {
      id: 'mp-fc-10',
      term: 'Centimorgan (cM)',
      category: 'Definition',
      front: 'What is a centimorgan (cM) or map unit?',
      back: 'A unit of genetic distance along a chromosome. One centimorgan equals a 1% recombination frequency between two loci (1 cM = 1% RF = 1 map unit).',
    },
    {
      id: 'mp-fc-11',
      term: '50% Recombination Limit',
      category: 'Concept',
      front: 'Why can the recombination frequency between two genes never exceed 50%?',
      back: 'Crossing over only occurs between two non-sister chromatids of a tetrad, leaving the other two chromatids non-recombinant. Genes that are infinitely far apart on a chromosome assort independently at 50% RF.',
    },
    {
      id: 'mp-fc-12',
      term: 'ABO Blood Type Cross',
      category: 'Disease/Example',
      front: 'What offspring blood types can be produced from a cross between an Type A (heterozygous) and Type B (heterozygous) parent?',
      back: 'Genotypes: I^A i × I^B i. Offspring: 1/4 I^A I^B (Type AB), 1/4 I^A i (Type A), 1/4 I^B i (Type B), 1/4 i i (Type O). All 4 blood groups are possible!',
    },
    {
      id: 'mp-fc-13',
      term: 'Carrier Risk Calculation',
      category: 'Formula',
      front: 'If two unaffected individuals with carrier probabilities of 2/3 marry, what is the risk of having an affected child with a recessive trait?',
      back: 'P = P(Dad carrier) × P(Mom carrier) × P(Recessive transmission) = (2/3) × (2/3) × (1/4) = 4/36 = 1/9 (or 11.1%).',
    },
    {
      id: 'mp-fc-14',
      term: 'Three-Point Testcross',
      category: 'Process',
      front: 'In a three-point testcross, how do you identify the gene that is located in the middle?',
      back: 'Compare the parental classes (the two most frequent) to the double crossover classes (the two least frequent). The single gene that has flipped position between parentals and double crossovers is the middle gene!',
    },
    {
      id: 'mp-fc-15',
      term: 'Genetic Interference',
      category: 'Concept',
      front: 'What is genetic interference in chromosome mapping?',
      back: 'The phenomenon where a crossover in one region of a chromosome reduces the likelihood of another crossover happening nearby. Calculated as Interference = 1 - Coefficient of Coincidence.',
    },
    {
      id: 'mp-fc-16',
      term: 'Epistasis Definition',
      category: 'Definition',
      front: 'What is epistasis, and how does it alter classical dihybrid ratios?',
      back: 'Epistasis is a gene interaction where the allele of one gene masks, suppresses, or modifies the phenotypic expression of an allele at a completely different gene locus (e.g., 9:3:4 or 12:3:1 instead of 9:3:3:1).',
    },
  ],
  quiz: [
    {
      id: 1,
      question:
        'In a monohybrid cross between two heterozygous purple-flowered pea plants (Pp × Pp), what is the probability that an offspring will have white flowers (pp)?',
      options: ['1/4 (25%)', '1/2 (50%)', '3/4 (75%)', '0%'],
      correctIndex: 0,
      explanation:
        'A Punnett square for Pp × Pp yields genotypes 1/4 PP, 1/2 Pp, and 1/4 pp. Only pp displays the recessive white flower phenotype, so the probability is 1/4 (25%).',
    },
    {
      id: 2,
      question:
        'Two carrier parents for cystic fibrosis (Cc × Cc) plan to have two children. What is the probability that BOTH children will be born with cystic fibrosis?',
      options: ['1/2', '1/4', '1/8', '1/16'],
      correctIndex: 3,
      explanation:
        'Each child independently has a 1/4 chance of being affected (cc). By the Rule of Multiplication, P(Child 1 affected AND Child 2 affected) = (1/4) × (1/4) = 1/16.',
    },
    {
      id: 3,
      question:
        'Two carrier parents for an autosomal recessive metabolic disorder have 3 children. What is the probability that AT LEAST ONE child will be affected?',
      options: ['27/64', '37/64', '1/64', '63/64'],
      correctIndex: 1,
      explanation:
        'Use the formula P(at least one) = 1 - P(none). P(unaffected) = 3/4. The probability that all 3 are unaffected is (3/4)^3 = 27/64. Therefore, P(at least one affected) = 1 - 27/64 = 37/64.',
    },
    {
      id: 4,
      question:
        'A healthy 16-year-old high school student has a younger sister with cystic fibrosis (an autosomal recessive condition). What is the probability that this healthy student is a carrier of the CF mutation?',
      options: ['1/4', '1/2', '2/3', '3/4'],
      correctIndex: 2,
      explanation:
        'Because the sister has CF (cc), both parents must be carriers (Cc). The student is known to be healthy, so the cc genotype is eliminated. Out of the 3 remaining possible genotypes (1 CC : 2 Cc), two are carriers. Hence, the probability is 2/3.',
    },
    {
      id: 5,
      question:
        'A healthy man whose brother has sickle cell anemia (autosomal recessive) marries a healthy woman whose sister also has sickle cell anemia. Neither parent has sickle cell. What is the probability that their first child will be born with sickle cell anemia?',
      options: ['1/4', '1/9', '1/16', '2/3'],
      correctIndex: 1,
      explanation:
        'Both the husband and wife have a 2/3 probability of being carriers (Cc). If both are carriers, the probability of transmitting cc is 1/4. Total probability = (2/3) × (2/3) × (1/4) = 4/36 = 1/9.',
    },
    {
      id: 6,
      question:
        'What cross represents a classic genetic testcross?',
      options: [
        'Crossing two individuals with dominant phenotypes: A_ × A_',
        'Crossing an individual with an unknown dominant phenotype with a homozygous recessive individual: A_ × aa',
        'Crossing two homozygous recessive individuals: aa × aa',
        'Crossing a heterozygous individual with a homozygous dominant individual: Aa × AA',
      ],
      correctIndex: 1,
      explanation:
        'A testcross always mates an individual of unknown dominant genotype (AA or Aa) with a homozygous recessive tester (aa) to reveal hidden recessive alleles in the progeny.',
    },
    {
      id: 7,
      question:
        'A black guinea pig of unknown genotype is testcrossed with a brown (homozygous recessive bb) guinea pig. The resulting litter contains 5 black and 6 brown offspring. What was the genotype of the black parent?',
      options: ['Homozygous dominant (BB)', 'Heterozygous (Bb)', 'Homozygous recessive (bb)', 'Hemizygous (B)'],
      correctIndex: 1,
      explanation:
        'The appearance of even a single brown (bb) pup proves the black parent donated a recessive "b" allele. The ~1:1 phenotypic ratio confirms the black parent is heterozygous (Bb).',
    },
    {
      id: 8,
      question:
        'In a dihybrid testcross (AaBb × aabb), what phenotypic ratio among the offspring definitively indicates that genes A and B assort independently on different chromosomes?',
      options: ['9:3:3:1', '1:1:1:1', '3:1', '12:3:1'],
      correctIndex: 1,
      explanation:
        'An unlinked dihybrid testcross produces four equal phenotypic classes (25% AB, 25% Ab, 25% aB, 25% ab), which is a 1:1:1:1 ratio. A 9:3:3:1 ratio occurs from selfing dihybrids (AaBb × AaBb), not a testcross.',
    },
    {
      id: 9,
      question:
        'In fruit flies, a testcross between a dihybrid female and a homozygous recessive male yields: 410 wild-type, 390 black/vestigial, 105 black/normal, and 95 wild-type/vestigial. What is the recombination frequency between the black and vestigial genes?',
      options: ['10%', '20%', '50%', '80%'],
      correctIndex: 1,
      explanation:
        'Total offspring = 410 + 390 + 105 + 95 = 1000. Recombinant offspring (non-parentals) = 105 + 95 = 200. RF = (200 / 1000) × 100% = 20%.',
    },
    {
      id: 10,
      question:
        'If the recombination frequency between gene X and gene Y is measured at 14.5%, what is the estimated genetic map distance between these two loci?',
      options: ['1.45 centimorgans', '14.5 centimorgans (cM)', '29 centimorgans', '0.145 centimorgans'],
      correctIndex: 1,
      explanation:
        'By definition, 1% recombination frequency is equal to 1 map unit or 1 centimorgan (cM). Therefore, 14.5% RF corresponds to a map distance of 14.5 cM.',
    },
    {
      id: 11,
      question:
        'What is the theoretical maximum recombination frequency that can ever be measured between two genes on the same chromosome in a standard testcross?',
      options: ['25%', '50%', '75%', '100%'],
      correctIndex: 1,
      explanation:
        'Even with multiple crossovers, only non-sister chromatids exchange material, so on average at most 50% of the gametes are recombinant. Genes located far apart on the same chromosome reach this 50% ceiling and assort independently.',
    },
    {
      id: 12,
      question:
        'A man with blood type A (heterozygous I^A i) and a woman with blood type B (heterozygous I^B i) have a child. What are the possible blood types for this child?',
      options: [
        'Only AB',
        'Only A and B',
        'Types A, B, AB, and O are all possible with equal 25% probabilities',
        'Only O',
      ],
      correctIndex: 2,
      explanation:
        'I^A i × I^B i produces 1/4 I^A I^B (Type AB), 1/4 I^A i (Type A), 1/4 I^B i (Type B), and 1/4 i i (Type O). Each of the four major ABO phenotypes has an equal 25% chance of appearing.',
    },
    {
      id: 13,
      question:
        'In a trihybrid cross (AaBbCc × AaBbCc), what proportion of the offspring are expected to be homozygous recessive for all three genes (aabbcc)?',
      options: ['1/8', '1/16', '1/32', '1/64'],
      correctIndex: 3,
      explanation:
        'For each independent gene pair, the chance of receiving a homozygous recessive genotype is 1/4. Using the Rule of Multiplication: P(aa AND bb AND cc) = (1/4) × (1/4) × (1/4) = 1/64.',
    },
    {
      id: 14,
      question:
        'In Drosophila three-point gene mapping, how are the double crossover (DCO) progeny identified in the testcross data?',
      options: [
        'They are the two most abundant phenotypic classes in the dataset',
        'They are the two least abundant phenotypic classes in the dataset',
        'They have a recombination frequency of exactly 50%',
        'They only occur in male offspring',
      ],
      correctIndex: 1,
      explanation:
        'Because double crossovers require two simultaneous crossover events, their probability is the product of two small independent rates. Thus, the double crossover classes are always the least frequent phenotypes observed.',
    },
    {
      id: 15,
      question:
        'If the map distance between gene A and gene B is 10 cM, and the distance between gene B and gene C is 20 cM, what is the expected frequency of double crossovers between A and C in the absence of interference?',
      options: ['30%', '10%', '2%', '0.2%'],
      correctIndex: 2,
      explanation:
        'Expected double crossover frequency is the product of the individual recombination frequencies: P(DCO) = RF(A-B) × RF(B-C) = 0.10 × 0.20 = 0.02 = 2.0%.',
    },
    {
      id: 16,
      question:
        'What does a positive genetic interference value (e.g., I = 0.40) indicate about crossing over along a chromosome?',
      options: [
        'One crossover event encourages and increases the likelihood of a second nearby crossover',
        'One crossover event physically inhibits or reduces the occurrence of a second crossover in adjacent regions',
        'All three genes have mutated into stop codons',
        'The organism is sterile and cannot undergo meiosis',
      ],
      correctIndex: 1,
      explanation:
        'Positive interference means fewer double crossovers occurred than expected by chance because the formation of one chiasma physically discourages another from forming nearby.',
    },
    {
      id: 17,
      question:
        'A cross between two heterozygous plants (AaBb × AaBb) yields a modified phenotypic ratio of 9:3:4. What type of gene interaction does this ratio indicate?',
      options: ['Dominant epistasis', 'Recessive epistasis', 'Incomplete dominance', 'Duplicate dominant epistasis'],
      correctIndex: 1,
      explanation:
        'A 9:3:4 ratio is the hallmark of recessive epistasis (e.g., coat color in Labrador retrievers). Homozygosity for the recessive allele at one locus (ee) completely masks the phenotypic expression of alleles at the other locus (B or b).',
    },
    {
      id: 18,
      question:
        'A couple has 4 children, all of whom are biological girls. What is the probability that their 5th child will be a boy?',
      options: ['1/32', '1/16', '1/2 (50%)', '100%'],
      correctIndex: 2,
      explanation:
        'Each human fertilization is an independent event with an unvarying 1/2 (50%) chance of conceiving a male or female child. The sexes of previous children do not influence the probability of subsequent births.',
    },
    {
      id: 19,
      question:
        'In pea plants, tall (T) is dominant to short (t), and yellow seeds (Y) are dominant to green seeds (y). A plant of genotype TtYy is crossed with a plant of genotype ttyy. What proportion of the offspring are expected to be tall with green seeds (T_yy)?',
      options: ['9/16', '3/16', '1/4 (25%)', '1/16'],
      correctIndex: 2,
      explanation:
        'Treat each gene independently: For height (Tt × tt), P(Tall Tt) = 1/2. For seed color (Yy × yy), P(Green yy) = 1/2. By the multiplication rule, P(Tall AND Green) = (1/2) × (1/2) = 1/4 (25%).',
    },
    {
      id: 20,
      question:
        'Which genetic principle explains why an AaBb individual produces four distinct gametes (AB, Ab, aB, ab) in equal 25% proportions when the genes are on non-homologous chromosomes?',
      options: [
        'Mendel’s Law of Segregation only',
        'Mendel’s Law of Independent Assortment',
        'The Lyon Hypothesis of X-inactivation',
        'Genomic imprinting',
      ],
      correctIndex: 1,
      explanation:
        'Mendel’s Law of Independent Assortment states that alleles of different genes segregate into gametes independently of one another during Meiosis I, producing equal 1/4 frequencies of all four combinations when unlinked.',
    },
  ],
};
