
var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
var block_im_ob = "";

function  new_image(){
	fabric.Image.fromURL("BirthdayImage.jpg", function (Img){

		block_im_ob = Img;
		block_im_ob.scaleToWidth(700);
		block_im_ob.scaleToHeight(510);
		block_im_ob.set({

			top:0,
			left:0

		});
		
		canvas.add(block_im_ob);

	});
}


function playSound(){
	x.play();
}
