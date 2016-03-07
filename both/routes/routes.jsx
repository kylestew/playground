FlowRouter.notFound = {
  name: 'notFound',
  action() {
    ReactLayout.render( App, { yield: <NotFound /> } );
  }
};

FlowRouter.route('/', {
  name: 'index',
  action() {
    // TEMP: show only profile
    ReactLayout.render(App, { yield: <Profile /> });
  }
});

FlowRouter.route('/play/:sketchId', {
  name: 'playground',
  action(params) {
    ReactLayout.render(App, { yield: <Playground sketchId={ params.sketchId } /> });
  }
});
