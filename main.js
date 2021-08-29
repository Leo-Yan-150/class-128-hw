song = "";
song2 = "";
lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;

function preload(){
    song = loadSound("music.mp3");
    song2 = loadSound("moosic.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("model is officially loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        lwx = results[0].pose.leftWrist.x;
        lwy = results[0].pose.leftWrist.y;
        console.log("left wrist x = " + lwx + ". left wrist y = " + lwy + ".");

        rwx = results[0].pose.rightWrist.x;
        rwy = results[0].pose.rightWrist.y;
        console.log("right wrist x = " + rwx + ". Right wrist y = " + rwy + ".");
    }
}