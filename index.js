function add(date, diff) {
    const date = new Date();

    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let days = 0;

    if (diff.includes('s')) {
        seconds = date.getSeconds() + diff;
    } else if (diff.includes('m')) {
        minutes = date.getMinutes() + diff;
    } else if (diff.includes('h')) {
        hours = date.getHours() + diff;
    } else if(diff.includes('d')) {
        days = date.getDay() + diff
    };

    return 'The new date is ' + days + hours + minutes + seconds;
};