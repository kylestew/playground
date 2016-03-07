
Sketches.Methods = {};
Sketches.Methods.createSketch = "sketches_createSketch";

if (Meteor.isServer) {
  Meteor.methods({

    sketches_createSketch() {
      // if (!Meteor.userId()) {
        // throw new Meteor.Error("not-authorized");
      // }

      var code = `
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);
  rect(50,50,200,100);
}
      `;

      // TODO: default code
      return Sketches.insert({
        code: code
      });
    },

  });
}
