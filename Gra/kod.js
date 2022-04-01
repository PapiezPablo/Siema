
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 640;
const cw = canvas.width;
const ch = canvas.height;

const tlo = new Image();
tlo.src = 'IMG/tlo.png';

const HeroSize = 30;
let HeroX = 100;
let HeroY = 410;

const velocity = 0.1;
tlo.addEventListener("load", e=> {
    ctx.drawImage(tlo, 0, 0);
    function mapb(){
        ctx.fillStyle = 'aquamarine';
        ctx.fillRect(0,0,1024,100);
        ctx.fillRect(0,540,1024,100);
    }
    function mapg(){
        ctx.fillStyle = 'aquamarine';
        ctx.fillRect(100,440,60,20);
        ctx.fillRect(250,340,60,20);
        ctx.fillRect(350,440,60,20);
        ctx.fillRect(450,280,60,20);
        ctx.fillRect(550,480,60,20);
        ctx.fillRect(600,240,60,20);
        ctx.fillRect(700,340,60,20);
        ctx.fillRect(800,440,60,20);
        ctx.fillRect(850,220,60,20);
        ctx.fillRect(850,220,60,20);
        ctx.fillRect(150,220,60,20);
}
    function Hero(){
        ctx.fillStyle = "red";
        ctx.fillRect(HeroX, HeroY, HeroSize, HeroSize);

        if(HeroY <= 100 || HeroY + HeroSize >= 540) //Przekroczenie granicy mapb
        {
            window.location.reload(true);
        }
        
        const move = (e) => {
            console.log(e.keyCode)
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
                
                break;
            }
          }
        
          window.addEventListener("keydown", move);
    }

    

 
    function game(){
    mapb();
    mapg();
    Hero();
    }
    setInterval(game, 1000 / 30);
})






