// jQuery ready
$(document).ready(function () {

//  Create Global Variables
const m = moment();

//  Display Current Date & Time
$('#currentDay').text(m.format('MMMM Do YYYY, h:mm a'));
//console.log(m.format('MMMM Do YYYY'));

// Color Changing hours to past/present/future
function colorChange() {
    var currentTime = moment();
    console.log("Current Time" + currentTime);

    $(".time-block").each(function() {
        var timeBlock = m.hour(parseInt($(this).attr("hour")));
        var description = localStorage.getItem($(this).attr('hour'));

        $(this).children('textarea').val(description);

        if (currentTime > timeBlock) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTime < timeBlock) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        } else {
            $(this).removeClass("future");
            $(this).addClass("present");
            $(this).removeClass("past");
        }
        
console.log('here is hour:'+ " "+ currentTime);
    });
}
    colorChange();

//  Save User input to local storage via SaveBTN

    $(".saveBtn").on('click', function() {
        event.preventDefault();

        var hour = $(this).parent().attr('hour');
        var description = $(this).prev().val();

        console.log(description);
        localStorage.setItem(hour, description);
        // getting the value of the textarea
        // save it in localstorage
    })
});