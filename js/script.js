const modalWrapper = document.getElementById("modalWrapper");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

openMenu.addEventListener("click", () => {
  modalWrapper.classList.add("modalActive");
});

modalWrapper.addEventListener("click", (event) => {
  if (event.target.id === "closeMenu" || event.target === event.currentTarget) {
    modalWrapper.classList.remove("modalActive");
  }
});
window.addEventListener("keydown", (event) => {
  if (
    modalWrapper.classList.contains("modalActive") &&
    event.key === "Escape"
  ) {
    modalWrapper.classList.remove("modalActive");
  }
});


const accItem = document.getElementsByClassName("accItem");
const accHead = document.getElementsByClassName("accHead");

for (i = 0; i < accHead.length; i++) {
  accHead[i].addEventListener("click", toggle);
}
function toggle() {
  const itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "accItem close";
  }
  if (itemClass == "accItem close") {
    this.parentNode.className = "accItem open";
  }
}
