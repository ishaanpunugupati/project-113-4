function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 150, 100, 300, 280);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(150, 100, 50);

    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect( 175, 85, 250, 25);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(150, 380, 50);

    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect( 175, 365, 250, 25);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(450, 380, 50);
        
    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect( 440, 125, 25, 230);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(450, 100, 50);

    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect( 135, 125, 25, 230);

}

function take_snapshot(){
    save('ishaan.png');
}