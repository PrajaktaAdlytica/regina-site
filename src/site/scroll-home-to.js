export function scrollHomeTo(top, motion, win = window) {
  const event = new win.CustomEvent('regina:scroll-to', { cancelable: true, detail: { top, motion } });
  if (win.dispatchEvent(event)) win.scrollTo({ top, behavior: motion ? 'smooth' : 'instant' });
}
