console.log("BONJOUR ");

let scoreUser = 0;
scoreUser = document.querySelector(".score-user");
let scoreIA = 0;
scoreIA = document.querySelector(".score-ia");

let scoreTempUser =0;
let scoreTempIa = 0;

let userSelection;
userSelection = document.querySelector("#UserSelect");
let IaSelection;
IaSelection = document.querySelector(`#IaSelect`);

let shifumiUser;
let shifumiIA;

let iconeShiIa = document.querySelector("#pierre-ia");
let iconeFuIa = document.querySelector("#papier-ia");
let iconeMiIa = document.querySelector("#ciseau-ia");

// shi pierre fu papier mi ciseau
let shifumi = ["Shi","Fu","Mi"];

const getRandomShifumi = () => {
    let randomNumber = Math.floor(Math.random() * Math.floor(3)); 
    console.log(randomNumber);
    console.log(shifumi[randomNumber]);
    return shifumi[randomNumber];
}

const buttonPierre = document.querySelector("#pierre-user");
buttonPierre.addEventListener('click', ()=> {
    shifumiUser = shifumi[0];
    shifumiIA = getRandomShifumi();
    getSelection(shifumiUser,shifumiIA);
    shifumiBattle(shifumiUser,shifumiIA);
    updateScore();  
    compareScore();
});

const buttonPapier = document.querySelector("#papier-user");
buttonPapier.addEventListener('click', ()=> {
    shifumiUser = shifumi[1];
    shifumiIA = getRandomShifumi();
    getSelection(shifumiUser,shifumiIA);
    shifumiBattle(shifumiUser,shifumiIA);
    updateScore();  
    compareScore();
});

const buttonCiseau = document.querySelector("#ciseau-user");
buttonCiseau.addEventListener('click', ()=> {
    shifumiUser = shifumi[2];
    shifumiIA = getRandomShifumi();
    getSelection(shifumiUser,shifumiIA);
    shifumiBattle(shifumiUser,shifumiIA);
    updateScore();  
    compareScore();
});

const buttonReset = document.querySelector("#reset-button");
console.log(buttonReset);
buttonReset.addEventListener('click', () => {
    scoreTempUser = 0;
    scoreTempIa = 0;
    scoreUser.innerHTML = `User ${scoreTempUser}`; 
    scoreIA.innerHTML = `Ia ${scoreTempIa}`; 
    userSelection.innerHTML = `You use : --- `;
    IaSelection.innerHTML = `Ia use : ---`;
    iconeShiIa.style.display ="none";
    iconeFuIa.style.display ="none";
    iconeMiIa.style.display ="none";



});

// SHi = pierre fu = papier mi = ciseau
const shifumiBattle = (yourShifumi, enemyShifumi) => {
    switch (yourShifumi){
        case "Shi":
            if(enemyShifumi==="Mi"){
                console.log("User win")
                scoreTempUser++;
            }else if(enemyShifumi==="Fu"){
                console.log("IA win")
                scoreTempIa++;
            }else{
                console.log("Match nul");
            }
            break;
        case "Fu":
            if(enemyShifumi==="Shi"){
                console.log("User win")
                scoreTempUser++;
            }else if(enemyShifumi==="Mi"){
                console.log("IA win")
                scoreTempIa++;
            }else{
                console.log("Match nul");
            }
            break;
        case "Mi":
            if(enemyShifumi==="Fu"){
                console.log("User win")
                scoreTempUser++;
            }else if(enemyShifumi==="Shi"){
                console.log("IA win")
                scoreTempIa++;
            }else{
                console.log("Match nul");
            }
            break;
    } 
}


const getSelection = () => {
    userSelection.innerHTML = `You use : ${shifumiUser} `;
    console.log("helo");
    IaSelection.innerHTML = `Ia use : ${shifumiIA}`;
}

const updateScore = () =>{
    scoreUser.innerHTML = `User ${scoreTempUser}`; 
    scoreIA.innerHTML = `Ia ${scoreTempIa}`;  
}

const compareScore = () => {
    if(scoreTempUser === 3){
        prompt("USER WIN !");
    }
    if(scoreTempIa === 3){
        prompt("IA WIN !");
    }
}
