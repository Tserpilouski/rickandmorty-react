export function getFromLocal(key: string): string | null {
  return localStorage.getItem(key) || null;
}
