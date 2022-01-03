var numberXEl = document.getElementById("numberX");
var numberNEl = document.getElementById("numberN");
var bai2Txt = document.getElementById("bai2Txt");

bai2Btn.addEventListener("click", function () {
  var numberN = numberNEl.value * 1;
  var numberX = numberXEl.value * 1;

  var result = 0;

  function expoS(numberN, numberX) {
    for (var i = 1; i <= numberN; i++) {
      result += Math.pow(numberX, i);
    }
  }
  expoS(numberN, numberX);

  bai2Txt.innerHTML = "<p>" + result + "</p>";
});
