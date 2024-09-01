export function trottle(func, timeFrame = 50) {
  let lastTime = 0
  return function (...args) {
    const now = new Date()
    if (now - lastTime >= timeFrame) {
      func(...args)
      lastTime = now
    }
  }
}
