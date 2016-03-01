CodeEditor = React.createClass({
  propTypes: {
    sketch: React.PropTypes.object.isRequired
  },

  componentDidMount() {
    var that = this;
    var ace = AceEditor.instance("CodeEditor", {
      theme: 'monokai',
      mode: 'javascript'
    }, function(editor) {

      // bind initial value
      editor.setValue(that.props.sketch.code);

      // bind keys
      editor.commands.addCommand({
        name: 'run',
        bindKey: { win: 'Ctrl-S', mac: 'Command-S' },
        exec: function(editor) {
          Sketches.update({_id:that.props.sketch._id},{$set:{
            code: editor.getValue()
          }});
        }
      });

    });
  },

  render() {
    return <pre id="CodeEditor"></pre>;
  }
});
