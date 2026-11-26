import { SectionHeading } from '../ui/SectionHeading';
import { SECTION_IDS, siteConfig } from '../../config/site.config';
import { useReveal } from '../../hooks/useReveal';
import { useSiteContent } from '../../i18n/useSiteContent';

export function Contact() {
  const content = useSiteContent();
  const introRef = useReveal<HTMLParagraphElement>();
  const reasonsRef = useReveal<HTMLUListElement>();

  return (
    <section id={SECTION_IDS.contact} className="section">
      <div className="container-brand">
        <div className="row">
          <div className="col-12 col-lg-7">
            <SectionHeading
              label={content.contact.sectionLabel}
              headline={content.contact.headline}
            />
            <p ref={introRef} className="reveal fs-5 mb-3">
              {content.contact.intro}
            </p>
            <ul
              ref={reasonsRef}
              className="reveal-group list-unstyled d-flex flex-column gap-2 mb-4"
            >
              {content.contact.reasons.map((reason) => (
                <li className="d-flex align-items-start gap-2" key={reason}>
                  <span aria-hidden="true" className="dot-accent mt-2" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>

            {siteConfig.contact.email ? (
              <a
                className="btn btn-primary px-4 py-2 rounded-pill"
                href={`mailto:${siteConfig.contact.email}`}
              >
                {siteConfig.contact.email}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
