function updateTime() {
  let losAngelesDateElement = document.querySelector("#los-angeles-date");
  let losAngelesTime = moment.tz("America/Los_Angeles");
  let losAngelesTimeElement = document.querySelector("#los-angeles-time");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
  let parisDateElement = document.querySelector("#paris-date");
  let parisTime = moment.tz("Europe/Paris");
  let parisTimeElement = document.querySelector("#paris-time");
  parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY");
  parisTimeElement.innerHTML = `${parisTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  let tokyoDateElement = document.querySelector("#tokyo-date");
  let tokyoTime = moment.tz("Asia/Tokyo");
  let tokyoTimeElement = document.querySelector("#tokyo-time");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}
updateTime();
setInterval(updateTime, 1000);
