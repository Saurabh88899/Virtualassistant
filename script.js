//speak
    
function speak(text) {
    let msg = new SpeechSynthesisUtterance(text);
    msg.pitch=1;
    msg.rate=1;
    msg.volume=1;
    msg.lang="hi-GB"
    window.speechSynthesis.speak(msg); 
}




//speech recognition
var but=document.getElementById('btn')
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition=new speechRecognition();
recognition.onresult=(event)=>{
  var x=event.resultIndex;
  var recorded_text=event.results[x][0].transcript
  // var name=document.getElementById('name').value
  // name=y
  if(recorded_text.includes("pushpa")){
    recorded_text.replace("pushpa","")
  }
  if(recorded_text.includes("open YouTube")){
    speak("opening youtube")
    window.open("https://m.youtube.com/")
  }
  else if(recorded_text.includes("i love you")||recorded_text.includes("i love u")||recorded_text.includes("I love you")||recorded_text.includes("I love u")){
    speak("i do not love you.  .pushpa naam sunke. flower samjhe ho kya. wild fire hai mai")
  }
  else if(recorded_text.includes("open Google")){
    speak("opening google")
    window.open("https://m.google.com/")
  }
  else if(recorded_text.includes("open Instagram")){
    speak("opening instagram")
    window.open("https://m.instagram.com/")
  }
  else if(recorded_text.includes("open Facebook")){
    speak("opening Facebook")
    window.open("https://m.facebook.com/")
  }
  else if(recorded_text.includes("open calculator")){
    speak("opening calculator")
    window.open("https://www.calculator.net/")
  }
  else if(recorded_text.includes("open WhatsApp")){
    speak("opening whatsapp")
    window.open("https://web.whatsapp.com/")
  }
  else if(recorded_text.includes("who are you")||recorded_text.includes("hu r u")){
    speak("I am pushpa. An virtual asssistant, created  by mr Sourav Pandey sir. How may i help you?")
  }
  else if(recorded_text.includes("download")||recorded_text.includes("Download")){
    speak(`Here is the downloading link for ${recorded_text.replace("download","")}`)
    window.open(`https://www.google.com/search?q=${recorded_text}+94fbr&oq=&gs_lcrp=EgZjaHJvbWUqDAgFECMYJxjqAhiLBDIGCAAQRRg6MgcIARAAGNQFMgwIAhAjGCcY6gIYiwQyDAgDECMYJxjqAhiLBDIMCAQQIxgnGOoCGIsEMgwIBRAjGCcY6gIYiwQyDAgGECMYJxjqAhiLBDIMCAcQIxgnGOoCGIsEMgwICBAjGCcY6gIYiwQyDAgJECMYJxjqAhiLBDISCAoQLhgnGMcBGOoCGNEDGIsEMgwICxAjGCcY6gIYiwQyDAgMECMYJxjqAhiLBDIMCA0QIxgnGOoCGIsEMgwIDhAjGCcY6gIYiwTSAQYtMWowajSoAg6wAgE&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8`)
  }
  else if(recorded_text.includes("what is your Name")||recorded_text.includes("what is your name")||recorded_text.includes("what ise your name")){
    speak("pushpa. pushpa raj")
  }
  else{
    speak(`This is What I Found on internet about ${recorded_text}`)
    window.open(`https://www.google.com/search?q=${recorded_text}&oq=&gs_lcrp=EgZjaHJvbWUqDAgFECMYJxjqAhiLBDIGCAAQRRg6MgcIARAAGNQFMgwIAhAjGCcY6gIYiwQyDAgDECMYJxjqAhiLBDIMCAQQIxgnGOoCGIsEMgwIBRAjGCcY6gIYiwQyDAgGECMYJxjqAhiLBDIMCAcQIxgnGOoCGIsEMgwICBAjGCcY6gIYiwQyDAgJECMYJxjqAhiLBDISCAoQLhgnGMcBGOoCGNEDGIsEMgwICxAjGCcY6gIYiwQyDAgMECMYJxjqAhiLBDIMCA0QIxgnGOoCGIsEMgwIDhAjGCcY6gIYiwTSAQYtMWowajSoAg6wAgE&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8`)
  }
}
but.addEventListener("click",()=>{
  recognition.start()
})



window.addEventListener("load",()=>{
  good()
})
function good(){
  const date = new Date();
const hour=date.getHours();
if (hour<=12 && hour>=0){
  speak("Good Morning Sir")
}
else if (hour>=12 && hour<=15){
  speak("Good Afternoon Sir")
}
else{
    alert("hii")
  speak("Good Evening Sir")
}
}
alert(recorded_text)