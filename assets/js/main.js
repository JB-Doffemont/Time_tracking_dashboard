document.addEventListener("DOMContentLoaded", () => {
  // function async to get data from the json file
  async function loadData() {
    const response = await fetch("./assets/js/data.json");
    const data = await response.json();
    console.log(data);

    // Call elements from the DOM
    const exerciseTitle = document.getElementById("exercise");
    const workTitle = document.getElementById("work");
    const studyTitle = document.getElementById("study");
    const selfcareTitle = document.getElementById("selfcare");
    const playTitle = document.getElementById("play");
    const socialTitle = document.getElementById("social");
    const currentHoursWork = document.getElementById("currentHoursWork");
    const currentHourPlay = document.getElementById("currentHoursPlay");
    const currentHourSelcare = document.getElementById("currentHoursSelfcare");
    const currentHourSocial = document.getElementById("currentHoursSocial");
    const currentHourStudy = document.getElementById("currentHoursStudy");
    const currentHourExercise = document.getElementById("currentHoursExercise");
    const previousHoursWork = document.getElementById("previousHoursWork");
    const previousHourPlay = document.getElementById("previousHoursPlay");
    const previousHourSelcare = document.getElementById(
      "previousHoursSelfcare"
    );
    const previousHourSocial = document.getElementById("previousHoursSocial");
    const previousHourStudy = document.getElementById("previousHoursStudy");
    const previousHourExercise = document.getElementById(
      "previousHoursExercise"
    );

    function displayTitle() {
      workTitle.innerHTML = data[0].title;
      playTitle.innerHTML = data[1].title;
      studyTitle.innerHTML = data[2].title;
      exerciseTitle.innerHTML = data[3].title;
      socialTitle.innerHTML = data[4].title;
      selfcareTitle.innerHTML = data[5].title;
    }
    displayTitle();
    // Get data on click depending on period
    document.querySelectorAll(".main__infosHeader").forEach((element) => {
      element.addEventListener("click", () => {
        if (element.classList.contains("day")) {
          console.log("day");
          loadDayData();
        } else if (element.classList.contains("week")) {
          console.log("week");
        } else if (element.classList.contains("month")) {
          console.log("month");
        }
      });
    });

    function loadDayData() {
      currentHoursWork.innerText = data[1].timeframes.daily.current;
    }
    loadDayData();
  }

  loadData();
});
