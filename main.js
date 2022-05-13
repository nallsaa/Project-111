prediction1 = ""
prediction2 = ""
Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90,
})

camera = document.getElementById("camera")

Webcam.attach("#camera")

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src='+data_uri+'>'
    })
}

console.log("ml5_version:", ml5.version)
classifier = ml5.imageClassifier=("https://teachablemachine.withgoogle.com/models/GP12gpb3-/model.json", model_loaded)
console.log()

function model_loaded(){
    console.log("Model Loaded!")
}

function speak(){
    var synth = window.speechSynthesis
    speak_data1 = "The first prediction is "+prediction1
    speak_data2 = "The second precition is "+prediction2
    var utterThis = new speechSynthesisUtterance(speak_data1 + speak_data2)
    synth.speak(utterThis)
}

function check(){
    img = document.getElementById("captured_img")
    classifier.classify(img, gotResults);
}

function gotResults(error, results){
if (error){
    console.error(error)
}
else{
    console.log(results)
    document.getElementById("result_emotion_name").innerHTML = results[0].label
    document.getElementById("result_emotion_name2").innerHTML = results[1].label
    if (results[0].label=="Victory"){
        document.getElementById("update_gesture").innerHTML = "&#9996;"
    }
    if (results[0].label=="Best"){
        document.getElementById("update_gesture").innerHTML = "&#128077;"
    }

    if (results[1].label=="Amazing"){
        document.getElementById("update_gesture").innerHTML = "&#128076;"
    }


    
}
}

