//Create all time slots in html
//use QuerySelectorAll to run a for loop through each table section
// Use an if loop to determine wether the current hour is the same, less than or more than the hour indicated on the time block
// Use jquery to change the color of the background of each table element

var timeBlocks = $('.time-block');
var saveButton = $('.saveBtn');

// saveButton.on('click',function(){
//   console.log(this);
//   //need to save text in text area associated with the button clicked to local storage
//   var task = $(this).prev().value;
  
//   console.log(task);
//   var storageName = $(this).parent().attr('id');
//   localStorage.setItem(storageName, task); 
// })

function setBlocks(){
  var hour = dayjs().hour();
  console.log(hour);
  //loop through time blocks and compare hour with the id hour displayed.
  //Set appropriate class according to hour 
  for(var i = 0; i < timeBlocks.length; i++){
    //Extract Id
    
    var id = $(timeBlocks[i]).attr('id');
    
    //Pull number from id string
    var idTime = (id.match(/(\d+)/));
    idTime = idTime[0];
    console.log(idTime);

    //create loop comparing idTime and hour
    if (idTime < hour){
      $(timeBlocks[i]).removeClass('present');
      $(timeBlocks[i]).removeClass('future');
      $(timeBlocks[i]).addClass('past');
    }
    else if (idTime == hour){
      $(timeBlocks[i]).removeClass('future');
      $(timeBlocks[i]).removeClass('past');
      $(timeBlocks[i]).addClass('present');
    }
    else{
      $(timeBlocks[i]).removeClass('past');
      $(timeBlocks[i]).removeClass('present');
      $(timeBlocks[i]).addClass('future');
    }
  }
}
//Create a function to update the past, present, future, tags of each time block on a set interval
function timer() {
  
  // TODO: Use the `setInterval()` method to call a function to be executed every 60000 milliseconds (Every minute)
  var timeInterval = setInterval(function () {
   setBlocks()
    // if(timeLeft === 0) {
    //   // Stops execution of action at set interval
    //   clearInterval(timeInterval);
   
    // }
  }, 60000);
}

//setBlocks function defined seperately so it is called immediately and then on an interval after first run
setBlocks();
timer();
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
 
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  saveButton.on('click',function(){
    console.log(this);
    //need to save text in text area associated with the button clicked to local storage
    var task = $(this).prev().value;
    
    console.log(task);
    var storageName = $(this).parent().attr('id');
    localStorage.setItem(storageName, task); 
  })


   
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  





  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  for (var i = 0; i < timeBlocks.length; i++) {
    var previousStorage = $(timeBlocks[i]).attr('id');
    previousStorage = localStorage.getItem(previousStorage);
    $(timeBlocks[i]).children[1].text(previousStorage);
  }

  // TODO: Add code to display the current date in the header of the page.
   var date = dayjs().format('dddd M/D/YYYY');
  $('#currentDay').text(date);
});
