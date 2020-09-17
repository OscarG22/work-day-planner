let currentDay;
const today = Date.parse(new Date());
currentDay = today;
console.log(today);
let currentTime = moment().format('dddd, MMM Do YYYY, HH:mm a');
$('#currentDay').text(currentTime);
let currentHour = moment().format('HH');
console.log(currentHour);
let container = $('.container');

// array of times
const arr = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
const numTime = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
arr.forEach((Element, index) => {
    console.log(Element)
    let time;
    
    //Make repeatable
    time = Element
    let newRow = $('<section>').addClass('row');
    let hourCell = $('<div>').addClass('col-md-4');
    hourCell.text(time);
    newRow.append(hourCell);
    let timeState = "input"
    if (currentHour > numTime[index]) {
        timeState = timeState + " past"
    } else if (currentHour < numTime[index]) {
        timeState = timeState + " future"
    } else {
        timeState = timeState + " present"
    }

    let inputCell = $('<div>').addClass('col-md-5');
    let input = $('<input type = "text">');
    input.addClass(timeState);
    input.attr('id', time);
    inputCell.append(input);
    newRow.append(inputCell);

    let saveBtnCell = $('<div>').addClass('col-md-3');
    let saveBtn = $('<button>').addClass('save-btn');
    saveBtn.attr('date-time', time);
    saveBtn.text('save');
    saveBtnCell.append(saveBtn);
    newRow.append(saveBtnCell);

    container.append(newRow);

});

// onclick event to save user input to local storage 
$('.save-btn').on('click', function(){
    let value = $(this).parent().siblings('.textarea').children('textarea').val();
    let time = $(this).attr('date-time');
    localStorage.setItem(time, value);
    // localStorage.setItem('time, value', JSON.stringify(time, value));
    // localStorage.getItem('value, time', JSON.stringify(value, time));
});

$('textarea').each(function(){
    let retrieve = $(this).attr('id');
    let savedInput = localStorage.getItem(retrieve);
    $(this).val(savedInput);
})

// take children and set to parent
$('#8am').children('input').val(localStorage.getItem('8am'));
$('#9am').children('input').val(localStorage.getItem('9am'));
$('#10am').children('input').val(localStorage.getItem('10am'));
$('#11am').children('input').val(localStorage.getItem('11am'));
$('#12pm').children('input').val(localStorage.getItem('12pm'));
$('#1pm').children('input').val(localStorage.getItem('1pm'));
$('#2pm').children('input').val(localStorage.getItem('2pm'));
$('#3pm').children('input').val(localStorage.getItem('3pm'));
$('#4pm').children('input').val(localStorage.getItem('4pm'));
$('#5pm').children('input').val(localStorage.getItem('5pm'));
$('#6pm').children('input').val(localStorage.getItem('6pm'));
$('#7pm').children('input').val(localStorage.getItem('7pm'));
$('#8pm').children('input').val(localStorage.getItem('8pm'));