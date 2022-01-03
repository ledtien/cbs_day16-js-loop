var bai3NEl = document.getElementById("bai3N");
var bai3Txt = document.getElementById("bai3Txt");

bai3Btn.addEventListener("click", function () {
  bai3N = bai3NEl.value * 1;
  var result = 1;

  for (var i = 1; i <= bai3N; i++) {
    result = result * i;
  }

  bai3Txt.innerHTML = "<p> " + result + " </p>";
});
