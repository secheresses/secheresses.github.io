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
    "carte-spinner",
    "/data/",
    "carte-legende"
  );

  function update() {
    return sswi.update(getHorizon(), getSeason());
  }
  $("#horizon li a").click(function(e) {
    $("#horizon li a").each(function(i, el) {
      $(el).removeClass("active");
    });
    $(e.target).addClass("active");
    update();
  });
  seasonSelect.addEventListener("change", update);
  update(); 
})();
