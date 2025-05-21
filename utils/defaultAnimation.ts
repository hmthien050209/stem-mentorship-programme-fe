import { eases, stagger } from 'animejs'

export const DEFAULT_ANIMATION = {
  opacity: [0, 1],
  translateY: ['100%', '0%'],
  delay: stagger(100, { start: 200 }),
  ease: eases.inOutCubic,
}
