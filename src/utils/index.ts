export function debounce(
  func: Function,
  delay: number = 300,
): (...args: any[]) => void {
  let timer: NodeJS.Timeout | null;
  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      func.apply(this, args);
    }, delay);
  };
}
