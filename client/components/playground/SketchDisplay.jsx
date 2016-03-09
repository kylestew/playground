SketchDisplay = React.createClass({
  propTypes: {
    sketch: React.PropTypes.object.isRequired
  },

  // componentWillReceiveProps(nextProps) {
    // var code = nextProps.sketch.code;
    // stop/remove running
  //   if (this.state.runningP5Instance != null) {
  //     this.state.runningP5Instance.remove();
  //   }
    // this.executeSketchCode(code);
  // },

  componentDidMount() {
    var doc = this.refs.display.contentWindow.document;
    var head = doc.getElementsByTagName('head')[0];
    var body = doc.getElementsByTagName('body')[0];

    head.innerHTML = `
      <style> body {padding: 0; margin: 0; border: 0;} </style>
    `;

    var p5lib = doc.createElement('script');
    p5lib.src = '/libs/p5.js';
    head.appendChild(p5lib);

    var userScript = doc.createElement('script');
    userScript.type = 'text/javascript';
    userScript.text = this.props.sketch.code;
    userScript.async = false;
    head.appendChild(userScript);
  },

  // executeSketchCode(script) {
  //   var envWrapped = function(_p5) {
  //     with (_p5) {
  //       eval(script);
  //     }
  //
  //     // HACK: bind all needed funcs
  //     var fxns = ['setup', 'draw', 'preload', 'mousePressed', 'mouseReleased',
  //     'mouseMoved', 'mouseDragged', 'mouseClicked', 'mouseWheel',
  //     'touchStarted', 'touchMoved', 'touchEnded',
  //     'keyPressed', 'keyReleased', 'keyTyped'];
  //     fxns.forEach(function(f) {
  //       var ind = script.indexOf(f+'(');
  //       // this is a gross hack within a hacky script that
  //       // ensures the function names found are not substrings
  //       // proper use of regex would be preferable...
  //       if (ind !== -1 && script[ind+f.length] === '(' &&
  //         eval('typeof ' + f) !== 'undefined') {
  //         with (_p5) {
  //           _p5[f] = eval(f);
  //         }
  //       }
  //     });
  //     if (typeof _p5.setup === 'undefined') {
  //       _p5.setup = function() {
  //         _p5.createCanvas(100, 100);
  //         _p5.background(200);
  //       }
  //     }
  //   }
  //
  //   var instance = this.refs.display.contentWindow.execP5Script(envWrapped);
  //   debugger;
  //   // var instance = new p5(envWrapped, 'p5target');
  //
  //   this.setState({
  //     runningP5Instance: instance
  //   });
  // },

  render() {
    return (
      <iframe ref="display" id="SketchDisplay" scrolling="no" sandbox="allow-scripts allow-pointer-lock allow-same-origin" allowFullScreen=""></iframe>
    );
    //return <div id="SketchDisplay"></div>;
  }
});
