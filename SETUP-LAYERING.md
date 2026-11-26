# MAYFLY24 — Visual Depth, Surface Hierarchy & Layering

## 1. Objective

Enhance the existing Mayfly24 landing page by introducing a more sophisticated sense of visual depth, layering, surface separation and contrast.

The current website is already implemented.

Preserve the existing:

- Page structure
- Layout and responsive behaviour
- Content
- Typography
- Brand identity
- Colour palette
- Functionality
- Existing animations and micro-interactions

Do not redesign the website.

The objective is to make the existing design feel less flat and more visually refined through carefully selected surface colours, shadows, borders, highlights and elevation.

The final appearance should feel premium, architectural, tactile and professionally designed.

Maintain the conservative, earthy, modern and minimalistic character of Mayfly24.

## 2. Technical requirements

Respect the existing technology stack:

- Vite
- React
- TypeScript
- Bootstrap
- ESLint
- Prettier
- Existing CSS/SCSS architecture

Implement the visual enhancements primarily through CSS/SCSS.

Do not introduce additional dependencies or UI frameworks.

Continue using Bootstrap's native layout, spacing and responsive utilities.

Centralise reusable design values and minimise code duplication.

Inspect the existing components and stylesheets before making changes.

## 3. Establish a surface hierarchy

Introduce a consistent system of surface levels.

Instead of displaying all elements on nearly identical dark backgrounds, create subtle but noticeable differences between the page background, section backgrounds, content containers and featured elements.

### Level 0 — Base background

Use the existing Midnight Forest colour as the primary website canvas.

- Colour: #182522
- No elevation
- No unnecessary shadows
- Calm, dark and visually consistent

### Level 1 — Section surfaces

Use a slightly lighter variation of Midnight Forest for selected sections and larger content containers.

Suggested colour: #20312F

This level should provide separation between major content areas without requiring strong borders or shadows.

Do not wrap every website section in a container.

### Level 2 — Elevated content surfaces

Use a lighter, brand-aligned surface for existing cards, content boxes and grouped information.

Suggested colour: #2A3E3E

Combine this surface with:

- Soft external shadows
- Subtle borders
- Restrained upper-edge highlights
- Existing border-radius values

These elements should feel naturally elevated above the background.

### Level 3 — Featured surfaces

Use the existing Still Water colour or a closely related variation for selected, visually important content.

Suggested colour: #344B50

Use this level selectively for:

- Featured content
- Important service boxes
- Highlighted statements
- Selected contact elements
- Primary content containers

Apply a slightly stronger shadow and more noticeable surface separation.

Do not use the highest elevation level for ordinary content.

### Optional light accent surfaces

Use Twilight Sand (#E5DCD0) selectively if the existing composition benefits from a stronger contrast.

Possible applications:

- Important call-to-action sections
- Featured brand statements
- Selected editorial content blocks

Use dark brand typography on these surfaces.

Keep the overall website predominantly dark.

Do not introduce large light sections unnecessarily.

## 4. Centralised design tokens

Extend the existing global design-token system.

Reuse the existing brand colour variables rather than redefining them in multiple stylesheets.

Suggested semantic surface tokens:

```css
--surface-base: var(--color-midnight-forest);
--surface-section: #20312f;
--surface-raised: #2a3e3e;
--surface-featured: var(--color-still-water);
--surface-light: var(--color-twilight-sand);
```

Define reusable border and highlight tokens:

```css
--surface-border-subtle: rgba(229, 220, 208, 0.06);
--surface-border-default: rgba(229, 220, 208, 0.1);
--surface-border-emphasis: rgba(229, 220, 208, 0.16);

--surface-highlight: rgba(229, 220, 208, 0.04);
--surface-highlight-strong: rgba(229, 220, 208, 0.08);
```

These values are starting points.

Adjust them to complement the existing design rather than applying them blindly.

Do not replace existing brand variables or duplicate equivalent tokens.

## 5. Shadow system

Create a consistent elevation system using reusable shadow tokens.

Prefer layered, soft shadows that combine a small contact shadow with a wider ambient shadow.

Avoid large, harsh, solid black shadows.

Suggested implementation:

```css
--shadow-none: none;

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.12), 0 3px 8px rgba(0, 0, 0, 0.12);

--shadow-md: 0 2px 4px rgba(0, 0, 0, 0.14), 0 8px 20px rgba(0, 0, 0, 0.2);

--shadow-lg: 0 4px 8px rgba(0, 0, 0, 0.16), 0 16px 36px rgba(0, 0, 0, 0.24);

--shadow-inset: inset 0 1px 0 rgba(229, 220, 208, 0.05);
```

Use shadows consistently:

- Small elevation: subtle interactive elements and smaller components.
- Medium elevation: standard content cards and boxes.
- Large elevation: selected featured elements.
- Inset highlight: subtle upper-edge lighting.

Where appropriate, combine external shadows with an inset upper-edge highlight.

Keep the lighting direction consistent throughout the website.

Shadows should suggest a natural light source from above rather than making components appear to glow.

Avoid default Bootstrap shadows where they conflict with the custom brand elevation system.

## 6. Existing cards and content boxes

Review all existing card-like components.

Where appropriate:

- Make their backgrounds slightly lighter than the surrounding section.
- Introduce a soft, layered shadow.
- Add a thin, low-opacity border.
- Introduce a subtle upper-edge highlight.
- Preserve their existing dimensions, spacing and structure.
- Maintain consistent visual treatment across related components.

Cards should remain within the original earthy colour palette.

Do not introduce bright white, saturated blue or unrelated background colours.

Use the tonal contrast between surfaces as the primary method of separation.

Shadows should complement this contrast rather than compensate for its absence.

Do not create additional cards or wrap previously unboxed content merely to demonstrate the elevation system.

## 7. Subtle surface gradients

Where appropriate, introduce extremely subtle surface gradients to selected cards or featured containers.

For example:

```css
background: linear-gradient(145deg, var(--surface-featured), var(--surface-raised));
```

Use a restrained difference between the starting and ending colours.

The gradient should simulate natural surface lighting rather than appear as an obvious decorative effect.

Avoid applying gradients to every component.

Do not introduce animated gradients, metallic shine, neon effects or excessive visual complexity.

Flat surfaces should remain the default where they already work well.

## 8. Borders and edge highlights

Use subtle borders to improve the visibility of elevated surfaces against dark backgrounds.

Prefer thin, low-opacity borders derived from the existing Twilight Sand or Evening Sky colours.

Where appropriate, use a very subtle inset highlight along the upper edge.

The combination of:

- Slightly lighter surface colour
- Thin border
- Soft external shadow
- Subtle upper-edge highlight

Should create a sophisticated and tactile appearance.

Avoid thick outlines, excessive double borders and glowing edges.

Gold borders should be reserved for selected emphasis or appropriate interactive states.

## 9. Hover elevation

Integrate the new elevation system with the existing subtle animations.

For clickable cards and interactive content:

- Increase elevation slightly on hover.
- Transition to a slightly stronger shadow.
- Apply a subtle upward movement of approximately 2–3px.
- Optionally increase border visibility.
- Optionally lighten the background slightly.

Keep the transition duration between 200ms and 300ms.

Reuse the existing animation duration and easing variables.

Do not introduce new animation systems.

Avoid animating non-interactive informational cards in a way that suggests they are clickable.

For buttons, preserve the existing hover behaviour while introducing a subtle shadow where it improves visual separation.

Keep pressed states responsive and natural.

## 10. Navigation and sticky elements

If the existing navigation is sticky, improve its visual separation from the content behind it.

Use:

- A subtle bottom border
- A restrained shadow
- An appropriate dark surface colour

Apply additional separation only when it benefits the existing navigation behaviour.

Avoid heavy shadows, excessive transparency and unnecessary backdrop blur.

Do not introduce scroll listeners or additional JavaScript solely to implement decorative shadows.

## 11. Selective decorative layering

Where the existing design contains images, illustrations, geometric brand elements or featured content, consider introducing subtle depth through:

- A restrained background panel behind an illustration
- A small offset between decorative and primary surfaces
- Overlapping decorative layers
- Fine geometric outlines behind content
- Soft shadows beneath existing visual containers

Preserve the existing composition.

Do not introduce overlap between readable text and unrelated content.

Do not use negative margins or absolute positioning for essential content if doing so compromises responsive behaviour.

Decorative layering should be minimal and optional.

## 12. Typography and contrast

When lightening card backgrounds, review the contrast of all existing text, icons and interactive elements.

Continue using Twilight Sand for primary text.

Adjust semantic secondary-text colours where necessary to maintain readability.

Do not assume that the original secondary text colour remains accessible on lighter surfaces.

Maintain WCAG 2.2 AA contrast targets.

Avoid applying text shadows to ordinary headings or body copy.

Typography should remain crisp and clean.

The visual hierarchy should come from typography, spacing and surface contrast rather than decorative text effects.

## 13. Responsive behaviour

Maintain the existing mobile-first approach.

Ensure that:

- Shadows do not create horizontal overflow.
- Elevated cards remain visually balanced on small screens.
- Bootstrap gutters provide sufficient space between adjacent surfaces.
- Shadows are not accidentally clipped by parent containers.
- Decorative layers do not interfere with content.
- The existing responsive grid remains unchanged.

Where necessary, reduce shadow intensity or decorative offsets on mobile devices.

Apply hover-specific elevation changes only to devices that support hover and fine pointer input.

Respect prefers-reduced-motion for animated elevation changes.

Static shadows and surface differences may remain enabled.

## 14. Code quality and maintainability

Follow the existing project architecture.

Centralise surface colours, shadow values, borders and highlights in the existing global token system.

Introduce reusable semantic classes or SCSS mixins where repeated styling justifies them.

Suggested concepts:

- surface-section
- surface-raised
- surface-featured
- elevation-sm
- elevation-md
- elevation-lg
- elevation-hover

These names are suggestions. Follow the existing naming conventions.

Avoid creating a separate styling system that competes with Bootstrap.

Avoid duplicated declarations across component stylesheets.

Do not hardcode identical box-shadow values in multiple components.

Avoid unnecessary use of !important.

Use explicit transition properties rather than transition: all.

Keep React components unchanged wherever the enhancement can be achieved through styling alone.

## 15. Performance

Keep the visual depth system lightweight.

Avoid:

- Excessive backdrop filters
- Large animated blur effects
- Multiple expensive shadows on every element
- Unnecessary GPU layers
- Continuous shadow animations
- Heavy SVG filters
- JavaScript-driven decorative effects

Static shadows are appropriate for selected surfaces.

For interactive shadow transitions, keep the affected elements small and the number of simultaneously animated elements limited.

Do not introduce layout shifts.

## 16. Visual restrictions

Do not turn the website into:

- A generic SaaS dashboard
- A neumorphic interface
- A glassmorphic interface
- A heavily three-dimensional website
- A collection of floating cards
- A visually noisy technology landing page

Avoid:

- Excessive rounded corners
- Oversized shadows
- Strong gradients
- Bright glowing borders
- Neon accents
- Excessive layering
- Inconsistent elevation levels
- Artificial lighting effects

Preserve the Mayfly24 visual identity and the existing conservative, premium design direction.

## 17. Implementation approach

First inspect the existing website and identify which elements currently lack visual separation.

Then:

1. Extend the existing design tokens with a consistent surface and elevation system.
2. Improve the tonal contrast of existing content boxes.
3. Apply soft shadows selectively.
4. Add subtle borders and upper-edge highlights where appropriate.
5. Integrate elevation changes with existing hover animations.
6. Refine selected featured elements.
7. Review the entire page for visual consistency.
8. Verify responsive behaviour, accessibility and performance.
9. Run TypeScript, ESLint, Prettier and production build checks.

Do not apply the same shadow, background or elevation level to every element.

Make decisions based on the existing content hierarchy and composition.

## 18. Acceptance criteria

The implementation is complete when:

- The website feels noticeably less flat.
- Existing content boxes are more clearly separated from the background.
- The surface hierarchy is consistent throughout the website.
- Shadows are soft, natural and restrained.
- Featured elements have greater visual prominence.
- The website retains its original brand identity.
- The existing layout and functionality remain unchanged.
- Existing animations work naturally with the new elevation system.
- Text remains accessible and readable.
- Mobile and desktop layouts remain fully functional.
- Styling is reusable and maintainable.
- All existing code-quality checks pass.

## Final design philosophy

Create depth through tonal hierarchy first, shadows second and decorative effects last.

The result should feel like a premium architectural composition: different materials, carefully arranged surfaces, natural lighting and precise details.

Make the website richer, not busier.

When in doubt, reduce the effect rather than increase it.
