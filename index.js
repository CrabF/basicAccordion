const faq = document.querySelector(".faq");
const points = document.querySelectorAll(".details");
const summarys = document.querySelectorAll(".summary");

summarys.forEach((item) => {
  item.addEventListener("keydown", (e) => {
    if (e.key === " ") {
      const detail = item.closest(".details");
      closeAnotherPoints(detail);
      const text = item.nextElementSibling;
      text.classList.toggle("hide");
      const img = item.querySelector("img");
      img.classList.toggle("rotated");
      img.src = text.classList.contains("hide")
        ? "./assets/images/icon-plus.svg"
        : "./assets/images/icon-minus.svg";
      img.alt = text.classList.contains("hide") ? "plus" : "minus";
    }
  });
});

faq.addEventListener("click", (e) => {
  const li = e.target.closest(".details");
  if (e.target.closest(".summary")) {
    closeAnotherPoints(li);
    const summaryNode = e.target.closest(".summary");
    const text = summaryNode.nextElementSibling;
    text.classList.toggle("hide");

    const img = summaryNode.querySelector("img");
    img.classList.toggle("rotated");
    img.src = text.classList.contains("hide")
      ? "./assets/images/icon-plus.svg"
      : "./assets/images/icon-minus.svg";
    img.alt = text.classList.contains("hide") ? "plus" : "minus";
  }
});

function closeAnotherPoints(point) {
  points.forEach((item) => {
    if (item != point) {
      const text = item.querySelector(".text");
      const img = item.querySelector("img");
      img.classList.remove("rotated");
      img.src = "./assets/images/icon-plus.svg";
      img.alt = "plus";
      text.classList.add("hide");
    }
  });
}
