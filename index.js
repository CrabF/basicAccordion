const details = document.querySelectorAll("details");
const summarys = document.querySelectorAll("summary");

summarys.forEach((summary) => {
  summary.addEventListener("click", () => {
    const img = summary.querySelector("img");
    const detail = summary.closest("details");
    if (detail.open) {
      img.src = "./assets/images/icon-minus.svg";
      img.alt = "minus";
    } else {
      details.forEach((detail) => {
        detail.open = false;
        const img = detail.querySelector("img");
        img.src = "./assets/images/icon-minus.svg";
        img.alt = "minus";
      });
      img.src = "./assets/images/icon-plus.svg";
      img.alt = "plus";
    }
  });
});
