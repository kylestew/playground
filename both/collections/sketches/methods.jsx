
Sketches.Methods = {};
Sketches.Methods.createSketch = "sketches_createSketch";
Sketches.Methods.deleteSketch = "sketches_deleteSketch";

if (Meteor.isServer) {
  Meteor.methods({

    sketches_createSketch() {
      // if (!Meteor.userId()) {
        // throw new Meteor.Error("not-authorized");
      // }

      var code = `
function setup() {
  debugger;
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
        title: "Untitled Sketch",
        code: code
      });
    },

    sketches_deleteSketch(sketchId) {
      check(sketchId, String);

      Sketches.remove({_id:sketchId});
    },

  });
}
