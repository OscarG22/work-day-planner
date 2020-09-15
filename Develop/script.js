let currentDay;
const today = Date.parse(new Date());
currentDay = today;
console.log(today);

$(document).ready(function () {

    $('.save-btn').on("click", function () {

        alert('saved');

    });
})

let container = $('.container')
let time;
//Make repeatable
time = '8:00am'
let newRow = $('<section>').addClass('row');
let hourCell = $('<div>').addClass('col-md-4');
hourCell.text(time);
newRow.append(hourCell);

let inputCell = $('<div>').addClass('col-md-5');
let input = $('<input type = "text">');
input.addClass('input');
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

// onclick event to save user input to local storage
$('.rowBttn').on('click', function () {
    let timeOfDay = $(this).parent().attr('id');
    let textContent = $('input').val().trim();

    localStorage.setItem(timeOfDay, textContent);
    console.log(timeOfDay, textContent);
});

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