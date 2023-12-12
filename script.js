var DateElement = $('#currentDay');

var today = dayjs().format('dddd DD[,] MMMM YYYY');
DateElement.text(today);

// creating timeblocks for standard business hours
for (let i = 9; i <= 17; i++) {
  let rowEL = $('<div class="row">');

  let timeblockEl = $('<div class="col-sm-12 col-lg-12 time-block">');
  timeblockEl.append(`<p>${i}:00</p>`);
  let textArea = $('<textarea>');
  //let textarea = $("<textarea>").attr("id", `hour-${i}`);

  

  
  //timeblockDiv.append(`<i class="fa-solid fa-floppy-disk"></i>`);

  
  
  timeblockEl.append(textArea);

  let saveBtn = $('<button class = "saveBtn"></button');

  saveBtn.append('<i class="material-icons"> save </i>');

  timeblockEl.append(saveBtn)

  rowEL.append(timeblockEl);

  $(".container").append(rowEL);

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