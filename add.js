export function add(date, diff) {

    let formatDate = new Date(date);
    let newDiff = diff.slice(0, -1);
    let diffNum = parseInt(newDiff);

    let seconds = formatDate.getSeconds();
    let minutes = formatDate.getMinutes();
    // let hours = 0;
    // let days = 0;
    // let weeks = 0;
    // let months = 0;
    // let years = 0;

    if (diff.includes('s')) {
        formatDate.setSeconds(seconds + diffNum);
    }

    if (diff.includes('m')) {
        formatDate.setMinutes(minutes + diffNum);
    }
    
    // if (diff.includes('h')) {
        // newDiff = diff.slice(0, -1);
    //     diffNum = parseInt(diff.slice(0, -1));
    //     hours = date.getHours() + diffNum;
    // }
    
    // if(diff.includes('d')) {
    //     newDiff = diff.slice(0, -1);
    //     diffNum = parseInt(newDiff);
    //     days = date.getDay() + diffNum
    // }
    
    // if(diff.includes('w')) {
    //     newDiff = diff.slice(0, -1);
    //     diffNum = parseInt(newDiff);
    //     weeks = date.getWeek() + diffNum
    // }

    // if(diff.includes('m')) {
    //     newDiff = diff.slice(0, -1);
    //     diffNum = parseInt(newDiff);
    //     months = date.getMonth() + diffNum
    // }
    
    // if(diff.includes('y')) {
    //     newDiff = diff.slice(0, -1);
    //     diffNum = parseInt(newDiff);
    //     years = date.getFullYear() + diffNum
    // }

    return 'The new date is ' + formatDate;
};