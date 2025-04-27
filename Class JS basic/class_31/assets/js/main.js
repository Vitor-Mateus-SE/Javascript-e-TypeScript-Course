// write a function called epaisage who recive two numbers, width and height of a image, return true if the image
//is in landscape mode (when the width is bigger than the height)
/* function epaisage(width, height) {
  return width >= height;
 
}
console.log(epaisage(1080, 1080)); */
const epaisage = (widht, height) => widht > height;
console.log(epaisage(1081, 1080));
