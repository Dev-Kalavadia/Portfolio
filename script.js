// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});


const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");


// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

console.log("this");
console.log(navigationLinks);
console.log("here");
console.log(pages);

let activePage = 0;
// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        activePage = i;
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
      console.log(activePage);
    }
  });
}

let userHasScrolled = false;

window.addEventListener("scroll", (e) => {
  userHasScrolled = true;
});

// document.onmousemove = animatedCircles;
// const colors = [
//   // COlor scheme for the cursor following animations (just settled on one color since it matched the asthethis of the site instead of the neon colors i tried earlier )
//   "#fdd46c",
//   // "#FF3300",
//   // "#00FF66",
//   // "#00FFFF",
//   // "#FF0099",
//   // "#CC00FF",
// ];

// function animatedCircles(event) {
//   // Checking if its not the Protfolio or Commlab Page since the hovering was conflciting with the clicking 
//     if (activePage !== 2 && activePage !== 3 && activePage !== 4) {
//     let circle = document.createElement("div");
//     circle.setAttribute("class", "circle");
//     document.body.appendChild(circle);
//     console.log((activePage = "printing"));

//     circle.style.left = event.clientX + "px";
//     circle.style.top = event.clientY + "px";

//     // checking if the user has scrolled or not and if so moving the cursor follower away
//     if (userHasScrolled) {
//       circle.style.top += 1000 + "px";
//       circle.style.left += 1000 + "px";
//     }

//     let color = colors[Math.floor(Math.random() * colors.length)];
//     circle.style.borderColor = color;

//     circle.style.transition = "all 0.5s linear 0s";

//     circle.style.left = circle.offsetLeft - 20 + "px";
//     circle.style.top = circle.offsetTop - 20 + "px";

//     circle.style.width = "50px";
//     circle.style.height = "50px";
//     circle.style.borderWidth = "11px";
//     circle.style.opacity = 0;
//   }
//   }
