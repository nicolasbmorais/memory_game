document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    {
      name: "android",
      img: "assets/android.png",
    },
    {
      name: "chrome",
      img: "assets/chrome.png",
    },
    {
      name: "git",
      img: "assets/git.png",
    },
    {
      name: "stackoverflow",
      img: "assets/stackoverflow.png",
    },
    {
      name: "linux",
      img: "assets/linux.png",
    },
    {
      name: "github",
      img: "assets/github.png",
    },
    {
      name: "android",
      img: "assets/android.png",
    },
    {
      name: "chrome",
      img: "assets/chrome.png",
    },
    {
      name: "git",
      img: "assets/git.png",
    },
    {
      name: "stackoverflow",
      img: "assets/stackoverflow.png",
    },
    {
      name: "linux",
      img: "assets/linux.png",
    },
    {
      name: "github",
      img: "assets/github.png",
    },
  ];

  cards.sort(() => 0.5 - Math.random());

  // Carregar elementos html no script
  const board = document.querySelector(".board");
  const resultView = document.querySelector("#result");

  let cardsChosen = []; // cartas escolhidas
  let cardsChosenId = []; // id das cartas escolhidas
  let cardsWon = []; // cartas combinadas

  resultView.textContent = "Pares encontrados: " + cardsWon.length;

  //checagem de combinacoes
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    //verificar clique na mesma imagem
    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "assets/board.png");
      cards[optionTwoId].setAttribute("src", "assets/board.png");
      alert("Você clicou na mesma carta");
    }
    //verifica se sao imagens diferentes
    else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "assets/check.png");
      cards[optionTwoId].setAttribute("src", "assets/check.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
      alert("Você encontrou uma combinação");
    } else {
      cards[optionOneId].setAttribute("src", "assets/board.png");
      cards[optionTwoId].setAttribute("src", "assets/board.png");
      alert("Voce não encontrou uma combinação");
    }
    cardsChosen = [];
    cardsChosenId = [];
    // mostrar placar
    if (cardsWon.length === cards.length / 2) {
      resultView.textContent =
        "Parabéns, Você conseguiu encontrar todas as combinações";
    }
  }

  //criar o quadro de cartas
  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "assets/board.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      board.appendChild(card);
    }
  }
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cards[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cards[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch(), 500);
    }
  }

  createBoard();
});
