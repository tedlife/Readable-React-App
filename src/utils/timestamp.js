export default function timestampToDate(timestamp) {
  return new Date(Number(timestamp)).toLocaleDateString();
}
