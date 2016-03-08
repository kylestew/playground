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
      
      // save ref to editor for parent
      that.setState({
        editor: editor
      });

      // bind initial value
      editor.setValue(that.props.sketch.code);

      // tabs are spaces - 2
      editor.getSession().setTabSize(2);
      editor.getSession().setUseSoftTabs(true);

      // bind keys
      editor.commands.addCommand({
        name: 'run',
        bindKey: { win: 'Ctrl-S', mac: 'Command-S' },
        exec: function(editor) {
          that.props.saveRunSketch();
        }
      });

    });
  },

  render() {
    return <pre id="CodeEditor"></pre>;
  }
});
