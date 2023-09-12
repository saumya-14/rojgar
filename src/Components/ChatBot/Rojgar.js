import React, { useEffect } from 'react';
import './style.css';
import bit2 from  './bot-mini.png';
import botimage from './bot.png';
import userimage from './user.jpg';

export default function Rojgar() {
  useEffect(() => {
    // Your chatbot logic goes here
    const prompts = [
      ["fine"],
      ["hi", "hey", "hello", "good morning", "good afternoon"],
      ["how are you", "how is life", "how are things"],
      ["what are you doing", "what is going on", "what is up"],
      ["how old are you"],
      ["who are you", "are you human", "are you bot", "are you human or bot"],
      ["who created you", "who made you"],
      [
        "your name please",
        "your name",
        "may I know your name",
        "what is your name",
        "what call yourself"
      ],
      ["i love you"],
      ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
      ["bad", "bored", "tired"],
      ["help me", "tell me story", "tell me joke"],
      ["ah", "yes", "ok", "okay", "nice"],
      ["bye", "good bye", "goodbye", "see you later"],
      ["what should i eat today"],
      ["bro"],
      ["what", "why", "how", "where", "when"],
      ["no", "not sure", "maybe", "no thanks"],
      [""],
      ["hi i am happy raj"]
    ];

    const replies = [
      ["Good"],
      ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
      [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
      ],
      [
        "Nothing much",
        "About to go to sleep",
        "Can you guess?",
        "I don't know actually"
      ],
      ["I am infinite"],
      ["I am just a bot", "I am a bot. What are you?"],
      ["The one true God, JavaScript"],
      ["I am a Rojgar Sathi"],
      ["I love you too", "Me too"],
      ["Have you ever felt bad?", "Glad to hear it"],
      ["Why?", "Why? You shouldn't!", "Try watching TV"],
      ["What about?", "Once upon a time..."],
      ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
      ["Bye", "Goodbye", "See you later"],
      ["Sushi", "Pizza"],
      ["Bro!"],
      ["Great question"],
      ["That's ok", "I understand", "What do you want to talk about?"],
      ["Please say something :("],
      [
        "Oh, you are happy raj. I love you, and I know your crush's name too. Her name starts with U."
      ]
    ];

    const alternative = [
      "Same",
      "Go on...",
      "Bro...",
      "Try again",
      "I'm listening...",
      "I don't understand :/"
    ];

    const coronavirus = [
      "Please stay home",
      "Wear a mask",
      "Fortunately, I don't have COVID",
      "These are uncertain times"
    ];

    const inputField = document.getElementById('input');
    inputField.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        let input = inputField.value;
        inputField.value = '';
        output(input);
      }
    });

    function output(input) {
      if (!input.trim()) {
        // Ignore empty inputs
        return;
      }

      let product;

      let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
      text = text
        .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "")
        .replace(/r u/g, "are you");

      if (compare(prompts, replies, text)) {
        // Search for exact match in `prompts`
        product = compare(prompts, replies, text);
      } else if (text.match(/thank/gi)) {
        product = "You're welcome!"
      } else if (text.match(/(corona|covid|virus)/gi)) {
        // If no match, check if message contains `coronavirus`
        product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
      } else {
        // If all else fails: random alternative
        product = alternative[Math.floor(Math.random() * alternative.length)];
      }

      addChat(input, product);
    }

    function compare(promptsArray, repliesArray, string) {
      let reply;
      let replyFound = false;
      for (let x = 0; x < promptsArray.length; x++) {
        for (let y = 0; y < promptsArray[x].length; y++) {
          if (promptsArray[x][y] === string) {
            let replies = repliesArray[x];
            reply = replies[Math.floor(Math.random() * replies.length)];
            replyFound = true;
            // Stop inner loop when input value matches prompts
            break;
          }
        }
        if (replyFound) {
          // Stop outer loop when reply is found instead of iterating through the entire array
          break;
        }
      }
      return reply;
    }

    function addChat(input, product) {
      const messagesContainer = document.getElementById("messages");

      let userDiv = document.createElement("div");
      userDiv.id = "user";
      userDiv.className = "user response";
      userDiv.innerHTML = `<img src=${userimage} class="avatar"><span>${input}</span>`;
      messagesContainer.appendChild(userDiv);

      let botDiv = document.createElement("div");
      let botImg = document.createElement("img");
      let botText = document.createElement("span");
      botDiv.id = "bot";
      botImg.src =bit2 ;
      botImg.className = "avatar";
      botDiv.className = "bot response";
      botText.innerText = "Typing...";
      botDiv.appendChild(botText);
      botDiv.appendChild(botImg);
      messagesContainer.appendChild(botDiv);
      // Keep messages at most recent
      messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

      // Fake delay to seem "real"
      setTimeout(() => {
        botText.innerText = `${product}`;
        textToSpeech(product)
      }, 2000);
    }

    const synth = window.speechSynthesis;
    const textToSpeech = (string) => {
      let voice = new SpeechSynthesisUtterance(string);
      voice.text = string;
      voice.lang = "en-IN"; // Set to Indian English
      voice.volume = 2;
      voice.rate = 1;
      voice.pitch = 1;

      const voices = synth.getVoices();
      const indianFemaleVoice = voices.find((v) => v.name === "Google India English Female");
      if (indianFemaleVoice) {
        voice.voice = indianFemaleVoice;
      } else {
        console.warn("Indian English female voice not available; using default voice.");
      }

      synth.speak(voice);
    };
  }, []); // Empty dependency array to run this effect only once

  return (
    <>
      <div id="container" className="container">
        <div id="chat" className="chat">
          <div id="messages" className="messages"></div>
          <input
            id="input"
            type="text"
            placeholder="Say something..."
            autoComplete="off"
            autoFocus={true}
          />
        </div>
        <img src={botimage} alt="Robot cartoon" height="500vh" />
      </div>
    </>
  );
}
