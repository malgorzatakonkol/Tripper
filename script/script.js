$(function() {

    //tworzenie dwóch divów

    setTimeout(function () {
        $('.pages > div').hide();
    },100)
    console.log("działa");

    const plannerButton = $(".planner");
    const exchangeButton = $(".exchange");

    const buttons = $(".menu > div");

    buttons.on("click", function () {
        $('.pages > div').hide();
        var buttonId = $(this).attr("class");
        var containerId = "#" + buttonId + "Container";
        $(".banner").hide();
        $(containerId).show()
    });

    // http://api.nbp.pl/api/exchangerates/tables/A/?format=json
    // symbol nazwa waluty kurs
});
