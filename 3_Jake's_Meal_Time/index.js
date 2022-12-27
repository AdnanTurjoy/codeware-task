function convertedToMinutes(timeStr) {
    
    let [time,formet]=timeStr.split(" ")
    let [hour,minute]=time.split(":")

    if (formet === 'am' && hour === 12) hour -= 12;
    if (formet === 'pm' && hour < 12) hour += 12;
    return hour * 60 + Number(minute);
}

function minutesToHoursAndMinutes(totalMinutes) {
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    return [ hours, minutes]
}

function timeToEat(timeStr) {
    let currentTime = convertedToMinutes(timeStr);
 
    let mealTimes = ['7:00 a.m', '12:00 p.m.', '7:00 p.m.'].map((t)=>convertedToMinutes(t));
    
    let nextMealTime = mealTimes.find(mealTime => mealTime >= currentTime);

    let timeToNextMealMinutes = nextMealTime - currentTime;
    return minutesToHoursAndMinutes(timeToNextMealMinutes);
} 

console.log(timeToEat("2:00 a.m."));
console.log(timeToEat("5:50 p.m."));
