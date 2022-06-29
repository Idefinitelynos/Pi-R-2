//https://teachablemachine.withgoogle.com/models/Q-l8RBt-8/
function startclassification() {
    navigator.mediaDevices.getUserMedia({audio: true})
    taughtmachine=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Q-l8RBt-8/model.json", modelReady)
}
function modelReady() {
    taughtmachine.classify(gotresult)
}
function gotresult(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        document.getElementById("he4r").innerHTML="I can hear-" + results[0].label
        document.getElementById("4ccur4cy").innerHTML="accuracy-" + (results[0].confidence.toFixed(2))*100 + "%"
        r=Math.floor(Math.random() * 255)
        g=Math.floor(Math.random() * 255)
        b=Math.floor(Math.random() * 255)
        document.getElementById("he4r").style.color="rgb(" + r + "," + g + "," + b + ",1)"
        document.getElementById("4ccur4cy").style.color="rgb(" + r + "," + g + "," + b + ",1)"
        img1 = document.getElementById("alien1")
        img2 = document.getElementById("alien2")
        img3 = document.getElementById("alien3")
        img4 = document.getElementById("alien4")
        if (results[0].label == "claps") {
            img1.src="aliens-01.gif"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        }
        else if (results[0].label == "Bang") {
            img1.src="aliens-01.png"
            img2.src="aliens-02.gif"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        }
        else if (results[0].label == "Opening/closing") {
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.gif"
            img4.src="aliens-04.png"
        }
        else {
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.gif"
        }
    }
}
