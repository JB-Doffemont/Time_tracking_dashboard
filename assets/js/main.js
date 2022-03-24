document.addEventListener("DOMContentLoaded", () => {
  // function async to get data from the json file
  async function loadObjJson() {
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
    const currentHoursPlay = document.getElementById("currentHoursPlay");
    const currentHoursSelfcare = document.getElementById(
      "currentHoursSelfcare"
    );
    const currentHoursSocial = document.getElementById("currentHoursSocial");
    const currentHoursStudy = document.getElementById("currentHoursStudy");
    const currentHoursExercise = document.getElementById(
      "currentHoursExercise"
    );
    const previousHoursWork = document.getElementById("previousHoursWork");
    const previousHoursPlay = document.getElementById("previousHoursPlay");
    const previousHoursSelfcare = document.getElementById(
      "previousHoursSelfcare"
    );
    const previousHoursSocial = document.getElementById("previousHoursSocial");
    const previousHoursStudy = document.getElementById("previousHoursStudy");
    const previousHoursExercise = document.getElementById(
      "previousHoursExercise"
    );

    function displayTitle() {
      workTitle.innerHTML = "<p>" + `${data[0].title}` + "</p>";
      playTitle.innerHTML = "<p>" + `${data[1].title}` + "</p>";
      studyTitle.innerHTML = "<p>" + `${data[2].title}` + "</p>";
      exerciseTitle.innerHTML = "<p>" + `${data[3].title}` + "</p>";
      socialTitle.innerHTML = "<p>" + `${data[4].title}` + "</p>";
      selfcareTitle.innerHTML = "<p>" + `${data[5].title}` + "</p>";
    }
    displayTitle();
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
      currentHoursWork.innerHTML =
        `${data[0].timeframes.daily.current}` + "hrs";
      currentHoursPlay.innerHTML =
        `${data[1].timeframes.daily.current}` + "hrs";
      currentHoursStudy.innerHTML =
        `${data[2].timeframes.daily.current}` + "hrs";
      currentHoursExercise.innerHTML =
        `${data[3].timeframes.daily.current}` + "hrs";
      currentHoursSocial.innerHTML =
        `${data[4].timeframes.daily.current}` + "hrs";
      currentHoursSelfcare.innerHTML =
        `${data[5].timeframes.daily.current}` + "hrs";

      previousHoursWork.innerHTML =
        "Yesterday - " + `${data[0].timeframes.daily.previous}` + " hrs";
      previousHoursPlay.innerHTML =
        "Yesterday - " + `${data[1].timeframes.daily.previous}` + " hrs";
      previousHoursStudy.innerHTML =
        "Yesterday - " + `${data[2].timeframes.daily.previous}` + " hrs";
      previousHoursExercise.innerHTML =
        "Yesterday - " + `${data[3].timeframes.daily.previous}` + " hrs";
      previousHoursSocial.innerHTML =
        "Yesterday - " + `${data[4].timeframes.daily.previous}` + " hrs";
      previousHoursSelfcare.innerHTML =
        "Yesterday - " + `${data[5].timeframes.daily.previous}` + " hrs";
    }

    function loadWeekData() {
      currentHoursWork.innerHTML =
        `${data[0].timeframes.weekly.current}` + "hrs";
      currentHoursPlay.innerHTML =
        `${data[1].timeframes.weekly.current}` + "hrs";
      currentHoursStudy.innerHTML =
        `${data[2].timeframes.weekly.current}` + "hrs";
      currentHoursExercise.innerHTML =
        `${data[3].timeframes.weekly.current}` + "hrs";
      currentHoursSocial.innerHTML =
        `${data[4].timeframes.weekly.current}` + "hrs";
      currentHoursSelfcare.innerHTML =
        `${data[5].timeframes.weekly.current}` + "hrs";

      previousHoursWork.innerHTML =
        "Yesterday - " + `${data[0].timeframes.weekly.previous}` + " hrs";
      previousHoursPlay.innerHTML =
        "Yesterday - " + `${data[1].timeframes.weekly.previous}` + " hrs";
      previousHoursStudy.innerHTML =
        "Yesterday - " + `${data[2].timeframes.weekly.previous}` + " hrs";
      previousHoursExercise.innerHTML =
        "Yesterday - " + `${data[3].timeframes.weekly.previous}` + " hrs";
      previousHoursSocial.innerHTML =
        "Yesterday - " + `${data[4].timeframes.weekly.previous}` + " hrs";
      previousHoursSelfcare.innerHTML =
        "Yesterday - " + `${data[5].timeframes.weekly.previous}` + " hrs";
    }

    function loadMonthData() {
      currentHoursWork.innerHTML =
        `${data[0].timeframes.monthly.current}` + "hrs";
      currentHoursPlay.innerHTML =
        `${data[1].timeframes.monthly.current}` + "hrs";
      currentHoursStudy.innerHTML =
        `${data[2].timeframes.monthly.current}` + "hrs";
      currentHoursExercise.innerHTML =
        `${data[3].timeframes.monthly.current}` + "hrs";
      currentHoursSocial.innerHTML =
        `${data[4].timeframes.monthly.current}` + "hrs";
      currentHoursSelfcare.innerHTML =
        `${data[5].timeframes.monthly.current}` + "hrs";

      previousHoursWork.innerHTML =
        "Yesterday - " + `${data[0].timeframes.monthly.previous}` + " hrs";
      previousHoursPlay.innerHTML =
        "Yesterday - " + `${data[1].timeframes.monthly.previous}` + " hrs";
      previousHoursStudy.innerHTML =
        "Yesterday - " + `${data[2].timeframes.monthly.previous}` + " hrs";
      previousHoursExercise.innerHTML =
        "Yesterday - " + `${data[3].timeframes.monthly.previous}` + " hrs";
      previousHoursSocial.innerHTML =
        "Yesterday - " + `${data[4].timeframes.monthly.previous}` + " hrs";
      previousHoursSelfcare.innerHTML =
        "Yesterday - " + `${data[5].timeframes.monthly.previous}` + " hrs";
    }
  }
  loadObjJson();
});
