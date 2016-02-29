Playground = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      sketch: Sketches.findOne()
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
        <CodeEditor />
      </div>
    );
  }

        // <header>
        //   <h1>Todo List ({this.data.incompleteCount})</h1>
        //
        //   <label className="hide-completed">
        //     <input
        //       type="checkbox"
        //       readOnly={true}
        //       checked={this.state.hideCompleted}
        //       onClick={this.toggleHideCompleted} />
        //     Hide Completed Tasks
        //   </label>
        //
        //   <AccountsUIWrapper />
        //
        //   { this.data.currentUser ?
        //     <form onSubmit={ this.handleSubmit } className="new-task">
        //       <input type="text" ref="textInput" placeholder="Type to add new tasks" />
        //     </form> : ''
        //   }
        // </header>
        //
        // <ul>
        //   { this.renderTasks() }
        // </ul>
});
