export function add(date, diff) {

    let formatDate = new Date(date);
    let newDiff = diff.slice(0, -1);
    let diffNum = parseInt(newDiff);

    let seconds = formatDate.getSeconds();
    let minutes = formatDate.getMinutes();
    let hours = formatDate.getHours();
    let days = formatDate.getDate();
    // let weeks = formatDate.getWeek();
    let months = formatDate.getMonth();
    let years = formatDate.getFullYear();

    if (diff.includes('s')) {
        formatDate.setSeconds(seconds + diffNum);
    }

    if (diff.includes('m')) {
        formatDate.setMinutes(minutes + diffNum);
    }
    
    if (diff.includes('h')) {
        formatDate.setHours(hours + diffNum);
    }
    
    if(diff.includes('d')) {
        formatDate.setDate(days + diffNum);
    }
    
    // if(diff.includes('w')) {
    //     weeks = date.getWeek() + diffNum
    // }

    // if(diff.includes('m')) {
    //     months = date.getMonth() + diffNum
    // }
    
    // if(diff.includes('y')) {
    //     years = date.getFullYear() + diffNum
    // }

    return 'The new date is ' + formatDate;
};