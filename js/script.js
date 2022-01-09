"use srict";
window.addEventListener("DOMContentLoaded", () => {
  const tabHeaderItemsContainer = document.querySelector(".tabheader__items"),
    tabHeaderItemsAll = document.querySelectorAll(".tabheader__item"),
    tabContentItemsAll = document.querySelectorAll(".tabcontent");

  tabHeaderItemsContainer.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("tabheader__item")) {
      tabHeaderItemsAll.forEach((tabHeaderItem, i) => {
        if (event.target == tabHeaderItem) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  function hideTabContent() {
    tabContentItemsAll.forEach((tabContentItem) => {
      tabContentItem.classList.remove("show", "fade");
      tabContentItem.classList.add("hide");
      tabHeaderItemsAll.forEach((tabHeaderItem) => {
        tabHeaderItem.classList.remove("tabheader__item_active");
      });
    });
  }
  function showTabContent(i = 0) {
    tabContentItemsAll[i].classList.remove("hide");
    tabContentItemsAll[i].classList.add("show", "fade");
    tabHeaderItemsAll[i].classList.add("tabheader__item_active");
  }
  hideTabContent();
  showTabContent();
});

// "use strict";
// window.addEventListener("DOMContentLoaded", () => {
//   //Tabs
//   const tabHeader = document.querySelector(".tabheader"),
//     tabHeaderItemsAll = document.querySelectorAll(".tabheader__item"),
//     tabContentItemsAll = document.querySelectorAll(".tabcontent");

//   function hideTabContentItems() {
//     tabContentItemsAll.forEach((contentItem) => {
//       contentItem.classList.add("hide");
//       contentItem.classList.remove("show", "fade");
//     });
//     tabHeaderItemsAll.forEach((headerItem) => {
//       headerItem.classList.remove("tabheader__item_active");
//     });
//   }

//   function showTabContentItem(i = 0) {
//     tabContentItemsAll[i].classList.add("show", "fade");
//     tabContentItemsAll[i].classList.remove("hide");
//     tabHeaderItemsAll[i].classList.add("tabheader__item_active");
//   }

//   tabHeader.addEventListener("click", (event) => {
//     if (event.target && event.target.classList.contains("tabheader__item")) {
//       tabHeaderItemsAll.forEach((tabHeaderItem, i) => {
//         if (event.target == tabHeaderItem) {
//           hideTabContentItems();
//           showTabContentItem(i);
//         }
//       });
//     }
//   });

//   hideTabContentItems();
//   showTabContentItem();
// });

// "use strict";
// window.addEventListener("DOMContentLoaded", () => {
//   //Tabs
//   const tabHeaderParent = document.querySelector(".tabheader"),
//     tabHeaderItemsAll = document.querySelectorAll(".tabheader__item"),
//     tabContentItemsAll = document.querySelectorAll(".tabcontent");

//   function hideTabContent() {
//     tabContentItemsAll.forEach((tabContentItem) => {
//       tabContentItem.classList.remove("show", "fade");
//       tabContentItem.classList.add("hide");
//     });
//     tabHeaderItemsAll.forEach((tabHeaderItem) => {
//       tabHeaderItem.classList.remove("tabheader__item_active");
//     });
//   }

//   function showTabContent(i = 0) {
//     tabContentItemsAll[i].classList.add("show", "fade");
//     tabContentItemsAll[i].classList.remove("hide");
//     tabHeaderItemsAll[i].classList.add("tabheader__item_active");
//   }

//   tabHeaderParent.addEventListener("click", (event) => {
//     if (event.target && event.target.classList.contains("tabheader__item")) {
//       tabHeaderItemsAll.forEach((tabHeaderItem, i) => {
//         if (event.target == tabHeaderItem) {
//           hideTabContent();
//           showTabContent(i);
//         }
//       });
//     }
//   });

//   hideTabContent();
//   showTabContent();
// });
