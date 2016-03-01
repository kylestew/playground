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
        bindKey: { win: 'Ctrl-R', mac: 'Command-R' },
        exec: function(editor) {

          console.log("run!");
          
        }
      });

    });
  },

  render() {
    return <pre id="CodeEditor"></pre>;
  }
});
