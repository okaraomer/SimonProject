const delay = ms => new Promise(res => setTimeout(res, ms));
var gameBuf = [];
var gameIndex=0;
var gameIndex2= 0;

$(".SimonBtn").click(function(e){
    //console.log(attr("class"));
    var btnNumber = Number(this.className[3]);
    //
    if(gameIndex > 0)
    {}
        var expected = gameBuf[gameIndex2];
        if(btnNumber != expected)
        {
            gameIndex = 0;
            gameIndex2 =0;
            gameBuf = [];
            playMusic(5);
            $(".Header>h1").text("Game Over");
        }
        else 
        {
            gameIndex2++;
            playButton(btnNumber);
            if(gameIndex2 === gameIndex)
            {
                console.log($(".Header>h1").text() );
                $(".Header>h1").text("Superrrrr");
                setTimeout(() => {$(".Header>h1").text("My Simon");},800);
                setTimeout(() => {addLevel();},1000);
                gameIndex2 = 0;
            }
            else{

            }
    
        }    
    
})

$(".ReplayBtn").click(function(){
    playGame();
})
$(".NewGameBtn").click(function(){
    gameIndex = 0;
    addLevel();
})
function addLevel()
{
    console.log("addNewLevel " + gameIndex);
    var newNumber = Math.floor(Math.random()*4 + 1);
    gameBuf[gameIndex] = newNumber;
    gameIndex++;
    $(".level").text( gameIndex); 
    playGame();
}



const waitInMs = async () =>
{
    await delay(5000);
}
const playGame = async () =>
{
    console.log("playGame" + gameIndex);
    for (let index = 0; index < gameIndex; index++) {
        var myNumber = gameBuf[index]; 
       playButton(myNumber);
       await delay(500);
    }    
}

function pressButton(number) 
{
    playMusic(number);
    $(".btn"+ number).addClass("pressed"); 
}
function unPressButton(number) 
{
    $(".btn"+ number).removeClass("pressed"); 
}
function playButton(number)
{
    pressButton(number);
    setTimeout(unPressButton,500,number);
}



function playMusic(number)
{
    var soundPath;
    console.log("playMusic " + number);
    switch(number)
    {
        case 1:
            soundPath = './sounds/red.mp3';
            break;
        case 2:
            soundPath = './sounds/green.mp3';
            break;
        case 3:
            soundPath = './sounds/blue.mp3';
            break;
        case 4:
            soundPath = './sounds/yellow.mp3';
            break;
        default:
            soundPath = './sounds/wrong.mp3';
            break;
    }
    var audio = new Audio(soundPath);
    
    audio.play();
}



