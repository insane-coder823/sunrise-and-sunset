const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){


        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseType = await response.json();
        
        console.log(responseType);
        
        var dt = responseType.datetime;
        
        console.log(dt);
        
        var hour = dt.slice(11,13);
        
        console.log(hour);

        if(hour>=6 && hour<=9){

            bg = "sunrise2.png";
            
            }

        if(hour>=10 && hour<=12){

            bg = "sunrise3.png";
                
             }

        if(hour>=13 && hour<=15){

            bg = "sunrise5.png";
                
            }

        if(hour>=16 && hour<=18){

             bg = "sunset7.png";
                
            }  
            
        if(hour>=19 && hour<=20){

            bg = "sunset11.png";
                
            }

        if(hour>=21 && hour<=5){

            bg = "sunset12.png";
                
            }

            backgroundImg = loadImage(bg);

console.log(backgroundImg);


}
