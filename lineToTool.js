function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";
    
    // initialize mouse start position before mouse is pressed
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){
                // record the first point of line tool
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
                // save current drawing state in memory
				loadPixels();
			}

			else{
                // make the saved image your main image
				updatePixels();
                // draw the line
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
        // since drawing is set to true, when mouse is released 
        // the following block will be excuted
		else if(drawing){
            // set back to initial value
            // so that new line will not be drawn until the next mouse click
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
