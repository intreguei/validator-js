export default (files => {
  var re = /\.(csv)$/i;
  // let field = {
  //   name: null,
  //   valid: false,
  // };

  return re.test(files.name);
});
//# sourceMappingURL=fileTypeCsv.js.map