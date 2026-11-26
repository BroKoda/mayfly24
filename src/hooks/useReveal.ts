import { useEffect, useRef } from 'react';

let sharedObserver: IntersectionObserver | null | undefined;

/**
 * Lazily creates one `IntersectionObserver` shared by every `useReveal` caller, instead of
 * one per revealed element. Marks a target `is-visible` the first time ~12% of it enters the
 * viewport, then stops observing it — reveal animations run once per page visit.
 */
function getSharedObserver(): IntersectionObserver | null {
  if (sharedObserver !== undefined) {
    return sharedObserver;
  }

  if (typeof IntersectionObserver === 'undefined') {
    sharedObserver = null;
    return sharedObserver;
  }

  sharedObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 },
  );

  return sharedObserver;
}

/**
 * Ref callback for scroll-triggered reveal animations (`.reveal`, `.reveal-group` in
 * animations.scss). Falls back to showing the element immediately when
 * `IntersectionObserver` isn't available, so content is never hidden behind a missing API.
 */
export function useReveal<T extends Element>() {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    const observer = getSharedObserver();
    if (!observer) {
      element.classList.add('is-visible');
      return;
    }

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return elementRef;
}
