export const leftFadeIn = {
    visible: { opacity: 1, x: 0, transition: { type: 'spring', damping: 10, duration: 1, delay: .3 } },
    hidden: { opacity: 0, x: -300 }
};

export const rightFadeIn = {
    visible: { opacity: 1, x: 0, transition: { type: 'spring', damping: 10, duration: 1, delay: .3 } },
    hidden: { opacity: 0, x: 300 }
};

export const riseUpFadeIn = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 }
};