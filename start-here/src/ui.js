export const modFox = function modFox(state) {
  document.querySelector(".fox").classList = `fox fox-${state};`;
};
export const modScene = function modScene(state) {
  document.querySelector(".game").classList = `game ${state}`;
};

export const togglePoopBag = function togglePoopBag(show) {
  // if hidden show,
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);
};
