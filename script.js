var DateElement = $('#currentDay');

var today = dayjs().format('dddd DD[,] MMMM YYYY');
DateElement.text(today);

// creating timeblocks for standard business hours
for (let i = 9; i <= 17; i++) {
  let rowEL = $('<div class="row">');

  let timeblockDiv = $('<div class="col-sm-12 col-lg-12 time-block">');
  timeblockDiv.append(`<p>${i}:00</p>`);
  let textArea = $('<textarea>');
  //let textarea = $("<textarea>").attr("id", `hour-${i}`);

  

  
  //timeblockDiv.append(`<i class=" saveBtn fa-solid fa-floppy-disk"></i>`);

  
  
  timeblockDiv.append(textArea);

  //timeblockDiv.append('<i class="fa-solid fa-floppy-disk"></i>');

  rowEL.append(timeblockDiv);

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
  
  

}