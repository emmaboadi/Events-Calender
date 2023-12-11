var DateElement = $('#currentDay');

var today = dayjs().format('dddd DD[,] MMMM YYYY');
DateElement.text(today);