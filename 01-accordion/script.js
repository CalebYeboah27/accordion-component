const items = document.querySelectorAll(".item");
const hiddenBox = document.querySelectorAll(".hidden-box");

for (const [index, item] of items.entries()) {
  item.addEventListener("click", function (e) {
    const target = Number(e.target.id);

    for (const [index, value] of hiddenBox.entries()) {
      if (target === index + 1) {
        value.classList.toggle("open");
      }
    }
  });
}
