import { DesignerGenesTopic } from '@/types/designer-genes';

export const populationGeneticsTopic: DesignerGenesTopic = {
  slug: 'population-genetics',
  topicNumber: 7,
  title: 'Population Genetics, Microevolution & Speciation',
  subtitle: 'Hardy-Weinberg Equilibrium, Allele Shifts, Genetic Drift, Selection Modes & Speciation Types',
  badge: 'Topic 07 • Evolutionary Genetics',
  accentColor: 'indigo',
  sourceDeck: 'Population Genetics 26_27.pptx',
  freshmanSummary:
    'Instead of looking at one single family, population genetics zooms out to calculate how entire gene pools change over time. High school freshmen learn how mathematical equations (Hardy-Weinberg equilibrium) predict whether a population is evolving, how random bottlenecks and founder effects skew allele frequencies, how natural selection sculpts phenotypes via stabilizing, directional, or disruptive pressure, how new species arise through physical or behavioral isolation, and how gene duplication creates paralogs vs. orthologs.',
  diagram: {
    type: 'hardy-weinberg-selection',
    title: 'Hardy-Weinberg Equilibrium & Phenotypic Selection Curves',
    caption:
      'The Hardy-Weinberg binomial expansion p^2 + 2pq + q^2 = 1 paired with the three classic modes of natural selection (Stabilizing, Directional, and Disruptive).',
    laymanExplanation:
      'Imagine a giant jar holding thousands of red and blue marbles (alleles). If nobody adds marbles, nobody takes marbles away, and everyone draws randomly with their eyes closed, the percentage of red and blue marbles will stay identical forever (Hardy-Weinberg equilibrium). But if an environmental flood wipes out 95% of the jar (bottleneck), or birds only eat the blue marbles (directional selection), the gene pool shifts—and that shift is evolution!',
  },
  sections: [
    {
      id: 'microevolution-four-forces',
      title: 'Microevolution & The 4 Evolutionary Forces',
      subheading: 'Shifting allele frequencies, mutations, gene flow, and genetic drift',
      laymanExplanation:
        'Microevolution is defined as any change in allele frequencies within a population’s gene pool across generations over a relatively short timeframe. While macroevolution deals with grand events like the rise of mammals or the origin of feathers, microevolution operates continuously through four fundamental forces: 1) Mutation (the sole source of brand-new alleles, caused by radiation, chemicals, transposons or "jumping genes", and replication errors); 2) Gene Flow (migration of fertile individuals and their gametes between populations); 3) Genetic Drift (random chance events altering allele frequencies); and 4) Natural Selection (differential survival and reproductive success of individuals with advantageous heritable traits).',
      realWorldAnalogy:
        'Think of a population’s gene pool like a smoothie shop menu: Mutation invents a brand new fruit flavor; Gene Flow is a delivery truck importing fruits from another town; Genetic Drift is when someone accidentally knocks over an entire crate of berries; and Natural Selection is customers buying the tastiest flavors so the shop keeps stocking them.',
      keyTerms: [
        {
          term: 'Gene Pool',
          definition:
            'The aggregate of all copies of every type of allele at all loci in all individuals within a specific interbreeding population.',
        },
        {
          term: 'Microevolution',
          definition:
            'A change in allele frequencies in a population over successive generations, driven by mutation, natural selection, gene flow, or genetic drift.',
        },
        {
          term: 'Transposons ("Jumping Genes")',
          definition:
            'Mobile DNA sequences that can replicate and insert themselves into new positions within a genome, potentially mutating or altering gene regulation (discovered by Barbara McClintock).',
        },
        {
          term: 'Gene Flow',
          definition:
            'The transfer of genetic material between separate populations through the migration of fertile individuals or the dispersal of gametes (e.g., windblown pollen).',
        },
      ],
      mathBreakdown: {
        name: 'Allele Frequency Calculation from Genotypes',
        formula: 'p = f(A) = [2(AA) + (Aa)] / (2N), q = f(a) = [2(aa) + (Aa)] / (2N)',
        variables: 'N = total number of diploid individuals (2N = total number of alleles in the gene pool).',
        walkThrough:
          'In a wildflower population of 500 plants, 320 are homozygous dominant red (RR), 160 are heterozygous pink (Rr), and 20 are homozygous recessive white (rr). Total alleles = 2 * 500 = 1,000. Total R alleles = 2(320) + 160 = 800. Therefore, p = 800 / 1,000 = 0.80 (80%). Total r alleles = 2(20) + 160 = 200. Therefore, q = 200 / 1,000 = 0.20 (20%). Notice that p + q = 0.80 + 0.20 = 1.0!',
        practiceProblem: {
          problem:
            'In a population of 200 fruit flies, there are 50 flies with genotype BB, 100 with Bb, and 50 with bb. What are the allele frequencies p (for B) and q (for b)?',
          solution:
            'Total flies N = 200, so total alleles = 400. Total B alleles = 2(50) + 100 = 200. Frequency p = 200 / 400 = 0.50 (50%). Total b alleles = 2(50) + 100 = 200. Frequency q = 200 / 400 = 0.50 (50%).',
        },
      },
    },
    {
      id: 'hardy-weinberg-equilibrium',
      title: 'The Hardy-Weinberg Principle & Carrier Math',
      subheading: 'The 5 equilibrium conditions and the p^2 + 2pq + q^2 = 1 binomial model',
      laymanExplanation:
        'In 1908, English mathematician G.H. Hardy and German physician Wilhelm Weinberg independently proved that allele and genotype frequencies in a population remain constant from generation to generation (at equilibrium) unless acted upon by evolutionary agents. For a population to remain in Hardy-Weinberg equilibrium, FIVE strict conditions must be satisfied: 1) Extremely large population size (no genetic drift); 2) No gene flow (no immigration or emigration); 3) No net mutations; 4) Random mating (no sexual selection); and 5) No natural selection (all genotypes have equal fitness). If all 5 conditions hold, genotype frequencies can be calculated using p^2 + 2pq + q^2 = 1, where p^2 is homozygous dominant, 2pq is heterozygous carriers, and q^2 is homozygous recessive.',
      realWorldAnalogy:
        'Hardy-Weinberg equilibrium is the genetic equivalent of Newton’s First Law of Motion (an object at rest stays at rest unless an external force acts on it). Real populations almost never satisfy all 5 conditions perfectly—meaning life is constantly in motion and evolving!',
      keyTerms: [
        {
          term: 'Hardy-Weinberg Equilibrium',
          definition:
            'A null model stating that allele and genotype frequencies remain constant across generations in the absence of evolutionary forces.',
        },
        {
          term: 'p and q',
          definition:
            'The frequencies of the dominant allele (p) and the recessive allele (q) at a biallelic locus, such that p + q = 1.',
        },
        {
          term: '2pq',
          definition:
            'The expected frequency of heterozygous carrier individuals (Aa) in a population in Hardy-Weinberg equilibrium.',
        },
        {
          term: 'q^2',
          definition:
            'The expected frequency of homozygous recessive individuals (aa) in a population, which directly reflects the incidence of a recessive phenotype.',
        },
      ],
      mathBreakdown: {
        name: 'Calculating Carrier Frequency (2pq) from Disease Incidence (q^2)',
        formula: 'Step 1: q = sqrt(q^2) | Step 2: p = 1 - q | Step 3: Carrier Frequency = 2pq',
        variables: 'q^2 = fraction of population affected by recessive condition; 2pq = fraction of healthy carriers.',
        walkThrough:
          'In North America, cystic fibrosis (an autosomal recessive condition) affects approximately 1 in 2,500 newborns. What fraction of the population are unaffected carriers? Step 1: q^2 = 1 / 2,500 = 0.0004. Take square root: q = sqrt(0.0004) = 0.02 (2%). Step 2: p = 1 - 0.02 = 0.98 (98%). Step 3: Carrier frequency 2pq = 2 * (0.98) * (0.02) = 0.0392, or approximately 1 in 25 people! Unaffected carriers are almost 100 times more common than affected individuals.',
        practiceProblem: {
          problem:
            'In a population of 10,000 individuals in Hardy-Weinberg equilibrium, 16 individuals display an autosomal recessive metabolic disorder (aa). How many individuals in this population are expected to be heterozygous carriers (Aa)?',
          solution:
            'q^2 = 16 / 10,000 = 0.0016. Therefore q = sqrt(0.0016) = 0.04. p = 1 - 0.04 = 0.96. Carrier frequency 2pq = 2 * 0.96 * 0.04 = 0.0768 (7.68%). Out of 10,000 individuals, 0.0768 * 10,000 = 768 people are carriers.',
        },
      },
    },
    {
      id: 'genetic-drift-and-selection',
      title: 'Genetic Drift & 3 Modes of Natural Selection',
      subheading: 'Bottlenecks, founder effects, stabilizing, directional, and disruptive selection',
      laymanExplanation:
        'Genetic drift is the change in allele frequencies due to pure chance rather than adaptive fitness. It hits small populations hardest. A population bottleneck occurs when an environmental catastrophe (flood, fire, overhunting) randomly wipes out most of a population, leaving a drastically impoverished gene pool (e.g., cheetahs). A founder effect occurs when a small splinter group colonizes a new territory, carrying only a non-representative sample of the original gene pool (e.g., high polydactyly in Old Order Amish). In contrast, natural selection is non-random: Stabilizing selection favors intermediate phenotypes and culls extremes (e.g., human infant birth weight ~7 lbs); Directional selection shifts the entire curve toward one adaptive extreme (e.g., peppered moths turning black during industrial pollution); and Disruptive selection favors both extremes while selecting against the middle (e.g., small and large beaks in black-bellied seedcrackers).',
      realWorldAnalogy:
        'Stabilizing selection is like Goldilocks: "not too hot, not too cold, just right." Directional selection is like global warming making thicker fur obsolete in favor of cooling coats. Disruptive selection is like a party serving only finger foods and whole pizzas—medium-sized sandwiches get completely ignored!',
      keyTerms: [
        {
          term: 'Genetic Drift',
          definition:
            'Unpredictable fluctuations in allele frequencies from one generation to the next as a result of random sampling error in small populations.',
        },
        {
          term: 'Population Bottleneck',
          definition:
            'A severe, sudden contraction in population size caused by a non-selective catastrophe that dramatically slashes genetic diversity.',
        },
        {
          term: 'Founder Effect',
          definition:
            'Genetic drift that occurs when a few individuals become isolated from a larger population and establish a new colony with an unrepresentative gene pool.',
        },
        {
          term: 'Stabilizing Selection',
          definition:
            'Natural selection that favors intermediate variants by acting against extreme phenotypes, reducing phenotypic variance.',
        },
        {
          term: 'Directional Selection',
          definition:
            'Natural selection that favors individuals at one extreme of a phenotypic distribution, shifting the population mean in that direction.',
        },
        {
          term: 'Disruptive Selection',
          definition:
            'Natural selection that favors individuals at both extremes of the phenotypic range over intermediate phenotypes, potentially initiating speciation.',
        },
      ],
      mathBreakdown: {
        name: 'Genetic Drift Fixation Probability',
        formula: 'P(Fixation of neutral allele A) = p = initial allele frequency of A',
        variables: 'p = initial frequency of allele A; 1 - p = probability of allele A being lost forever (0%).',
        walkThrough:
          'If a neutral mutation arises as a single copy in a diploid population of N = 50 individuals (total alleles = 2N = 100), its initial frequency is p = 1 / 100 = 0.01 (1%). The probability that this neutral allele will randomly drift to 100% fixation is exactly 1%, while the probability that it will be permanently lost to extinction is 99%!',
        practiceProblem: {
          problem:
            'In a small endangered population of 10 island iguanas, an allele b has an initial frequency of 0.40. If evolution occurs solely via neutral genetic drift, what is the probability that allele b will eventually become fixed?',
          solution:
            'For neutral alleles under pure genetic drift, the probability of ultimate fixation equals its current allele frequency: P(Fixation) = 0.40 (40%).',
        },
      },
    },
    {
      id: 'speciation-and-homology',
      title: 'Speciation Mechanisms & Homology (Orthologs vs. Paralogs)',
      subheading: 'Allopatric, peripatric, parapatric, sympatric speciation and gene evolution',
      laymanExplanation:
        'Speciation is the evolutionary process by which new biological species arise. According to the Biological Species Concept (Ernst Mayr), two organisms belong to the same species if they can interbreed in nature and produce viable, fertile offspring (e.g., horses and donkeys can mate, but produce sterile mules, so they are distinct species). Speciation takes four distinct geographical paths: 1) Allopatric (a geographic barrier like a canyon or mountain divides a population); 2) Peripatric (a small splinter group enters an isolated peripheral niche, experiencing strong drift); 3) Parapatric (a continuous vast territory where organisms mate only with local neighbors, creating a hybrid zone); and 4) Sympatric (speciation occurs in the exact same geographic area without barriers, often via polyploidy in plants or sexual selection). Finally, Homology means similarity due to shared common ancestry. Homologous genes split into Orthologs (genes separated by a speciation event that retain identical functions) and Paralogs (genes created by gene duplication within a lineage that diverge into novel functions, like alpha and beta hemoglobin).',
      realWorldAnalogy:
        'Think of a computer operating system: Orthologs are like Microsoft Word on Windows vs. Word on Mac—they diverged when the platforms split (speciation), but both type documents (same function). Paralogs are like copy-pasting Word to create Excel—a duplication event allowed the new software to evolve a whole new function (spreadsheets)!',
      keyTerms: [
        {
          term: 'Biological Species Concept',
          definition:
            'Definition of a species as a group of populations whose members have the potential to interbreed in nature and produce viable, fertile offspring.',
        },
        {
          term: 'Allopatric Speciation',
          definition:
            'The formation of new species in populations that are geographically isolated from one another by a physical barrier (e.g., rivers, mountains, canyons).',
        },
        {
          term: 'Sympatric Speciation',
          definition:
            'The formation of new species in populations that live in the same geographic area without physical barriers, commonly driven by polyploidy or niche differentiation.',
        },
        {
          term: 'Orthologs',
          definition:
            'Homologous genes in different species that diverged as a result of a speciation event, typically retaining the same ancestral biological function.',
        },
        {
          term: 'Paralogs',
          definition:
            'Homologous genes within an organism that arose via gene duplication events, often diverging to perform new or specialized functions (e.g., globin gene family).',
        },
      ],
      mathBreakdown: {
        name: 'Speciation Modes Comparison Matrix',
        formula: 'Allopatric (Physical Barrier) vs. Peripatric (Small Peripheral Splinter) vs. Parapatric (Gradient/Hybrid Zone) vs. Sympatric (No Barrier)',
        variables: 'Geographic overlap, genetic drift strength, and gene flow levels.',
        walkThrough:
          'In peripatric speciation, because the peripheral splinter colony is tiny, genetic drift accelerates divergence far faster than in massive allopatric divisions. In sympatric speciation, reproductive isolation must evolve internally (e.g., autopolyploidy 2n -> 4n in plants, instantly isolating them from diploid parents in a single generation)!',
        practiceProblem: {
          problem:
            'A species of cichlid fish in a single African crater lake diversifies into 12 distinct species feeding on different depths without any physical barriers. What mode of speciation occurred?',
          solution:
            'Sympatric speciation! The new species evolved within the same undivided geographic lake environment through ecological niche partitioning and sexual selection.',
        },
      },
    },
  ],
  flashcards: [
    {
      id: 'fc-pop-1',
      term: 'Microevolution',
      category: 'Definition',
      front: 'What is microevolution in population genetics?',
      back: 'A change in allele frequencies within a population’s gene pool across generations over a relatively short evolutionary timeframe.',
      tip: 'Operates via 4 forces: mutation, selection, gene flow, and genetic drift.',
    },
    {
      id: 'fc-pop-2',
      term: 'Hardy-Weinberg 5 Assumptions',
      category: 'Genetics Rule',
      front: 'What are the 5 necessary conditions for a population to remain in Hardy-Weinberg equilibrium?',
      back: '1) Infinitely large population (no drift); 2) No gene flow/migration; 3) No mutations; 4) Completely random mating; 5) No natural selection (equal fitness).',
      tip: 'Mnemonic: "Large Random M&M\'s with No Selection" (Large pop, Random mating, No Mutation, No Migration, No Selection).',
    },
    {
      id: 'fc-pop-3',
      term: 'Hardy-Weinberg Binomial Formula',
      category: 'Formula',
      front: 'State the two fundamental Hardy-Weinberg equations for a biallelic gene.',
      back: 'Allele frequency equation: p + q = 1. Genotype frequency equation: p^2 + 2pq + q^2 = 1 (where p^2 = AA, 2pq = Aa carriers, q^2 = aa).',
    },
    {
      id: 'fc-pop-4',
      term: 'Population Bottleneck',
      category: 'Concept',
      front: 'What is a population bottleneck, and what is its consequence for genetic diversity?',
      back: 'A sudden, severe reduction in population size caused by random disasters (fire, flood, famine, hunting). Genetic diversity collapses randomly, regardless of individual fitness.',
      example: 'Cheetahs experienced two historical bottlenecks, leaving them with near-identical MHC immune genes.',
    },
    {
      id: 'fc-pop-5',
      term: 'Founder Effect',
      category: 'Concept',
      front: 'What is the founder effect? Give a medical genetics example.',
      back: 'Genetic drift that occurs when a small group of individuals colonizes a new habitat. Rare alleles can reach high frequency purely by chance (e.g., Ellis-van Creveld dwarfism in Old Order Amish).',
    },
    {
      id: 'fc-pop-6',
      term: 'Stabilizing Selection',
      category: 'Concept',
      front: 'Describe stabilizing selection and give a classic biological example.',
      back: 'Selection that favors the intermediate phenotype and eliminates extreme phenotypes, narrowing overall phenotypic variance. Example: Human infant birth weight (~7 lbs).',
      tip: 'Curve gets taller and narrower in the middle.',
    },
    {
      id: 'fc-pop-7',
      term: 'Directional Selection',
      category: 'Concept',
      front: 'Describe directional selection and give an example.',
      back: 'Selection that favors one extreme phenotype over all others, shifting the entire population mean in that direction. Example: Antibiotic resistance in bacteria or beak depth in Galápagos finches during drought.',
      tip: 'Curve shifts left or right.',
    },
    {
      id: 'fc-pop-8',
      term: 'Disruptive Selection',
      category: 'Concept',
      front: 'Describe disruptive selection and its evolutionary significance.',
      back: 'Selection that favors both extreme phenotypes over intermediate variants. It produces a bimodal distribution and can serve as an evolutionary precursor to speciation.',
      tip: 'Creates two peaks like a camel’s humps.',
    },
    {
      id: 'fc-pop-9',
      term: 'Biological Species Concept',
      category: 'Definition',
      front: 'How does Ernst Mayr’s Biological Species Concept define a species?',
      back: 'A group of natural populations whose members have the potential to interbreed in nature and produce viable, fertile offspring, and are reproductively isolated from other such groups.',
    },
    {
      id: 'fc-pop-10',
      term: 'Allopatric Speciation',
      category: 'Process',
      front: 'What is allopatric speciation?',
      back: 'Speciation that occurs when populations become geographically separated by a physical barrier (mountain, river, canyon, ocean), preventing gene flow while independent mutations and selection accumulate.',
      example: 'Two species of antelope squirrels on opposite rims of the Grand Canyon.',
    },
    {
      id: 'fc-pop-11',
      term: 'Peripatric Speciation',
      category: 'Process',
      front: 'How does peripatric speciation differ from allopatric speciation?',
      back: 'Peripatric speciation involves a small, isolated peripheral founder colony that buds off from a large ancestral population, causing rapid divergence driven by strong genetic drift.',
    },
    {
      id: 'fc-pop-12',
      term: 'Sympatric Speciation',
      category: 'Process',
      front: 'What is sympatric speciation, and how can it occur instantaneously in plants?',
      back: 'Speciation occurring in populations sharing the same geographic area without physical barriers. In plants, polyploidy (nondisjunction leading to 4n tetraploids) can cause instant reproductive isolation in one generation.',
    },
    {
      id: 'fc-pop-13',
      term: 'Homology vs. Analogy',
      category: 'Definition',
      front: 'What is the difference between homologous and analogous structures?',
      back: 'Homologous structures share similarity due to common ancestry (divergent evolution, e.g., human arm and bat wing). Analogous structures share similar function due to convergent evolution, not shared ancestry (e.g., bird wing and butterfly wing).',
    },
    {
      id: 'fc-pop-14',
      term: 'Orthologs',
      category: 'Definition',
      front: 'What are orthologous genes (orthologs)?',
      back: 'Genes in different species that originated from a single ancestral gene separated by a speciation event. They typically retain identical or similar biological functions.',
      example: 'Human beta-globin and mouse beta-globin.',
    },
    {
      id: 'fc-pop-15',
      term: 'Paralogs',
      category: 'Definition',
      front: 'What are paralogous genes (paralogs)?',
      back: 'Genes related by gene duplication events within the same evolutionary lineage. Because one copy is redundant, the other can mutate and evolve novel biological functions.',
      example: 'Human alpha-globin and human beta-globin genes.',
    },
    {
      id: 'fc-pop-16',
      term: 'Transposons',
      category: 'Technique',
      front: 'What are transposons ("jumping genes") and who discovered them?',
      back: 'DNA sequences that can move and insert themselves into new positions within a genome. Discovered in maize by Nobel laureate Barbara McClintock; they act as a potent driver of genetic mutations and genome rearrangement.',
    },
  ],
  quiz: [
    {
      id: 1,
      question:
        'Which of the following is the ultimate and original source of all new genetic variation and novel alleles in a population?',
      options: ['Natural selection', 'Genetic drift', 'Gene flow', 'Mutation'],
      correctIndex: 3,
      explanation:
        'Mutation is the only evolutionary force capable of creating brand-new alleles. Selection, drift, and gene flow merely reshuffle, sort, or alter existing allele frequencies.',
    },
    {
      id: 2,
      question:
        'In a population of 1,000 frogs, 90 frogs exhibit an autosomal recessive albino skin phenotype (aa). Assuming the population is in Hardy-Weinberg equilibrium, what is the frequency of the recessive allele (q)?',
      options: ['0.09', '0.30', '0.70', '0.42'],
      correctIndex: 1,
      explanation:
        'The frequency of the homozygous recessive phenotype aa is q^2 = 90 / 1,000 = 0.09. Taking the square root: q = sqrt(0.09) = 0.30.',
    },
    {
      id: 3,
      question:
        'Continuing from the previous question (where q = 0.30), what percentage of the frog population are expected to be heterozygous carriers (Aa)?',
      options: ['9%', '21%', '42%', '49%'],
      correctIndex: 2,
      explanation:
        'Since q = 0.30, p = 1 - 0.30 = 0.70. The carrier frequency is 2pq = 2 * (0.70) * (0.30) = 0.42, or 42%.',
    },
    {
      id: 4,
      question:
        'Which of the following is NOT one of the five conditions required to maintain Hardy-Weinberg equilibrium?',
      options: [
        'Extremely large population size',
        'No gene flow between populations',
        'Directional selection favoring the dominant phenotype',
        'Completely random mating',
      ],
      correctIndex: 2,
      explanation:
        'Hardy-Weinberg equilibrium requires that NO natural selection occurs (all genotypes must have equal survival and reproductive fitness). Directional selection actively alters allele frequencies.',
    },
    {
      id: 5,
      question:
        'A catastrophic forest fire sweeps through an island, reducing a deer population from 5,000 individuals to 25 randomly surviving deer. This evolutionary event is an example of:',
      options: ['Founder effect', 'Population bottleneck', 'Disruptive selection', 'Sympatric speciation'],
      correctIndex: 1,
      explanation:
        'A population bottleneck is a severe random contraction in population size caused by environmental catastrophes, leading to a drastic loss of genetic variation.',
    },
    {
      id: 6,
      question:
        'A small religious group emigrates to Pennsylvania and founds a colony. Centuries later, the frequency of an allele causing Ellis-van Creveld syndrome is 100 times higher in this community than in the general population. This is due to:',
      options: ['The founder effect', 'Directional selection', 'High mutation rates', 'Sympatric speciation'],
      correctIndex: 0,
      explanation:
        'The founder effect occurs when a small group establishes a new colony, carrying an unrepresentative sample of the original gene pool that becomes magnified over generations.',
    },
    {
      id: 7,
      question:
        'Human infants born weighing significantly less than 5.5 lbs or more than 9 lbs have higher infant mortality rates than babies born weighing 7 to 8 lbs. This pattern represents which mode of natural selection?',
      options: ['Directional selection', 'Stabilizing selection', 'Disruptive selection', 'Artificial selection'],
      correctIndex: 1,
      explanation:
        'Stabilizing selection acts against extreme phenotypes (very small and very large babies) in favor of the intermediate optimal phenotype (average birth weight).',
    },
    {
      id: 8,
      question:
        'During the Industrial Revolution in England, soot blackened tree trunks, causing light-colored peppered moths to be easily spotted by birds while dark melanic moths survived and reproduced. This is a classic example of:',
      options: ['Directional selection', 'Stabilizing selection', 'Disruptive selection', 'Genetic drift'],
      correctIndex: 0,
      explanation:
        'Directional selection shifts the frequency of a trait toward one phenotypic extreme (from light to dark moths) when environmental selective pressures change.',
    },
    {
      id: 9,
      question:
        'In a species of seedcracker bird, individuals with small beaks feed efficiently on soft seeds, and individuals with large beaks crack tough nuts. Birds with medium beaks struggle with both foods and have low fitness. What selection mode is operating?',
      options: ['Directional selection', 'Stabilizing selection', 'Disruptive selection', 'Balancing selection'],
      correctIndex: 2,
      explanation:
        'Disruptive selection favors both phenotypic extremes (small beaks and large beaks) while actively selecting against the intermediate phenotype.',
    },
    {
      id: 10,
      question:
        'What is the defining criterion for two organisms to be classified as the same species under the Biological Species Concept?',
      options: [
        'They share at least 99% identical DNA sequences',
        'They have identical anatomical body shapes',
        'They can interbreed in nature and produce viable, fertile offspring',
        'They occupy the same trophic ecological niche',
      ],
      correctIndex: 2,
      explanation:
        'Under Ernst Mayr’s Biological Species Concept, organisms belong to the same species if they have the potential to interbreed in nature and produce viable, fertile offspring.',
    },
    {
      id: 11,
      question:
        'The formation of the Isthmus of Panama 3 million years ago split porkfish into Pacific and Caribbean populations, which evolved into two distinct species. This is an example of:',
      options: ['Allopatric speciation', 'Sympatric speciation', 'Parapatric speciation', 'Artificial speciation'],
      correctIndex: 0,
      explanation:
        'Allopatric speciation occurs when a geographic physical barrier (the Panama land bridge) physically separates populations, preventing gene flow.',
    },
    {
      id: 12,
      question:
        'Which mode of speciation is most heavily dependent on rapid genetic drift acting within a small, isolated peripheral splinter group?',
      options: ['Sympatric', 'Allopatric', 'Peripatric', 'Parapatric'],
      correctIndex: 2,
      explanation:
        'Peripatric speciation specifically involves a small founder splinter group that becomes geographically isolated on the periphery of the main population, where genetic drift drives rapid divergence.',
    },
    {
      id: 13,
      question:
        'Which of the following is most likely to lead to sympatric speciation in plants within a single generation?',
      options: ['Geographic isolation by a mountain range', 'Polyploidy (e.g., autopolyploidy or allopolyploidy)', 'Gradual genetic drift', 'Bird predation'],
      correctIndex: 1,
      explanation:
        'Polyploidy (nondisjunction leading to extra sets of chromosomes, like tetraploidy 4n) instantly isolates plants from their diploid parents because 4n x 2n crosses yield sterile triploid (3n) offspring.',
    },
    {
      id: 14,
      question:
        'Homology differs from analogy because homology always involves:',
      options: [
        'Similarity arising from convergent evolution in identical environments',
        'Similarity inherited from a shared common ancestor',
        'Structures that never change their biological function',
        'Duplication events on the same chromosome',
      ],
      correctIndex: 1,
      explanation:
        'Homology denotes similarity due to shared common ancestry (divergent evolution), whereas analogy denotes superficial structural similarity due to convergent selective pressures.',
    },
    {
      id: 15,
      question:
        'Two genes diverge after a speciation event but retain similar functions in different species (such as human beta-globin and chimpanzee beta-globin). These genes are called:',
      options: ['Paralogs', 'Orthologs', 'Analogs', 'Pseudogenes'],
      correctIndex: 1,
      explanation:
        'Orthologs are homologous genes in different species that diverged as a result of a speciation event and typically perform the same ancestral function.',
    },
    {
      id: 16,
      question:
        'Which is true regarding the evolutionary origin of orthologs vs. paralogs?',
      options: [
        'Orthologs result from speciation; paralogs result from gene duplication',
        'Orthologs result from gene duplication; paralogs result from speciation',
        'Orthologs exist only in the same species; paralogs exist only in different species',
        'Orthologs and paralogs are identical terms for analogous structures',
      ],
      correctIndex: 0,
      explanation:
        'Orthologs arise via speciation events (LCA split into daughter species), whereas paralogs arise via gene duplication within an evolutionary lineage.',
    },
    {
      id: 17,
      question:
        'What is most important when determining whether two genes are true orthologs?',
      options: ['Protein molecular weight only', 'Sequence similarity alone', 'Reconstructed evolutionary history (phylogeny)', 'Tissue expression levels'],
      correctIndex: 2,
      explanation:
        'Reconstructing the evolutionary tree (phylogenetic history) is essential to confirm that the divergence point aligns with a speciation event rather than an ancestral duplication event.',
    },
    {
      id: 18,
      question:
        'If a neutral mutation arises in a diploid population of 50 individuals as a single copy, what is the theoretical probability that it will eventually become fixed by genetic drift alone?',
      options: ['0.01 (1%)', '0.02 (2%)', '0.50 (50%)', '1.00 (100%)'],
      correctIndex: 0,
      explanation:
        'For a neutral allele under pure genetic drift, the probability of ultimate fixation equals its initial allele frequency: p = 1 / (2N) = 1 / (2 * 50) = 1 / 100 = 0.01 (1%).',
    },
    {
      id: 19,
      question:
        'A continuous population of salamanders distributed across California mates primarily with adjacent neighbors along a mountain chain, creating a ring of subspecies with a hybrid zone. This exemplifies:',
      options: ['Allopatric speciation', 'Peripatric speciation', 'Parapatric speciation', 'Artificial selection'],
      correctIndex: 2,
      explanation:
        'Parapatric speciation occurs across a vast, continuous geographic range where mating is non-random due to distance, establishing a phenotypic gradient and hybrid zones without a physical barrier.',
    },
    {
      id: 20,
      question:
        'Who discovered transposons ("jumping genes") in maize, demonstrating that genomic sequences can physically relocate and mutate regulatory regions?',
      options: ['Rosalind Franklin', 'Barbara McClintock', 'Mary Lyon', 'G.H. Hardy'],
      correctIndex: 1,
      explanation:
        'Barbara McClintock discovered transposable elements (transposons) in Indian corn, earning the 1983 Nobel Prize in Physiology or Medicine.',
    },
  ],
};
