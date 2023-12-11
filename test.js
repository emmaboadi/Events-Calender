
$(document).ready(function () {
    // Display current day
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  
    // Create timeblocks
    for (let i = 9; i <= 17; i++) {
      let timeblockDiv = $("<div>").addClass("time-block");
      let textarea = $("<textarea>").attr("id", `hour-${i}`);
      let saveBtn = $("<button>").addClass("saveBtn").text("Save");
  
      timeblockDiv.append(`<p>${i}:00</p>`);
      timeblockDiv.append(textarea);
      timeblockDiv.append(saveBtn);
  
      $(".container").append(timeblockDiv);
  
      // Color code timeblocks based on past, present, and future
      let currentHour = dayjs().hour();
      if (i < currentHour) {
        textarea.addClass("past");
      } else if (i === currentHour) {
        textarea.addClass("present");
      } else {
        textarea.addClass("future");
      }
  
      // Load saved events from local storage
      let savedEvent = localStorage.getItem(`event-${i}`);
      if (savedEvent) {
        textarea.val(savedEvent);
      }
  
      // Save event to local storage when save button is clicked
      saveBtn.click(function () {
        let eventText = textarea.val();
        localStorage.setItem(`event-${i}`, eventText);
      });
    }
  });
  