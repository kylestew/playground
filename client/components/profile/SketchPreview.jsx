SketchPreview = React.createClass({
  propTypes: {
    sketch: React.PropTypes.object.isRequired
  },

  componentDidMount() {
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
    var script = this.props.sketch.code;
    userScript.text = script;
    userScript.async = false;
    head.appendChild(userScript);
  },

  render() {
    return (
      <div className="col-sm-6 col-md-4">
        <a href={ "/play/" + this.props.sketch._id }>
          <div className="thumbnail">
            <iframe ref="display" id={ "preview_" + this.props.sketch._id } className="preview" scrolling="no" sandbox="allow-scripts allow-pointer-lock allow-same-origin" allowFullScreen=""></iframe>
            <div className="caption">
              <h3>{ this.props.sketch.title }</h3>
            </div>
          </div>
        </a>
      </div>
    );
  }
});
