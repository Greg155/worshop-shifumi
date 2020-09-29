console.log("BONJOUR ");

let scoreUser = 0;
let scoreIA = 0;

let scoreTempUser =0;
let scoreTempIa = 0;

let shifumiUser;
let shifumiIA;

// shi pierre fu papier mi ciseau
let shifumi = ["Shi","Fu","Mi"];

const getRandomShifumi = () => {
    let randomNumber = Math.floor(Math.random() * Math.floor(3)); 
    console.log(randomNumber);
    console.log(shifumi[randomNumber]);
    return shifumi[randomNumber];
}

const buttonPierre = document.querySelector("#pierre-user");
console.log(buttonPierre);
buttonPierre.addEventListener('click', ()=> {
    shifumiUser = shifumi[0];
    console.log("user choose "+ shifumiUser);
    shifumiIA = getRandomShifumi();
    shifumiBattle(shifumiUser,shifumiIA);
    scoreUser = document.querySelector(".score-user");
    scoreUser.innerHTML = `${scoreTempUser}`; 
    scoreIA = document.querySelector(".score-ia");
    scoreIA.innerHTML = `${scoreTempIa}`; 
    if(scoreTempUser === 3){
        prompt("USER WIN !");
    }
    if(scoreTempIa === 3){
        prompt("IA WIN !");
    }
});

const buttonPapier = document.querySelector("#papier-user");
console.log(buttonPapier);
buttonPapier.addEventListener('click', ()=> {
    shifumiUser = shifumi[1];
    console.log("user choose "+ shifumiUser);
    shifumiIA =getRandomShifumi();
    shifumiBattle(shifumiUser,shifumiIA);
    scoreUser = document.querySelector(".score-user");
    scoreUser.innerHTML = `${scoreTempUser}`; 
    scoreIA = document.querySelector(".score-ia");
    scoreIA.innerHTML = `${scoreTempIa}`; 
    if(scoreTempUser === 3){
        prompt("USER WIN !");
    }
    if(scoreTempIa === 3){
        prompt("IA WIN !");
    }
});

const buttonCiseau = document.querySelector("#ciseau-user");
console.log(buttonPierre);
buttonCiseau.addEventListener('click', ()=> {
    shifumiUser = shifumi[2];
    console.log("user choose "+ shifumiUser);
    shifumiIA = getRandomShifumi();
    shifumiBattle(shifumiUser,shifumiIA);
    scoreUser = document.querySelector(".score-user");
    scoreUser.innerHTML = `${scoreTempUser}`; 
    scoreIA = document.querySelector(".score-ia");
    scoreIA.innerHTML = `${scoreTempIa}`;   
    if(scoreTempUser === 3){
        window.alert("USER WIN!");
    }
    if(scoreTempIa === 3){
        window.alert("IA WIN!");
    }  
});

const buttonReset = document.querySelector("#reset-button");
console.log(buttonReset);
buttonReset.addEventListener('click', () => {
    scoreTempUser = 0;
    scoreTempIa = 0;
    scoreUser = document.querySelector(".score-user");
    scoreUser.innerHTML = `${scoreTempUser}`; 
    scoreIA = document.querySelector(".score-ia");
    scoreIA.innerHTML = `${scoreTempIa}`;  
});

// SHi = pierre fu = papier mi = ciseau
let shifumiBattle = (yourShifumi, enemyShifumi) => {
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
