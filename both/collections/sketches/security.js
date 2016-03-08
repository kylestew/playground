// SECURITY: all operations happen only on server
// TEMP: TODO: secure these
Sketches.allow({
  insert: () => false,
  update: () => true,
  remove: () => false
});
// Sketches.deny({
//   insert: () => true,
//   update: () => true,
//   remove: () => true
// });
