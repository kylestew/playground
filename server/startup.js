
// TEMP: SEED
if (Sketches.find().count() == 0) {
  Sketches.insert({
    code: `
      function setup() {
        createCanvas(400, 400);
      }

      function draw() {
        background(0);
        fill(255);
        rect(50,50,200,100);
      }
    `
  });
}
