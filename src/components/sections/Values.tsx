import { SectionHeading } from '../ui/SectionHeading';
import { ValueItem } from '../ui/ValueItem';
import { SECTION_IDS } from '../../config/site.config';
import { useReveal } from '../../hooks/useReveal';
import { useSiteContent } from '../../i18n/useSiteContent';

export function Values() {
  const content = useSiteContent();
  const valuesRef = useReveal<HTMLDivElement>();

  return (
    <section id={SECTION_IDS.values} className="section">
      <div className="container-brand">
        <SectionHeading
          label={content.values.sectionLabel}
          headline={content.values.headline}
        />

        <div ref={valuesRef} className="reveal-group row mt-3">
          {content.values.values.map((value, index) => (
            <div className="col-12 col-md-6" key={value.title}>
              <ValueItem value={value} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
