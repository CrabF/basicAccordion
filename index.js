const details = document.querySelectorAll("details");

details.forEach((detail) => {
  const summary = detail.querySelector("summary");
  const img = summary.querySelector("img");

  img.src = detail.open
    ? "./assets/images/icon-minus.svg"
    : "./assets/images/icon-plus.svg";
  img.alt = detail.open ? "minus" : "plus";

  summary.addEventListener("click", (e) => {
    e.preventDefault();

    details.forEach((d) => {
      if (d !== detail) {
        d.removeAttribute("open");
        const otherImg = d.querySelector("img");
        otherImg.src = "./assets/images/icon-plus.svg";
        otherImg.alt = "plus";
      }
    });

    if (detail.open) {
      detail.removeAttribute("open");
      img.src = "./assets/images/icon-plus.svg";
      img.alt = "plus";
    } else {
      detail.setAttribute("open", "");
      img.src = "./assets/images/icon-minus.svg";
      img.alt = "minus";
    }
  });
});
