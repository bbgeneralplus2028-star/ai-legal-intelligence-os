let mode = "chat";

function setMode(m){
mode = m;
document.getElementById("output").innerText = "Mode: " + m;
}

async function runAI(){

const input = document.getElementById("input").value;

const res = await fetch("http://localhost:3000/api/ai", {
method:"POST",
headers:{"Content-Type":"application/json"},
body: JSON.stringify({ input, mode })
});

const data = await res.json();
document.getElementById("output").innerText = data.result;
}

function startVoice(){

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();
rec.start();

rec.onresult = (e)=>{
document.getElementById("input").value = e.results[0][0].transcript;
};
}
