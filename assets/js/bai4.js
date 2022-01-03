var bai4Txt = document.getElementById("bai4Txt");

bai4Btn.addEventListener("click", function () {
  result = "";
  for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      result =
        result +
        "<div class='text-white bg-danger w-25'>" +
        "Đây là thẻ div chẵn: " +
        i +
        "</div>";
    }
    if (i % 2 != 0) {
      result =
        result +
        "<div class='text-white bg-primary w-25'>" +
        "Đây là thẻ div lẻ: " +
        i +
        "</div>";
    }
  }
  bai4Txt.innerHTML = result;
});
