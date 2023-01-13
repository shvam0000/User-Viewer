const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const monthName = monthNames[today.getMonth()];
const date = today.getDate();
const hour = today.getHours();
const min = today.getMinutes();

// console.log('Year - ', year);
// console.log('month - ', month);
// console.log('date - ', date);
// console.log('hour - ', hour);
// console.log('min - ', min);
// console.log('monthName - ', monthName);

export const lastLoginDate = `${monthName} ${date}, ${year}`;
export const lastLoginTime = `${hour}:${min}`;
export const lastLogin = `${lastLoginDate} at ${lastLoginTime}`;
