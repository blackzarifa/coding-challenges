export function toCamelCase(str: string): string {
  const arr = str.split('');
  return arr
    .map((c, i) => {
      if (c === '-' || c === '_') {
        arr[i + 1] = arr[i + 1].toUpperCase();
        return;
      }
      return c;
    })
    .join('');
}
