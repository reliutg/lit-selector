export function ls(target) {
  let selected = document.querySelectorAll(target);
  if (selected.length > 1) return Array.from(selected);
  return selected[0];
};
