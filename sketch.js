var garden, gardenImage
var cat, catImage
var mouse, mouseImage

function preload() {
gardenImage = loadImage ("images/garden.png");
catImage = loadAnimation ("images/cat1.png, images/cat2.png);


}

function setup(){
    createCanvas(800,800);
    garden = createSprite(400,400);
    garden.addImage(gardenImage); 

    cat = createSprite(200,300)
    cat.addAnimation("running",catImage));

}

function draw(){
    background("blue");



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
