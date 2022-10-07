//set up for current date

$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
//console.log($("#currentDate"));

/*debugger;*/ //helps go through each line to look for problems

for (let hour = 9; hour <= 17; hour++) {
  //Create timeblocks divs, text box and button
  let rowBox = document.createElement("div");
  let timeBox = document.createElement("div");
  let inputBox = document.createElement("input");
  let saveBtn = document.createElement("button");

  //classes to allow css changes
  rowBox.classList.add("rowBox");
  saveBtn.classList.add("saveBox");
  inputBox.classList.add("inputBox");
  timeBox.classList.add("timeBox");

  //Adding children to the parent container
  $(".container").append(rowBox);

  //Calendar Start Time
  let startTime = moment()
    .set({ hour: hour, minute: 0, seconds: 0 })
    .format("LT");
  /*console.log(startTime);*/
 
  // adding text to the timeblock rows
  timeBox.innerText = startTime;
  saveBtn.innerText = "Save";
  inputBox.value = getTask(hour);

  //add blocks to the rowbox
  $(rowBox).append(timeBox);
  $(rowBox).append(inputBox);
  $(rowBox).append(saveBtn);

  //Make Save button save hourly task

 $(saveBtn).click(function (event) {
   event.preventDefault();
   console.log(inputBox.value);
   saveTask(inputBox.value, hour);
  });
}

//saves the task to local storage
function saveTask(input, hour) {
   localStorage.setItem("tasks" + hour, JSON.stringify(input));
 }
 //reads from local storage and gives the result
 function getTask(hour) {
   return JSON.parse (localStorage.getItem("tasks" + hour));
 }

//get current hour??????????????
/*var time = parseInt(currentDateTime.format("h"));
console.log(time)*/