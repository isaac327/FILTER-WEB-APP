noseX=0;
noseY=0;

leftEyeX=0;
leftEyeY=0;

function preload(){
    nose=loadImage('nose.png');
    hat=loadImage('tophat.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('model is good');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-40;
        noseY=results[0].pose.nose.y-25;

        leftEyeX=results[0].pose.leftEye.x-105;
        leftEyeY=results[0].pose.leftEye.y-160;

    }
}

function draw(){
    image(video,0,0,300,300);
    image(nose,noseX,noseY,80,80);
    image(hat,leftEyeX,leftEyeY,170,120)
}

function take_snapshot(){
    save('clown.png');
}