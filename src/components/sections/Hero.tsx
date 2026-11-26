import MayflyAnimation from '../ui/MayflyAnimation/MayflyAnimation';
import { BrandButton } from '../ui/BrandButton';
import { siteConfig } from '../../config/site.config';
import { useSiteContent } from '../../i18n/useSiteContent';

export function Hero() {
  const content = useSiteContent();

  return (
    <section className="section pt-5">
      <div className="container-brand">
        <div className="row align-items-center gy-5">
          <div className="col-12 col-lg-6 order-1 hero-reveal">
            <span className="section-label">{content.hero.eyebrow}</span>
            <h1 className="hero-headline mb-4">
              {content.hero.headlineLines.map((line) => (
                <span className="d-block" key={line}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="text-secondary-brand text-measure fs-5 mb-4">
              {content.hero.supportingCopy}
            </p>
            <div className="d-flex flex-wrap gap-3">
              {siteConfig.features.contact ? (
                <BrandButton
                  label={content.hero.primaryCta.label}
                  href={content.hero.primaryCta.href}
                />
              ) : null}
              <BrandButton
                label={content.hero.secondaryCta.label}
                href={content.hero.secondaryCta.href}
                variant="outline"
              />
            </div>
          </div>

          <div
            className="col-12 col-lg-6 order-2 d-flex justify-content-center justify-content-lg-end"
            aria-hidden="true"
          >
            <MayflyAnimation className="hero-wing" />
          </div>
        </div>
      </div>
    </section>
  );
}
