var bai5NumberEl = document.getElementById("bai5Number");
var bai5Txt = document.getElementById("bai5Txt");

bai5Btn.addEventListener("click", function () {
  var bai5Number = bai5NumberEl.value * 1;
  var result = "";
  for (var i = 1; i <= bai5Number; i++) {
    result += i + " ";
  }
  bai5Txt.innerHTML = "<div>" + result + "</div>";
});
