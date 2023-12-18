"use strict";

function openPhoneMenu() {
  let nav = document.getElementsByClassName("nav-list")[0];
  nav.style.width = "50%";

  let content = document.getElementById("overlay");
  content.style.display = "block";
}

function exit() {
  let content = document.getElementById("overlay");
  content.style.display = "none";
  let nav = document.getElementsByClassName("nav-list")[0];
  nav.style.width = "0%";
}

onload = function readyWindow() {
  const currentUrl = window.location.pathname;
  /**
   * open faqs and close them
   */
  let acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active-faq");
      let panel = this.nextElementSibling;
      //if the panel has a max height of 0 (hidden)
      if (panel.style.maxHeight) {
        //max height go away
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  /**
   * add active class to active link on nav bar
   */
  let nav_links = this.document
    .getElementsByClassName("nav-list")[0]
    .getElementsByTagName("a");

  for (let i = 0; i < nav_links.length; i++) {
    if (nav_links[i].pathname === currentUrl) {
      nav_links[i].classList.toggle("active-link");
    }
    nav_links[i].addEventListener("click", function () {
      let curr = nav_links[i].getElementsByClassName("active-link");
      if (curr.length > 0) {
        curr[0].classList.toggle("active-link");
      }
      if (currentUrl === nav_links[i].pathname) {
        this.classList.toggle("active-link");
      }
    });
  }
};

function validateForm() {
  let msg = document.getElementById("form-submitted");
  console.log(msg);
  msg.style.display = "block";
  return false;
}
