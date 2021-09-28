function FetchJoke() {

    fetch('https://icanhazdadjoke.com/slack')
        .then((response) => response.json())
        .then(
            (responseJson) => {
                var LJoke = responseJson.attachments[0].text;
                var LDomJokeText = document.getElementById('jokeText');

                LDomJokeText.innerHTML = LJoke;
            });
}

FetchJoke();