export const days = () => {
  console.log('calculating day data');
  let today = new Date();
  let todaysDate = today.getDate();
  let advancedNotice = 2;
  let startDate = todaysDate + advancedNotice;
  let next7Days = Array.from(new Array(7), () => startDate++);
  let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return next7Days.map((number) => {
    let dayOfWeekNumber = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      number
    ).getDay();
    let text = daysOfWeek[dayOfWeekNumber];
    return { number, text };
  });
};
