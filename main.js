sound="";

function preload(){
    sound=loadSound("red_alert.mp3");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(500,250);

    video=createCapture(VIDEO);
    video.hide();


    object_detector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("Identify").innerHTML="Status:Detecting For Baby";


}

function modelLoaded(){
    console.log("Model is working");
}


 
function gotResults(error,result){
    if (error){
        console.log(error);
    }
    else{
    console.log(results);
    
    
    }
}



function draw(){
    image(video,0,0,300,300)
objectDetector.Detect(video,gotResults)
object=results;
    if (results[0].label=="person"){
        document.getElementById('Found').innerHTML="Baby/person is found"
        sound.stop();
    }
    else{
document.getElementById('Found').innerHTML="BABY IS NOT FOUND. ALERT"
sound.play();
sound.rate(1);
sound.setVolume(1);
    }
}







