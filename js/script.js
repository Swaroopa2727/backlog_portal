document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const toggleBtn = document.getElementById("sidebarToggle");
  const topbarUser = document.getElementById("topbarUser");

  function openSidebar() {
    sidebar.classList.add("show");
    overlay.classList.add("show");
  }

  function closeSidebar() {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
  }

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.contains("show") ? closeSidebar() : openSidebar();
  });

  overlay.addEventListener("click", closeSidebar);

  // Close sidebar when a nav item is clicked (mobile)
  document.querySelectorAll(".nav-item").forEach(function (item) {
    item.addEventListener("click", function () {
      if (window.innerWidth <= 992) closeSidebar();
    });
  });

  // ---- Topbar user dropdown ----
  if (topbarUser) {
    function toggleUserDropdown(force) {
      const willOpen = typeof force === "boolean" ? force : !topbarUser.classList.contains("open");
      topbarUser.classList.toggle("open", willOpen);
      topbarUser.setAttribute("aria-expanded", willOpen ? "true" : "false");
    }

    topbarUser.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleUserDropdown();
    });

    topbarUser.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleUserDropdown();
      } else if (e.key === "Escape") {
        toggleUserDropdown(false);
      }
    });

    document.addEventListener("click", function (e) {
      if (!topbarUser.contains(e.target)) toggleUserDropdown(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") toggleUserDropdown(false);
    });
  }
});
