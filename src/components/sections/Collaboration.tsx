import { SectionHeading } from '../ui/SectionHeading';
import { BrandButton } from '../ui/BrandButton';
import { SECTION_IDS } from '../../config/site.config';
import { useReveal } from '../../hooks/useReveal';
import { useSiteContent } from '../../i18n/useSiteContent';

export function Collaboration() {
  const content = useSiteContent();
  const introRef = useReveal<HTMLParagraphElement>();
  const principlesRef = useReveal<HTMLUListElement>();
  const panelRef = useReveal<HTMLDivElement>();

  return (
    <section id={SECTION_IDS.collaboration} className="section section-surface">
      <div className="container-brand">
        <div className="row gy-5">
          <div className="col-12 col-lg-6">
            <SectionHeading
              label={content.collaboration.sectionLabel}
              headline={content.collaboration.headline}
            />
            <p ref={introRef} className="reveal fs-5 text-measure mb-4">
              {content.collaboration.supportingCopy}
            </p>

            <ul
              ref={principlesRef}
              className="reveal-group list-unstyled d-flex flex-column gap-2 mb-4"
            >
              {content.collaboration.principles.map((principle) => (
                <li className="d-flex align-items-start gap-2" key={principle}>
                  <span aria-hidden="true" className="dot-accent mt-2" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>

            <BrandButton
              label={content.collaboration.cta.label}
              href={content.collaboration.cta.href}
            />
          </div>

          <div className="col-12 col-lg-6">
            <div
              ref={panelRef}
              className="reveal--right surface-raised h-100 p-4 p-lg-5 rounded-4"
            >
              <span className="section-label">Areas of professional interest</span>
              <ul className="list-unstyled d-flex flex-wrap gap-2 mt-3 mb-0">
                {content.collaboration.focusAreas.map((area) => (
                  <li
                    key={area}
                    className="px-3 py-2 rounded-pill border border-brand text-secondary-brand small"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
