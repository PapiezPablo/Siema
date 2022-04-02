
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const Up = new Image();
const Left = new Image();
const Right = new Image();
const Down = new Image();
const Mid = new Image();
const Ballp = new Image();
const Herop = new Image();
Up.src = "./IMG/gora.png";
Left.src = "./IMG/lewo.png";
Right.src = "./IMG/prawo.png";
Down.src = "./IMG/dol.png";
Mid.src = "./IMG/mid.png";
Ballp.src= "./IMG/ball1.png";
Herop.src= "./IMG/skull.png";

canvas.width = 1024;
canvas.height = 640;
const cw = canvas.width;
const ch = canvas.height;


const HeroSize = 30;
let HeroX = 100;
let HeroY = 410;
let HeroW = 30;
let HeroH = 30;

const ballsize = 20;
let ballX = cw/2;
let ballY = 75;
let speedballX = -1;                              //Math.floor(Math.random() * (-1 - 1));
let speedballY = 1;

const velocity = 15;

    function tlo(){
        ctx.drawImage(Mid,50,50,925,540);
    }
    function map(){
        ctx.drawImage(Left,0,0,50,590);
        ctx.drawImage(Right,974,46,51,590);
        ctx.drawImage(Up,-1,-1,1025,51);
        ctx.drawImage(Down,0,590,1024,82);

    }
    function ball(){
        ctx.fillStyle = 'white';
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
        if((ballX <= HeroX + HeroH) && (ballY + ballsize / 2 >= HeroY) && (ballY + ballsize / 2 <= HeroY + HeroH)){
          window.location.reload(true);
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
    function Hero(){
        ctx.fillStyle = "red";
        ctx.drawImage(Herop,HeroX, HeroY, HeroW, HeroH);

        if(HeroY <= 50 || HeroY + HeroSize >= 590) //Przekroczenie granicy map przez Postać 
        {
            window.location.reload(true);
        }
        
        
        
          window.addEventListener("keydown", move);
    }

    const move = (e) => {
      console.log(e.keyCode)
      console.log(HeroX);
      console.log(HeroY);
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

    

 
    function game(){
    tlo();
    map();
    Hero();
    ball();
    }
    setInterval(game, 1000 / 60);


  



