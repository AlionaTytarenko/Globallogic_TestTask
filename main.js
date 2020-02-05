function nearestFoundDay (weekTemperatureArray) {
    if (weekTemperatureArray.length != 7) {
        throw new Error('Invalid size of array');
    }
    weekTemperatureArray.forEach(isValidTemperature);

    let averageWeekValue = Math.round(weekTemperatureArray.reduce((sum, current) => sum + current) / 7);
    let minDiff = Infinity;
    let day = 0;
    let nearestFirstFoundDay = 0;
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (let i = 0; i < weekTemperatureArray.length; i++) {
        let diff = Math.abs(averageWeekValue - weekTemperatureArray[i]);
        if (minDiff >= diff) {
            minDiff = diff;
            day = i;
        }
    }
    nearestFirstFoundDay = days[day];
    alert (`Target day: ${nearestFirstFoundDay}`);
    return days[day];
}

function isValidTemperature (value) {
     if (value  === null) {
         throw new Error('Invalid temperature')
     }
     let num = +value;
     if (!isFinite(num) || isNaN(num)) {
         throw new Error('Invalid temperature')
     }
 }
