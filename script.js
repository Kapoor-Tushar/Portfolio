btn = document.querySelector(".into-about__button");
aboutSection = document.querySelector("#about");
btn.addEventListener("click", function () {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

function handleMouseEvents(event) {
  const tile = event.currentTarget;
  const tileInfo = tile.nextElementSibling;
  if (event.type === "mouseover") {
    tile.classList.add("hidden");
    tileInfo.classList.remove("hidden");
  } else if (event.type === "mouseout") {
    tile.classList.remove("hidden");
    tileInfo.classList.add("hidden");
  }
}
document.querySelectorAll(".tile").forEach((tile) => {
  tile.addEventListener("mouseover", handleMouseEvents);
  tile.addEventListener("mouseout", handleMouseEvents);
});
