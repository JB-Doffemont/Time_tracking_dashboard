// function to get the data from the json file

async function loadData() {
  const response = await fetch("./js/data.json");
  const data = await response.json();
  console.log(data);
}
loadData();
