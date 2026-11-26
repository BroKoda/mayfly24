import { SectionHeading } from '../ui/SectionHeading';
import { SECTION_IDS } from '../../config/site.config';
import { useReveal } from '../../hooks/useReveal';
import { useSiteContent } from '../../i18n/useSiteContent';

export function About() {
  const content = useSiteContent();
  const introRef = useReveal<HTMLParagraphElement>();
  const highlightsRef = useReveal<HTMLDivElement>();

  return (
    <section id={SECTION_IDS.about} className="section">
      <div className="container-brand">
        <div className="row">
          <div className="col-12 col-lg-7">
            <SectionHeading
              label={content.about.sectionLabel}
              headline={content.about.headline}
            />
            <p ref={introRef} className="reveal fs-5 text-measure">
              {content.about.intro}
            </p>
          </div>
        </div>

        <div ref={highlightsRef} className="reveal-group row mt-4 gy-4">
          {content.about.highlights.map((highlight) => (
            <div className="col-12 col-md-4" key={highlight.title}>
              <div className="pt-4 border-top border-brand h-100">
                <h3 className="h5 mb-2 font-heading">{highlight.title}</h3>
                <p className="text-secondary-brand mb-0">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
