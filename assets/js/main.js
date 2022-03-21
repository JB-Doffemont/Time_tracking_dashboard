// function async to get data from the json file
async function loadData() {
  const response = await fetch("./assets/js/data.json");
  const data = await response.json();
  console.log(data);
}
loadData();

document.addEventListener("DOMContentLoaded", () => {
  // Call elements from the DOM
  const period = document.getElementsByClassName("main__infosHeader");

  document.querySelectorAll(".main__infosHeader").forEach((element) => {
    element.addEventListener("click", () => {
      if (element.classList.contains("day")) {
        console.log("day");
      } else if (element.classList.contains("week")) {
        console.log("week");
      } else if (element.classList.contains("month")) {
        console.log("month");
      }
    });
  });
});
