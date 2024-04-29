function updateTime() {
  let losAngelesDateElement = document.querySelector("#los-angeles-date");
  if (losAngelesDateElement) {
    let losAngelesTime = moment.tz("America/Los_Angeles");
    let losAngelesTimeElement = document.querySelector("#los-angeles-time");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
    losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    )}`;
  }
  let parisDateElement = document.querySelector("#paris-date");
  if (parisDateElement) {
    let parisTime = moment.tz("Europe/Paris");
    let parisTimeElement = document.querySelector("#paris-time");
    parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY");
    parisTimeElement.innerHTML = `${parisTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    )}`;
  }

  let tokyoDateElement = document.querySelector("#tokyo-date");
  if (tokyoDateElement) {
    let tokyoTime = moment.tz("Asia/Tokyo");
    let tokyoTimeElement = document.querySelector("#tokyo-time");
    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
    tokyoTimeElement.innerHTML = `${tokyoTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    )}`;
  }
}

function displayTime(event) {
  let time = document.querySelector("#city");
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(timeZone);

  time.innerHTML = `
    <div class="container">
          <div class="row">
            <div class="col-6">
              <h2 class="city"> ${cityName} </h2>
              <div class="date">${cityTime.format("MMMM Do, YYYY")} </div>
            </div>
            <div class="col-6">
              <div class="time"> ${cityTime.format(
                "hh:mm:ss [<small>]A[</small>]"
              )}
              </div>
            </div>
          </div>
          <a href="/index.html">Back to all cities</a>
          </div>

 `;
}

updateTime();
setInterval(updateTime, 1000);

let cityElement = document.querySelector("#cities");
cityElement.addEventListener("change", displayTime, 1000);
