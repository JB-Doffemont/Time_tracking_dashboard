document.addEventListener("DOMContentLoaded", async () => {
  //  get data from the json file
  const response = await fetch("./assets/js/data.json");
  const data = await response.json();
  console.log(data);

  // Call elements from the DOM
  const titles = document.querySelectorAll(".title");
  const currentHours = document.querySelectorAll(".currentHours");
  const previousHours = document.querySelectorAll(".previousHours");

  function displayTitle() {
    for (let i = 0; i < data.length; i++) {
      titles[i].innerHTML = "<p>" + `${data[i].title}` + "</p>";
    }
  }
  displayTitle();

  // Display day data by default
  loadDayData();
  // Get data on click depending on period
  document.querySelectorAll(".main__infosHeader").forEach((element) => {
    element.addEventListener("click", () => {
      const activeEl = document.getElementsByClassName("active");
      // loop to remove active class of elements
      for (const activeEls of activeEl) {
        activeEls.classList.remove("active");
      }
      if (element.classList.contains("day")) {
        element.classList.add("active");
        loadDayData();
      } else if (element.classList.contains("week")) {
        element.classList.add("active");
        loadWeekData();
      } else if (element.classList.contains("month")) {
        element.classList.add("active");
        loadMonthData();
      }
    });
  });

  function loadDayData() {
    for (let i = 0; i < data.length; i++) {
      const { daily } = data[i].timeframes;

      currentHours[i].innerHTML = `${daily.current}` + "hrs";
      previousHours[i].innerHTML = `${daily.previous}` + "hrs";
    }
  }

  function loadWeekData() {
    for (let i = 0; i < data.length; i++) {
      const { weekly } = data[i].timeframes;

      currentHours[i].innerHTML = `${weekly.current}` + "hrs";
      previousHours[i].innerHTML = `${weekly.previous}` + "hrs";
    }
  }

  function loadMonthData() {
    for (let i = 0; i < data.length; i++) {
      const { monthly } = data[i].timeframes;

      currentHours[i].innerHTML = `${monthly.current}` + "hrs";
      previousHours[i].innerHTML = `${monthly.previous}` + "hrs";
    }
  }
});
