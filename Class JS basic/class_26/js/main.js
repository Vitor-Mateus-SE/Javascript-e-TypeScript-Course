/*function script() {
  const write = document.querySelector(".container");
  const dateToday = new Date();
  const day = dateToday.getDate();
  const year = dateToday.getFullYear();
  const hour = dateToday.getHours();
  const minutes = dateToday.getMinutes();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function zeroLeft(num) {
    return num >= 10 ? num : `0${num}`;
  }
  function createData() {
    const month = months[dateToday.getMonth()];
    const dayOfWeekend = days[dateToday.getDay()];
    return (
      `<strong>${dayOfWeekend}, ${day} of ${month} of ${year},` +
      ` ${zeroLeft(dateToday.getHours())}:${zeroLeft(
        dateToday.getMinutes()
      )}</strong> `
    );
  }

  write.innerHTML = createData();
}
script();
*/
const write = document.querySelector(".container");
const dateToday = new Date();
write.innerHTML = "<strong>" + dateToday.toLocaleString("pt-br", {
  dateStyle: "full",
  timeStyle: "short",
}) + "</strong>";
