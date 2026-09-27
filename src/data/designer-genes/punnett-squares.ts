import { DesignerGenesTopic } from '@/types/designer-genes';

export const punnettSquaresTopic: DesignerGenesTopic = {
  slug: 'punnett-squares',
  topicNumber: 4,
  title: 'Monohybrid, Dihybrid & Punnett Squares',
  subtitle: 'Gamete Segregation, FOIL Dihybrid Matrices, Incomplete Dominance & ABO Blood Types',
  badge: 'Topic 04 • Crosses & Alleles',
  accentColor: 'blue',
  sourceDeck: 'Punnett Squares_Pedigrees 26_27.pptx',
  freshmanSummary:
    'Invented by British geneticist Reginald Punnett, the Punnett Square is the ultimate graphical calculator for predicting genetic crosses. High school freshmen learn how to assign alleles, determine gametes using the FOIL method for 4x4 dihybrid matrices, and master non-Mendelian extensions including incomplete dominance (blended pink flowers), codominance (spotted coats), and the human ABO multiple-allele blood group system.',
  diagram: {
    type: 'punnett-blood-types',
    title: 'Dihybrid Punnett Matrix & ABO Blood Group System',
    caption:
      'The 4x4 dihybrid Punnett square produces the classic 9:3:3:1 phenotypic ratio through independent assortment, while the ABO blood system demonstrates codominance ($I^A I^B$) and complete dominance over recessive allele $i$.',
    laymanExplanation:
      'Think of a Punnett square as an ice cream parlor sundae menu. Mom brings two possible scoops (say, Chocolate or Vanilla) and Dad brings two possible toppings (Sprinkles or Fudge). A 2x2 grid simply maps out every possible combination you can walk out the door with! For dihybrid crosses, we just expand the menu to a 4x4 grid of 16 delicious genetic sundaes.',
  },
  sections: [
    {
      id: 'fundamentals-monohybrid',
      title: 'Genotypes, Phenotypes & The Monohybrid Cross',
      subheading: 'Alleles, homozygous vs heterozygous, and the classic 3:1 phenotypic ratio',
      laymanExplanation:
        'A character is a heritable feature that varies among individuals (such as flower color), while a trait is the specific variant of that character (such as purple or white). A gene is the stretch of DNA encoding that character at a specific physical address on a chromosome called its locus. Alternative versions of the same gene are alleles. An individual with two identical alleles (like AA or aa) is homozygous. An individual with two different alleles (like Aa) is heterozygous. The genotype is the exact genetic makeup (the letters), while the phenotype is the observable physical appearance.',
      realWorldAnalogy:
        'Think of a locus as a specific house on a street. The house address is the gene. The exterior paint color of the house is the allele! One house might have red paint (dominant allele A), while another has blue paint (recessive allele a). Even if the red house has blue primer underneath (heterozygous Aa), anyone driving by on the street only sees the red paint (phenotype)!',
      keyTerms: [
        {
          term: 'Character vs. Trait',
          definition:
            'A character is a heritable feature that varies (e.g., eye color). A trait is the distinct variant of that character (e.g., blue eyes vs. brown eyes).',
        },
        {
          term: 'Locus & Allele',
          definition:
            'A locus is the fixed physical location of a gene on a chromosome. An allele is one of two or more alternative molecular versions of a gene.',
        },
        {
          term: 'Homozygous vs. Heterozygous',
          definition:
            'Homozygous organisms possess a pair of identical alleles for a gene (homozygous dominant $AA$, homozygous recessive $aa$). Heterozygous organisms possess two different alleles ($Aa$).',
        },
        {
          term: 'Genotype vs. Phenotype',
          definition:
            'The genotype is an organism’s complete set of genetic alleles (e.g., $BB, Bb, bb$). The phenotype is its observable physical, physiological, or biochemical traits.',
        },
      ],
    },
    {
      id: 'dihybrid-cross-foil',
      title: 'The Dihybrid Cross & The FOIL Method',
      subheading: 'Tracking two independent genes, determining gametes, and the 9:3:3:1 ratio',
      laymanExplanation:
        'A dihybrid cross tracks the simultaneous inheritance of two different characters located on different chromosomes (such as seed color Y/y and seed shape R/r). To set up a 16-box (4x4) Punnett square, you must first determine what gametes each parent can produce using the FOIL method from algebra: First, Outer, Inner, Last. For a dihybrid parent (YyRr), the four gametes are YR (First), Yr (Outer), yR (Inner), and yr (Last). Crossing two heterozygous dihybrids ($YyRr \\times YyRr$) always yields the signature Mendelian 9:3:3:1 phenotypic ratio.',
      realWorldAnalogy:
        'Imagine picking an outfit: you have a shirt (Blue or Yellow) and pants (Jeans or Sweatpants). If you toss a coin for your shirt and a coin for your pants independently, you get 4 possible outfits: Blue/Jeans, Blue/Sweats, Yellow/Jeans, Yellow/Sweats. If both parents can contribute any of these 4 outfits, combining them produces 16 possibilities (4 × 4 = 16)!',
      keyTerms: [
        {
          term: 'FOIL Method for Gametes',
          definition:
            'An algebraic mnemonic (First, Outer, Inner, Last) used to determine all four possible gametic combinations produced by a dihybrid parent ($AaBb \\to AB, Ab, aB, ab$).',
        },
        {
          term: '9:3:3:1 Phenotypic Ratio',
          definition:
            'The classic phenotypic distribution resulting from crossing two heterozygous dihybrids ($AaBb \\times AaBb$): 9 dominant-dominant, 3 dominant-recessive, 3 recessive-dominant, 1 recessive-recessive.',
        },
        {
          term: 'Dihybrid Cross',
          definition:
            'A breeding experiment between two organisms that are both heterozygous for two distinct gene pairs.',
        },
      ],
      mathBreakdown: {
        name: 'The 9:3:3:1 Dihybrid Breakdown',
        formula: '(3/4 A_ + 1/4 aa) \\times (3/4 B_ + 1/4 bb) = 9/16 A_B_ + 3/16 A_bb + 3/16 aaB_ + 1/16 aabb',
        variables: 'A_ = dominant phenotype for gene A; B_ = dominant phenotype for gene B.',
        walkThrough:
          'Because the two genes assort independently, multiply their monohybrid probabilities: P(A_ and B_) = (3/4) × (3/4) = 9/16. P(A_ and bb) = (3/4) × (1/4) = 3/16. P(aa and B_) = (1/4) × (3/4) = 3/16. P(aa and bb) = (1/4) × (1/4) = 1/16. Sum = 16/16 = 1.0!',
        practiceProblem: {
          problem:
            'In a cross of AaBb × AaBb, what fraction of offspring will be homozygous recessive for at least one of the two traits?',
          solution:
            'A_bb (3/16) + aaB_ (3/16) + aabb (1/16) = 7/16 (approx. 43.75%). Alternatively: 1 - P(dominant for both A_B_) = 1 - 9/16 = 7/16.',
        },
      },
    },
    {
      id: 'incomplete-codominance',
      title: 'Incomplete Dominance vs. Codominance',
      subheading: 'Blending phenotypes, simultaneous expression, and roan coat colors',
      laymanExplanation:
        'Not all traits follow simple dominant/recessive rules. In Incomplete Dominance, neither allele is completely dominant: the heterozygous phenotype is an intermediate blend between the two homozygotes (e.g., crossing red snapdragons $C^R C^R$ with white snapdragons $C^W C^W$ yields 100% pink flowers $C^R C^W$; the phenotypic ratio becomes 1 red : 2 pink : 1 white, identical to the genotypic ratio). In Codominance, both alleles are fully and distinctly expressed at the same time without blending (e.g., roan cattle have individual red hairs and individual white hairs side by side).',
      realWorldAnalogy:
        'Incomplete dominance is like mixing red paint and white paint in a bucket: the colors blend together to make pink paint! Codominance is like a zebra or a spotted cow: you have pure black stripes and pure white stripes right next to each other. Neither color blends or disappears; both show up loud and clear.',
      keyTerms: [
        {
          term: 'Incomplete Dominance',
          definition:
            'A pattern of inheritance where the heterozygous phenotype is intermediate between the two homozygous phenotypes (e.g., pink flowers from red and white parents).',
        },
        {
          term: 'Codominance',
          definition:
            'A pattern of inheritance where both alleles in a heterozygote are fully and simultaneously expressed without blending (e.g., AB blood type, roan cattle).',
        },
        {
          term: '1:2:1 Phenotypic Ratio',
          definition:
            'The signature monohybrid cross phenotypic ratio for incomplete dominance and codominance, which mirrors the genotypic ratio because heterozygotes look unique.',
        },
      ],
    },
    {
      id: 'multiple-alleles-abo',
      title: 'Multiple Alleles: The Human ABO Blood System',
      subheading: 'Antigens, antibodies, universal donor (O-) and universal recipient (AB+)',
      laymanExplanation:
        'While an individual diploid human can only possess two alleles for a gene, a population can have many alleles. The classic human example is the ABO blood group gene (I), which has three common alleles: $I^A$, $I^B$, and $i$. Alleles $I^A$ and $I^B$ code for specific carbohydrate enzymes that add A or B sugars to red blood cell membranes, while allele $i$ codes for a nonfunctional enzyme (no surface sugar). $I^A$ and $I^B$ are codominant with each other, but both are completely dominant over $i$. This yields 4 blood types: Type A ($I^A I^A$ or $I^A i$), Type B ($I^B I^B$ or $I^B i$), Type AB ($I^A I^B$), and Type O ($ii$).',
      realWorldAnalogy:
        'Think of red blood cells as delivery vans. Type A vans fly a triangular flag (A antigen). Type B vans fly a square flag (B antigen). Type AB vans fly both triangular and square flags (codominance). Type O vans have no flags at all! If the immune system police see a flag they don’t recognize, they attack it. Type O can deliver anywhere because it has no flags to trigger the police (Universal Donor)!',
      keyTerms: [
        {
          term: 'Multiple Alleles',
          definition:
            'The presence of three or more alternative alleles for a single gene within a population (e.g., $I^A, I^B, i$).',
        },
        {
          term: 'ABO Blood Groups',
          definition:
            'A human blood classification determined by red blood cell surface antigens: Type A, Type B, Type AB (universal recipient), and Type O (universal donor).',
        },
        {
          term: 'Agglutination',
          definition:
            'The clumping of red blood cells that occurs when antibodies bind to foreign cell-surface antigens during an incompatible blood transfusion.',
        },
        {
          term: 'Polygenic Inheritance',
          definition:
            'The additive quantitative effect of two or more independent genes on a single phenotypic character, producing a continuous Gaussian bell curve (e.g., height, skin pigmentation).',
        },
      ],
    },
  ],
  flashcards: [
    {
      id: 'ps-fc-1',
      term: 'Character vs. Trait',
      category: 'Definition',
      front: 'What is the distinction between a character and a trait in genetics?',
      back: 'A character is a broad heritable feature that varies among individuals (e.g., flower color or seed shape). A trait is a specific individual variant of that character (e.g., purple flowers or wrinkled seeds).',
    },
    {
      id: 'ps-fc-2',
      term: 'Locus',
      category: 'Definition',
      front: 'What is a gene locus?',
      back: 'The specific, fixed physical position of a gene along the length of a chromosome.',
    },
    {
      id: 'ps-fc-3',
      term: 'Homozygous vs. Heterozygous',
      category: 'Concept',
      front: 'How do homozygous and heterozygous genotypes differ?',
      back: 'Homozygous means having identical alleles at a locus (e.g., AA or aa). Heterozygous means having two different alleles at that locus (e.g., Aa).',
    },
    {
      id: 'ps-fc-4',
      term: 'Genotype vs. Phenotype',
      category: 'Concept',
      front: 'What is the difference between an organism’s genotype and its phenotype?',
      back: 'Genotype is the underlying genetic allele combination (e.g., Bb). Phenotype is the observable physical, physiological, or biochemical manifestation of those genes (e.g., brown eyes).',
    },
    {
      id: 'ps-fc-5',
      term: 'Monohybrid Cross Ratios',
      category: 'Formula',
      front: 'What are the expected genotypic and phenotypic ratios from a standard monohybrid cross (Aa × Aa)?',
      back: 'Genotypic ratio: 1 AA : 2 Aa : 1 aa (1:2:1). Phenotypic ratio: 3 dominant : 1 recessive (3:1).',
    },
    {
      id: 'ps-fc-6',
      term: 'FOIL Method',
      category: 'Process',
      front: 'How is the FOIL method applied to find the gametes of a dihybrid parent (e.g., AaBb)?',
      back: 'First: AB. Outer: Ab. Inner: aB. Last: ab. The parent produces 4 distinct gametic types in equal 25% frequencies.',
    },
    {
      id: 'ps-fc-7',
      term: '9:3:3:1 Ratio',
      category: 'Formula',
      front: 'Under what exact biological conditions does an AaBb × AaBb cross yield a 9:3:3:1 phenotypic ratio?',
      back: 'When both gene pairs exhibit complete dominance, assort independently on different chromosomes (unlinked), and exhibit no epistatic or lethal gene interactions.',
    },
    {
      id: 'ps-fc-8',
      term: 'Incomplete Dominance',
      category: 'Concept',
      front: 'What is incomplete dominance, and what is the classic textbook example?',
      back: 'When neither allele is fully dominant, producing an intermediate heterozygous phenotype. Classic example: Snapdragon flower color (Red C^R C^R × White C^W C^W -> 100% Pink C^R C^W).',
    },
    {
      id: 'ps-fc-9',
      term: 'Incomplete Dominance Phenotypic Ratio',
      category: 'Concept',
      front: 'What is the phenotypic ratio when two pink snapdragons (C^R C^W × C^R C^W) are crossed?',
      back: '1 Red (C^R C^R) : 2 Pink (C^R C^W) : 1 White (C^W C^W). The phenotypic ratio (1:2:1) is identical to the genotypic ratio!',
    },
    {
      id: 'ps-fc-10',
      term: 'Codominance',
      category: 'Definition',
      front: 'What is codominance, and how does it differ from incomplete dominance?',
      back: 'In codominance, both alleles are fully and distinctly expressed simultaneously without blending. In incomplete dominance, the alleles blend into an intermediate third phenotype.',
      example: 'AB blood type (both A and B antigens present); Roan cattle (both red and white hairs present).',
    },
    {
      id: 'ps-fc-11',
      term: 'ABO Allele Dominance Hierarchy',
      category: 'Concept',
      front: 'What is the dominance relationship among the three ABO blood group alleles (I^A, I^B, i)?',
      back: 'I^A and I^B are codominant with each other. Both I^A and I^B are completely dominant over the recessive allele i.',
    },
    {
      id: 'ps-fc-12',
      term: 'Blood Type Genotypes',
      category: 'Definition',
      front: 'What are all the possible genotypes for blood types A, B, AB, and O?',
      back: 'Type A: I^A I^A or I^A i. Type B: I^B I^B or I^B i. Type AB: I^A I^B. Type O: i i.',
    },
    {
      id: 'ps-fc-13',
      term: 'Universal Donor & Recipient',
      category: 'Concept',
      front: 'Which blood type is the universal red blood cell donor and which is the universal recipient, and why?',
      back: 'Type O- is the universal donor because its red cells lack A, B, and Rh antigens (cannot trigger recipient antibodies). Type AB+ is the universal recipient because its plasma lacks anti-A, anti-B, and anti-Rh antibodies.',
    },
    {
      id: 'ps-fc-14',
      term: 'Agglutination',
      category: 'Process',
      front: 'What causes agglutination in blood typing tests?',
      back: 'Antigen-antibody cross-linking. When serum antibodies bind to their specific foreign surface antigens (e.g., anti-A antibody binding to A antigen), the red cells clump together.',
    },
    {
      id: 'ps-fc-15',
      term: 'Polygenic Inheritance',
      category: 'Definition',
      front: 'What is polygenic inheritance, and what shape does its phenotypic distribution take?',
      back: 'The additive quantitative control of a single trait by multiple distinct genes (e.g., skin color, height). It produces a continuous, bell-shaped Gaussian distribution curve across a population.',
    },
    {
      id: 'ps-fc-16',
      term: 'Hemizygous',
      category: 'Definition',
      front: 'What does the term "hemizygous" mean?',
      back: 'Possessing only a single copy of a gene or chromosome segment. Biological human males (XY) are hemizygous for all genes on the X chromosome.',
    },
  ],
  quiz: [
    {
      id: 1,
      question:
        'In pea plants, purple flowers (P) are dominant to white flowers (p). If two heterozygous plants (Pp × Pp) are crossed, what proportion of the purple-flowered offspring are expected to be heterozygous?',
      options: ['1/4 (25%)', '1/2 (50%)', '2/3 (66.7%)', '3/4 (75%)'],
      correctIndex: 2,
      explanation:
        'Among all offspring, genotypes are 1 PP, 2 Pp, and 1 pp (3 purple : 1 white). Restricting the question to purple-flowered offspring only, there are 3 purple plants total (1 PP and 2 Pp). Thus, 2 out of 3 (2/3 or 66.7%) are heterozygous.',
    },
    {
      id: 2,
      question:
        'Which algebraic method is used to determine the four possible gametes produced by a dihybrid parent of genotype RrYy?',
      options: ['The Quadratic Formula', 'The FOIL Method (First, Outer, Inner, Last)', 'Synthetic Division', 'The Chi-Square Test'],
      correctIndex: 1,
      explanation:
        'The FOIL method finds all combinations of two independent gene pairs: First (RY), Outer (Ry), Inner (rY), and Last (ry), each produced in equal 25% proportions.',
    },
    {
      id: 3,
      question:
        'What is the expected phenotypic ratio from a cross between two heterozygous dihybrids (AaBb × AaBb) when both genes assort independently with complete dominance?',
      options: ['1:2:1', '3:1', '9:3:3:1', '1:1:1:1'],
      correctIndex: 2,
      explanation:
        'The classic Mendelian dihybrid phenotypic ratio is 9:3:3:1 (9 dominant for both, 3 dominant/recessive, 3 recessive/dominant, and 1 recessive for both).',
    },
    {
      id: 4,
      question:
        'Crossing a true-breeding red snapdragon (C^R C^R) with a true-breeding white snapdragon (C^W C^W) yields 100% pink offspring (C^R C^W). What type of inheritance is this?',
      options: ['Codominance', 'Incomplete dominance', 'Epistasis', 'Pleiotropy'],
      correctIndex: 1,
      explanation:
        'Incomplete dominance occurs when neither allele is dominant, resulting in an intermediate, blended heterozygous phenotype (pink).',
    },
    {
      id: 5,
      question:
        'If two pink snapdragons (C^R C^W × C^R C^W) are cross-pollinated, what phenotypic ratio will be observed in their progeny?',
      options: [
        '3 red : 1 white',
        '1 red : 2 pink : 1 white',
        '9 red : 3 pink : 3 white : 1 purple',
        '100% pink',
      ],
      correctIndex: 1,
      explanation:
        'In incomplete dominance, the phenotypic ratio matches the 1:2:1 genotypic ratio: 1/4 Red (C^R C^R), 1/2 Pink (C^R C^W), and 1/4 White (C^W C^W).',
    },
    {
      id: 6,
      question:
        'In roan shorthorn cattle, heterozygotes have a coat containing both red hairs and white hairs intermingled. What pattern of inheritance does this demonstrate?',
      options: ['Incomplete dominance', 'Codominance', 'Sex-linked dominance', 'Genomic imprinting'],
      correctIndex: 1,
      explanation:
        'Codominance is characterized by the distinct, simultaneous expression of both alleles in the heterozygote without blending. Both red and white hairs are fully expressed.',
    },
    {
      id: 7,
      question:
        'A person with blood type AB carries which surface antigens on their erythrocytes (red blood cells)?',
      options: [
        'Only A antigen',
        'Only B antigen',
        'Both A and B antigens',
        'Neither A nor B antigen',
      ],
      correctIndex: 2,
      explanation:
        'Because alleles I^A and I^B are codominant, an individual with genotype I^A I^B expresses both A and B carbohydrate antigens on their red blood cell membranes.',
    },
    {
      id: 8,
      question:
        'Which antibodies are naturally present in the blood plasma of an individual with blood type O?',
      options: [
        'Neither anti-A nor anti-B antibodies',
        'Only anti-A antibodies',
        'Only anti-B antibodies',
        'Both anti-A and anti-B antibodies',
      ],
      correctIndex: 3,
      explanation:
        'Because Type O individuals (genotype ii) lack both A and B surface antigens, their immune system produces both anti-A and anti-B antibodies in plasma.',
    },
    {
      id: 9,
      question:
        'Why is blood type O-negative considered the universal red blood cell donor?',
      options: [
        'It has all three antigens (A, B, and Rh) and can bind any antibody',
        'It lacks A, B, and Rh surface antigens, so recipient antibodies will not recognize or agglutinate the transfused red blood cells',
        'It produces no hemoglobin',
        'It destroys all recipient white blood cells upon contact',
      ],
      correctIndex: 1,
      explanation:
        'Type O- negative red blood cells carry neither A, B, nor Rh surface antigens. When infused into any recipient, there are no target antigens for recipient antibodies to attack, avoiding fatal agglutination.',
    },
    {
      id: 10,
      question:
        'A mother with blood type A (genotype I^A i) and a father with blood type B (genotype I^B i) have children. Can they have a child with blood type O?',
      options: [
        'No, because A and B are dominant over O',
        'Yes, with a 25% (1/4) probability',
        'Yes, with a 50% (1/2) probability',
        'Only if the child is a biological male',
      ],
      correctIndex: 1,
      explanation:
        'Both parents carry the recessive i allele. A cross of I^A i × I^B i yields 1/4 I^A I^B, 1/4 I^A i, 1/4 I^B i, and 1/4 i i (Type O). Thus, there is a 25% chance of a Type O child.',
    },
    {
      id: 11,
      question:
        'What term describes a human character like adult height or skin color that is controlled by the cumulative additive effects of many different genes, producing a continuous bell-shaped distribution?',
      options: ['Pleiotropy', 'Polygenic inheritance', 'Epistasis', 'Multiple allelism'],
      correctIndex: 1,
      explanation:
        'Polygenic inheritance occurs when multiple distinct gene loci exert additive quantitative effects on a single phenotype, yielding a continuous Gaussian bell curve across a population.',
    },
    {
      id: 12,
      question:
        'Why are biological human males (XY) referred to as "hemizygous" for X-linked genes?',
      options: [
        'They have two copies of the X chromosome, but one is silenced',
        'They have only one copy of the X chromosome and therefore express whatever allele is present on that single X',
        'They have half the normal number of autosomes',
        'They can only transmit X-linked genes to their sons',
      ],
      correctIndex: 1,
      explanation:
        'Human males have one X and one Y chromosome. Because they possess only a single allele for any gene on the non-homologous portion of the X chromosome, they are hemizygous.',
    },
    {
      id: 13,
      question:
        'Red-green colorblindness is an X-linked recessive trait. A colorblind woman (X^b X^b) and a man with normal vision (X^B Y) have children. What percentage of their sons will be colorblind?',
      options: ['0%', '25%', '50%', '100%'],
      correctIndex: 3,
      explanation:
        'All sons inherit their single X chromosome from their mother and their Y chromosome from their father. Since the mother can only pass X^b, 100% of her sons will have genotype X^b Y and be colorblind.',
    },
    {
      id: 14,
      question:
        'In the same family (colorblind mother X^b X^b and normal vision father X^B Y), what percentage of their daughters will be colorblind?',
      options: ['0%', '50%', '75%', '100%'],
      correctIndex: 0,
      explanation:
        'All daughters inherit the dominant normal allele X^B from their father and an X^b from their mother, making 100% of the daughters heterozygous carriers (X^B X^b) with normal color vision (0% colorblind).',
    },
    {
      id: 15,
      question:
        'In a dihybrid cross of TtYy × TtYy, how many of the 16 Punnett square boxes contain individuals that are homozygous dominant for both genes (TTYY)?',
      options: ['1 box (1/16)', '2 boxes (2/16)', '4 boxes (4/16)', '9 boxes (9/16)'],
      correctIndex: 0,
      explanation:
        'P(TT) = 1/4 and P(YY) = 1/4. P(TTYY) = (1/4) × (1/4) = 1/16. Only 1 single square out of 16 contains the double homozygous dominant genotype.',
    },
    {
      id: 16,
      question:
        'A cross between two heterozygous black rabbits (Bb × Bb) yields a litter of 4 baby rabbits. What is the probability that all 4 will be black (B_)?',
      options: ['1/16', '81/256', '3/4', '1/256'],
      correctIndex: 1,
      explanation:
        'The probability of a black rabbit from Bb × Bb is 3/4. For 4 independent births: P(all 4 black) = (3/4)^4 = 81/256 (approx. 31.6%).',
    },
    {
      id: 17,
      question:
        'What is the fundamental difference between multiple alleles and polygenic inheritance?',
      options: [
        'Multiple alleles refers to more than two alleles existing for ONE gene locus in a population; polygenic inheritance refers to MULTIPLE distinct gene loci influencing a single trait',
        'Multiple alleles only occurs in plants; polygenic inheritance only occurs in humans',
        'Multiple alleles always produces a bell-shaped curve; polygenic inheritance never produces variation',
        'Multiple alleles is sex-linked; polygenic inheritance is mitochondrial',
      ],
      correctIndex: 0,
      explanation:
        'Multiple alleles describes three or more alternative alleles at a single locus (like ABO blood group). Polygenic inheritance involves multiple separate gene loci whose products additively shape one phenotype (like height).',
    },
    {
      id: 18,
      question:
        'If a man of blood type AB (I^A I^B) marries a woman of blood type O (ii), what blood types can their children NEVER have?',
      options: ['Types A and B', 'Types AB and O', 'Only Type O', 'Only Type B'],
      correctIndex: 1,
      explanation:
        'The father always passes either I^A or I^B, and the mother always passes i. The children can only be I^A i (Type A) or I^B i (Type B). They can NEVER have blood type AB or blood type O.',
    },
    {
      id: 19,
      question:
        'A testcross of an organism heterozygous for two traits (AaBb × aabb) yields 25% AaBb, 25% Aabb, 25% aaBb, and 25% aabb. What does this confirm about the two genes?',
      options: [
        'They are tightly linked and located on the same chromosome with zero crossing over',
        'They assort independently on separate chromosomes or are located very far apart on the same chromosome',
        'One gene is epistatic to the other',
        'The organism is sterile',
      ],
      correctIndex: 1,
      explanation:
        'A 1:1:1:1 testcross ratio confirms that the four gamete types were produced in equal frequencies, which is the hallmark of independent assortment.',
    },
    {
      id: 20,
      question:
        'Why does a cross between two individuals with incomplete dominance (e.g., pink snapdragons) produce a 1:2:1 phenotypic ratio instead of a 3:1 ratio?',
      options: [
        'Heterozygotes have an intermediate phenotype easily distinguishable from both homozygotes',
        'Half of the homozygous dominant offspring die before hatching',
        'The two genes are located on sex chromosomes',
        'The alleles mutate during fertilization',
      ],
      correctIndex: 0,
      explanation:
        'Because the heterozygote (C^R C^W, pink) has a distinct phenotype that does not mask the recessive allele, every distinct genotype has a unique phenotype: 1 Red (C^R C^R) : 2 Pink (C^R C^W) : 1 White (C^W C^W).',
    },
  ],
};
