import { useSiteContent } from '../../i18n/useSiteContent';

export function CopyrightStrip() {
  const content = useSiteContent();
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright-strip border-top border-brand py-3">
      <div className="container-brand text-center">
        <p className="text-secondary-brand small mb-0">
          © {currentYear} {content.footer.copyrightHolder}. All rights reserved.
        </p>
      </div>
    </div>
  );
}
