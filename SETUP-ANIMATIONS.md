# MAYFLY24 — Subtle Animations & Micro-interactions

## 1. Objective

Enhance the existing Mayfly24 landing page with subtle, sophisticated animations and micro-interactions.

The website is already implemented. Preserve its existing design, layout, content, branding, colours, typography and functionality.

Do not redesign, restructure or unnecessarily refactor the website.

The goal is to make the existing website feel more polished, responsive and premium through carefully considered motion.

Animations should complement the Mayfly24 brand identity:

- Professional
- Conservative yet modern
- Premium
- Precise
- Elegant
- Human-centred
- Minimalistic
- Timeless

The visitor should feel the quality of the animations rather than consciously notice them.

## 2. Technical requirements

Respect the existing technology stack:

- Vite
- React
- TypeScript
- Bootstrap
- ESLint
- Prettier

Use native CSS animations, transitions and keyframes, implemented in the project's existing stylesheet format.

If the project uses SCSS, follow its existing SCSS architecture. Do not introduce a new styling system solely for animations.

Use native IntersectionObserver for scroll-triggered animations where necessary.

Do not introduce additional animation libraries, including:

- Framer Motion
- GSAP
- Animate.css
- AOS
- React Spring

Keep the implementation lightweight, reusable and maintainable.

## 3. Centralised animation design tokens

Define reusable animation variables in the existing global design-token file.

Suggested values:

```css
--motion-duration-fast: 150ms;
--motion-duration-normal: 250ms;
--motion-duration-slow: 400ms;
--motion-duration-reveal: 600ms;

--motion-ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--motion-ease-out: cubic-bezier(0.22, 1, 0.36, 1);

--motion-distance-xs: 4px;
--motion-distance-sm: 8px;
--motion-distance-md: 16px;
--motion-distance-lg: 24px;

--motion-stagger: 80ms;
--motion-hover-scale: 1.025;
--motion-active-scale: 0.98;
```

Treat these values as starting points and adjust them if necessary to match the existing design.

Avoid hardcoded animation values throughout individual components.

Use semantic, reusable animation classes rather than duplicating keyframes and transitions.

## 4. Initial page-load animations

Introduce a subtle entrance sequence for the above-the-fold content.

### Navigation

- Gentle fade-in.
- Minimal vertical movement of approximately 4–8 pixels, if appropriate.
- Keep navigation immediately usable.

### Hero section

Introduce a restrained staggered entrance sequence:

1. Section label or introductory text.
2. Main headline.
3. Supporting description.
4. Call-to-action buttons.
5. Decorative visual elements.

Combine opacity with a small vertical translation.

Suggested behaviour:

- Initial opacity: 0.
- Final opacity: 1.
- Initial translation: 12–16px downward.
- Final translation: 0.
- Duration: 500–600ms.
- Stagger between elements: 60–100ms.
- Smooth ease-out timing.

The entire sequence should finish within approximately one second.

Do not animate individual letters or words.

Do not introduce loading screens, artificial loading delays or animations that prevent visitors from immediately interacting with the website.

## 5. Scroll-triggered reveal animations

Introduce subtle entrance animations for selected elements as they enter the viewport.

Apply these selectively to:

- Section headings
- Supporting paragraphs
- Service and activity cards
- Community elements
- Professional collaboration sections
- Company values
- Images and illustrations
- Call-to-action sections

Use a restrained combination of:

- Fade-in
- Small upward movement
- Occasional horizontal movement where appropriate to the existing composition

Avoid applying a different animation to every section.

Use native IntersectionObserver with a single shared observer or reusable React hook, following the project's existing architecture.

Requirements:

- Reveal elements when approximately 10–15% becomes visible.
- Animate each element only once per page visit.
- Stop observing elements after their animation is triggered.
- Clean up observers correctly.
- Do not hide content again when scrolling upwards.
- Do not add unnecessary React state or cause avoidable component re-renders.
- Do not use continuous scroll event listeners for reveal animations.

Ensure content remains visible if IntersectionObserver is unavailable or animation initialisation fails.

Animations must progressively enhance the existing website, not become a requirement for displaying its content.

## 6. Staggered group animations

For related groups of elements, such as company values, service cards or activity cards, introduce a small stagger between entrance animations.

Suggested delay:

- 60–80ms between consecutive elements.
- Cap the total stagger delay at approximately 300ms.

Use a reusable implementation with CSS custom properties or data attributes.

Do not create separate animation classes for every individual card.

On mobile devices, keep the stagger minimal or remove it where elements are displayed vertically.

## 7. Button micro-interactions

Enhance existing buttons without changing their visual identity.

### Primary buttons

On hover:

- Introduce a subtle background colour transition within the existing brand palette.
- Apply a small upward movement of approximately 2px.
- Optionally introduce a restrained shadow if it matches the existing design.

On active or pressed state:

- Apply a subtle scale reduction, approximately 0.98.
- Provide immediate visual feedback.

### Secondary buttons

On hover:

- Smoothly transition border colour, text colour or background colour.
- Keep the existing button shape and dimensions.

### Buttons with arrow icons

- Move the arrow horizontally by approximately 3–4px on hover.
- Return it smoothly to its original position.

Do not use aggressive scaling, glowing effects, bouncing or excessive shadows.

Maintain accessible keyboard focus states.

## 8. Navigation animations

Add refined micro-interactions to existing navigation links.

Suggested behaviour:

- Smooth text colour transition.
- Thin underline that expands horizontally on hover.
- Subtle active-section indication, if active-section tracking already exists.
- Smooth mobile navigation expansion and collapse.

Use the existing Mayfly24 Muted Gold accent where appropriate.

Implement underline animations using CSS pseudo-elements and transform rather than changing element widths or layout.

Do not override Bootstrap's existing collapse behaviour unnecessarily.

## 9. Cards and interactive content

For clickable cards and interactive content blocks, introduce subtle hover feedback.

Suggested behaviour:

- Vertical movement of approximately 2–4px.
- Gentle border colour transition.
- Minimal background colour adjustment.
- Optional restrained shadow.
- Small movement of an existing icon or arrow.

For non-interactive informational cards, avoid movement that incorrectly suggests clickability.

Company values and informational sections should remain primarily static after their initial reveal.

Do not introduce excessive card elevation or dramatically change their appearance.

The website should retain its editorial, corporate character rather than resemble an interactive SaaS dashboard.

## 10. Images and visual elements

For existing images, use minimal visual transitions where appropriate.

Possible effects:

- Gentle image fade-in when revealed.
- Small scale transition up to approximately 1.025 on hover for interactive image containers.
- Subtle overlay opacity transition.

Ensure image scaling remains inside its original container and does not cause layout shifts.

Do not introduce hover animations to every image.

Do not animate the company logo continuously.

## 11. Decorative brand elements

If the existing website contains geometric mayfly wings, flowing lines, abstract polygons or other brand-specific illustrations, introduce subtle motion only where it genuinely improves the composition.

Possible effects:

- Gentle opacity transition on initial load.
- Subtle SVG line-drawing animation.
- Small entrance translation.
- A gradual reveal of existing geometric elements.

Prefer one-time decorative entrance animations over continuous movement.

Do not add new decorative graphics solely for animation purposes.

Avoid animated gradients, particles, floating shapes, pulsing logos, rotating graphics and distracting background effects.

Preserve the original geometry and colour palette of the Mayfly24 visual identity.

## 12. Section transitions and scrolling

Enable native smooth scrolling for existing anchor navigation where appropriate.

Preserve the browser's natural scrolling behaviour.

Do not introduce:

- Scroll hijacking
- Custom scrolling engines
- Forced section snapping
- Excessive parallax
- Scroll-dependent background movement
- Artificial scrolling delays

The website should feel natural and predictable when navigating between sections.

## 13. Responsive behaviour

Follow the existing mobile-first approach.

Animations must work consistently across desktop, tablet and mobile devices.

On mobile:

- Reduce animation distances where appropriate.
- Reduce unnecessary stagger delays.
- Avoid horizontal movements that could create overflow.
- Avoid heavy decorative animations.
- Keep scrolling smooth and responsive.

Apply hover-specific movement only to devices that genuinely support hover:

```css
@media (hover: hover) and (pointer: fine) {
  /* Hover-specific motion */
}
```

Touch devices should primarily receive appropriate pressed-state feedback.

Preserve Bootstrap's responsive grid system and utilities.

Do not modify the existing layout to accommodate animations.

## 14. Accessibility

Respect the user's operating system motion preferences.

Implement support for:

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable non-essential animations and smooth scrolling */
}
```

When reduced motion is enabled:

- Display reveal elements immediately.
- Remove entrance translations.
- Disable decorative animations.
- Disable unnecessary hover movement.
- Disable smooth scrolling.
- Preserve functional visual feedback.

Ensure animated elements remain accessible throughout their lifecycle.

Do not interfere with keyboard navigation, focus management or screen readers.

Never allow invisible animated elements to receive keyboard focus without becoming visible.

## 15. Performance requirements

Prioritise performance and smooth rendering.

Prefer animating:

- transform
- opacity

Use short colour and border-colour transitions where appropriate for interactive elements.

Avoid animating layout-affecting properties such as:

- Width
- Height
- Margin
- Padding
- Top
- Left

Bootstrap's existing functional collapse animation may remain unchanged.

Additional requirements:

- Do not introduce layout shifts.
- Do not use transition: all.
- Specify the exact properties being transitioned.
- Avoid excessive use of will-change.
- Do not introduce unnecessary GPU layers.
- Avoid expensive blur and filter animations.
- Avoid unnecessary JavaScript animation loops.
- Avoid unnecessary dependencies.
- Ensure animations do not negatively affect perceived loading performance or Core Web Vitals.

## 16. Code architecture and maintainability

Inspect the existing codebase before implementing changes.

Follow the current project structure and naming conventions.

Where appropriate, introduce a dedicated animation stylesheet and a reusable IntersectionObserver hook or utility.

Suggested reusable animation classes:

- reveal
- reveal--fade
- reveal--up
- reveal--left
- reveal--right
- reveal--stagger
- is-visible
- hover-lift
- hover-arrow

Only implement classes that are actually needed.

Do not create unnecessary abstractions or duplicate animation logic.

Avoid adding individual animation logic to every React component.

Centralise animation durations, easing functions, movement distances and stagger values.

Keep the implementation compatible with ESLint, Prettier and TypeScript strict mode.

## 17. Animation intensity guidelines

Use the following hierarchy:

- Hero section: moderately noticeable entrance animation.
- Section headings: subtle entrance animation.
- Supporting content: gentle fade or reveal.
- Cards: minimal entrance and appropriate hover feedback.
- Buttons: precise and responsive micro-interactions.
- Navigation: lightweight colour and underline transitions.
- Decorative graphics: minimal, preferably one-time motion.
- Footer: predominantly static.

Not every element needs an animation.

Allow static content and negative space to contribute to the premium character of the website.

When deciding whether to animate an element, ask whether the animation improves hierarchy, usability, feedback or visual quality.

If it serves no meaningful purpose, leave the element static.

## 18. Acceptance criteria

The implementation is complete when:

- The existing website design remains unchanged.
- Animations feel consistent across the entire website.
- Entrance animations are smooth and understated.
- Scroll-triggered animations execute only once.
- Hover animations provide meaningful visual feedback.
- Mobile scrolling remains smooth.
- Reduced-motion preferences are respected.
- No layout shifts or horizontal overflow are introduced.
- No unnecessary dependencies are added.
- Animation logic and styling are reusable.
- Existing functionality remains unaffected.
- TypeScript, ESLint, Prettier and production build checks pass.

Review the existing website and selectively implement the animations that best complement each section.

Do not blindly apply every animation described in this document.

## Final design philosophy

Motion should communicate precision, not spectacle.

The Mayfly24 website should feel calm, confident, responsive and carefully crafted.

Animations should enhance the existing experience without becoming the experience itself.

When in doubt, use less.
