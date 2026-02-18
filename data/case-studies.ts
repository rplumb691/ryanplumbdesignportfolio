export type CalloutType = "risk" | "rollout" | "insight";

export type SectionMeta = { kicker: string; title: string };

export type CaseStudy = {
  slug: string;
  title: string;
  headline: string;
  hero: {
    image: string;
    alt: string;
  };
  tags: string[];
  overview: string;
  overviewBody?: string[];
  challenge: string[];
  challengeFormat?: "bullets" | "narrative";
  approach: string;
  approachBody?: string[];
  approachItems?: string[];
  solution: string[];
  solutionFormat?: "bullets" | "narrative";
  outcomes: string[];
  why: string;
  callouts?: { label: string; type: CalloutType; body: string }[];
  details: {
    role: string;
    team: string;
    timeline: string;
    platforms: string;
  };
  gallery: { src: string; caption: string }[];
  sectionImages?: Partial<Record<"overview" | "challenge" | "approach" | "solution" | "outcomes" | "why", { src: string; alt: string; caption: string }[]>>;
  sections?: Partial<Record<"overview" | "challenge" | "approach" | "solution" | "outcomes" | "why", SectionMeta>>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "personal-trees",
    title: "FamilySearch \u2014 Personal Trees",
    headline: "Unlocking Private Research to Strengthen a Global Tree",
    hero: {
      image: "/placeholders/personal-trees.png",
      alt: "Personal Trees hero",
    },
    tags: ["Collaboration", "Trust", "Data Quality"],
    overview:
      "FamilySearch is built on a public, open-edit family tree. While powerful, that openness created hesitation among serious genealogists who had spent years building carefully sourced research elsewhere. Many feared losing control of their work in a collaborative environment.",
    overviewBody: [
      "At the same time, genealogical societies and research groups were sitting on large datasets without a strong long-term storage solution. They wanted access to FamilySearch tools\u2014but not at the cost of ownership.",
      "This created a clear opportunity: provide a protected personal workspace that preserved user control while still enabling contribution to the broader ecosystem.",
    ],
    challenge: [
      "This wasn\u2019t a feature add.",
      "FamilySearch had always been architected around a single public tree. Introducing personal trees required a fundamental structural shift. Engineering constraints were significant, and early progress was fragmented across teams, slowing delivery.",
      "Beyond technical complexity, we faced a behavioral one. Users had only ever known one tree. Suddenly they needed to understand context\u2014public vs. personal\u2014and clearly recognize where they were editing. In testing, confusion about tree context created real risk of misplaced work.",
      "Stakeholders also assumed users would maintain many personal trees, which would dramatically increase UI complexity. Through alpha testing and behavioral data, I demonstrated that most personal users maintained only one or two trees. High-volume usage was primarily internal testers\u2014not our target audience. That insight prevented unnecessary feature expansion and kept the experience focused.",
    ],
    challengeFormat: "narrative",
    approach:
      "When distributed ownership slowed momentum, a focused cross-functional tiger team was formed.",
    approachItems: [
      "Directed UX strategy and cross-team alignment",
      "Established weekly customer interviews to create consistent feedback loops",
      "Led prototype testing through alpha and beta phases",
      "Designed workflows for uploading data, inviting collaborators, and moving data between trees",
    ],
    solution: [
      "A core capability was surfacing suggestions between personal and public trees (\u201CHenry\u201D hints).",
      "Less experienced users embraced suggestions. Expert genealogists did not. They were deeply skeptical and often left the product to independently verify sources.",
      "The issue wasn\u2019t functionality\u2014it was credibility.",
      "We redesigned the experience to surface provenance: where the data came from, what research supported it, and direct access to source material. By exposing evidence instead of asking for blind trust, adoption improved without compromising research rigor.",
    ],
    solutionFormat: "narrative",
    outcomes: [
      "Reduced hesitation among experienced genealogists",
      "Enabled secure storage and controlled collaboration",
      "Prevented over-engineering by validating real user behavior",
      "Introduced significant numbers of unique names into the public tree through personal-tree contributions",
    ],
    why:
      "Most importantly, it reframed ownership inside FamilySearch. Users no longer had to choose between control and collaboration. They could protect their work\u2014and meaningfully contribute to a global family history ecosystem at the same time.",
    details: {
      role: "Lead Product Designer",
      team: "PM, Eng (4), Research",
      timeline: "6 months",
      platforms: "Web",
    },
    gallery: [],
    sectionImages: {
      approach: [
        { src: "/case-studies/personal-trees/upload-and-compare.png", alt: "GEDCOM upload and tree comparison flow", caption: "The upload workflow lets users bring in existing research, then compare entries side-by-side against the shared tree." },
      ],
      solution: [
        { src: "/case-studies/personal-trees/tree-compare-v1.png", alt: "Early tree comparison design with potential parent panels", caption: "An early iteration surfaced potential parent matches\u2014but lacked the evidence detail that expert genealogists needed to trust the results." },
        { src: "/case-studies/personal-trees/tree-compare-v2.png", alt: "Refined comparison with source details and family context", caption: "The refined design exposes provenance\u2014sources, dates, and family context\u2014so users can evaluate matches on their own terms." },
      ],
    },
    sections: {
      approach: { kicker: "My role", title: "Leading the work" },
      solution: { kicker: "Designing for trust", title: "Building credibility" },
      outcomes: { kicker: "Impact", title: "What changed" },
    },
  },
  {
    slug: "ezflate",
    title: "EZFLATE \u2014 Off-Road Air Systems",
    headline: "Turning Product Interest into Revenue Growth",
    hero: {
      image: "/placeholders/ezflate.png",
      alt: "EZFLATE hero",
    },
    tags: ["Ecommerce", "Conversion", "Revenue"],
    overview:
      "EZ FLATE builds premium off-road air systems \u2014 compressors and hose kits that allow drivers to air down for better traction and comfort on the trail, then air back up before heading home.",
    overviewBody: [
      "The brand had strong products. Traffic was steady. Engagement was healthy.",
      "But revenue wasn\u2019t scaling with interest.",
      "Customers were browsing. They were spending time on product pages. Some products were clearly resonating.",
      "They just weren\u2019t consistently converting.",
    ],
    challenge: [
      "At first glance, the issue looked cosmetic \u2014 modernize the site, make it more visually engaging.",
      "But as we dug into behavioral data and funnel metrics, a different story emerged. Users were viewing high-value products, scrolling deeply through content, and dropping off at key transition points.",
      "The experience wasn\u2019t broken. It was inefficient.",
      "To reach some of our most desirable systems, customers had to navigate through multiple layers of pages. The structure reflected how we organized inventory \u2014 not how customers thought about buying.",
      "Interest was strong. Access was cumbersome.",
    ],
    challengeFormat: "narrative",
    approach:
      "I led a structural redesign focused on reducing effort.",
    approachBody: [
      "We reorganized navigation around real purchasing behavior \u2014 system type, use case, and vehicle context. High-performing products were surfaced more directly. Click depth was reduced.",
      "The impact was immediate: more users reached key product pages, and they reached them faster.",
      "But discovery was only the first layer.",
    ],
    solution: [
      "Once on product pages, customers engaged heavily. They scrolled through specs, installation details, comparisons, and benefits.",
      "But the Add to Cart action disappeared as they evaluated. They were building confidence \u2014 then losing the purchase trigger.",
      "We introduced a persistent purchase component that kept pricing and Add to Cart visible throughout the page. The goal wasn\u2019t to push urgency. It was to remove friction between decision and action. Add-to-cart rates increased.",
      "As cart activity grew, another issue surfaced: abandonment. Competitive analysis revealed a key difference \u2014 competitors were offering free shipping on comparable products.",
      "For high-ticket items, shipping costs weren\u2019t just a line item. They were a psychological barrier late in the funnel.",
      "I built the case internally to introduce free shipping as a competitive baseline rather than a promotional tactic. Alongside this shift, we elevated warranty messaging and reinforced product durability and support. The experience moved from transactional to reassuring. Checkout completion improved.",
      "Customers were often purchasing complementary components separately \u2014 or not at all. I designed and implemented a bundling system that combined compatible air systems and accessories into curated configurations.",
      "The bundles simplified decision-making, reduced compatibility concerns, and presented higher-value setups clearly. Average order value increased.",
    ],
    solutionFormat: "narrative",
    outcomes: [
      "More users reaching high-value products",
      "Increased add-to-cart rates",
      "Improved checkout progression",
      "Higher completed purchases",
      "Increased average order value through bundling",
      "Measurable revenue growth",
    ],
    why:
      "The redesign wasn\u2019t aesthetic \u2014 it was structural. Most importantly, the site began reflecting how customers actually think and buy \u2014 not how inventory was originally organized.",
    details: {
      role: "Product Designer",
      team: "Founder, Eng (2)",
      timeline: "10 weeks",
      platforms: "Responsive web",
    },
    gallery: [],
    sectionImages: {
      approach: [
        { src: "/case-studies/ezflate/homepage.png", alt: "EZFLATE redesigned homepage on desktop and mobile", caption: "Reorganized navigation surfaces products by system type and use case\u2014reducing click depth and getting customers to high-value pages faster." },
      ],
      solution: [
        { src: "/case-studies/ezflate/product-page.png", alt: "EZFLATE product page with persistent purchase module", caption: "A persistent purchase component keeps pricing, trust signals, and Add to Cart visible as customers scroll through specs and features." },
        { src: "/case-studies/ezflate/bundle.png", alt: "EZFLATE bundle and save page with curated configurations", caption: "The bundling system pairs compatible components into curated setups\u2014simplifying decisions and increasing average order value." },
      ],
    },
    sections: {
      challenge: { kicker: "The real problem", title: "It was friction" },
      approach: { kicker: "The approach", title: "Redesigning for how customers shop" },
      solution: { kicker: "The solution", title: "From evaluation to action" },
      outcomes: { kicker: "Impact", title: "What changed" },
    },
  },
  {
    slug: "scrubbin-pup",
    title: "Scrubbin\u2019 Pup \u2014 Self-Service Dog Wash",
    headline: "Rebuilding the Digital Foundation for Growth",
    hero: {
      image: "/placeholders/scrubbin-pup.png",
      alt: "Scrubbin\u2019 Pup hero",
    },
    tags: ["Subscriptions", "Service Design", "Brand"],
    overview:
      "Scrubbin\u2019 Pup is a premium self-service dog wash built around convenience. High-quality washing bays, professional-grade supplies, grooming tables, and extended access hours make it easy for pet owners to skip the mess at home.",
    overviewBody: [
      "The business had a strong in-person experience.",
      "Its digital infrastructure did not match it.",
    ],
    challenge: [
      "The existing website supported basic operations \u2014 but it wasn\u2019t built for growth.",
      "Key needs were not being met. Marketing updates were slow and costly to implement. Subscription management required manual oversight. Customer data was difficult to capture and use effectively. Integrations with third-party systems were fragile or limited. The experience did not scale easily to multiple locations.",
      "For a business planning to expand both services and physical footprint, this created risk.",
      "The site wasn\u2019t just underperforming. It was constraining momentum.",
    ],
    challengeFormat: "narrative",
    approach:
      "The digital experience also underrepresented the brand itself.",
    approachBody: [
      "Scrubbin\u2019 Pup offers clean, premium washing facilities, high-quality shampoos and grooming tools, and a convenient, self-guided experience. But the site did little to differentiate that from a standard dog wash.",
      "We redesigned the experience to highlight the quality of the facilities, showcase the convenience of extended access, and communicate the premium positioning clearly.",
      "The goal was alignment \u2014 the website needed to reflect the in-person experience.",
    ],
    solution: [
      "Scrubbin\u2019 Pup offered both one-time washes and subscription plans.",
      "The subscriptions were operationally functional \u2014 but strategically under-communicated. Pricing felt complex. The value wasn\u2019t obvious. For some customers, it appeared expensive rather than economical.",
      "We reframed subscriptions around long-term savings, ease for frequent visitors, and predictable, ongoing access.",
      "The shift was subtle but important. Instead of asking customers to commit, we showed them how they benefited. Conversion improved as the value became clearer.",
      "The most complex gap wasn\u2019t visual or messaging-related \u2014 it was operational. Subscriptions needed to connect directly to physical access at the facility.",
      "Customers expect the location to be open when they need it. That promise only works if digital payments, subscription status, and door access systems stay synchronized in real time.",
      "We implemented integrations that automated subscription validation, connected with third-party access systems, delivered entry credentials via text for immediate access, and reduced reliance on email-only communication.",
      "The website became more than marketing. It became infrastructure.",
    ],
    solutionFormat: "narrative",
    outcomes: [
      "A scalable system for managing subscriptions",
      "Reliable integration between digital and physical experiences",
      "Flexibility to expand to additional locations",
      "A clearer value proposition for customers",
    ],
    why:
      "The project wasn\u2019t about redesigning a website. It was about removing operational bottlenecks so the business could grow.",
    details: {
      role: "Lead Product Designer",
      team: "Founder, Content",
      timeline: "8 weeks",
      platforms: "Responsive web",
    },
    gallery: [],
    sectionImages: {
      approach: [
        { src: "/case-studies/scrubbin-pup/homepage.png", alt: "Scrubbin\u2019 Pup redesigned homepage on desktop and mobile", caption: "The redesigned homepage leads with the brand promise\u2014premium facilities, convenience, and real customer proof\u2014across desktop and mobile." },
      ],
      solution: [
        { src: "/case-studies/scrubbin-pup/wash-plan.png", alt: "Wash plan pricing page with subscription tiers", caption: "Reframed subscription plans make the value clear at a glance\u2014pricing, included amenities, and ideal-use guidance side by side." },
        { src: "/case-studies/scrubbin-pup/bath-tips.png", alt: "Bath Tips page with step-by-step washing instructions", caption: "Educational content like Bath Tips turns the site into a practical resource\u2014bridging the gap between digital and in-person experience." },
      ],
    },
    sections: {
      challenge: { kicker: "The platform", title: "Limiting the business" },
      approach: { kicker: "Clarifying who they are", title: "Brand alignment" },
      solution: { kicker: "The solution", title: "Subscriptions and access" },
      outcomes: { kicker: "Built to expand", title: "What\u2019s in place" },
    },
  },
  {
    slug: "portrait-tree-view",
    title: "FamilySearch \u2014 Vertical Tree View",
    headline: "Redefining the Default Way Millions Explore Their Family History",
    hero: {
      image: "/placeholders/portrait-tree-view.png",
      alt: "Vertical Tree View hero",
    },
    tags: ["Information Design", "Interaction", "Orientation"],
    overview:
      "For years, the primary way to view a family tree was horizontal. It worked well on desktop. It did not work well on mobile.",
    overviewBody: [
      "Alongside it existed a vertical tree view \u2014 but it was secondary. Limited in capability. Treated as an alternative rather than a core experience.",
      "Yet user behavior was changing. More exploration was happening on smaller screens. And researchers were asking for more flexibility in how they navigated their families.",
      "The opportunity wasn\u2019t to add another view. It was to rethink how exploration should work.",
    ],
    challenge: [
      "The previous vertical view allowed users to move upward \u2014 parent to parent \u2014 but exploration was narrow.",
      "Users couldn\u2019t easily view siblings in context, seamlessly explore descendants, or traverse across branches with fluidity.",
      "Requests for sibling visibility were especially frequent. That request wasn\u2019t about curiosity \u2014 it reflected real research behavior. To validate records and discover connections, genealogists often move laterally across families, not just vertically through direct ancestors.",
      "A separate descendant view existed, but it was presented in a list format \u2014 functional, yet disconnected from the familiar visual chart users relied on.",
      "The core issue was continuity. Users wanted full exploration within one coherent visual system.",
    ],
    challengeFormat: "narrative",
    approach:
      "We reimagined the vertical view as a comprehensive exploration tool.",
    approachBody: [
      "The new experience allowed users to move upward through ancestors, navigate laterally to siblings, expand downward to descendants, and maintain context within a familiar tree chart.",
      "Rather than switching between views for different research tasks, users could explore breadth and depth within one unified interface.",
      "The challenge wasn\u2019t simply adding nodes. It required solving for the complexity of real families: step relationships, adoptive parents, multiple partnerships, and non-traditional structures.",
      "We designed deliberate visual patterns to communicate relationship types clearly without overwhelming the interface.",
      "The goal was clarity without constraint \u2014 giving users control while preserving readability at scale.",
    ],
    solution: [
      "Tree visualizations are not new. There are established patterns in genealogy software and competitive tools.",
      "The question wasn\u2019t whether to follow those patterns. It was how to improve them.",
      "We focused on reducing visual ambiguity, making expansion states intuitive, preserving orientation within large trees, and allowing choice without introducing confusion.",
      "Multiple testing rounds refined the experience. Prototypes were validated through user sessions before broader exposure.",
      "Instead of replacing the existing view outright, we rolled out the new vertical tree incrementally. Users could toggle between the old and new experiences.",
      "This allowed us to observe who opted into the new version, who reverted to the old one, where friction surfaced, and how sentiment evolved over time.",
      "Adoption trends became clear. More users chose the new vertical view \u2014 and stayed.",
      "With confidence in its performance, we tested making it the default experience for new sessions. Again, we monitored behavior: reversions, feedback, engagement.",
      "The result was decisive. The vertical view outperformed expectations and was ultimately set as the new default tree view.",
    ],
    solutionFormat: "narrative",
    outcomes: [
      "Enabled full-tree exploration within one unified view",
      "Improved usability on mobile devices",
      "Reduced reliance on fragmented descendant lists",
      "Increased adoption over the legacy horizontal view",
      "Became the default experience for millions of users",
    ],
    why:
      "Most importantly, it aligned the product with how modern users research \u2014 fluidly, contextually, and across devices.",
    details: {
      role: "Interaction Designer",
      team: "PM, Eng (5)",
      timeline: "5 months",
      platforms: "Web",
    },
    gallery: [],
    sectionImages: {
      approach: [
        { src: "/case-studies/portrait-tree-view/vertical-tree.png", alt: "Vertical tree view showing full multi-generational family exploration", caption: "The redesigned vertical view lets users explore ancestors, siblings, and descendants within a single unified chart\u2014no switching between views." },
      ],
    },
    sections: {
      challenge: { kicker: "The limits", title: "Of the existing model" },
      approach: { kicker: "Designing for exploration", title: "Complete navigation" },
      solution: { kicker: "Improving conventions", title: "Rolling out with confidence" },
      outcomes: { kicker: "Impact", title: "What changed" },
    },
  },
];

const workSummaries: Record<string, string> = {
  "personal-trees":
    "A core experience within a large, complex platform, improving usability and expanding how users interact with personal family data.",
  ezflate: "A scalable ecommerce experience focused on performance and conversion across devices.",
  "scrubbin-pup":
    "A cohesive brand and service experience that simplified customer interaction and clarified the overall offering.",
  "portrait-tree-view":
    "A new way to navigate complex genealogical structures, improving clarity and exploration across large datasets.",
};

export const workGrid = caseStudies.map(({ slug, title, headline, tags, hero }) => ({
  slug,
  title,
  headline,
  tags,
  image: hero.image,
  summary: workSummaries[slug] ?? headline,
}));
