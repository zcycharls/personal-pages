const searchInput = document.querySelector("#site-search");

searchInput?.addEventListener("search", () => {
  searchInput.blur();
});
