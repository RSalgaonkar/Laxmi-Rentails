export const animationClasses = {
  float: 'animate-float',
  pulseGlow: 'animate-pulse-glow',
  slideIn: 'animate-slideIn',
  fadeIn: 'animate-fadeIn'
};

export const addAnimation = (element: HTMLElement, animation: keyof typeof animationClasses) => {
  element.classList.add(animationClasses[animation]);
  setTimeout(() => element.classList.remove(animationClasses[animation]), 1000);
};