var i = 1;
var sum = 0;

while (sum < 10000) {
  sum += i;
  i++;
}

var bai1Txt = document.getElementById("bai1Txt");

bai1Btn.addEventListener("click", function () {
  bai1Txt.innerHTML =
    "<p> Số nguyên dương n là: " +
    (i - 1) +
    "</p>" +
    "<p> Tổng là: " +
    sum +
    "</p>";
});
