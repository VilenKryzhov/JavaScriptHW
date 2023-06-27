let workGrafick = [
    {day: 'Monday', isOpen: true, time: 8.00},
    {day: 'Tuesday', isOpen: false, time: 10.00},
    {day: 'Wednesday', isOpen: true, time: 10.00},
    {day: 'Thursday', isOpen: true, time: 8.00},
    {day: 'Friday', isOpen: true, time: 9.00},
    {day: 'Saturday', isOpen: false, time: 9.00},
    {day: 'Sunday', isOpen: false, time: 9.00}
];

let bookAppoitment = (dayOfWeek) => {
    for (let dayItem of workGrafick) {
        if (dayItem.day === dayOfWeek) {
            if (dayItem.isOpen === true) {
                console.log('Welcome, today we work at ' + dayItem.time + 'pm');
                return;
            }
            if (dayItem.isOpen === false && dayOfWeek === 'Tuesday') {
                console.log('Sorry, we are close but next time we work at Wednasday at ' + dayItem.time + 'pm')
                return;
            }
            if (dayItem.isOpen === false) {
                console.log('Sorry, we work at Monday at 08:00')
                return;
            }
        }
    }
}
bookAppoitment('Tuesday');