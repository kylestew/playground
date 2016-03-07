SketchPreview = React.createClass({
  propTypes: {
    sketch: React.PropTypes.object.isRequired
  },

  componentDidMount() {
    var script = this.props.sketch.code;
    var envWrapped = function(_p5) {
      with (_p5) {
        eval(script);
      }

      // HACK: bind all needed funcs
      var fxns = ['setup', 'draw', 'preload', 'mousePressed', 'mouseReleased',
      'mouseMoved', 'mouseDragged', 'mouseClicked', 'mouseWheel',
      'touchStarted', 'touchMoved', 'touchEnded',
      'keyPressed', 'keyReleased', 'keyTyped'];
      fxns.forEach(function(f) {
        var ind = script.indexOf(f+'(');
        // this is a gross hack within a hacky script that
        // ensures the function names found are not substrings
        // proper use of regex would be preferable...
        if (ind !== -1 && script[ind+f.length] === '(' &&
          eval('typeof ' + f) !== 'undefined') {
          with (_p5) {
            _p5[f] = eval(f);
          }
        }
      });
      if (typeof _p5.setup === 'undefined') {
        _p5.setup = function() {
          _p5.createCanvas(100, 100);
          _p5.background(200);
        }
      }
    }
    // TODO: if canvas too large, scale it somehow
    var instance = new p5(envWrapped, "preview_" + this.props.sketch._id);
    this.setState({
      runningP5Instance: instance
    });
  },

  render() {
    return (
      <div className="col-sm-6 col-md-4">
        <a href="#">
          <div className="thumbnail">
            <div id={ "preview_" + this.props.sketch._id} className="preview"></div>
            <div className="caption">
              <h3>{ this.props.sketch.title }</h3>
            </div>
          </div>
        </a>
      </div>
    );
  }
});
