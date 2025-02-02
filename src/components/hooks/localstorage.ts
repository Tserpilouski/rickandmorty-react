export function getFromLocal(key: string): string {
  const value = localStorage.getItem(key);
  if (!value) return '';
  return JSON.parse(value);
}
