// SECURITY: all operations happen only on server
Sketches.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});
Sketches.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});
