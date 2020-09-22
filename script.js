// waiting for the dom to be fully loaded
$(document).ready(function() {
    // once the document is loaded listen for "savebtn" clicks
    $(".saveBtn").on("click", function() {
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, value);
      // grabing the values of descriptions and the time saving them to local storage.
    });
    function updateHours() {
        // checking the current hour and if we are past the current hour if we are past the hour it blocks the hour.
      var currentHour = moment().hours();
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
    updateHours();
    // Local storage for each of the hours availible so we can pull the saved data.
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
    // display current day on page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });
  