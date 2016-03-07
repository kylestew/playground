Profile = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      sketches: Sketches.find().fetch()
    }
  },

  newSketch() {
    Meteor.call(Sketches.Methods.createSketch, (error, response) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Sketch created!', 'success');
        FlowRouter.go("/play/" + response);
      }
    });
  },

  renderCells() {
    return this.data.sketches.map((sketch) => {
      return (
        <SketchPreview sketch={ sketch } />
      );
    });
  },

  render() {
    return (
      <div className="container">

        <br/>
        <br/>

        <button type="button" className="btn btn-primary" onClick={ this.newSketch }>New</button>

        <br/>
        <br/>

        <div className="row">
          { this.renderCells() }
        </div>

      </div>
    );
  }
});
