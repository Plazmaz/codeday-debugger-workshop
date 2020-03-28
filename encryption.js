// This code converts this 2d array 
// Into a single string by multiplying them.
let xyArray = [
    [71, 3, 3, 2, 2, 2, 3, 2, 2, 2, 11, 3,
         3, 2, 2, 3, 2, 101, 2, 2, 3, 2, 3],
     [1, 37, 37, 50, 16, 53, 37, 49, 22, 16, 11, 37,
         39, 16, 51, 35, 60, 1, 50, 16, 35, 58, 11]

]
function generateString(xyArray) {
    let arrX = [];
    let arrY = [];
    let count = xyArray.length - 1;
    // Fill arrX with first values (xyArray[0] is X)
    for(let i = 0; i < count; i++) {
        arrX.push(xyArray[0][i]);
    }
    //Fill arrY with second values (xyArray[1] is Y)
    for(let i = 0; i < count; i++) {
        arrY.push(xyArray[0][i]);
    }
    let outStr = ""
   // Loop through our arrays
    for(let i = 0; i < count; i++) {
       // Multiply values in x and y array
        let curCharCode = arrX[i] * arrY[i];
       // Convert that character code to a string
       // and add to our output string
        outStr += String.fromCharCode(curCharCode);
    }

    return outStr;
}