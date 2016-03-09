Playground = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      sketch: Sketches.findOne(this.props.sketchId)
    }
  },

  saveRunSketch() {
    var code = this.refs.editor.state.editor.getValue();
    if (code != this.data.sketch.code) {
      Sketches.update({_id:this.data.sketch._id},{$set:{
        code: code
      }}, function(err, success) {
        if (success) {
          Bert.alert('Sketch saved', 'success');
        }
      });
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

          <span className="pull-right">
            <button type="button" className="btn btn-success" onClick={ this.saveRunSketch }>Save/Run [cmd+s]</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-danger" onClick={ this.deleteSketch }>Delete</button>
          </span>

        </div>
        <div id="workspace">
          <SketchDisplay sketch={ this.data.sketch } />
          <CodeEditor ref="editor" sketch={ this.data.sketch } saveRunSketch={ this.saveRunSketch } />
        </div>
      </div>
    );

  }
});
