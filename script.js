console.log("BONJOUR ");

let scoreUser = 0;
let scoreIA = 0;

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

});

const buttonPapier = document.querySelector("#papier-user");
console.log(buttonPapier);
buttonPapier.addEventListener('click', ()=> {
    shifumiUser = shifumi[1];
    console.log("user choose "+ shifumiUser);
    shifumiIA =getRandomShifumi();
    shifumiBattle(shifumiUser,shifumiIA);
});

const buttonCiseau = document.querySelector("#ciseau-user");
console.log(buttonPierre);
buttonCiseau.addEventListener('click', ()=> {
    shifumiUser = shifumi[2];
    console.log("user choose "+ shifumiUser);
    shifumiIA = getRandomShifumi();
    shifumiBattle(shifumiUser,shifumiIA);
});



// SHi = pierre fu = papier mi = ciseau
let shifumiBattle = (yourShifumi, enemyShifumi) => {
    switch (yourShifumi){
        case "Shi":
            if(enemyShifumi==="Mi"){
                console.log("User win")
                scoreUser++;
            }else if(enemyShifumi==="Fu"){
                console.log("IA win")
                scoreIA++;
            }else{
                console.log("Match nul");
            }
            break;
        case "Fu":
            if(enemyShifumi==="Shi"){
                console.log("User win")
                scoreUser++;
            }else if(enemyShifumi==="Mi"){
                console.log("IA win")
                scoreIA++;
            }else{
                console.log("Match nul");
            }
            break;
        case "Mi":
            if(enemyShifumi==="Fu"){
                console.log("User win")
                scoreUser++;
            }else if(enemyShifumi==="Shi"){
                console.log("IA win")
                scoreIA++;
            }else{
                console.log("Match nul");
            }
            break;
    } 
}

console.log("before");
shifumiBattle(shifumiUser,shifumiIA);
console.log("after")
;
