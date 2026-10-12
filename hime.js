
const wordHeart = document.getElementById("wordHeart");
const heartButton = document.getElementById("heartButton");
const container = document.querySelector(".container");
const subtitle = document.getElementById("subtitle");
const message = document.getElementById("message");

const loveWords = [
    "EU TE AMO",
    "I LOVE YOU",
    "愛してる",
    "TE AMO",
    "JE T'AIME",
    "TI AMO",
    "ICH LIEBE DICH",
    "사랑해",
    "Я ТЕБЯ ЛЮБЛЮ",
    "我爱你",
    "IK HOU VAN JOU",
    "ILY",
    "好きだよ",
    "LOVE YOU"
];

// Cria as palavras dentro do formato de coração
function createHeart() {
    const svgNS = "http://www.w3.org/2000/svg";

    for (let y = 18; y <= 260; y += 19) {
        for (let x = -10; x <= 310; x += 72) {
            const text = document.createElementNS(
                svgNS,
                "text"
            );

            text.setAttribute("x", x);
            text.setAttribute("y", y);
            text.setAttribute("class", "word");

            const index = Math.floor(
                Math.random() * loveWords.length
            );

            text.textContent = loveWords[index];

            wordHeart.appendChild(text);
        }
    }
}

// Revela a declaração
function openLoveLetter() {
    if (container.classList.contains("opened")) {
        return;
    }

    container.classList.add("opened");

    subtitle.textContent = "Uma mensagem do meu coração";
    message.setAttribute("aria-hidden", "false");

    heartButton.setAttribute("aria-label", "Surpresa revelada");
}

createHeart();

heartButton.addEventListener("click", openLoveLetter);
