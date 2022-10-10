var today = moment();


$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));


function hourTracker() {
    var currentHour = moment().format("H");
    $(".time-block").each(function() {
        var eventHour = parseInt($(this).attr("id").split("hour")[1]);

        if(eventHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if(eventHour == currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
hourTracker();


$(".saveBtn").on("click", function () {

    var textInput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, textInput);
       
});

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

