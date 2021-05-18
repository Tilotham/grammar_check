var recognition = new window.webkitSpeechRecognition();

var recordButton = document.getElementById("recordButton");
var textArea = document.getElementById("inputText");
var recording = false;

recognition.continuous = false;
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recordButton.addEventListener("click", function(){
    if(recording){
        stopRecording();
    }else {
        startRecording();
    }
});

function startRecording () {
    console.log("started");
    recognition.start();
    recording = true;
    recordButton.className = "recordButtonSelected";
    document.getElementById("recordButtonText").textContent = "Speech is Recording";
}

function stopRecording() {
    console.log("stoped");
    recognition.stop();
    recording = false
    recordButton.className = "recordButton";
    document.getElementById("recordButtonText").textContent = "Click here to speak....";
}

recognition.onresult = function(e) {
    textArea.textContent += " "+e.results[e.resultIndex][0].transcript;
}

recognition.onspeechend = function(){
    stopRecording()
    recording = false   
}