SketchDisplay = React.createClass({
  propTypes: {
    sketch: React.PropTypes.object.isRequired
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.sketch.code != nextProps.sketch.code) {
      this.stopiFrame();
      this.reloadiFrame(nextProps.sketch.code);
    }
  },

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.reloadiFrame(this.props.sketch.code);
  },

  // resize listener/handler
  updateDimensions: function() {
    console.log("update dim");
    this.stopiFrame();
    this.reloadiFrame(this.props.sketch.code);
  },
  componentWillUnmount: function() {
    window.removeEventListener("resize", this.updateDimensions);
  },

  stopiFrame() {
    var display = this.refs.display;
    if (display && display.contentWindow.remove) {
      display.contentWindow.remove();
    }
  },

  reloadiFrame(script) {
    var doc = this.refs.display.contentWindow.document;
    var head = doc.getElementsByTagName('head')[0];
    var body = doc.getElementsByTagName('body')[0];

    // clear existing
    head.innerHTML = "";
    body.innerHTML = "";

    head.innerHTML = `
      <style> body {padding: 0; margin: 0; border: 0;} </style>
    `;

    var p5lib = doc.createElement('script');
    p5lib.src = '/libs/p5-modified.js';
    head.appendChild(p5lib);

    var userScript = doc.createElement('script');
    userScript.type = 'text/javascript';
    userScript.text = script;
    userScript.async = false;
    head.appendChild(userScript);
  },

  render() {
    return (
      <iframe ref="display" id="SketchDisplay" scrolling="no" sandbox="allow-scripts allow-pointer-lock allow-same-origin" allowFullScreen=""></iframe>
    );
  }
});
