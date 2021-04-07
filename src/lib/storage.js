export function saveItem(key, value) {
  localStorage.setItem(key, value);
}

export function deleteItem(key) {
  localStorage.removeItem(key);
}

export function loadItem(key) {
  return localStorage.getItem(key);
}
