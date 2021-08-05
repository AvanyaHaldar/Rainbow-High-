var canvas = new fabric.Canvas('myCanvas');

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_img(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: block_y,
            left: block_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keypressed = e.keyCode;
console.log(keypressed);

if (keypressed == 66) {
	console.log("b is Pressed");
	new_img("Bella_Parker.png");
}

if (keypressed == 80) {
	console.log("p is Pressed");
    block_x=block_x+200;
	new_img("Poppy_Rowan.png");
}

if (keypressed == 82) {
    console.log("r is Pressed");
    block_x=block_x+200;
    new_img("Ruby.png");
}

if (keypressed == 83) {
    console.log("s is Pressed");
    block_x=block_x+200;
    new_img("Sunny_Madison.png");
}

if (keypressed == 86) {
    console.log("v is Pressed");
    block_x=block_x+200;
    new_img("Violet_Willow.png");
}
}