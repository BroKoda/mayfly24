import wordmark from '../../assets/logos/mayfly-wordmark.webp';
import { CONTACT_HREF, siteConfig } from '../../config/site.config';
import { useSiteContent } from '../../i18n/useSiteContent';

export function Footer() {
  const content = useSiteContent();
  const hasSocialLinks = siteConfig.social.length > 0;
  const navLinks = siteConfig.features.contact
    ? content.navLinks
    : content.navLinks.filter((link) => link.href !== CONTACT_HREF);

  return (
    <footer className="section-surface border-top border-brand py-5">
      <div className="container-brand">
        <div className="row gy-4 gy-lg-0">
          <div className="col-12 col-lg-4">
            <img src={wordmark} alt="Mayfly24" height={26} width={124} className="mb-3" />
            <p className="text-secondary-brand mb-0">{content.footer.brandStatement}</p>
          </div>

          <nav className="col-6 col-lg-4" aria-label="Footer">
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a className="nav-link p-0 text-secondary-brand" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-6 col-lg-4">
            {siteConfig.contact.email ? (
              <a
                className="nav-link p-0 text-secondary-brand d-block mb-2"
                href={`mailto:${siteConfig.contact.email}`}
              >
                {siteConfig.contact.email}
              </a>
            ) : null}

            {hasSocialLinks ? (
              <ul className="list-unstyled d-flex gap-3 mb-0">
                {siteConfig.social.map((profile) => (
                  <li key={profile.href}>
                    <a className="nav-link p-0 text-secondary-brand" href={profile.href}>
                      {profile.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
