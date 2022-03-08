const starWrapper = document.querySelector(".stars");
const stars = document.querySelectorAll(".stars a");
const canvas = document.getElementById("canvas").getContext("2d");
canvas.fillStyle = "#0000FF"


stars.forEach((star, clickedIdx) => {
  star.addEventListener("click", () => {
    starWrapper.classList.add("disabled");
    stars.forEach((otherStar, otherIdx) => {
      if (otherIdx <= clickedIdx) {
        otherStar.classList.add("active");
      }
    });
    console.log(`star of index ${clickedIdx + 1} was clicked`);
    canvas.fillText(`Your Rating: ${clickedIdx + 1}`, 0, 10);
  });
});

