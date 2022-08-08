// selecting page

const buttonOps = document.querySelector(".button-ops")
const loginPage = document.querySelector("#loginPage")
const resultPage = document.querySelector("#resultPage")
const questionsPage = document.querySelector("#questionsPage")
const userName = document.querySelector(".name")
const userMail = document.querySelector(".mail")
const errorName = document.querySelector("#errorName")
const errorMail = document.querySelector("#errorMail")
const buttonSuivant = document.querySelector(".button-suivant")
const buttonQuitter = document.querySelector(".button-quitter")
const selectorAll = document.querySelectorAll(".selector")
const selectorId1 = document.getElementById("t1")
const selectorId2 = document.getElementById("t2")
const selectorId3 = document.getElementById("t3")
const selectorId4 = document.getElementById("t4")
const myTitle = document.querySelector("#title")
const nQuest = document.getElementById("nQuest")
const progress = document.getElementById("progress")
const compte = document.getElementById("compte")
const userName1 = document.getElementById("userName1")
const userEmail1 = document.getElementById("userEmail1")
const userScore1 = document.getElementById("userScore1")
const selectorImg = document.getElementById("selectorImg")
const accueilB = document.getElementById("accueilB")
const finishOps = document.getElementById("finishOps")
const myLab = document.querySelector(".myLab")


// _______________Déclaration d'une variable du type Array pour stocker les Q & R ___________________________________

const questionsAll = [
    {
        myQuest: "Hawaï appartient à quel pays ?",
        rep1: 'France',
        rep2: 'Angleterre',
        rep3: 'Etats-Unis',
        rep4: 'Ethiopie',
        vrai: 2,
    },
  
    {
        myQuest: "Combien d'États y-a-t-il aux États-Unis ?",
        rep1: "50 ",
        rep2: "45",
        rep3: "38",
        rep4: "23",
        vrai: 0,
    },
  
    {
        myQuest: "En quelle année a été signée la déclaration des droits de l'homme et du citoyen ?",
        rep1: "A partir de 1787",
        rep2: "A partir de 1789)",
        rep3: "A partir de 1889)",
        rep4: "A partir de 1988) ",
        vrai: 1,
    },
  
    {
        myQuest: "Quel est le plus grand océan du monde ? ",
        rep1: "L'océan Indien",
        rep2: "L'océan Atlantique",
        rep3: "L'océan Pacifique",
        rep4: "Aucune bonne réponse",
        vrai: 2,
    },
  
    {
        myQuest: "Quand la Seconde Guerre mondiale a-t-elle pris fin ? ",
        rep1: "En 1935",
        rep2: "En 1945",
        rep3: "En 1960",
        rep4: "En 1961",
        vrai: 1,
    },

    {
        myQuest: "Comment Hitler est-il mort ? ",
        rep1: "On l'a fusillé",
        rep2: "Il est mort dans son Avion",
        rep3: " Il s'est suicidé dans son bunker",
        rep4: "Il a été décapité",
        vrai: 2,
    },
    {
        myQuest: "Où la première bombe atomique a-t-elle été utilisée ?",
        rep1: "En inde",
        rep2: "En RDC à l'Est",
        rep3: "En Syrie",
        rep4: "À Hiroshima, au Japon",
        vrai: 3,
    },
  
    {
        myQuest: "Qui a inventé l'avion ?",
        rep1: "Henri truman",
        rep2: "Graham Bell",
        rep3: "Les frères Wright",
        rep4: "Blaise pascal",
        vrai: 2,
    },
  
    {
        myQuest: "En quelle année l'Amérique fut découverte?",
        rep1: 'En 1492',
        rep2: 'En 1482',
        rep3: 'En 1520',
        rep4: 'En 1448',
        vrai: 0,
    },
  
    {
        myQuest: "Sont des librairie et framework JS sauf:",
        rep1: "React.js",
        rep2: "Vue.js",
        rep3: "Laravel",
        rep4: "Angular.js",
        vrai: 2,
    },
  
    {
        myQuest: "Qui a écrit l'Odyssée ? ",
        rep1: 'Ovide',
        rep2: 'Cicéron',
        rep3: 'Achille',
        rep4: 'Homère',
        vrai: 3,
    },
  
    {
        myQuest: "Où a été inventé le ping-pong ?",
        rep1: 'En France',
        rep2: 'Aux Etats-Unis',
        rep3: 'Algerie',
        rep4: 'En Angleterre',
        vrai: 3,
    },
    {
        myQuest: "De quel groupe est la chanson ''Let it be'' ?",
        rep1: 'Van Halen',
        rep2: 'The Beatles',
        rep3: 'Eagles',
        rep4: 'Aerosmith',
        vrai: 1,
    },
  
    {
        myQuest: "Combien de temps dure un match de football ?",
        rep1: '60 minutes',
        rep2: '70 minutes',
        rep3: '80 minutes',
        rep4: '90 minutes',
        vrai: 3,
    },
  
    {
        myQuest: "Le stade de football du Real Madrid        s'appelle ? ",
        rep1: 'Camp Nou',
        rep2: 'Olympique de Kiev,',
        rep3: 'Croke Park',
        rep4: 'Santiago Barnabeu',
        vrai: 3,
    },
  
]



// _______________CETTE SECTION CONTIENT TOUTES LES FONCTIONS UTILISÉES__________________________




/*________________Nous créons 3 variables: l'un pour compter les questions, 
l'autre pour stocker les réponses(vérifications) la troisième pour vérifier les scores du USER*/ 

let takeQuestion = 0
let userAnswer
let userScore = 0

function selectorImage() {
    if (userScore < 8) {
        selectorImg.src = 'failures.jpeg'
        userScore1.textContent = userScore + '/15';
        userScore1.style.color = "red"
    }
}
/*________________Cette fonction compare la réponse de l'utilisateur et la vrai réponse du QUIZ______________*/

function compareAnswer() {
    if (userAnswer == questionsAll[takeQuestion].vrai) {
        userScore++
    }
}
//________________Le compteur décremente à partir de 60 sec, et sa longueur est de 100___________________________

let compteur = 60
let widthCompteur = 102
let id


/* _______________Nous créons une fonction qui va décrementer de 
60 à 0 et réinitialiser le comptage à chaque fois que l'on passe à la page suivante du Quiz*/

function counter() {
    if (compteur >= 0) {
        widthCompteur = widthCompteur - (100 / 60)
        progress.style.width = (widthCompteur) + "%"
        compte.textContent = compteur
        compteur--
    } else {
        clearInterval(id)
        initializeCounter()
        takeQuestion++
        callQuestion()
    }
}

  
/*________________Cette fonction va initialiser le compteur à 60 à chaque nouvelle page*/

function initializeCounter() {
    compteur = 60
    widthCompteur = 101
    clearInterval(id)
    id = setInterval(counter, 1001)
}
//________________Cette fonction affiche les résultats de l'utilisateur: Son nom, son Email et son Score_____________

function resultAction() {
    userName1.textContent = userName.value;
    userEmail1.textContent = userMail.value;
    userScore1.textContent = userScore + '/15';
    selectorImage()
}
//________________Cette fonction vérifie si tout les boutons des réponses on été parcourus par le USER_____________________

function checkRadio() {
    for (let i = 0; i < 4; i++) {
        if (selectorAll[i].checked) {
            userAnswer = i
            return true
        }
    } return false
}

// function terminer() {
//   console.log('Hello ')
//   if(takeQuestion == 12){
//     console.log('Hello é')
//       finishOps.value = "Terminer"
//     }
  
// }



function deselectAll() {
    for (let i = 0; i < 4; i++) {
        if (selectorAll[i].checked) {
            selectorAll[i].checked = false
        }
    }
}

function ckeckOpacity() {
    selectorAll.forEach(elt => {
        elt.addEventListener('click', (e) => {
            buttonSuivant.style.opacity = "2"
        })
    });
}
ckeckOpacity()




function callQuestion() {
    let stockQuestion = questionsAll[takeQuestion]
    myTitle.textContent = stockQuestion.myQuest
    nQuest.textContent = takeQuestion + 1
    selectorId1.textContent = stockQuestion.rep1
    selectorId2.textContent = stockQuestion.rep2
    selectorId3.textContent = stockQuestion.rep3
    selectorId4.textContent = stockQuestion.rep4
    buttonSuivant.style.opacity = "0.4"
}

callQuestion()

/* Fonction qui gère la validation avant de passer le QUIZ */

function clickButtonOps() {
    const userregexName = /[A-z]+./
    const userregexMail = /^[\w\-\+]+(\.[\w\-+.]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,3}$/
    if (userregexName.test(userName.value) && userregexMail.test(userMail.value)) {
        loginPage.style.display = "none"
        resultPage.style.display = "none"
        questionsPage.style.display = "block"
    } else {
        if (!userregexName.test(userName.value)) {
            errorName.textContent = "Mettez un nom valide avant de commencer le jeux"
            errorName.style.color = "red"
            errorName.style.fontSize = "small"
        } else {
          errorName.textContent = "Bien!"
          errorName.style.color = "blue"
          errorName.style.fontSize = "small"
        }
        if (!userregexMail.test(userMail.value)) {
            errorMail.textContent = "S'il vous plait, mettez un email valide avant de commencer à jouer"
            errorMail.style.color = "red"
            errorMail.style.fontSize = "small"
        }
      else {
          errorMail.textContent = "Email valide"
        errorMail.style.color = "blue"
         errorMail.style.fontSize = "small"
        }
    }
}

// _________________________All events pages______________________________________

buttonOps.addEventListener('click', (e) => {
    e.preventDefault()
    initializeCounter()
    clickButtonOps()
})



buttonSuivant.addEventListener('click', (e) => {
    e.preventDefault()
    if (checkRadio()) {
      
        compareAnswer()
        
        deselectAll()
        takeQuestion++
        if(takeQuestion >= 14){
          buttonSuivant.value = 'Terminé';
         
          
        } else{
          buttonSuivant.value = 'Suivant'
        }
      console.log('takeQuestion', takeQuestion)
        if (takeQuestion == 15) {
            clearInterval()
            resultAction()
            loginPage.style.display = "none"
            resultPage.style.display = "block"
            questionsPage.style.display = "none"
          

        } else {
          initializeCounter()
            resultAction()
          callQuestion()
        }
    }

})

buttonQuitter.addEventListener('click', (e) => 
  
  {
    
    e.preventDefault()
   resultAction()
    let message = true
    loginPage.style.display = "none"
    resultPage.style.display = "block"
    questionsPage.style.display = "none"
})

accueilB.addEventListener('click', (e) => {
    location.reload()
})