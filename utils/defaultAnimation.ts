import { eases, stagger, waapi } from 'animejs'

export default {
  opacity: [0, 1],
  translateY: ['100%', '0%'],
  delay: stagger(100, { start: 200 }),
  ease: waapi.convertEase(eases.inOutCubic),
}
