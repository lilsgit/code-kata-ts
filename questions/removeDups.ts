export function removeDuplicates(list: number[]): number[] {
  let x = 0;
  for (let y = 1; y <= list.length;) {
    if (list[x] !== list[y]) {
      list[x + 1] = list[y];
      x += 1;
    }
    y += 1;
  }
  return list.slice(0, x)
}