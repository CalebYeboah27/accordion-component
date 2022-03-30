const items = document.querySelectorAll(".item");
const hiddenBox = document.querySelectorAll(".hidden-box");

// UNUSED PARAMETERS kept for reference
items.forEach((item, index, items) => {
  item.addEventListener("click", function (e) {
    const target = Number(e.target.id);
    // value represents a single hiddenbox
    hiddenBox.forEach((value, index) => {
      // short circuiting used in place of if statement
      target === index + 1 && value.classList.toggle("open");
    });
  });
});

// ALTERNATIVELY

// for (const [index, item] of items.entries()) {
//   item.addEventListener("click", function (e) {
//     const target = Number(e.target.id);

//     for (const [index, value] of hiddenBox.entries()) {
//       if (target === index + 1) {
//         // value represents a single hiddenbox
//         value.classList.toggle("open");
//       }
//     }
//   });
// }
