function displayDate() {
  n = new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  document.getElementById("datetime").innerHTML = m + "/" + d + "/" + y;
}
