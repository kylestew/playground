App = React.createClass({
  render() {
    return (
      <div className="app-root">
        { this.props.yield }
      </div>
    );
  }
});
