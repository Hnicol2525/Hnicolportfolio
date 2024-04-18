var storageData = [564, 545, 75, 7, 110];
var colors = ["red", "yellow", "blue", "green", "cyan"];
var storageNames = ["GoogleDrive", "OS", "iCloudPhotos", "iCloudDrive", "iCloud+"]


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();
}


function draw(){
let lastPiece = 0;

let total = getTotal();

console.log(total);

for(let i= 0; i < storageData.length; i++){
  let randColor = color(random(255), random(255), random(255));
  fill(randColor);
  let piece = map(storageData[i], 0, total, 0, TWO_PI);
  arc(
    width/2,
    height/2,
    300,
    300,
    lastPiece,
    lastPiece + radians(storageData[i])
  );
  lastPiece += piece;
}
}

function getTotal(){
  let total = 0;
  for(let i= 0; i < storageData.length; i++){
    total += storageData[i];
  }
  return total;
}

function drawLabel() {
for(let i= 0; i < storageData.length; i++){
  fill(0);
  textSize(24);
  text(storageNames[i], 100 + i * 100, 100);
}
}

// for (let i = 0; i < storageData.length; i++) {
//   let randColor = color(random(255), random(255), random(255));
//   fill(colors[i]);
//   circle(100 + i * 100, 100, storageData[i]);
//   fill(0);
// }