export function headerOffset(win = window, gap = 16) {
  return (win.document?.querySelector('.site-header')?.getBoundingClientRect().height || 0) + gap;
}
