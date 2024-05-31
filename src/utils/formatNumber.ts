export function formatNumber(num: number | string) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
}

export function unformatNumber(str: string) {
  return parseInt(str.replace(/'/g, ""), 10);
}
