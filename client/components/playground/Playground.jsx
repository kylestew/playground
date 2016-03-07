Playground = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      sketch: Sketches.findOne('qF8fYYhBYEwgnLwwH')
    }
  },

  render() {
    if (!this.data.sketch) {
      // TODO: loading state
      return <div></div>;
    }

    return (
      <div id="workspace">
        <SketchDisplay sketch={ this.data.sketch } />
        <CodeEditor sketch={ this.data.sketch } />
      </div>
    );
  }
});
