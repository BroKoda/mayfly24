import { ActivityCard } from '../ui/ActivityCard';
import { SectionHeading } from '../ui/SectionHeading';
import { SECTION_IDS } from '../../config/site.config';
import { useReveal } from '../../hooks/useReveal';
import { useSiteContent } from '../../i18n/useSiteContent';

export function Activities() {
  const content = useSiteContent();
  const pillarsRef = useReveal<HTMLDivElement>();

  return (
    <section id={SECTION_IDS.activities} className="section section-surface">
      <div className="container-brand">
        <SectionHeading
          label={content.activities.sectionLabel}
          headline={content.activities.headline}
        />

        <div ref={pillarsRef} className="reveal-group row gy-4 mt-3">
          {content.activities.pillars.map((pillar) => (
            <div className="col-12 col-lg-6" key={pillar.title}>
              <ActivityCard pillar={pillar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
