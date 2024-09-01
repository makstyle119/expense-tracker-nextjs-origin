export function addCommas(x: number): string {
  return x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
