$("#submit").on("click", function (event) {
    event.preventDefault();
    var city = $("#searchCity").val();
    console.log(city);
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=imperial" + "&cnt=3" + "&APPID=166a433c57516f51dfab1f7edaed8413";
    // ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        $("#location").text("City: " + response.city.name);
        $("#temp").text("Day Temperature: " + response.list[0].temp.day + " degrees");
    })
});

function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = function (event) {
        // console.log(event);
        document.getElementById('speechToText').value = event.results[0][0].transcript;
    }
    recognition.start();
}