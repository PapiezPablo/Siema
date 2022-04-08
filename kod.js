
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const Up = new Image();
const Left = new Image();
const Right = new Image();
const Down = new Image();
const Mid = new Image();
const Ballp = new Image();
const Herop = new Image();
const heart1 = new Image();
const heart2 = new Image();
const heart3 = new Image();
const skull1 = new Image();
const skull2 = new Image();
const skull3 = new Image();
const tron = new Image();
const wallEnd = new Image();
const wallStart = new Image();
Up.src = "./IMG/gora.png";
Left.src = "./IMG/lewo.png";
Right.src = "./IMG/prawo.png";
Down.src = "./IMG/dol.png";
Mid.src = "./IMG/mid.png";
Ballp.src= "./IMG/ball1.png";
Herop.src= "./IMG/skull.png";
heart1.src="./IMG/skull.png";
heart2.src="./IMG/skull.png";
heart3.src="./IMG/skull.png";
skull1.src = "./IMG/skull.png";
skull2.src = "./IMG/skull2.png";
skull3.src = "./IMG/skull3.png";
tron.src="./IMG/tron.png";
wallEnd.src ="./IMG/wall1.jpg";
wallStart.src ="./IMG/start.jpg";


canvas.width = 1024;
canvas.height = 640;
const cw = canvas.width;
const ch = canvas.height;

let los = Math.floor(Math.random()*(1 - (-1)));
if(los === 0){
  los = -1;
}
let los2 = Math.floor(Math.random()*(1 - (-1)));
if(los2 === 0){
  los2 = -1;
}

const HeroSize = 30;
let HeroX = 100;
let HeroY = 410;
let HeroW = 30;
let HeroH = 30;

const ballsize = 20;
let ballX = cw/2;
let ballY = 75;
let speedballX = los;                              //Math.floor(Math.random() * (1 - (-1)) + (-1));
let speedballY = los2;

const ballsize2 = 20;
let ballX2 = cw/2;
let ballY2 = 75;
let speedballX2 = los;                              //Math.floor(Math.random() * (-1 - 1));
let speedballY2 = los2;

const velocity = 10;

let heartAll = 3;
let heartSize1 = 40;
let heartSize2 = 40;
let heartSize3 = 40;

let score = 0;


console.log(los);


    function tlo(){
        ctx.drawImage(Mid,50,50,925,540);
    }
    function map(){
        ctx.drawImage(Left,0,0,50,590);
        ctx.drawImage(Right,974,48,51,590);
        ctx.drawImage(Up,-1,-1,1025,51);
        ctx.drawImage(Down,0,590,1024,82);
        ctx.drawImage(heart1,100,20,heartSize1,heartSize1);
        ctx.drawImage(heart2,150,20,heartSize2,heartSize2);
        ctx.drawImage(heart3,200,20,heartSize3,heartSize3);

        ctx.fillStyle = 'white';
        ctx.font = "Italic 50px Times New Roman"
        ctx.fillText(score, 930,60)

    }
    function ball(){
        ctx.drawImage(Ballp,ballX, ballY, ballsize,ballsize);  
        
        ballX += speedballX;
        ballY += speedballY;

        if(ballY <= 50 || ballY + ballsize >= 590) //Przekroczenie granicy map przez Piłke
        {
            speedballY = -speedballY;
            speedUp();
        }
        if(ballX <= 50 || ballX + ballsize >= 974) 
        {
            speedballX = -speedballX;
            speedUp();
        }
        if((ballX <= HeroX + HeroH)&& (ballY + ballsize / 2 >= HeroY) && (ballY + ballsize / 2 <= HeroY + HeroH) && (ballX >= HeroX)){
          heartAll = -1;
        }
    }
    function spawnball(){
        ctx.drawImage(Ballp,ballX2, ballY2, ballsize2,ballsize2);  
        
        ballX2 += speedballX2;
        ballY2 += speedballY2;

        if(ballY2 <= 50 || ballY2 + ballsize2 >= 590) //Przekroczenie granicy map przez Piłke
        {
            speedballY2 = -speedballY2;
            speedUp2();
        }
        if(ballX2 <= 50 || ballX2 + ballsize >= 974) 
        {
            speedballX2 = -speedballX2;
            speedUp2();
        }
  }
    
    function speedUp(){
        if(speedballX > 0 && speedballX < 16){
          speedballX += 0.5;
        }
        if(speedballX < 0 && speedballX > -16){
          speedballX -= 0.5;
        }
        if(speedballY > 0 && speedballY < 16){
          speedballY += 0.5;
        }
        if(speedballY < 0 && speedballY > -16){
          speedballY -= 0.5;
        }
    }
    function speedUp2(){
      if(speedballX2 > 0 && speedballX2 < 16){
        speedballX2 += 0.5;
      }
      if(speedballX2 < 0 && speedballX2 > -16){
        speedballX2 -= 0.5;
      }
      if(speedballY2 > 0 && speedballY2 < 16){
        speedballY2 += 0.5;
      }
      if(speedballY2 < 0 && speedballY2 > -16){
        speedballY2 -= 0.5;
      }
  }
    function Hero(){
        ctx.fillStyle = "red";
        ctx.drawImage(Herop,HeroX, HeroY, HeroW, HeroH);  
          window.addEventListener("keypress", move);
          window.addEventListener("keydown", move1);
    }
      function dmg(){
        if(HeroY <= 50){ //Przekroczenie granicy map przez Postać 
         heartAll -= 1;
         HeroY = 100;
        }
        if(HeroY + HeroSize >= 590){
          heartAll -= 1;
          HeroY = 490;
        }
        if(HeroX <= 50){
          heartAll -= 1;
          HeroX = 100;
        }
        if(HeroX + HeroSize >= 973){
          heartAll -= 1;
          HeroX =873;
        }else{};

        if(heartAll == 2){
          heartSize3 = 0;
        }
        
        if(heartAll == 1){
          heartSize2 = 0;
        }
        
        if(heartAll == 0){
          heartSize1 = 0;
        }
      }
      function ball2(){
        if(score >= 50){
          spawnball();
          if((ballX2 <= HeroX + HeroH) && (ballY2 + ballsize2 / 2 >= HeroY) && (ballY2 + ballsize2 / 2 <= HeroY + HeroH) && (ballX2 >= HeroX)){
            heartAll = -1;
          }
        }
      };


    const move = (e) => {
      //console.log(e.keyCode)
      //console.log(HeroX);
      //console.log(HeroY);
      //37 to klawisz strzałki w lewo
      switch (e.keyCode) {
        case 97:
          HeroX -= velocity;
          break;
        case 119:
          HeroY -= velocity;
          break;
        case 100:
          HeroX += velocity;
          break;
        case 115:
          HeroY += velocity;
          break;
      }
    }
    const move1 = (e) => {
      //console.log(e.keyCode)
      //console.log(HeroX);
      //console.log(HeroY);
      //37 to klawisz strzałki w lewo
      switch (e.keyCode) {
        case 37:
          HeroX -= velocity;
          break;
        case 38:
          HeroY -= velocity;
          break;
        case 39:
          HeroX += velocity;
          break;
        case 40:
          HeroY += velocity;
          break;
      }
    }
    
    function scoreP(){
      score += 1;
    }
  


    function start(){
      ctx.drawImage(wallStart,0,0,cw,ch);
      ctx.drawImage(tron,300,310,120,120);
      ctx.drawImage(tron,450,310,120,120);
      ctx.drawImage(tron,600,310,120,120);

      ctx.drawImage(skull1,330,340,skull1S,skull1S);
      ctx.drawImage(skull2,480,340,skull2S,skull2S);
      ctx.drawImage(skull3,630,340,skull3S,skull3S);

      

      window.addEventListener("keypress", moveS);
    }


    const moveS = (e) => {
      //console.log(e.keyCode)
      //console.log(HeroX);
      //console.log(HeroY);
      //37 to klawisz strzałki w lewo
      switch (e.keyCode) {
        case 49:
          if(selectH == false){
          skull1S = 0;
          skull2S = 60;
          skull3S = 60;
          Herop.src = './IMG/skull.png';
          on = true;
          }
          break;
        case 50:
          if(selectH == false){
          skull1S = 60;
          skull2S = 0;
          skull3S = 60;
          Herop.src = './IMG/skull2.png';
          on = true;
          }
          break;
        case 51:
          if(selectH == false){
          skull1S = 60;
          skull2S = 60;
          skull3S = 0;
          Herop.src = './IMG/skull3.png';
          on = true;
          }
          break;
        case 13:
          if(on == true){
          silnikpo();
          clearInterval(Int3);
          selectH = true;
          }
          break;
        case 32:
          if(blockS == true){
          window.location.reload(true);
          }
      }
    }

      let skull1S = 60;
      let skull2S = 60;
      let skull3S = 60;

      let on = false;                  //wylacz enter
      let selectH = false;            //wybierz postac
      let blockS = false;            //blok dla spacji

      function End(){
        let sx = 485;
        let sy = 380;
        ctx.drawImage(wallEnd,cw/2 - 120,ch/2 - 120,240,240);
        ctx.fillStyle = 'red';
        ctx.font = "Normal 70px Times New Roman";
        ctx.fillText(score,sx,sy);

        if(score >= 10){
          sx = 485;
        }

        

        
      }

    function silnikpo(){
    function game(){
    tlo();
    map();
    Hero();
    ball();
    ball2();
    dmg();
    if(heartAll <= -1){
    
    clearInterval(Int1);
    clearInterval(Int2);
    setInterval(End, 1000/60);
    blockS = true;
    }
    on = false;
    };
    let Int1 = setInterval(game,1000/60);
    let Int2 = setInterval(scoreP, 1000);
    }


  window.addEventListener("load",start);
  let Int3 = setInterval(start, 1000/60);

 

