objectDetector = "";
img = "";
status_ = "";
function preload()
{
  img=loadImage("https://i.postimg.cc/7LVZZgp5/a-light-living-room-centred-around-a-jaettebo-three-and-a-ha-c7a5b708513cc0be58ebc3c4e94efd31.jpg");
}

function setup()
{
 canvas=createCanvas(600,400);
 canvas.center();
 objectDetector = ml5.objectDetector('cocossd', modelLoaded);
 document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function draw()
{
 image(img,0,0,600,400);
}
function modelLoaded()
{
  console.log("model loaded");
  status_=true;
  objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
  if (error){
    console.log("error");

  }
  if(results){
    console.log(results);
  }
}