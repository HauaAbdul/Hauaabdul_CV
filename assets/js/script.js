// Function to update the current time every second
function updateTime() {
  const now = new Date();
  const formatted = now.toLocaleString();
  document.getElementById("currentTime").innerText = formatted;
}

// Function that shows an alert when user clicks the LinkedIn button
function showMessage() {
  alert("Opening Haua Abdul Ambasse's LinkedIn Profile!");
}

// Keep updating the time
setInterval(updateTime, 1000);
