const perguntas = [
  {
    pergunta: "Qual é o nome do mapa mais jogado em Valorant?",
    respostas: [
      "Sandstorm",
      "Bind",
      "Frostbite"
    ],
    correta: 1 // Resposta correta: "Bind"
  },
  {
    pergunta: "Qual é o objetivo principal do modo de jogo 'Spike Rush' em Valorant?",
    respostas: [
      "Plantar a spike",
      "Eliminar todos os inimigos",
      "Coletar orbs"
    ],
    correta: 2 // Resposta correta: "Coletar orbs"
  },
  {
    pergunta: "Qual é a arma padrão que todos os jogadores começam com em Valorant?",
    respostas: [
      "Vandal",
      "Ghost",
      "Classic"
    ],
    correta: 2 // Resposta correta: "Classic"
  },
  {
    pergunta: "Qual personagem de Valorant é conhecido por suas habilidades de cura?",
    respostas: [
      "Brimstone",
      "Sage",
      "Jett"
    ],
    correta: 1 // Resposta correta: "Sage"
  },
  {
    pergunta: "Qual é o nome da organização antiterrorista em Valorant?",
    respostas: [
      "Valorant Agents",
      "Kingdom Corporation",
      "Valorant Protocol"
    ],
    correta: 2 // Resposta correta: "Valorant Protocol"
  },
  {
    pergunta: "Qual é o objetivo do modo de jogo 'Deathmatch' em Valorant?",
    respostas: [
      "Plantar a spike",
      "Eliminar inimigos para ganhar pontos",
      "Defender uma área específica"
    ],
    correta: 1 // Resposta correta: "Eliminar inimigos para ganhar pontos"
  },
  {
    pergunta: "Qual é o limite de rodadas em uma partida competitiva de Valorant?",
    respostas: [
      "20",
      "25",
      "13",
    ],
    correta: 2 // Resposta correta: "13"
  },
  {
    pergunta: "Qual é o nome do agente em Valorant que pode se teletransportar?",
    respostas: [
      "Omen",
      "Cypher",
      "Raze"
    ],
    correta: 0 // Resposta correta: "Omen"
  },
  {
    pergunta: "Qual é o tipo de agente em Valorant que se especializa em habilidades de suporte?",
    respostas: [
      "Duelista",
      "Iniciador",
      "Controlador"
    ],
    correta: 2 // Resposta correta: "Controlador"
  },
  {
    pergunta: "Qual é o nome do mapa em Valorant que apresenta uma ambientação desértica?",
    respostas: [
      "Split",
      "Haven",
      "Ascent"
    ],
    correta: 2 // Resposta correta: "Ascent"
  }
];

  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }