
//set up for current date

$("#currentDay").text(moment().format("dddd, MMM Do YYYY"));
//console.log($("#currentDate"));

/*debugger;*/  //helps go through each line to look for problems

for(var hour = 9; hour <= 17; hour++){
   //Create timeblocks divs, text box and button
   let rowBox = document.createElement("div");
   let timeBox = document.createElement("div");
   let inputBox = document.createElement("input");
   let saveBox = document.createElement("button" );
   //class to allow css changes
   rowBox.classList.add("rowBox");

   //Adding children to the parent container
   $(".container").append(rowBox);

   //Calendar Start Time
   let startTime = moment().set({'hour': hour, 'minute': 0, 'seconds': 0}).format('LT');
   /*console.log(startTime);*/

   timeBox.innerText = startTime
   saveBox.innerText = "Save"

   //add to the rowbox
   $(rowBox).append(timeBox);
   $(rowBox).append(inputBox);
   $(rowBox).append(saveBox);
  
   //add button to saveBox


   function saveScore(score) {
   let currentScores = getScores();
   currentScores.push(score);
   localStorage.setItem("savedScores", JSON.stringify(currentScores)); //turns it into a string
 }
}
