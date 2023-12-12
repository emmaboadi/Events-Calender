
setInterval(dateTime,1000);
// function to display current date and time 
function dateTime() {
var DateElement = $('#currentDay');
var today = dayjs().format('dddd DD[,] MMMM YYYY [at] hh:mm:ss a');
DateElement.text(today);

}



// creating timeblocks for standard business hours
for (let i = 9; i <= 17; i++) {
  let timeblockEl = $('<div class="row">');

// creating 3 bootstrap columns
  let hourDiv = $('<div class="col">');
  let textareaDiv = $('<div class="col-8">');
  let buttonDiv = $('<div class="col">');


// appending hours to timeblock
  hourDiv.append(`<p class ="hour">${i}:00</p>`);
  timeblockEl.append(hourDiv);

//appending text-area to timeblock
  let textArea = $('<textarea>');
  textareaDiv.append(textArea)
  timeblockEl.append(textareaDiv);

  //appending save button to timeblock

  let saveBtn = $('<button class = "saveBtn"></button');
  saveBtn.append('<i class="material-icons"> save </i>');
  buttonDiv.append(saveBtn)
  timeblockEl.append(buttonDiv);

  
//appending timeblocks to container elements
  $(".container").append(timeblockEl);

  // Colour code of timeblocks
  let currentHour = dayjs().hour();
  if (i < currentHour) {
    textArea.addClass("past");
  } else if (i === currentHour) {
    textArea.addClass("present");
  } else {
    textArea.addClass("future");
  }
  
  let savedEvent = localStorage.getItem(`event-${i}`);
      if (savedEvent) {
        textArea.val(savedEvent);
      }
  
      // Save event to local storage when save button is clicked
      saveBtn.click(function () {
        let eventText = textArea.val();
        localStorage.setItem(`event-${i}`, eventText);
      });
  

}

