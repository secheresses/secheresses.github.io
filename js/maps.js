(function() {
  var seasonSelect = document.getElementById("saisons");

  function getHorizon() {
    var links = document.querySelectorAll("#horizon li a");
    for (var i in links) {
      if ($(links[i]).hasClass("active")) {
        return $(links[i]).data("horizon");
      }
    }
  }

  function getSeason() {
    return seasonSelect.options[seasonSelect.selectedIndex].value; 
  }

  var sswi = SSWI(
    "carte",
    ["transparent", "#e08f17", "#ef0d1f", "#000000"],
    "spinner",
    "/data/"
  );

  function update() {
    return sswi.update(getHorizon(), getSeason());
  }
  $("#horizon li a").click(update);
  seasonSelect.addEventListener("change", update);
  update(); 
})();
