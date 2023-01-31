//Create all time slots in html
//use $ to select and run a for loop through each table section
// Use an if loop to determine wether the current hour is the same, less than or more than the hour indicated on the time block
// Use jquery to change the color of the background of each table element


//wraps all code in a jquery call so code is ran after html is loaded
$(function () {
  var timeBlocks = $('.time-block');
  var saveButton = $('.saveBtn');
 
  //Updates color of each timeblock depending on hour provided by day.js
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
 

  //call setBlocks function so it auto updates every minute
  function timer() {
    
    // function to be executed every 60000 milliseconds (Every minute)
    var timeInterval = setInterval(function () {
     setBlocks()
     
    }, 60000);
  }
  
  //setBlocks function defined seperately so it is called immediately and then on an interval after first run
  setBlocks();
  timer();


  //takes any inputs and saves in local data when save button is clicked
  saveButton.on('click',function(){
    console.log(this);
    //need to save text in text area associated with the button clicked to local storage
    var task = $(this).prev()[0].value;
    
    console.log(task);
    var storageName = $(this).parent().attr('id');
    localStorage.setItem(storageName, task); 
  })


   


  
  //Take data from local storage and print into appropriate text boxes
  for (var i = 0; i < timeBlocks.length; i++) {
    var previousStorage = $(timeBlocks[i]).attr('id');
   
    previousStorage = localStorage.getItem(previousStorage);
  
    var textarea = timeBlocks[i].children[1];
    //console.log(textarea);
    $(textarea).text(previousStorage);
  }

  //Add date to header of page
   var date = dayjs().format('dddd M/D/YYYY');
  $('#currentDay').text(date);
});
