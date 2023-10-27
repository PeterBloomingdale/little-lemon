const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const timeIn12HourFormat = (hour) => {
    return ((parseInt(hour) % 12) || 12);
}

const populateTimes = (start, end, random, timesArray) => {
    for(let i = start; i < end; i++) {
        if(random() < 0.5) {
            timesArray.push(timeIn12HourFormat(i) + ':00');
        }
        if(random() < 0.5) {
            timesArray.push(timeIn12HourFormat(i) + ':30');
        }
    }
}

/**
 * Fetch available reservation times based on the date.
 * @param {Date} date
 * @returns {Array} Available times for morning, afternoon, and evening.
 */
const fetchAPI = function(date) {
    let times = [];
    let random = seededRandom(date.getDate());

    populateTimes(9, 21, random, times);

    return times;
};

const submitAPI = function(formData) {
    return true;
};

export {fetchAPI, submitAPI};
