import { SectionHeading } from '../ui/SectionHeading';
import { BrandButton } from '../ui/BrandButton';
import { SECTION_IDS, siteConfig } from '../../config/site.config';
import { useReveal } from '../../hooks/useReveal';
import { useSiteContent } from '../../i18n/useSiteContent';

export function Community() {
  const content = useSiteContent();
  const introRef = useReveal<HTMLParagraphElement>();
  const offeringsRef = useReveal<HTMLUListElement>();
  const panelRef = useReveal<HTMLDivElement>();

  return (
    <section id={SECTION_IDS.community} className="section">
      <div className="container-brand">
        <div className="row gy-5">
          <div className="col-12 col-lg-7">
            <SectionHeading
              label={content.community.sectionLabel}
              headline={content.community.headline}
            />
            <p ref={introRef} className="reveal fs-5 text-measure mb-4">
              {content.community.intro}
            </p>

            <ul ref={offeringsRef} className="reveal-group list-unstyled row gy-3 mb-4">
              {content.community.offerings.map((offering) => (
                <li
                  className="col-12 col-sm-6 d-flex align-items-start gap-2"
                  key={offering}
                >
                  <span aria-hidden="true" className="dot-accent mt-2" />
                  <span>{offering}</span>
                </li>
              ))}
            </ul>

            {siteConfig.features.contact ? (
              <BrandButton
                label={content.community.cta.label}
                href={content.community.cta.href}
              />
            ) : null}
          </div>

          <div className="col-12 col-lg-5">
            <div
              ref={panelRef}
              className="reveal--right surface-raised h-100 p-4 p-lg-5 rounded-4"
            >
              <span className="section-label">Initial community initiatives</span>
              <ul className="list-unstyled d-flex flex-column gap-3 mt-3 mb-0">
                {content.community.initiatives.map((initiative) => (
                  <li
                    className="d-flex align-items-center gap-3 py-2 border-bottom border-brand"
                    key={initiative}
                  >
                    <span aria-hidden="true" className="marker-diamond" />
                    <span className="font-heading">{initiative}</span>
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
