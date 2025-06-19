const gif = document.querySelector("#gif");
const answer = document.querySelector("#answer");
const allAudioElements = document.querySelectorAll(".mp3");
const title = document.querySelector("#title")
const allBtn = document.querySelectorAll(".btn");

const data = [
    {
        text: "A small place on the map, but big enough to dream about someone like you.",
        gif: "https://media.tenor.com/xLsSN5G6utAAAAAj/bubu12.gif"
    },
    {
        text: "My job is to adore you and make you feel special.",
        gif: "https://media.tenor.com/LnDAw2bdEogAAAAM/huge-hands.gif"
    },
    {
        text: "Finding new and exciting ways to impress you😘.",
        gif: "https://media.tenor.com/-aW73OVUtyYAAAAj/tkthao219-bubududu.gif"
    },
    {
        text: "Roses, because you deserve a bouquet for brightening my day.",
        gif: "https://media.tenor.com/Du9VVJYDPDkAAAAj/tkthao219-bubududu.gif"
    },
    {
        text: "Sunset, because it reminds me of the glow you bring into my life.",
        gif: "https://media.tenor.com/XtGispDVwDQAAAAj/tkthao219-bubududu.gif"
    },
    {
        text: "Yes, I'm a pro at winning hearts❤️.",
        gif: "https://media.tenor.com/905u0Gsct30AAAAj/tkthao219-bubududu.gif"
    },
    {
        text: "Anything that comes with a side of your company.",
        gif: "https://media.tenor.com/vmvaMX3F-3IAAAAj/hehehehe.gif"
    },
    {
        text: "Honestly? Talk to you. Everything else is just filling time until then.",
        gif: "https://media.tenor.com/-Qq0R9rKNzUAAAAj/panda-bear.gif"
    },
    {
        text: "Absolutely! But I'd love to travel through life with someone special like you.",
        gif: "https://media.tenor.com/O-GOlNdxjH8AAAAj/love-bear.gif"
    },
    {
        text: "I like a bit of everything, especially if it involves dancing with you.",
        gif: "https://media.tenor.com/LFYspX1SSUcAAAAj/bubu-dudu-bubu.gif"
    },
    {
        text: "Coffee, because you keep me awake and make my heart race.",
        gif: "https://media.tenor.com/JCzvhxNoLwYAAAAj/bubu-bubu-dudu.gif"
    },
    {
        text: "Blue, because like the sky, my love for you has no limits.",
        gif: "https://media.tenor.com/f_TC2j5AMvkAAAAj/bear-cute.gif"
    }
]; // all data 1 pick up line and gif

const data2 = [{
    text: "Handle? I prefer the term 'appreciate'. Challenge accepted!",
    gif: "https://media1.tenor.com/m/x-Gh5uV-6zAAAAAC/laughing-hysterically.gif"
},
{
    text: "Good thing I aim high. How about we set a new standard together?",
    gif: "https://media.tenor.com/Pnxv-9Bp0DUAAAAj/tkthao219-bubududu.gif"
},
{
    text: "I run on caffeine and ambition. Let's see who tires first!",
    gif: "https://media.tenor.com/NjBWExfQmoYAAAAi/tkthao219-bubududu.gif"
},
{
    text: "Because I believe every great story starts with a leap of faith. Let's write ours.",
    gif: "https://media.tenor.com/PXKZhCEfEfsAAAAi/bubu-bubu-dudu.gif"
},{
    text: "Then I’ll bring consistency, not just charm. Effort is my love language.",
    gif: "https://media.tenor.com/Du9VVJYDPDkAAAAj/tkthao219-bubududu.gif"
},{
    text: "I love a good challenge. Meeting your demands sounds like a fun mission.",
    gif: "https://media.tenor.com/WYGe9Vgdza8AAAAi/mimibubu.gif"
},{
    text: "I thrive on laughter. Lets see if you can handle mine!",
    gif: "https://media.tenor.com/MTyONzJHiXAAAAAi/tkthao219-bubududu.gif"
},{
    text: "Im not just any guy; Im the one who sees you as my equal partner in adventure.",
    gif: "https://media.tenor.com/ZhNxfL0GmoMAAAAj/mocha-bear-hearts.gif"
},{
    text: "Independence is attractive. Two strong individuals make an unstoppable team.",
    gif: "https://media.tenor.com/puetEXNh7mcAAAAi/bubu-bubu-dudu.gif"
},{
    text: "That’s okay. I’m not in a rush, I'll just enjoy the view on the way down.",
    gif: "https://media.tenor.com/z33tqo8v2XMAAAAi/mocha-missing-milk.gif"
},{
    text: "Absolutely. Confidence is incredibly attractive, and I know what I want too.",
    gif: "https://media1.tenor.com/m/0ks_QifP-5YAAAAC/ositos.gif"
},{
    text: "I do have a big ego and plenty of self-respect, but when it comes to you, they just seem to disappear.",
    gif: "https://media.tenor.com/Q9VuGIKQqEMAAAAi/love-bear.gif"
}]; // all data 2 pickup line and git

const data3 = [{
    text: "I’ll be your man — your protector, your peace, your biggest fan. I’ll never let you forget how loved, wanted, and admired you are not for a single day. Because with me, it’s not just about love… it’s about building a life where you feel like the main character, every single day",
    gif: "https://media1.tenor.com/m/ahYdsZQT_Z8AAAAC/love.gif"
},
{
    text: "I can make cute website for u like this one",
    gif: "https://media.tenor.com/ZhNxfL0GmoMAAAAj/mocha-bear-hearts.gif"
},
{
    text: "Because…...... pretty please? 🥺💍",
    gif: "https://media.tenor.com/QOzMqPvW8PUAAAAi/love-you.gif"
}];

function Rizz(index) {   // first data function
    
    const audio = document.querySelector(`.mp3[audio-index="${index}"]`); //get audio by para index number as audio like if Rizz(1) audio-index = 1
    
    

    // Pause all other audio elements like loop all audio element and find if audio rn playing not match the audio stop the audio and reset when u click other btn before song over then it stop old audio and play new one
    allAudioElements.forEach((audioElement) => {
        if (audioElement !== audio) {
            audioElement.pause();
            audioElement.currentTime = 0; // Reset to start
        }
    });

    // Data for each index
   

    // Check if index is valid
    if (index > 0 && index <= data.length) {
        answer.style.display = "block";
        answer.textContent = data[index - 1].text;  // -1 to index if index = 1, 1-1 = 0 so js array start count from 0 so u need to do it
        audio.play();
        gif.src = data[index - 1].gif;  // -1 to index if index = 1, 1-1 = 0 so js array start count from 0 so u need to do it
        audio.play();
    } else {
        answer.style.display = "block";
        answer.textContent = "Error";
    }
}

function switchtoData2() {  // function for button that switch  to data2
    const list1 = document.querySelector('#list1');
    const list2 = document.querySelector('#list2');
    const list3 = document.querySelector('#list3');
    const switcht = document.querySelector('#switch');
    const backSwitch = document.querySelector('#backswitch');
    const link = document.querySelector('#link');
    
   
    if (list1.style.display === "grid" || list1.style.display === ""  ) {
      title.textContent = "Ask me anything u want";
      list1.style.display = "none";
      list2.style.display = "grid";
      list3.style.display = "none"
      switcht.style.display = "block";
      backSwitch.style.display = "block";
      link.style.display = "none";
    } else {
        title.textContent = "3 Reason why u should t3awnini bch n9ane3 papak";
        list1.style.display = "none";
        list2.style.display = "none";
        list3.style.display = "grid";
        switcht.style.display = "none";
        backSwitch.style.display = "block"
        link.style.display = "block";
    }
}

function switchtoData1() {  // function for data to switch back to data1
    const list1 = document.querySelector('#list1')
    const list2 = document.querySelector('#list2');
    const swictht = document.querySelector('#switch')
    const backSwitch = document.querySelector('#backswitch')
    const list3 = document.querySelector('#list3');
    const link = document.querySelector('#link');
    
   
    if (list3.style.display === "grid" || list3.style.display === "") {
      title.textContent = "ask me anything u want"
      list1.style.display = "none";
      list2.style.display = "grid";
      list3.style.display = "none";
      swictht.style.display = "block"; 
      backSwitch.style.display = "block";
      link.style.display = "none";
    } 
    else if (list2.style.display === "grid" || list3.style.display === "") {
      title.textContent = "ask about me anything u want";
      list1.style.display = "grid";
      list2.style.display = "none";
      list3.style.display = "none";
      swictht.style.display = "block";
      backSwitch.style.display = "none";
      link.style.display ="none"
    }
}

function Rizz2(indexx) {  // function that run for data 2 btn just like rizz1
   const audioo = document.querySelector(`.mp3[audio-indexx="${indexx}"]`)

   allAudioElements.forEach((audio2) => {
    if(audio2 !== audioo) {
        audio2.pause();
        audio2.currentTime = 0;
    }
   });

   if(indexx > 0 && indexx <= data2.length){
    answer.style.display = "block"
    answer.textContent = data2[indexx - 1].text;
    audioo.play();
    gif.src = data2[indexx - 1].gif;
   }else {
    answer.display = "none";
    answer.textContent = "Error"
   }
}

function Rizz3(index3) {
    const audio3 = document.querySelector(`.mp3[audio-index3 = "${index3}"]`);

    allAudioElements.forEach(audioo3 => {
      if (audioo3 != audio3) {
        audioo3.pause();
        audioo3.currentTime = 0;
      }
    });
    
    if (index3 > 0 && index3 <= data3.length) {
        answer.style.display = "block";
        answer.textContent = data3[index3 - 1].text;
        audio3.play();
        gif.src = data3[index3 - 1].gif;
    }

}
