export function addToArray<Item>(array: Item[], item: Item) {
  return [...array, item];
}

export function removeFromArray<Item>(array: Item[], item: Item) {
  return array.filter((i) => i !== item);
}

export function toggleFromArray<Item>(array: Item[], item: Item) {
  return array.includes(item)
    ? removeFromArray(array, item)
    : addToArray(array, item);
}
