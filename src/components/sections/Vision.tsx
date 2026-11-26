import mark from '../../assets/logos/mayfly-mark.webp';
import { SectionHeading } from '../ui/SectionHeading';
import { SECTION_IDS } from '../../config/site.config';
import { useReveal } from '../../hooks/useReveal';
import { useSiteContent } from '../../i18n/useSiteContent';

export function Vision() {
  const content = useSiteContent();
  const ambitionsRef = useReveal<HTMLUListElement>();
  const statementRef = useReveal<HTMLDivElement>();

  return (
    <section
      id={SECTION_IDS.vision}
      className="section section-surface position-relative overflow-hidden"
    >
      <div className="container-brand position-relative">
        <SectionHeading
          label={content.vision.sectionLabel}
          headline={content.vision.headline}
          align="center"
        />

        <ul
          ref={ambitionsRef}
          className="reveal-group vision-ambitions list-unstyled row justify-content-center gy-3 mt-4 mb-5 mx-auto"
        >
          {content.vision.ambitions.map((ambition) => (
            <li className="col-12 col-sm-6 d-flex align-items-start gap-2" key={ambition}>
              <span aria-hidden="true" className="dot-accent mt-2" />
              <span>{ambition}</span>
            </li>
          ))}
        </ul>

        <div ref={statementRef} className="reveal">
          <img
            src={mark}
            alt=""
            aria-hidden="true"
            width={48}
            height={46}
            className="vision-mark d-block mx-auto mb-3"
          />

          <p className="vision-statement text-center mb-0">
            {content.vision.closingStatement}
          </p>
        </div>
      </div>
    </section>
  );
}
