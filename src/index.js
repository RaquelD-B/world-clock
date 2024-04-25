function updateTime() {
  let losAngelesDateElement = document.querySelector("#los-angeles-date");
  let losAngelesTime = moment.tz("America/Los_Angeles");
  let losAngelesTimeElement = document.querySelector("#los-angeles-time");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}
updateTime();
setInterval(updateTime, 1000);
