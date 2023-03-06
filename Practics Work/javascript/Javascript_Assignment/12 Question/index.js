


// incomplete 
const date = new Date(Date.UTC(2023, 1, 7, 3, 23, 16,738));
console.log(new Intl.DateTimeFormat('en-US').format(date));

console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Australia/Sydney' }).format(date));