var bai5NumberEl = document.getElementById("bai5Number");
var bai5Txt = document.getElementById("bai5Txt");

function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

bai5Btn.addEventListener("click", function () {
  var bai5Number = bai5NumberEl.value * 1;
  var result = "";

  for (var i = 0; i <= bai5Number; i++) {
    if (isPrime(i)) {
      result += i + " ";
    }
  }

  bai5Txt.innerHTML = "<div>" + result + "</div>";
});
