const sidebar = document.querySelector("#sidebar-filters");
const sidebarToggle = document.querySelector(".sidebar-filters-toggle");

sidebarToggle.addEventListener("click", () => {
  const sidebarVisibility = sidebar.getAttribute("data-visible");

  if (sidebarVisibility === "true") {
    sidebar.setAttribute("data-visible", "false");
    sidebarToggle.setAttribute("aria-expanded", "false");
    sidebarToggle.innerHTML = `<i class="fa-solid fa-filter"></i>
        <span class="txt-uppercase">Filters</span>`;
  } else {
    sidebar.setAttribute("data-visible", "true");
    sidebarToggle.setAttribute("aria-expanded", "true");
    sidebarToggle.innerHTML = `<i class="fa-solid fa-times"></i>
        <span class="txt-uppercase">Close</span>`;
  }
});
