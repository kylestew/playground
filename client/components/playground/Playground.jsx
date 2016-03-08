Playground = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      sketch: Sketches.findOne(this.props.sketchId)
    }
  },

  deleteSketch() {
    if (window.confirm("Delete this sketch?")) {
      Meteor.call(Sketches.Methods.deleteSketch, this.data.sketch._id, (error, response) => {
        if (error) {
          Bert.alert(error.reason, 'danger');
        } else {
          Bert.alert('Sketch deleted', 'success');
          FlowRouter.go("/");
        }
      });
    }
  },

  render() {
    if (!this.data.sketch) {
      // TODO: loading state
      return <div></div>;
    }

    return (
      <div id="playground">
        <div id="toolbar">

          <a href="/">
            <span className="glyphicon glyphicon-chevron-left"></span>
          </a>

          { this.data.sketch.title }

          <button type="button" className="btn btn-danger pull-right" onClick={ this.deleteSketch }>Delete</button>

        </div>
        <div id="workspace">
          <SketchDisplay sketch={ this.data.sketch } />
          <CodeEditor sketch={ this.data.sketch } />
        </div>
      </div>
    );
  }
});
