(function() {
  const seasonSelect = document.getElementById("saisons");

  const getHorizon = () => {
    const links = document.querySelectorAll("#horizon li a");
    for (let a of links) {
      if ($(a).hasClass("active")) {
        console.log(a);
        return $(a).data("horizon");
      }
    }
  };

  const getSeason = () =>
    seasonSelect.options[seasonSelect.selectedIndex].value; 

  const sswi = SSWI(
    "carte",
    ["transparent", "#e08f17", "#ef0d1f", "#000000"],
    "spinner",
    "/data/"
  );

  const update = () => sswi.update(getHorizon(), getSeason());
  $("#horizon li a").click(update);
  seasonSelect.addEventListener("change", update);
  update(); 
})();
