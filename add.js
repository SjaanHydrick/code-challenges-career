export function add(date, diff) {

    let formatDate = new Date(date);
    let newDiff = diff.slice(0, -1);
    let diffNum = parseInt(newDiff);

    let seconds = formatDate.getSeconds();
    let minutes = formatDate.getMinutes();
    let hours = formatDate.getHours();
    let days = formatDate.getDate();
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
    
    if (diff.includes('d')) {
        formatDate.setDate(days + diffNum);
    }
    
    if(diff.includes('w')) {
        formatDate.setDate(days + (diffNum * 7))
    }

    if(diff.includes('M')) {
        formatDate.setMonth(months + diffNum)
    }
    
    if(diff.includes('y')) {
        formatDate.setFullYear(years + diffNum)
    }

    return 'The new date is ' + formatDate;
};