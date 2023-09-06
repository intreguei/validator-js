export default (files => {
  var re = /\.(jpg|svg|jpeg|png|bmp|gif)$/i;
  // let field = {
  //   name: null,
  //   valid: false,
  // };

  return re.test(files.name);
});
//# sourceMappingURL=fileType.js.map