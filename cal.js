function predictPeriod() {
    var startDate = document.getElementById("start_date").value;
    var cycleLength = parseInt(document.getElementById("cycle_length").value);
    var periodLength = parseInt(document.getElementById("period_length").value);

    if (!startDate || !cycleLength || !periodLength) {
        alert("Please fill in all fields.");
        return;
    }

    var startDateObj = new Date(startDate);
    var nextPeriodDateObj = new Date(startDateObj.getTime() + cycleLength * 24 * 60 * 60 * 1000);
    var nextPeriodDateString = nextPeriodDateObj.toISOString().split('T')[0];

    document.getElementById("next_period_date").innerHTML = "Your predicted next period date is: " + nextPeriodDateString;
}