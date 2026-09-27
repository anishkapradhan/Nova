import { DesignerGenesTopic } from '@/types/designer-genes';

export const inheritancePatternsTopic: DesignerGenesTopic = {
  slug: 'inheritance-patterns',
  topicNumber: 6,
  title: 'Non-Mendelian Inheritance & Sex Linkage',
  subtitle: 'Lethal Alleles, Pleiotropy, Incomplete Dominance, Penetrance, Barr Bodies & Sex-Linked Traits',
  badge: 'Topic 06 • Complex Inheritance',
  accentColor: 'rose',
  sourceDeck: 'Inheritance 26_27.pptx',
  freshmanSummary:
    'While Mendel discovered the fundamental rules of genetics with simple pea plants, nature is far more creative! In this guide, high school freshmen explore what happens when alleles refuse to follow simple dominance: when males inherit traits solely from their mothers via X-linkage, when calico cats display mosaic coat colors due to Barr body X-inactivation, when deadly alleles warp expected ratios from 3:1 to 2:1, and how a single gene mutation can ripple through the entire body (pleiotropy).',
  diagram: {
    type: 'x-inactivation-epigenetics',
    title: 'X-Chromosome Inactivation (Lyonization) & Mosaicism',
    caption:
      'In early female mammalian embryos (XX), one X chromosome is randomly condensed into a transcriptionally silent heterochromatin Barr body, creating a mosaic of cellular expression.',
    laymanExplanation:
      'Imagine every female cell is handed two identical instruction flashlights (two X chromosomes). To prevent an overwhelming blinding glare (double dosage of proteins), each cell randomly clicks one flashlight OFF into a dense lump (a Barr body). When those cells multiply, patches of the body express the maternal X while neighboring patches express the paternal X—which is exactly why every calico cat has a one-of-a-kind patchwork fur pattern!',
  },
  sections: [
    {
      id: 'mendels-laws-and-exceptions',
      title: 'Mendel’s Laws & Their Modern Exceptions',
      subheading: 'Law of dominance, segregation, independent assortment, and linkage',
      laymanExplanation:
        'Gregor Mendel established three core principles: 1) Dominance: one allele masks another; 2) Segregation: each diploid parent carries two alleles per gene, but separates them so each gamete gets only one; 3) Independent Assortment: genes on different chromosomes sort independently during Metaphase I of meiosis. However, real-world biology has exceptions: codominance (both alleles express fully, like AB blood), incomplete dominance (alleles blend into an intermediate phenotype, like pink snapdragons), and genetic linkage (genes physically close together on the same chromosome travel as a package deal).',
      realWorldAnalogy:
        'Independent assortment is like rolling two independent dice—getting a 6 on die A doesn’t affect die B. But genetic linkage is like taping those two dice together with duct tape: whatever number faces up on one will force the second die to land with it!',
      keyTerms: [
        {
          term: 'Law of Segregation',
          definition:
            'During gamete formation (meiosis), the two alleles for each gene segregate so that each egg or sperm cell carries only one allele.',
        },
        {
          term: 'Law of Independent Assortment',
          definition:
            'Genes located on non-homologous chromosomes assort independently of one another during Metaphase I and Anaphase I of meiosis.',
        },
        {
          term: 'Incomplete Dominance',
          definition:
            'A genetic pattern where the heterozygous phenotype is an intermediate blend between the two homozygous phenotypes (e.g., Red x White = Pink, 1:2:1 ratio).',
        },
        {
          term: 'Codominance',
          definition:
            'A genetic pattern where both alleles are simultaneously and fully expressed in the heterozygote without blending (e.g., Roan cattle, MN blood group, AB blood).',
        },
      ],
      mathBreakdown: {
        name: 'Incomplete Dominance Phenotypic Ratio',
        formula: 'Heterozygous Cross (R_1 R_2 x R_1 R_2) -> 1 R_1 R_1 : 2 R_1 R_2 : 1 R_2 R_2',
        variables: 'R_1 = Red pigment allele; R_2 = White pigment allele; R_1 R_2 = Pink intermediate.',
        walkThrough:
          'When true-breeding red snapdragons (C^R C^R) are crossed with white snapdragons (C^W C^W), 100% of F1 are pink (C^R C^W). Crossing two pink F1 plants produces 1/4 Red, 1/2 Pink, and 1/4 White. Unlike standard Mendelian dominance where the phenotypic ratio is 3:1, incomplete dominance yields an exact 1:2:1 phenotypic ratio matching the genotypic ratio!',
        practiceProblem: {
          problem:
            'Two roan shorthorn cattle (displaying codominant red and white hairs, C^R C^W) are bred together. Out of 16 calves, how many are expected to be solid red, roan, and solid white?',
          solution:
            'The ratio is 1 Red : 2 Roan : 1 White. Out of 16 calves: (1/4) * 16 = 4 solid red; (2/4) * 16 = 8 roan; (1/4) * 16 = 4 solid white.',
        },
      },
    },
    {
      id: 'sex-linkage-chromosomes',
      title: 'Sex-Linked vs. Autosomal Inheritance',
      subheading: 'Chromosomes 1-22 vs. X and Y chromosomes, hemizygosity, and transmission',
      laymanExplanation:
        'Humans have 23 pairs of chromosomes: pairs 1 through 22 are autosomes (identical in structure between males and females), while pair 23 are the sex chromosomes (XX in biological females, XY in biological males). Autosomal traits affect both sexes with equal likelihood. However, sex-linked traits are located on sex chromosomes—most commonly the large X chromosome (which carries >1,000 genes) or the tiny Y chromosome (which carries ~70 genes, including the SRY male-determining gene). Because males have only one X chromosome (hemizygous, X^a Y), they cannot be carriers of X-linked recessive traits; if they inherit one defective X allele from their mother, they will 100% express the condition!',
      realWorldAnalogy:
        'Think of chromosomes like backup hard drives. Females have two duplicate drives (XX), so if Drive 1 has a corrupted file (a recessive mutation), Drive 2 acts as a functioning backup. Males have one primary drive (X) and a tiny USB flash drive (Y) that lacks those files. If the male’s X drive has a bug, there is no backup—the bug crashes the system immediately!',
      keyTerms: [
        {
          term: 'Autosomes',
          definition:
            'Non-sex chromosomes (pairs 1 to 22 in humans) that are inherited equally by males and females.',
        },
        {
          term: 'Hemizygous',
          definition:
            'Having only a single copy of a gene or chromosome instead of two. Human males are hemizygous for all non-pseudoautosomal genes on the X and Y chromosomes.',
        },
        {
          term: 'X-Linked Recessive',
          definition:
            'Inheritance mode where the gene is on the X chromosome and recessive. Males (X^a Y) are affected much more frequently than females (X^a X^a), and affected fathers NEVER pass the trait to sons.',
        },
        {
          term: 'SRY Gene',
          definition:
            'Sex-determining Region Y gene on the short arm of the human Y chromosome that encodes Testis-Determining Factor (TDF), triggering male gonadal development.',
        },
      ],
      mathBreakdown: {
        name: 'X-Linked Recessive Carrier Transmission Probability',
        formula: 'P(Affected Son) = P(Mother transmits X^a) x P(Father transmits Y) = 0.5 x 0.5 = 0.25 (or 50% of sons)',
        variables: 'Mother = X^A X^a (unaffected carrier); Father = X^A Y (unaffected male).',
        walkThrough:
          'A carrier mother (X^H X^h) for hemophilia marries an unaffected male (X^H Y). What is the probability that their first child is a son with hemophilia? Punnett square: X^H X^H (normal girl), X^H X^h (carrier girl), X^H Y (normal boy), X^h Y (hemophiliac boy). Each outcome has a probability of 1/4 (25%). Among male offspring specifically, 1 out of 2 (50%) will have hemophilia!',
        practiceProblem: {
          problem:
            'A red-green colorblind man (X^b Y) marries a woman with normal vision whose father was colorblind. What fraction of their daughters and sons are expected to be colorblind?',
          solution:
            'The mother’s father was X^b Y, so the mother must be a carrier: X^B X^b. The father is X^b Y. Daughters receive X^b from dad and either X^B or X^b from mom: 1/2 X^B X^b (carrier) and 1/2 X^b X^b (colorblind). 50% of daughters are colorblind! Sons receive Y from dad and X^B or X^b from mom: 1/2 X^B Y (normal) and 1/2 X^b Y (colorblind). 50% of sons are colorblind.',
        },
      },
    },
    {
      id: 'x-inactivation-barr-bodies',
      title: 'X-Chromosome Inactivation & Barr Bodies (Lyon Hypothesis)',
      subheading: 'Dosage compensation, Xist long noncoding RNA, and cellular mosaicism',
      laymanExplanation:
        'Because mammalian females have two X chromosomes (XX) and males have only one (XY), females would produce double the quantity of X-chromosome proteins without a balancing mechanism. Mary Lyon discovered dosage compensation: during early embryonic cleavage (~100-cell blastocyst stage), every female cell randomly and irreversibly shrivels one of its two X chromosomes into a dense, non-functional heterochromatin clump called a Barr body. This process is driven by the Xist gene (X-inactive specific transcript), a long non-coding RNA that coats the inactive X chromosome like black spray paint, recruiting histone deacetylases and DNA methyltransferases to permanently shut it down.',
      realWorldAnalogy:
        'Think of a two-story house where code permits only one air conditioner on at a time. In every room, someone flips a coin: heads turns off the upstairs AC, tails turns off the downstairs AC. The house stays at the exact same cooling output as a one-story home (the male XY), but each room has a different AC unit running.',
      keyTerms: [
        {
          term: 'Barr Body',
          definition:
            'A dense, condensed, transcriptionally inactive X chromosome found against the nuclear membrane in female mammalian somatic cells.',
        },
        {
          term: 'Lyon Hypothesis (Lyonization)',
          definition:
            'The principle stating that one X chromosome in each mammalian female cell is randomly and permanently inactivated during embryonic development.',
        },
        {
          term: 'Xist RNA',
          definition:
            'X-inactive specific transcript; a 17-kilobase noncoding RNA that coats the designated inactive X chromosome in cis, triggering epigenetic heterochromatin silencing.',
        },
        {
          term: 'Mosaicism',
          definition:
            'The presence of two or more genetically distinct cell populations in an individual arising from random X-inactivation (e.g., calico cat fur patches, anhidrotic ectodermal dysplasia).',
        },
      ],
      mathBreakdown: {
        name: 'The N - 1 Rule for Barr Body Counts',
        formula: 'Number of Barr Bodies = Total Number of X Chromosomes - 1',
        variables: 'N = Total count of X chromosomes in the karyotype of a diploid somatic cell.',
        walkThrough:
          'Regardless of phenotypic sex or total chromosome count, every human cell leaves exactly ONE active X chromosome. All excess X chromosomes are condensed into Barr bodies. For a normal female (46, XX): 2 - 1 = 1 Barr body. Normal male (46, XY): 1 - 1 = 0 Barr bodies. Klinefelter male (47, XXY): 2 - 1 = 1 Barr body. Turner female (45, X0): 1 - 1 = 0 Barr bodies. Triple X female (47, XXX): 3 - 1 = 2 Barr bodies!',
        practiceProblem: {
          problem:
            'A patient’s buccal swab reveals cells containing 3 distinct Barr bodies against the nuclear envelope. What is the minimum number of X chromosomes present in this patient?',
          solution:
            'Using Barr Bodies = N - 1: 3 = N - 1, therefore N = 4 X chromosomes (e.g., 48, XXXX or 49, XXXXY).',
        },
      },
    },
    {
      id: 'lethal-alleles-and-pleiotropy',
      title: 'Lethal Alleles, Pleiotropy, Penetrance & Expressivity',
      subheading: 'Modified 2:1 Mendelian ratios, multi-system syndrome ripples, and expression variation',
      laymanExplanation:
        'Some gene mutations are so vital to embryonic survival that inheriting two mutated copies causes embryonic death. These are recessive lethal alleles. When two carriers reproduce, the homozygous mutant embryos die before birth and are never counted, transforming the classic 3:1 phenotypic ratio into a 2:1 living ratio! Meanwhile, pleiotropy occurs when a single mutated gene causes widespread, seemingly unrelated symptoms across multiple organ systems. Finally, penetrance is an all-or-nothing percentage (do you show symptoms or not?), whereas expressivity is the volume knob (how severe are your symptoms?).',
      realWorldAnalogy:
        'Lethal alleles are like a car where a missing part fails inspection entirely: you only see cars with 1 or 2 working parts on the highway. Pleiotropy is like dropping a pebble into a calm pond: one tiny splash creates concentric ripples that disturb the lily pads, the ducks, and the shoreline all at once.',
      keyTerms: [
        {
          term: 'Lethal Allele',
          definition:
            'An allele that causes premature death of the organism, most commonly during embryonic or early developmental stages (e.g., yellow coat allele A^Y in mice, Achondroplasia FGFR3 in humans).',
        },
        {
          term: 'Pleiotropy',
          definition:
            'A phenomenon where a single gene or mutation influences two or more distinct, seemingly unrelated phenotypic traits (e.g., Marfan syndrome FBN1 affecting eyes, skeleton, and aorta).',
        },
        {
          term: 'Penetrance',
          definition:
            'The proportion or percentage of individuals carrying a specific genotype who actually manifest the corresponding clinical phenotype (complete = 100%, incomplete < 100%).',
        },
        {
          term: 'Variable Expressivity',
          definition:
            'The degree or range of severity with which a particular genotype is expressed phenotypically among different individuals carrying the same mutated allele.',
        },
      ],
      mathBreakdown: {
        name: 'Recessive Lethal Allele 2:1 Ratio Calculation',
        formula: 'Living Progeny = (1/3 Normal AA) : (2/3 Affected Heterozygote Aa) [aa dies in utero]',
        variables: 'A = wild-type allele; a = lethal allele that is dominant for physical trait but recessive lethal.',
        walkThrough:
          'In Manx cats, the tailless allele (M) is dominant over normal tail (m). However, the homozygous genotype (MM) causes severe spinal deformity and embryonic resorption. When two tailless Manx cats (Mm x Mm) are mated, the Punnett square produces: 1/4 MM (dies before birth), 2/4 Mm (tailless living), 1/4 mm (tailed living). Among the living surviving kittens, the phenotypic ratio is exactly 2 tailless : 1 tailed!',
        practiceProblem: {
          problem:
            'In mice, yellow coat color (A^Y) is dominant to agouti (A) for coat color, but homozygous A^Y A^Y is lethal during gastrulation. If two yellow mice are crossed and produce a litter of 12 live pups, how many are expected to have yellow coats?',
          solution:
            'Cross is A^Y A x A^Y A. Living genotypes are 2/3 A^Y A (yellow) and 1/3 A A (agouti). Expected yellow pups = (2/3) * 12 = 8 yellow pups.',
        },
      },
    },
  ],
  flashcards: [
    {
      id: 'fc-inh-1',
      term: 'Autosome vs. Sex Chromosome',
      category: 'Definition',
      front: 'What is the fundamental difference between an autosome and a sex chromosome?',
      back: 'Autosomes (chromosomes 1-22 in humans) are identical in homologous pairs across both biological sexes. Sex chromosomes (X and Y in humans) determine biological sex and carry sex-linked traits.',
      tip: 'Humans have 44 autosomes (22 pairs) and 2 sex chromosomes (1 pair).',
    },
    {
      id: 'fc-inh-2',
      term: 'Hemizygous',
      category: 'Definition',
      front: 'Why are human males described as "hemizygous" for X-linked genes?',
      back: 'Because human males have only ONE X chromosome (XY), they possess only one allele copy for every gene located on the X chromosome instead of a homologous pair.',
      example: 'Males with a single recessive X-linked allele (X^a Y) manifest the condition fully.',
    },
    {
      id: 'fc-inh-3',
      term: 'Incomplete Dominance',
      category: 'Concept',
      front: 'What phenotypic ratio results from crossing two heterozygotes under incomplete dominance?',
      back: 'A 1:2:1 phenotypic ratio (matching the 1:2:1 genotypic ratio), because the heterozygote displays a unique blended intermediate phenotype (e.g., Red : Pink : White).',
      tip: 'Mendelian 3:1 ratio is replaced by 1:2:1 because heterozygotes have their own distinct visual color.',
    },
    {
      id: 'fc-inh-4',
      term: 'Codominance',
      category: 'Concept',
      front: 'How does codominance differ from incomplete dominance at the molecular level?',
      back: 'In codominance, both alleles are fully and simultaneously expressed without blending (e.g., AB blood has both A and B glycoproteins). In incomplete dominance, the phenotype is an intermediate mix.',
      example: 'Roan cattle have individual red hairs and white hairs growing side by side.',
    },
    {
      id: 'fc-inh-5',
      term: 'Barr Body',
      category: 'Definition',
      front: 'What is a Barr body, and which sex typically has one in normal human cells?',
      back: 'A Barr body is an inactive, highly condensed heterochromatin X chromosome. Normal human females (XX) have 1 Barr body per somatic cell, whereas normal males (XY) have 0.',
      tip: 'Formula: Number of Barr bodies = Total X chromosomes - 1.',
    },
    {
      id: 'fc-inh-6',
      term: 'Lyonization',
      category: 'Process',
      front: 'What is Lyonization (the Lyon hypothesis)?',
      back: 'The random, permanent inactivation of one of the two X chromosomes in each mammalian female somatic cell during early embryonic development to achieve dosage compensation.',
      example: 'Mary Lyon proposed this in 1961 to explain mosaic pigmentation in female mice and calico cats.',
    },
    {
      id: 'fc-inh-7',
      term: 'Xist Noncoding RNA',
      category: 'Technique',
      front: 'What molecular trigger initiates X-chromosome inactivation?',
      back: 'The Xist gene (X-inactive specific transcript) produces a 17-kb long noncoding RNA that physically coats the selected X chromosome in cis, recruiting histone-modifying silencing complexes.',
      tip: 'Xist is transcribed ONLY from the future inactive X chromosome, not the active one!',
    },
    {
      id: 'fc-inh-8',
      term: 'Calico Cat Mosaicism',
      category: 'Disease/Example',
      front: 'Why are virtually all calico and tortoiseshell cats female?',
      back: 'The gene for black vs. orange fur is located on the X chromosome. Because females randomly inactivate one X chromosome in different cell lineages, patches express orange while others express black.',
      tip: 'Rare male calico cats typically have Klinefelter syndrome (XXY karyotype).',
    },
    {
      id: 'fc-inh-9',
      term: 'Recessive Lethal Allele Ratio',
      category: 'Calculation',
      front: 'What phenotypic ratio is observed among surviving live offspring when two carriers of a recessive lethal allele mate?',
      back: 'A 2:1 ratio (2 heterozygote carriers : 1 homozygous wild-type), because homozygous mutant embryos (1/4) perish before birth.',
      example: 'Manx tailless cats (Mm x Mm) produce 2 tailless : 1 normal tailed surviving kittens.',
    },
    {
      id: 'fc-inh-10',
      term: 'Pleiotropy',
      category: 'Definition',
      front: 'What is pleiotropy? Give a classic human genetic example.',
      back: 'Pleiotropy is when a single gene mutation causes multiple, seemingly unrelated phenotypic effects across different body systems. Example: Marfan syndrome (FBN1 mutation) affects eyes, heart aorta, and long bones.',
      tip: 'One gene -> Many distinct symptoms.',
    },
    {
      id: 'fc-inh-11',
      term: 'Penetrance vs. Expressivity',
      category: 'Concept',
      front: 'Explain the difference between penetrance and expressivity.',
      back: 'Penetrance is the percentage of individuals with a genotype who show ANY symptoms (all-or-none). Expressivity describes the variation in severity or degree of symptoms among affected individuals.',
      tip: 'Penetrance is a light switch (ON/OFF). Expressivity is a dimmer switch (dim to blinding).',
    },
    {
      id: 'fc-inh-12',
      term: 'SRY Gene',
      category: 'Definition',
      front: 'Where is the SRY gene located, and what is its physiological role?',
      back: 'Located on the short arm of the Y chromosome; encodes Testis-Determining Factor (TDF), a transcription factor that triggers embryonic bipotential gonads to develop into testes.',
      tip: 'Without SRY (or with a deleted SRY), the embryo defaults to female anatomical development.',
    },
    {
      id: 'fc-inh-13',
      term: 'X-Linked Dominant Inheritance',
      category: 'Concept',
      front: 'In X-linked dominant inheritance, what fraction of daughters receive the trait from an affected father?',
      back: '100% of daughters! Affected fathers must pass their single X chromosome (carrying the dominant mutation) to all daughters, but pass their Y chromosome to all sons (0% of sons affected).',
      tip: 'Affected dad -> ALL daughters affected, NO sons affected.',
    },
    {
      id: 'fc-inh-14',
      term: 'Klinefelter Syndrome Barr Bodies',
      category: 'Calculation',
      front: 'How many Barr bodies are present in a somatic cell of an individual with Klinefelter syndrome (47, XXY)?',
      back: '1 Barr body. Using the N - 1 rule: 2 X chromosomes - 1 = 1 Barr body. (Even though the individual is biologically male due to the Y chromosome, the extra X is inactivated).',
    },
    {
      id: 'fc-inh-15',
      term: 'Overdominance (Heterozygote Advantage)',
      category: 'Concept',
      front: 'What is overdominance or heterozygote advantage?',
      back: 'A condition where the heterozygous genotype has higher reproductive fitness than either homozygous genotype (e.g., Sickle-cell trait HbA/HbS confers resistance against malaria without sickle crises).',
    },
    {
      id: 'fc-inh-16',
      term: 'Sex-Influenced vs. Sex-Limited Traits',
      category: 'Concept',
      front: 'What is the difference between a sex-influenced and a sex-limited trait?',
      back: 'Sex-influenced traits are autosomal but show different dominance in sexes due to hormones (e.g., male pattern baldness is dominant in males, recessive in females). Sex-limited traits are expressed in only ONE sex (e.g., lactation, beard growth).',
    },
  ],
  quiz: [
    {
      id: 1,
      question:
        'A cross between a true-breeding red snapdragon and a true-breeding white snapdragon yields 100% pink offspring. What inheritance pattern does this demonstrate?',
      options: ['Complete dominance', 'Incomplete dominance', 'Codominance', 'Epistasis'],
      correctIndex: 1,
      explanation:
        'Incomplete dominance occurs when the heterozygous phenotype is an intermediate blend between the two homozygous parental phenotypes (Red + White = Pink).',
    },
    {
      id: 2,
      question:
        'A person with blood type AB expresses both A and B carbohydrates on the surface of their red blood cells. Which genetic phenomenon explains this?',
      options: ['Codominance', 'Incomplete dominance', 'Pleiotropy', 'Sex-linkage'],
      correctIndex: 0,
      explanation:
        'In codominance, both alleles (I^A and I^B) are fully and independently expressed without blending or overshadowing each other.',
    },
    {
      id: 3,
      question:
        'Why are X-linked recessive disorders such as Duchenne muscular dystrophy and hemophilia observed much more frequently in biological males than females?',
      options: [
        'Males have higher mutation rates on their X chromosomes',
        'Males are hemizygous (XY) and lack a second homologous X chromosome to mask a mutant allele',
        'Females cannot inherit recessive alleles from their fathers',
        'The Y chromosome actively silences protective alleles on the X chromosome',
      ],
      correctIndex: 1,
      explanation:
        'Human males have only one X chromosome (hemizygous). If they inherit an X chromosome with a recessive mutation, they will express the disorder because they have no second X to provide a functional wild-type allele.',
    },
    {
      id: 4,
      question:
        'A man with hemophilia (X^h Y) has children with a woman who has no family history of hemophilia (X^H X^H). What is the probability that their son will have hemophilia?',
      options: ['0%', '25%', '50%', '100%'],
      correctIndex: 0,
      explanation:
        'Fathers transmit their Y chromosome to all sons and their X chromosome to all daughters. Since the mother is homozygous normal (X^H X^H), all sons inherit an X^H from mom and Y from dad (X^H Y), giving 0% chance of hemophilia.',
    },
    {
      id: 5,
      question:
        'According to the Lyon hypothesis, how does a mammalian female cell compensate for having twice as many X-linked genes as a male cell?',
      options: [
        'By doubling the rate of transcription on the male Y chromosome',
        'By destroying one entire X chromosome during fertilization',
        'By randomly condensing one X chromosome into an inactive Barr body in each somatic cell',
        'By halving the rate of translation of all autosomal mRNAs',
      ],
      correctIndex: 2,
      explanation:
        'Dosage compensation in female mammals occurs via random X-inactivation (Lyonization), where one X chromosome condenses into a transcriptionally inert Barr body.',
    },
    {
      id: 6,
      question:
        'How many Barr bodies would you expect to observe in a somatic cell of a person with Triple X syndrome (47, XXX)?',
      options: ['0', '1', '2', '3'],
      correctIndex: 2,
      explanation:
        'The number of Barr bodies equals the total number of X chromosomes minus 1 (N - 1 rule). For 47, XXX: 3 - 1 = 2 Barr bodies.',
    },
    {
      id: 7,
      question:
        'Which long noncoding RNA is responsible for coating and epigenetically silencing the designated inactive X chromosome?',
      options: ['Xist', 'Tsix', 'miRNA-21', 'Telomerase RNA component (TERC)'],
      correctIndex: 0,
      explanation:
        'Xist (X-inactive specific transcript) is a 17-kb long noncoding RNA that physically coats the future inactive X chromosome in cis and recruits chromatin-condensing silencing enzymes.',
    },
    {
      id: 8,
      question:
        'Why are calico cats almost exclusively female?',
      options: [
        'The calico gene is carried on the Y chromosome',
        'Male kittens carrying any coat color allele die during embryogenesis',
        'The black and orange coat color alleles are located on the X chromosome, and random X-inactivation creates patches of color in XX females',
        'Testosterone degrades orange pigment molecules in male hair follicles',
      ],
      correctIndex: 2,
      explanation:
        'Coat color alleles (orange and black) reside on the X chromosome. Heterozygous females (X^B X^O) have random X-inactivation in different embryonic cell clusters, producing patches of orange and black fur. Normal males (XY) have only one X and can only be solid black or solid orange.',
    },
    {
      id: 9,
      question:
        'A cross between two tailless Manx cats (Mm x Mm) results in 6 tailless kittens and 3 normal tailed kittens. Why is a 2:1 ratio observed instead of the classic Mendelian 3:1 ratio?',
      options: [
        'The tailless allele is incompletely dominant',
        'Homozygous dominant (MM) embryos die during embryonic development (recessive lethal)',
        'The gene is located on the mitochondrial DNA',
        'Nondisjunction eliminated the recessive allele',
      ],
      correctIndex: 1,
      explanation:
        'The Manx tailless allele (M) causes lethal skeletal defects in homozygotes (MM), causing 1/4 of embryos to die in utero. The surviving kittens consist of 2/3 Mm (tailless) and 1/3 mm (tailed), creating a 2:1 living ratio.',
    },
    {
      id: 10,
      question:
        'A single mutation in the human FBN1 gene causes tall stature, long thin fingers, lens dislocation in the eyes, and dangerous aortic aneurysms. This is an example of:',
      options: ['Polygenic inheritance', 'Pleiotropy', 'Epistasis', 'Genomic imprinting'],
      correctIndex: 1,
      explanation:
        'Pleiotropy describes a genetic phenomenon where a single mutation in one gene has multiple, seemingly unrelated phenotypic effects across multiple bodily systems.',
    },
    {
      id: 11,
      question:
        'If 80 out of 100 people who carry a dominant disease-causing allele actually manifest symptoms of the disorder, what is the penetrance of this condition?',
      options: ['20%', '80%', '100%', '0.08%'],
      correctIndex: 1,
      explanation:
        'Penetrance is defined as the percentage of individuals carrying a given genotype who show the associated phenotype: 80 / 100 = 80% (incomplete penetrance).',
    },
    {
      id: 12,
      question:
        'Two individuals with neurofibromatosis type 1 carry the identical NF1 gene mutation. One individual has mild café-au-lait skin spots, while the other develops extensive disfiguring neurofibromas and learning disabilities. This difference demonstrates:',
      options: ['Incomplete penetrance', 'Variable expressivity', 'Codominance', 'Maternal inheritance'],
      correctIndex: 1,
      explanation:
        'Variable expressivity refers to the degree of severity or range of phenotypic symptoms displayed by individuals with the same underlying disease-causing genotype.',
    },
    {
      id: 13,
      question:
        'Which gene on the human Y chromosome is primarily responsible for triggering male embryonic sexual differentiation?',
      options: ['SOX9', 'DAX1', 'SRY', 'Xist'],
      correctIndex: 2,
      explanation:
        'The SRY (Sex-determining Region Y) gene encodes Testis-Determining Factor (TDF), which directs bipotential embryonic gonads to develop into testes.',
    },
    {
      id: 14,
      question:
        'In an X-linked dominant condition (such as hypophosphatemic rickets), what proportion of daughters will inherit the condition from an affected father and an unaffected mother?',
      options: ['0%', '50%', '75%', '100%'],
      correctIndex: 3,
      explanation:
        'An affected father has genotype X^D Y. He must transmit his mutant X^D chromosome to 100% of his daughters. Because the trait is dominant, 100% of daughters will have the condition.',
    },
    {
      id: 15,
      question:
        'How many Barr bodies are found in a somatic cell of a female with Turner syndrome (45, X0)?',
      options: ['0', '1', '2', '3'],
      correctIndex: 0,
      explanation:
        'Using the N - 1 rule: 1 X chromosome - 1 = 0 Barr bodies. Turner syndrome females have only a single X chromosome, so no inactivation occurs.',
    },
    {
      id: 16,
      question:
        'Heterozygotes for the sickle-cell allele (HbA/HbS) are resistant to severe malaria while avoiding sickle-cell crises. This evolutionary phenomenon is called:',
      options: ['Heterozygote advantage (overdominance)', 'Incomplete penetrance', 'Negative epistasis', 'Genetic drift'],
      correctIndex: 0,
      explanation:
        'Heterozygote advantage (overdominance) occurs when the heterozygous genotype confers greater reproductive or survival fitness than either homozygous genotype.',
    },
    {
      id: 17,
      question:
        'A woman with normal color vision whose father was colorblind marries a man with normal vision. What is the probability that their first child is a colorblind son?',
      options: ['1/8 (12.5%)', '1/4 (25%)', '1/2 (50%)', '0%'],
      correctIndex: 1,
      explanation:
        'The woman received X^b from her colorblind dad, so she is X^B X^b. The father is X^B Y. The Punnett square outcomes are X^B X^B (1/4), X^B X^b (1/4), X^B Y (1/4), and X^b Y (1/4). The probability of an affected son is 1/4 (25%).',
    },
    {
      id: 18,
      question:
        'What is a holandric trait?',
      options: [
        'A trait encoded on mitochondrial DNA',
        'A trait encoded exclusively on the non-pseudoautosomal region of the Y chromosome, passed strictly father-to-son',
        'A trait that is only expressed in homozygous females',
        'A lethal gene that skips generations',
      ],
      correctIndex: 1,
      explanation:
        'Holandric traits are governed by genes located on the Y chromosome and are transmitted exclusively from fathers to all of their sons.',
    },
    {
      id: 19,
      question:
        'Male-pattern baldness is autosomal, but acts dominant in men (BB and Bb show baldness) and recessive in women (only BB shows baldness). This is an example of a:',
      options: ['Sex-linked trait', 'Sex-influenced trait', 'Sex-limited trait', 'Y-linked trait'],
      correctIndex: 1,
      explanation:
        'Sex-influenced traits are determined by autosomal genes whose phenotypic dominance depends on biological sex and circulating steroid hormones like testosterone.',
    },
    {
      id: 20,
      question:
        'In mice, yellow fur (A^Y) is dominant for yellow coat but recessive lethal. If a yellow mouse is testcrossed with an agouti (wild-type, AA) mouse, what is the expected ratio of living offspring?',
      options: ['1 yellow : 1 agouti', '2 yellow : 1 agouti', '3 yellow : 1 agouti', 'All yellow'],
      correctIndex: 0,
      explanation:
        'All living yellow mice must be heterozygous (A^Y A) because A^Y A^Y dies in utero. Crossing A^Y A x AA yields 1/2 A^Y A (yellow) and 1/2 AA (agouti), giving a 1:1 ratio. Since no A^Y A^Y offspring are produced, no lethality occurs in this cross.',
    },
  ],
};
