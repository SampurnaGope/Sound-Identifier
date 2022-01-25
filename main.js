function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);

}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;


        document.getElementById("result_label").innerHTML = ' I can hear - ' +
            results[0].label;
        document.getElementById("result_confidence").innerHTML = ' Accuracy- ' +
            (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" +
            random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" +
            random_number_r + "," + random_number_g + "," + random_number_r + ")";


        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');

        if (results[0].label == "Barking") {
            img.src = 'data:image/jpeg;base64,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';
            dog = dog + 1;
        } else if (results[0].label == "Meowing") {
            img.src = 'data:image/jpeg;base64,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';
            cat = cat + 1;
        } else {
            img.src = 'listen.gif';
        }
    }
}