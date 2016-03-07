Profile = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      sketches: Sketches.find().fetch()
    }
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

        <div className="row">
          { this.renderCells() }
        </div>

      </div>
    );
  }
});
