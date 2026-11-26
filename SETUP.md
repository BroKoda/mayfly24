# MAYFLY24 — Corporate Landing Page

## 1. Role and objective

Act as a senior frontend engineer, UI/UX designer and digital brand strategist with extensive experience in building premium, production-ready corporate websites.

Design and implement a complete, responsive, single-page corporate website for **Mayfly24**.

The primary purpose of the website is to introduce Mayfly24 as an organisation, communicate its mission, values, activities and professional capabilities, and encourage potential clients, partners and community members to establish contact.

This is an informational corporate landing page, not a SaaS application, marketplace or administrative platform.

The final result should feel individually designed, premium, timeless, trustworthy and technically excellent.

Avoid generic AI-generated website aesthetics.

---

## 2. Source materials

Three reference files are attached (could be found in the `branding` folder):

- **Brand Model Canvas:** The primary source of information regarding the organisation, mission, vision, values, target audience, positioning and activities. Use the completed first page as the strategic source; the second page is an explanatory template.
- **Logos:** The long and short versions of the Mayfly24 logo.

Use these materials as the source of truth.

The official brand name for the website is **Mayfly24**. The supplied visual identity currently uses the MAYFLY wordmark. Preserve the visual logo rather than arbitrarily redesigning it.

Distinguish between existing activities, initial offerings and future ambitions. Do not present planned initiatives as already established services.

Do not invent company information, team members, clients, testimonials, statistics, partnerships, contact information or project references.

---

## 3. Company background

Mayfly24 is an education- and community-driven IT organisation with a strong focus on artificial intelligence, professional excellence and meaningful collaboration.

Mayfly24 brings together developers, freelancers, consultants, entrepreneurs and technology professionals who believe in continuous development, responsible innovation and high-quality work.

The organisation connects two complementary pillars:

### Education and community

- Practical AI and IT education
- Professional knowledge sharing
- AI Club
- Business Breakfast events
- Conferences
- Professional and personal community building
- Responsible and conscious adoption of new technologies

### Business and professional collaboration

- Building professional relationships
- Creating opportunities for shared projects
- Developing transparent project coordination frameworks
- Connecting independent professionals
- Creating opportunities for local and international collaboration
- Applying professional knowledge to real-world challenges

The business collaboration pillar is an evolving part of the organisation's strategy. Communicate its ambitions without suggesting that every planned capability is already operational.

Mayfly24 believes that professional success and human relationships should reinforce each other.

Technology is a tool for creating value, not the ultimate objective.

### Mission

Connect professionals who are committed to development and help them use AI and emerging technologies consciously, practically and responsibly.

Create a supportive professional community and a transparent environment for meaningful collaboration.

### Vision

Build a sustainable, interconnected professional community with regular educational opportunities, strong human relationships, high professional standards and increasing access to international projects.

Start locally, think internationally.

### Core values

- Trust
- Precision
- Professional excellence
- Continuous development
- Transparency
- Mutual respect
- Responsibility
- Consistency

### Brand message

The original Hungarian strategic message is:

“Mutassuk meg, hogy ezt így is lehet.”

Suggested English adaptation:

“Let's show there's a better way.”

Support this message through the central concepts of genuine community, practical knowledge and transparent collaboration.

---

## 4. Target audience

The website should communicate effectively with several audiences:

### Technology professionals

- Software developers
- IT professionals
- Freelancers
- Consultants
- AI practitioners
- Professionals interested in continuous development

### Businesses

- Entrepreneurs
- Small and medium-sized businesses
- Large enterprises
- Organisations interested in responsible AI adoption
- Potential business and project partners

### Education and community

- Young professionals
- Students
- Schools
- Educational institutions
- People interested in practical AI and IT education

The website should appeal equally to a business decision-maker looking for a reliable professional partner and a developer looking for a meaningful professional community.

---

## 5. Mandatory technology stack

Use the following technologies:

- Vite
- React
- TypeScript
- Bootstrap 5
- ESLint
- Prettier
- npm

Use stable, mutually compatible dependency versions.

Use TypeScript strict mode.

Do not introduce alternative frameworks or unnecessary dependencies.

Do not use:

- Next.js
- Tailwind CSS
- Material UI
- Shadcn UI
- React Bootstrap or additional component frameworks
- jQuery
- Redux or other global state management libraries
- React Router
- Heavy animation libraries
- Unnecessary backend services

This is a single-page landing website. All navigation should use section anchors.

The application must be capable of being built and deployed as a static website.

---

## 6. Frontend engineering principles

Code quality is a primary requirement, not an afterthought.

Follow clean code principles, separation of concerns, component-based architecture and pragmatic DRY practices.

### General requirements

- Use functional React components.
- Use meaningful component, function and variable names.
- Keep components focused on a single responsibility.
- Avoid duplicated markup, styles and business logic.
- Avoid magic numbers and hardcoded design values.
- Extract repeated content into typed data structures.
- Render repeated elements using array mapping.
- Use stable and meaningful React keys.
- Centralise configuration values.
- Use descriptive TypeScript interfaces and types where appropriate.
- Avoid the any type.
- Avoid unnecessary useEffect hooks.
- Avoid unnecessary state, memoisation and custom hooks.
- Prefer simple and readable implementations over excessive abstraction.
- Remove unused imports, variables, components and styles.
- Do not leave debugging statements or dead code.
- Use consistent naming and file organisation.

Do not create reusable abstractions for elements that do not benefit from reuse.

The codebase should be easy for another experienced frontend developer to understand and maintain.

---

## 7. Suggested project structure

Use a clean, lightweight and scalable directory structure similar to:

- public/
  - favicon.svg
  - robots.txt
- src/
  - assets/
    - images/
    - logos/
  - components/
    - layout/
      - Navbar.tsx
      - Footer.tsx
    - sections/
      - Hero.tsx
      - About.tsx
      - Activities.tsx
      - Community.tsx
      - Collaboration.tsx
      - Values.tsx
      - Vision.tsx
      - Contact.tsx
    - ui/
      - SectionHeading.tsx
      - ActivityCard.tsx
      - ValueItem.tsx
      - BrandButton.tsx
  - config/
    - site.config.ts
  - content/
    - en.ts
  - types/
    - content.types.ts
  - styles/
    - variables.css
    - bootstrap-overrides.css
    - global.css
  - App.tsx
  - main.tsx
- index.html
- eslint.config.js
- .prettierrc
- .prettierignore
- tsconfig.json
- vite.config.ts
- package.json
- README.md

This structure is a recommendation. Adapt it where appropriate without overengineering the application.

Keep App.tsx primarily responsible for composing the landing page sections.

Keep website copy, navigation definitions, contact configuration and repeated content outside the rendering components wherever practical.

---

## 8. Bootstrap and responsive design

Follow a strict **mobile-first approach**.

Bootstrap must be the primary solution for responsive layout, spacing and alignment.

Use Bootstrap's intended grid system, utilities and responsive classes instead of recreating functionality with custom CSS.

Prefer native Bootstrap classes such as:

- container
- container-fluid
- row
- col-12
- col-sm-6
- col-md-6
- col-lg-4
- col-xl-3
- g-3, g-4, g-5
- d-flex
- d-grid
- flex-column
- flex-lg-row
- align-items-center
- justify-content-between
- text-center
- text-lg-start
- order utilities
- responsive display utilities
- responsive margin and padding utilities

Follow Bootstrap's standard breakpoints:

- Extra small: below 576px
- Small: 576px and above
- Medium: 768px and above
- Large: 992px and above
- Extra large: 1200px and above
- Extra extra large: 1400px and above

Only write custom media queries when Bootstrap cannot reasonably achieve the intended design.

Custom CSS should primarily be responsible for brand styling, typography, decorative elements and genuinely unique visual requirements.

Do not use fixed-width layouts or fixed-height content containers that break when content changes.

Ensure that:

- All sections work on small mobile devices.
- Typography scales naturally.
- Navigation collapses into an accessible mobile menu.
- Cards stack naturally.
- Images remain responsive.
- Touch targets are appropriately sized.
- No horizontal overflow occurs.
- Content remains readable on ultrawide monitors.
- Desktop layouts have a sensible maximum content width.

---

## 9. Brand identity and visual direction

The visual direction should closely follow the attached Mayfly branding document.

The overall atmosphere should be:

- Premium
- Conservative but modern
- Geometric
- Confident
- Earthy
- Elegant
- Precise
- Human-centred
- Minimalistic
- Timeless

The design should combine the precision of modern engineering with the warmth and authenticity of a genuine human community.

Mayfly24 should not look like a generic AI startup.

### Colour palette

Define the following brand colours as global CSS custom properties:

- --color-midnight-forest: #182522
- --color-still-water: #344B50
- --color-evening-sky: #788F9B
- --color-mayfly-bronze: #8B654A
- --color-muted-gold: #BFA06C
- --color-twilight-sand: #E5DCD0

Create semantic design tokens that reference these values:

- --color-background
- --color-surface
- --color-text-primary
- --color-text-secondary
- --color-accent
- --color-border
- --color-button-primary
- --color-button-primary-text

Use Midnight Forest as the primary background.

Use Twilight Sand for primary typography.

Use Still Water for secondary surfaces, subtle borders and decorative elements.

Use Evening Sky for secondary information where contrast permits.

Use Muted Gold as the primary accent and call-to-action colour.

Use Mayfly Bronze sparingly for geometric details and warm visual accents.

Override Bootstrap's relevant CSS variables and component-level variables to create a consistent branded appearance.

Do not simply apply Bootstrap's default blue colour scheme.

Validate text and interactive element contrast. Adjust semantic colour combinations where necessary for accessibility while retaining the supplied brand palette.

### Typography

Use a modern, geometric sans-serif typeface.

Suggested typography:

- Headings: Manrope
- Body: Inter

Use a suitable system font fallback.

Prefer locally hosted font assets where available and properly licensed.

Typography should be confident, clean and highly readable.

Use:

- Large, bold headlines
- Carefully controlled letter spacing
- Clear visual hierarchy
- Comfortable line heights
- Restrained uppercase section labels
- Responsive font sizing using CSS clamp() where appropriate

Avoid excessive font weights, oversized headings that overwhelm mobile screens and unnecessary decorative typography.

### Visual elements

Take inspiration from:

- Geometric mayfly wings
- Fine wing-vein patterns
- Abstract polygonal structures
- Subtle metallic and earthy tones
- Flowing mathematical lines
- Intersecting curves
- Natural light at dusk
- Contemporary architectural photography
- Authentic professional collaboration

Create an understated visual connection between nature, technology and people.

Prefer lightweight SVG or CSS for decorative visual elements.

Do not use the entire branding reference board as a website image. Use individual approved brand assets if available.

If standalone logo files are unavailable, keep the logo implementation replaceable and use a clearly identified temporary wordmark rather than inventing a different logo.

### Avoid

- Neon colours
- Purple and blue AI gradients
- Robot illustrations
- Generic AI-generated human imagery
- Excessive glassmorphism
- Excessive rounded cards
- Floating technology icons
- Heavy drop shadows
- Excessive animations
- Unnecessary glowing effects
- Generic SaaS dashboard aesthetics
- Repetitive card grids in every section

The website should feel like an established, design-conscious professional organisation.

---

## 10. Landing page structure

Build a single continuous page with the following sections.

### 10.1 Navigation

Create a minimal, elegant and responsive navigation bar.

Include:

- Mayfly logo on the left
- About
- What We Do
- Community
- Collaboration
- Our Values
- Contact

Include a primary “Get in touch” CTA.

Use a sticky navigation bar with a subtle dark background and restrained border treatment.

On mobile, use an accessible Bootstrap collapsible navigation menu.

Close the mobile menu when a navigation link is selected.

All navigation links must scroll to their corresponding sections.

Account for the sticky navigation height when scrolling to anchors.

---

### 10.2 Hero section

The hero is the most important visual element of the website.

Closely follow the website concept shown at the bottom of the supplied brand identity.

Use a dark Midnight Forest background, generous negative space and a distinctive geometric visual element inspired by mayfly wings.

Suggested layout:

- Left side: headline, supporting copy and CTA buttons.
- Right side: refined abstract wing-inspired SVG artwork.
- On mobile: stack the content naturally.

Suggested headline:

**People.
AI.
Real Impact.**

Use the following supporting copy:

“We bring people, knowledge and technology together to create meaningful solutions, stronger professional communities and lasting value.”

Primary CTA:

**Build the future together**

Secondary CTA:

**Discover Mayfly24**

The primary CTA should navigate to the contact section.

The secondary CTA should navigate to the about section.

The decorative artwork should use thin, flowing lines in Evening Sky, Muted Gold and Mayfly Bronze.

Avoid excessive brightness or visual noise.

The hero should immediately communicate confidence, intelligence and human values.

---

### 10.3 About us

Section label:

WHO WE ARE

Headline:

**More than technology.**

Introduce Mayfly24 as a professional organisation built around people, practical knowledge and collaboration.

Suggested copy:

“Mayfly24 brings together people who believe that technology is most valuable when it creates meaningful opportunities. We connect professionals, share practical knowledge and build a culture where trust, quality and continuous development come first.”

Explain that Mayfly24 is building connections between education, community and professional opportunities.

Highlight three concepts:

- Meaningful human connections
- Practical technological knowledge
- Transparent professional collaboration

Use an editorial layout with generous whitespace rather than three generic feature cards.

---

### 10.4 What we do

Section label:

WHAT WE DO

Headline:

**Knowledge into action.**

Present the two complementary pillars of Mayfly24.

#### Education and community

“We make AI and emerging technologies more accessible through practical education, knowledge sharing and genuine professional relationships.”

Include:

- Practical AI and IT training
- AI Club
- Business Breakfast
- Conferences and professional events
- Knowledge sharing

#### Business and collaboration

“We are building a transparent framework where independent professionals and organisations can connect, collaborate and turn their knowledge into meaningful projects.”

Include:

- Professional networking
- Project collaboration opportunities
- Transparent project coordination
- Responsible application of AI
- Local and international business relationships

Clearly differentiate existing activities from evolving capabilities.

Use two visually balanced content blocks with understated geometric illustrations.

---

### 10.5 Community

Section label:

OUR COMMUNITY

Headline:

**Better together.**

Communicate that Mayfly24 is not only about technology or business.

It is about creating an environment where professionals can:

- Learn from each other
- Share experiences openly
- Ask questions without hesitation
- Develop their skills
- Find meaningful professional relationships
- Collaborate on shared challenges
- Belong to a supportive community

Introduce AI Club, Business Breakfast, educational programmes and conferences as the organisation's initial community initiatives.

Use authentic event photography if supplied.

If no real photography is available, use abstract brand-aligned visual compositions instead of fabricating photographs of the organisation's activities.

CTA:

**Connect with our community**

Link to the contact section.

---

### 10.6 Professional collaboration

Section label:

WORK WITH US

Headline:

**Real knowledge. Real collaboration. Real impact.**

Introduce Mayfly24's business-oriented ambitions.

Emphasise that Mayfly24 believes in:

- Understanding real problems before proposing solutions
- Using technology responsibly
- Transparent communication
- High professional standards
- Realistic commitments
- Long-term professional relationships

Suggested supporting text:

“We believe meaningful innovation starts with understanding the challenge, bringing the right people together and working towards a shared goal.”

Mention areas of professional interest:

- Artificial intelligence and AI agents
- Model Context Protocol
- Local and open-source AI
- Data security and data governance
- Fine-tuning
- Modern IT practices
- Practical technology adoption

Present these as areas of expertise development and interest unless the source materials confirm them as established commercial services.

CTA:

**Let's work together**

---

### 10.7 Our values

Section label:

WHAT DRIVES US

Headline:

**Principles, not promises.**

Present the eight core values from the Brand Model Canvas.

**Trust**

We build relationships through honesty, reliability and mutual confidence.

**Precision**

We pay attention to the details that make the difference.

**Professional excellence**

We take pride in delivering high-quality work.

**Continuous development**

We stay curious, learn continuously and embrace meaningful improvement.

**Transparency**

We communicate openly about our work, decisions and limitations.

**Mutual respect**

We value people, their knowledge, their time and their contributions.

**Responsibility**

We take ownership of our commitments and decisions.

**Consistency**

We believe our actions should reflect our principles.

Use a responsive Bootstrap grid or a clean editorial list.

Avoid placing every value inside a heavy bordered card.

Use restrained line icons or geometric details where appropriate.

---

### 10.8 Vision

Section label:

LOOKING AHEAD

Headline:

**Local roots. Global perspective.**

Explain Mayfly24's long-term ambition to build:

- A sustainable professional community
- Regular educational opportunities
- A strong culture of knowledge sharing
- Transparent professional collaboration
- International project opportunities
- Opportunities for emerging talent

Communicate future ambitions as goals, not existing achievements.

Additional long-term possibilities include talent incubation, international professional experience, research and additional physical community spaces.

Conclude with the brand's key message:

**Let's show there's a better way.**

Give this section a distinctive, spacious visual treatment inspired by the geometric mayfly identity.

---

### 10.9 Contact section

Section label:

GET IN TOUCH

Headline:

**Let's build something meaningful.**

Invite visitors to contact Mayfly24 if they are interested in:

- Business collaboration
- AI and IT education
- Professional networking
- Community participation
- Shared projects

Keep the contact section simple and accessible.

Store contact details and social links in a central configuration file.

Do not invent email addresses, phone numbers or social media URLs.

If verified contact details are available, provide a working email CTA.

If they are unavailable, document the missing configuration and do not display broken or misleading links.

Do not implement a contact form that pretends to submit information without a functioning backend.

No backend is required for this initial website.

---

### 10.10 Footer

Create a minimal corporate footer containing:

- Mayfly logo
- Short brand statement
- Relevant section navigation
- Verified contact details, when available
- Verified social media links, when available
- Copyright notice with dynamically generated current year

Suggested brand statement:

“People. AI. Real Impact.”

Keep the footer aligned with the overall visual identity.

Do not create empty legal pages, fake social profiles or non-functional links.

---

## 11. Layout and visual rhythm

The landing page should feel like a carefully designed editorial experience, not a collection of unrelated UI components.

Maintain a consistent spacing system using Bootstrap utilities and centralised CSS variables.

Alternate between:

- Spacious editorial sections
- Two-column content compositions
- Subtle contrasting background surfaces
- Minimal responsive grids
- Full-width brand statements
- Geometric visual elements

Use thin borders, restrained accents and carefully controlled negative space to create separation.

Avoid unnecessary visual repetition between consecutive sections.

Maintain comfortable text widths for paragraphs.

Use the Muted Gold accent strategically rather than applying it to every heading or component.

---

## 12. Animation and interaction

Animations should be subtle, purposeful and professional.

Allowed:

- Smooth anchor scrolling
- Subtle hover transitions
- Button and navigation state transitions
- Gentle decorative visual movement if performance permits

Prefer CSS transitions and animations.

Avoid:

- Scroll hijacking
- Excessive parallax
- Heavy canvas or WebGL effects
- Animating every element on scroll
- Artificial loading screens
- Custom mouse cursors
- Animations that delay content accessibility

Respect prefers-reduced-motion.

The entire website must remain understandable and functional without animations.

---

## 13. Accessibility

Target WCAG 2.2 AA accessibility.

Requirements:

- Use semantic HTML.
- Use header, nav, main, section and footer appropriately.
- Use exactly one primary H1.
- Maintain a logical heading hierarchy.
- Provide descriptive alternative text for meaningful images.
- Hide purely decorative SVG elements from assistive technologies.
- Provide keyboard-accessible navigation.
- Include a skip-to-content link.
- Include visible keyboard focus indicators.
- Maintain accessible text contrast.
- Use buttons and links according to their intended semantic purpose.
- Ensure the mobile menu exposes its expanded and collapsed state.
- Avoid interactions that depend exclusively on hover.
- Ensure the website works at increased browser zoom.

Do not remove browser focus outlines without providing an accessible replacement.

---

## 14. Performance

The website should be lightweight, fast and suitable for static hosting.

Requirements:

- Minimise JavaScript bundle size.
- Avoid unnecessary dependencies.
- Use optimised SVG, WebP or AVIF assets where appropriate.
- Lazy-load images below the fold.
- Do not lazy-load the primary above-the-fold visual if it affects loading performance.
- Define image dimensions or aspect ratios to prevent layout shifts.
- Avoid external scripts unless necessary.
- Use a limited number of font families and font weights.
- Avoid large video backgrounds.
- Avoid unnecessary React re-renders.

Aim for strong Lighthouse results across performance, accessibility, best practices and SEO.

Treat Lighthouse scores of 95 or higher as optimisation targets, not guaranteed results.

---

## 15. SEO and metadata

Implement basic technical SEO suitable for a corporate landing page.

Include:

- Descriptive page title
- Meta description
- Open Graph metadata
- Social sharing metadata
- Favicon
- Appropriate document language
- Semantic heading structure
- Crawlable text content
- robots.txt
- Canonical URL and sitemap once the production domain is known

Suggested page title:

“Mayfly24 — People. AI. Real Impact.”

Suggested meta description:

“Mayfly24 connects people, practical AI knowledge and professional collaboration to build stronger communities and create meaningful opportunities.”

Do not fabricate the production domain or social sharing URLs.

Add structured organisation data only using verified information.

---

## 16. Internationalisation readiness

The organisation communicates in Hungarian, Serbian and English.

For the initial implementation, use English as the default website language.

Structure website content so that Hungarian and Serbian translations can be added later without modifying the layout components.

Keep user-facing copy, navigation labels, section content and CTA labels in centralised typed content files.

Do not hardcode repeated user-facing strings throughout components.

Do not introduce a full internationalisation dependency unless necessary.

Do not display a language switcher until the corresponding translations are available.

---

## 17. ESLint and Prettier

Configure ESLint and Prettier properly from the beginning.

Include:

- TypeScript linting
- React Hooks rules
- Consistent formatting
- Detection of unused variables and imports
- Compatible ESLint and Prettier configurations

Suggested formatting conventions:

- Two-space indentation
- Single quotes
- Semicolons
- Trailing commas where supported
- Consistent line wrapping
- Consistent import organisation

Include the following npm scripts:

- npm run dev
- npm run build
- npm run preview
- npm run lint
- npm run format
- npm run format:check
- npm run typecheck

The production build, TypeScript checks, ESLint and Prettier checks must pass without errors.

Resolve warnings where reasonably possible.

Do not disable linting rules merely to hide code-quality issues.

---

## 18. Scope limitations

This website must remain a lightweight corporate landing page.

Do not implement:

- Additional pages
- User registration
- Authentication
- User profiles
- Dashboards
- Databases
- CMS platforms
- Payment systems
- E-commerce
- Booking systems
- Blog platforms
- Chatbots
- AI-powered website functionality
- Analytics or tracking scripts
- Unnecessary API integrations

Do not add features that are outside the requested scope.

Prioritise design quality, clarity, maintainability and performance over feature quantity.

---

## 19. Implementation process

Follow this implementation sequence:

1. Inspect the attached brand documents.
2. Establish the website's information architecture.
3. Initialise the Vite, React and TypeScript project.
4. Configure Bootstrap, ESLint and Prettier.
5. Define the global design tokens and brand styles.
6. Create the typed content and configuration structure.
7. Implement shared layout and UI components.
8. Implement each landing page section.
9. Implement mobile navigation and anchor interactions.
10. Optimise typography, spacing and visual consistency.
11. Verify accessibility and responsive behaviour.
12. Add SEO metadata and deployment configuration.
13. Run all code-quality and build checks.
14. Resolve discovered issues.
15. Document the project in README.md.

Do not stop after generating a plan or a partial scaffold. Implement the complete website.

---

## 20. Acceptance criteria

The implementation is considered complete when:

- The website consists of one continuous landing page.
- The design clearly reflects the attached Mayfly visual identity.
- The company introduction accurately reflects the Brand Model Canvas.
- Existing activities and future ambitions are clearly differentiated.
- All navigation links function correctly.
- The mobile menu functions correctly.
- The website works at representative viewport widths from 320px to 2560px.
- Bootstrap utilities are used wherever appropriate.
- There is no horizontal overflow.
- The code contains no unnecessary duplication.
- Design tokens and configuration values are centralised.
- User-facing content is prepared for future translations.
- The website is keyboard accessible.
- There are no broken images or misleading contact links.
- There are no TypeScript errors.
- There are no ESLint errors.
- Prettier formatting checks pass.
- The production build succeeds.
- The project can be deployed to a static hosting environment.

The README must explain local development, available npm commands, production builds, how to update company content and branding, and which real-world assets or configuration values are still required.

---

## 21. Final design philosophy

Mayfly24 is not another company trying to appear innovative through visual effects and AI buzzwords.

The website should express intelligence through simplicity, professionalism through precision and trust through transparency.

Every design and engineering decision should reflect the organisation's core values.

The website should feel as though it was built by the same professionals Mayfly24 aims to bring together.

**People. AI. Real Impact.**
