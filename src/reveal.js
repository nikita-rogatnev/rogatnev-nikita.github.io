// Fades [data-reveal] blocks in as they scroll into view.
// Content stays visible when this script does not run: the hidden state
// only applies once the "reveal-ready" class is set below.
const VISIBLE_CLASS = `is-visible`;
const READY_CLASS = `reveal-ready`;

const initReveal = () => {
    const root = document.documentElement;
    const items = Array.from(document.querySelectorAll(`[data-reveal]:not(.${VISIBLE_CLASS})`));
    const reducedMotion = window.matchMedia && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;

    if (!items.length || reducedMotion || !(`IntersectionObserver` in window)) {
        return;
    }

    // Anything already on screen is shown right away, without a flash.
    const pending = items.filter((item) => {
        if (item.getBoundingClientRect().top < window.innerHeight) {
            item.classList.add(VISIBLE_CLASS);
            return false;
        }

        return true;
    });

    root.classList.add(READY_CLASS);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(VISIBLE_CLASS);
                observer.unobserve(entry.target);
            }
        });
    }, {rootMargin: `0px 0px -8% 0px`});

    pending.forEach((item) => observer.observe(item));
};

// Keeps the footer year current between rebuilds of the prerendered page.
export const updateYear = () => {
    const year = String(new Date().getFullYear());

    document.querySelectorAll(`[data-year]`).forEach((node) => {
        if (node.textContent !== year) {
            node.textContent = year;
        }
    });
};

export default initReveal;
