

/* Show/Hide the mobile navigation bar based
   on Hamburger menu
*/
function hideMobileNav() {
  const navbar = document.getElementById("mobile-navbar");
  navbar.classList.add("hidden");
}

function expandMobileNav() {
  const navbar = document.getElementById("mobile-navbar");
  navbar.classList.remove("hidden");
}


