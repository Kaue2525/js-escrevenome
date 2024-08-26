function setup() {

    createCanvas(600, 600);
  
  
  background("black");
  
  }
  
  function draw() {
  
   
  
    stroke("white")
  
    fill("rgb(14,0,255)")
  
   
  
    // console.log(mouseIsPressed)
  
   
  
    if (mouseIsPressed) {
  
      rect(mouseX, mouseY, 20 , 35)
  
    }
  
  }