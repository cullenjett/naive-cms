export const saveItem = (key: string, item: any) => {
  try {
    const serialized = JSON.stringify(item);
    window.localStorage.setItem(key, serialized);
  } catch (err) {
    console.error(`Failed to save item ${key}`, err);
  }
};

export function getItem<T>(key: string): T | undefined {
  try {
    const serialized = window.localStorage.getItem(key) || '';
    return JSON.parse(serialized) as T;
  } catch (err) {
    console.error(`Failed to get item ${key}`, err);
  }
}
