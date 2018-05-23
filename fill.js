Bitmap.prototype.fill = function(row, col, new_color) {
    const old_color = this.grid[row][col];
    if(old_color === new_color) return;
    this.setColor(row, col, new_color);

    var queue = [];
    
    queue.push([row, col])
    
    while(queue.length > 0){
        let currentCellCoords = queue.shift();
        let cellAbove = [currentCellCoords[0] - 1, currentCellCoords[1]];
        let cellBelow = [currentCellCoords[0] + 1,currentCellCoords[1]];
        let cellLeft = [currentCellCoords[0], currentCellCoords[1] - 1];
        let cellRight = [currentCellCoords[0], currentCellCoords[1] + 1];
        console.log(currentCellCoords)
        
        let cellAboveColor = this.grid[cellAbove[0]][cellAbove[1]];
        let cellBelowColor = this.grid[cellBelow[0]][cellBelow[1]];
        let cellLeftColor = this.grid[cellLeft[0]][cellLeft[1]];
        let cellRightColor = this.grid[cellRight[0]][cellRight[1]];
        console.log(cellRightColor);
        
        console.log(cellAboveColor, old_color)
        if (cellAboveColor == old_color) {
            this.setColor(cellAbove[0], cellAbove[1], new_color);
            queue.push([cellAbove[0], cellAbove[1]])
        }
        if (cellBelowColor == old_color) {
            this.setColor(cellBelow[0], cellBelow[1], new_color)
            queue.push([cellBelow[0], cellBelow[1]])
        };
        if (cellLeftColor == old_color) {
            this.setColor(cellLeft[0], cellLeft[1], new_color)
            queue.push([cellLeft[0], cellLeft[1]])
        };
        if (cellRightColor == old_color) {
            this.setColor(cellRight[0],cellRight[1], new_color)
            queue.push([cellRight[0],cellRight[1]])
        };



     
        
    

        
    }



    // The rest of the flood fill algorithm is given in pseudo-code below.
    // Convert the following pseudo-code comments into javascript
    // to complete the implementation of this method.
    //
    //
    // Push the coordinates [row, col] onto the queue.
    // While the queue is not empty:
    //    Shift a pair of coordinates [r,c] off the front of the queue.
    //    The 4-connected neighbors are the cells above, below, left, and right.
    //    Check each of those 4 neighbors:
    //       If the neighbor is old_color:
    //          Set the neighbor to new_color.
    //          Add the neighbors coordinates to the queue
    //          (to ensure we later check its neighbors as well).
}