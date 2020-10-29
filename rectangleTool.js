function RectangleTool() {
    
    this.icon = 'assets/rectangle.jpg';
    this.name = 'Rectangle';
    
    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;
    
    this.draw = function() {
        if (mouseIsPressed) {
            if (startMouseX == -1) {
                // record the first point of mouse click
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                // save current drawing state in memory
                loadPixels();
            } else {
                // make the saved image your main image
                updatePixels();
                // draw the rectangle
                rect(startMouseX, 
                     startMouseY, 
                     abs(mouseX-startMouseX), 
                     abs(mouseY-startMouseY));
            }
        } else if (drawing) {
            // set back to initial value
            // so that new rectangle will not be drawn until the next mouse click
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }        
    }
}