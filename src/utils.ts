export function filterClassNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}
