let userName = prompt("Lütfen adınızı girin:");
document.getElementById("myName").innerHTML = userName;

function showTime() {
  const today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let day = today.getDay();

  const dayNames = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  let time = hour + ":" + minute + ":" + second + " " + dayNames[day];
  document.getElementById("myClock").innerHTML = time;
  setTimeout(showTime, 1000);
}

showTime(); // Fonksiyonu başlat