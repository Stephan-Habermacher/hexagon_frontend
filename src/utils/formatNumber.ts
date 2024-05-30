export function formatNumber(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
}

export function unformatNumber(str: string) {
  return parseInt(str.replace(/'/g, ""), 10);
}
