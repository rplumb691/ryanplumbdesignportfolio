export type CalloutType = "risk" | "rollout" | "insight";

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
  challenge: string[];
  approach: string;
  solution: string[];
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
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "personal-trees",
    title: "FamilySearch — Personal Trees",
    headline: "Personal ownership at the scale of a shared tree",
    hero: {
      image: "/placeholders/personal-trees.png",
      alt: "Personal Trees hero",
    },
    tags: ["Collaboration", "Trust", "Data Quality"],
    overview:
      "Personal Trees let users control who can edit their family data while still using FamilySearch’s records and contributing verified information to the public tree. The work supports users who value the shared, open-edit tree, but want better ways to protect accurate research and help improve communal data quality.",
    challenge: [
      "FamilySearch’s shared tree is an open-edit, communal environment built and maintained by many users.",
      "Contributor experience varies widely.",
      "Some contributors are newer to genealogy or less familiar with sourcing standards. As a result, well-researched data can be changed or overwritten without realizing the impact. For experienced users, this creates frustration and erodes confidence.",
      "At the same time, many careful researchers want to collaborate. Through interviews and user testing, users actively want to share what they’ve learned and help others — but only if they can trust how their data is handled.",
      "This creates real risk. If skilled researchers disengage, the public tree stops improving at the pace and quality the platform depends on.",
      "The challenge becomes tightly connected:",
      "Protect accurate personal research from constant churn",
      "Encourage skilled users to continue contributing",
      "Ensure their work meaningfully improves the open, shared tree",
    ],
    approach:
      "We design for intentional collaboration. Users start in a space where they control edits and feel confident in their research. From there, contribution to the public tree is deliberate, reviewable, and grounded in sourcing. Trust is built through clarity and transparency, not restriction.",
    solution: [
      "Compare their personal tree with the public tree",
      "Identify differences, gaps, and conflicts",
      "Review sources attached to people and relationships",
      "Intentionally add verified names and updates to the public tree",
    ],
    outcomes: [
      "Experienced researchers remain engaged instead of opting out",
      "Verified, sourced data flows into the public tree",
      "Well-researched personal data steadily improves shared accuracy",
    ],
    why:
      "Open systems improve when expertise has a clear, protected path into them. By pairing personal control with transparent collaboration, Personal Trees strengthen both individual trust and collective data quality.",
    callouts: [
      {
        label: "Risk",
        type: "risk",
        body: "If careful researchers disengage, the public tree loses the expertise that keeps it accurate.",
      },
    ],
    details: {
      role: "Lead Product Designer",
      team: "PM, Eng (4), Research",
      timeline: "6 months",
      platforms: "Web",
    },
    gallery: [
      { src: "/case-studies/personal-trees/screen-1.svg", caption: "Match, compare, and sync personal insights." },
      { src: "/case-studies/personal-trees/screen-2.svg", caption: "Collaboration guardrails keep expertise intact." },
    ],
  },
  {
    slug: "ezflate",
    title: "EZFLATE",
    headline: "More time off-roading. Less time setting up.",
    hero: {
      image: "/placeholders/ezflate.png",
      alt: "EZFLATE hero",
    },
    tags: ["Ecommerce", "Subscriptions", "Conversion"],
    overview:
      "EZFLATE helps off-roaders spend more time on the trail and less time dealing with setup and teardown. This project focuses on improving the ecommerce experience so customers can quickly find what they need, understand the value, and move through checkout with less friction.",
    challenge: [
      "The site experience doesn’t match how customers actually shop.",
      "Analytics show clear patterns in what people search for and purchase most often, but navigation and page structure don’t support those paths well. Customers take too many steps to reach high-intent products.",
      "Messaging also lacks clarity:",
      "Key value and reassurance appear too late",
      "Important benefits aren’t always obvious",
      "Purchase actions aren’t consistently visible",
      "As a result, customers hesitate or drop out before checkout.",
    ],
    approach:
      "We design around the funnel customers are already using. We start with behavioral data to understand intent and friction points. From there, the experience is simplified to reduce steps, clarify value earlier, and keep next actions visible at the moments customers are ready to move forward.",
    solution: [
      "Navigation aligned with common search/purchase paths",
      "Clearer messaging earlier in the journey",
      "Page layouts keep purchase actions visible",
      "Bundles help customers choose a complete setup with less effort",
    ],
    outcomes: [
      "More users reach the cart",
      "Checkout completion improves",
      "Revenue grows year over year",
    ],
    why:
      "When structure and messaging align with customer intent, buying stops feeling like work. Reducing setup time starts with reducing friction in the experience.",
    callouts: [
      {
        label: "Key Decision",
        type: "insight",
        body: "Lead with bundled setups rather than single SKUs to match how crews gear up.",
      },
    ],
    details: {
      role: "Product Designer",
      team: "Founder, Eng (2)",
      timeline: "10 weeks",
      platforms: "Responsive web",
    },
    gallery: [
      { src: "/case-studies/ezflate/screen-1.svg", caption: "Bundled flows keep high-intent paths obvious." },
      { src: "/case-studies/ezflate/screen-2.svg", caption: "Sticky purchase module reassures throughout the page." },
    ],
  },
  {
    slug: "scrubbin-pup",
    title: "Scrubbin’ Pup",
    headline: "Turning a one-time visit into an ongoing relationship",
    hero: {
      image: "/placeholders/scrubbin-pup.png",
      alt: "Scrubbin’ Pup hero",
    },
    tags: ["Subscriptions", "Service Design", "Brand"],
    overview:
      "Scrubbin’ Pup is a self-wash dog wash built around convenience, quality, and repeat visits. This project focuses on designing a subscription experience that clearly communicates value, feels easy to commit to, and supports the business as it grows into products and additional services.",
    challenge: [
      "The business offers subscriptions, but they don’t feel compelling.",
      "Customers understand the service and often enjoy their first visit, but the site doesn’t clearly show why becoming a member makes sense.",
      "Subscription options exist, but the value isn’t framed in a way that encourages commitment.",
      "As a result, subscriptions feel optional instead of desirable, and many customers default to one-time visits.",
    ],
    approach:
      "We focus on making subscriptions feel valuable, approachable, and easy to say yes to. Instead of emphasizing plan structure, the experience highlights what customers gain over time: convenience, consistency, and access to a better way of washing their dog.",
    solution: [
      "Frame subscriptions around convenience and repeat value",
      "Present membership pricing in a way that supports commitment",
      "Keep membership options visible and relevant throughout the experience",
      "Structure the site to support future product sales and expanded services",
    ],
    outcomes: [
      "The experience shifts toward recurring use and subscription-based engagement",
      "Membership options feel clearer and easier to commit to",
      "Subscriptions are treated as the default path rather than an upgrade",
    ],
    why:
      "When the value of a subscription is clear and the decision feels low-friction, customers are more willing to commit. This supports long-term relationships instead of one-time transactions.",
    callouts: [
      {
        label: "Key Decision",
        type: "insight",
        body: "Position memberships as lifestyle upgrades instead of discount plans.",
      },
    ],
    details: {
      role: "Lead Product Designer",
      team: "Founder, Content",
      timeline: "8 weeks",
      platforms: "Responsive web",
    },
    gallery: [
      { src: "/case-studies/scrubbin-pup/screen-1.svg", caption: "Membership pitch pairs value props with friendly visuals." },
      { src: "/case-studies/scrubbin-pup/screen-2.svg", caption: "Plan comparison stays visible as you explore." },
    ],
  },
  {
    slug: "portrait-tree-view",
    title: "FamilySearch — Vertical Tree View",
    headline: "Seeing families, not just relationships",
    hero: {
      image: "/placeholders/portrait-tree-view.png",
      alt: "Vertical Tree View hero",
    },
    tags: ["Information Design", "Interaction", "Orientation"],
    overview:
      "Vertical Tree View introduces a new way to explore family history by allowing users to see extended family relationships — parents, siblings, cousins, and multiple generations — within a single, connected view.",
    challenge: [
      "Existing tree views focus primarily on parent-child relationships.",
      "As users move up several generations and back down, they quickly lose context.",
      "Extended family relationships are hard to see, making deeper research more difficult.",
      "The problem isn’t data availability — it’s orientation.",
    ],
    approach:
      "We design around how researchers think spatially about families. Instead of forcing linear navigation, the experience allows users to expand outward, keep relationships visible, and maintain context as they explore.",
    solution: [
      "Sideways expansion to show siblings, cousins, related branches",
      "Visual separation of couples to reduce density",
      "Flexible interactions to expand where needed",
    ],
    outcomes: [
      "Users explore more generations without losing context",
      "Extended family relationships are easier to understand",
      "The view supports deeper research patterns",
    ],
    why:
      "When interfaces reflect how people mentally model information, they require less effort to use. By prioritizing spatial context, Vertical Tree View helps users focus on research instead of navigation.",
    callouts: [
      {
        label: "Adoption & Rollout",
        type: "rollout",
        body: "Because this is a significant interaction change, the feature rolls out gradually. As usage increases and surpasses existing views, Vertical Tree View becomes the default experience for all users.",
      },
    ],
    details: {
      role: "Interaction Designer",
      team: "PM, Eng (5)",
      timeline: "5 months",
      platforms: "Web",
    },
    gallery: [
      { src: "/case-studies/portrait-tree-view/screen-1.svg", caption: "Portrait mode keeps extended families visible." },
      { src: "/case-studies/portrait-tree-view/screen-2.svg", caption: "Context modules explain where you are as you zoom out." },
    ],
  },
];

export const workGrid = caseStudies.map(({ slug, title, headline, tags, hero }) => ({
  slug,
  title,
  headline,
  tags,
  image: hero.image,
}));
