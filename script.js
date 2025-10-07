(function() {
  var ex1_button = document.getElementById('ex1_button')

  function Cw1() {
    var count = "";
    for (var i = 0; i < 10; i++) {
      count += i;
      count += ", ";
    }
    document.getElementById('ex1_content').innerHTML = `${count}`;
  }

  ex1_button.onclick = Cw1;
})();