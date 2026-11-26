import { useState } from 'react';
import wordmark from '../../assets/logos/mayfly-wordmark.webp';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { useSiteContent } from '../../i18n/useSiteContent';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const content = useSiteContent();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header navbar navbar-expand-lg sticky-top border-bottom border-brand py-3">
      <nav
        className="container-brand d-flex align-items-center justify-content-between"
        aria-label="Primary"
      >
        <a
          href="#main-content"
          className="navbar-brand d-flex align-items-center"
          onClick={closeMenu}
        >
          <img src={wordmark} alt="Mayfly24" height={28} width={133} />
        </a>

        <button
          type="button"
          className="navbar-toggler border-0 d-lg-none"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          id="primary-navigation"
          className={`collapse navbar-collapse flex-grow-0 ${isMenuOpen ? 'show' : ''}`}
        >
          <ul className="navbar-nav align-items-lg-center gap-lg-4 gap-2 py-3 py-lg-0">
            {content.navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link" href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item d-lg-none pt-2">
              <LanguageSwitcher />
            </li>
            <li className="nav-item d-lg-none pt-2">
              <a
                className="btn btn-primary rounded-pill px-4 py-2 w-100 text-center"
                href={content.navCta.href}
                onClick={closeMenu}
              >
                {content.navCta.label}
              </a>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-flex align-items-center gap-3">
          <LanguageSwitcher />
          <a
            className="btn btn-primary rounded-pill px-4 py-2"
            href={content.navCta.href}
          >
            {content.navCta.label}
          </a>
        </div>
      </nav>
    </header>
  );
}
