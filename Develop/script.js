// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

let currentDay;
const today = Date.parse(new Date());
currentDay = today;
console.log(today);

/*
<section class="row">
    <div class="col-md-4">
    8:00am
    </div>
    <div class="col-md-5">
        <input type="text" class="input" id="8am">
        </div>
    <div class="col-md-3">
        <button class="save-btn" date-time="8am" id="save">Save</button>
        </div>
</section>
*/

let container = $('.container')
let time;
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