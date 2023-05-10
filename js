const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = ["I am enough, just as I am.",
"I am good at finding solutions to daily struggles.",
"I am valued in and out of my home.",
"I am exactly who my kids need.",
"I am grateful for a fresh start this morning.",
"My self-care is not a luxury, it is a necessity.",
"I know my children best.",
"My children love me because I am their mother.",
"I am not perfect but I am making progress.",
"I set the tone for my home.",
"I learn by doing, making mistakes is part of the process toward growth and fulfillment.",
"I love who I am and who I am becoming.",
"Vulnerability and honesty creates deeper connection with my children.",
"I prioritize presence over a to-do list.",
"I go with the flow when unexpected interruptions come my way.",
"I ask for help when I need it because it makes our family stronger.",
"I control my thoughts, energy and actions.",
"I give myself time and space to breathe and just BE.",
"I am worthy to fully receive all of the good plans God has for my life.",
"I lean into REST every day so that I can show up as the best version of myself for my family.", 
"I show myself and my kids grace every day.",
"Through God, I can do all things. (Philippians 4:13)",
"I love my messy, imperfect life with kids.",
"I understand that all of the small, unseen and uncelebrated acts of daily service in my home create a sense of deep love and safety for my children.",
"My body’s “imperfections” tell a story. I am not a project to be fixed – I am beautiful, strong and deserving of love today.",
"I am doing my best. Whatever I do today is enough.",
"This too shall pass. I choose joy despite my circumstances.",
"Smiling brightens my day!",
"When I look in the mirror, I LOVE the beautiful woman who is looking back at me.",
"I forgive myself and others for any mistakes made – in doing this, I embrace freedom in my heart, mind and soul.",
];

button.addEventListener ("click", function() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})
