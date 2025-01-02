const btn=document.querySelector('.talk');
const content=document.querySelector('.content');

function speak(sentence){
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate=1;
    text_speak.pitch=1;

    window.speechSynthesis.speak(text_speak);

}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr <12){
        speak("good morning sir");
    }

    else if(hr == 12) {
        speak("good noon sir");
    }

    else if(hr > 12 && hr <= 17){
        speak("good afternoon sir");
    }
    
    else {
        speak("good evening sir");
    }
}

window.addEventListener('load',()=>{
    speak("Activating SHIVA");
    speak("connecting to the internet");
    wishMe();
})

const SpeechRecognitation = window.SpeechRecognitation || window.webkitSpeechRecognition;

const recognition = new SpeechRecognitation();

recognition.onresult = (event) =>
{
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    Speakthis(transcript.toLowerCase());
}

btn.addEventListener('click',()=>
{
    recognition.start();
})


function Speakthis(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = "sorry sir i cant understand whats you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "hello sir";
        speech.text = finalText;
    }

    else   if(message.includes('how are you')) {
        const finalText = "i am fine sir tell me how can i help you";
        speech.text = finalText;
    }

    else   if(message.includes('what is your name?')) {
        const finalText = " my name is shivay and am a virtual assistant ";
        speech.text = finalText;
    }

    else   if(message.includes('who is your sir?')) {
        const finalText = "  mr. shivam ";
        speech.text = finalText;
    }

    else   if(message.includes('open google')) {
        window.open("https://www.google.com", "_blank");

        const finalText = " opening google ";
        speech.text = finalText;
    }

    else   if(message.includes('open instagram')) {
        window.open("https://www.instagram.com", "_blank");

        const finalText = " opening instagram ";
        speech.text = finalText;
    }

    
    else   if(message.includes('open whatsapp')) {
        window.open("https://www.whatsapp.com", "_blank");

        const finalText = " opening whatsapp ";
        speech.text = finalText;
    }

    else   if(message.includes('what is')|| message.includes('what are')|| message.includes('who is')) {
        window.open(`https://www.google.co.in/search?q=${message.replace(" ","+")}`, "_blank");
        

        const finalText = " this is what i found on internet regarding  " +message + "on google";
        speech.text = finalText;
    }

    else   if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia","")}`, "_blank");
        

        const finalText = " this is what i found on wikipedia regarding  " +message + "on google";
        speech.text = finalText;
    }

    else   if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else   if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined,{month:"short",day:"numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else   if(message.includes('open calculator')) {
      window.open('calculator:///')
        const finalText = "opening calculator";
        speech.text = finalText;
    }

    /*else   if(message.includes('open')) {
        window.open('XAMP control panel:///')
          const finalText = "opening calculator";
          speech.text = finalText;
      }*/

    else if(message.includes('open facbook')) {
        window.open("https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwip1ZL91dWKAxUq1jgGHdIpFvAQFnoECA4QAQ&url=https%3A%2F%2Fwww.facebook.com%2F&usg=AOvVaw2q27ov2cpCynr72DmuSqEz&opi=89978449", "_blank");

        const finalText = " opening facebook ";
        speech.text = finalText;
    }

    


    else {
        window.open(`https://www.google.co.in/search?q=${message.replace(" ","+")}`, "_blank");
        const finalText = "i found some information for " + message + "on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;


    window.speechSynthesis.speak(speech);
}
