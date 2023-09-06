export default {
  file: function file(name, type) {
    var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    return {
      name,
      type,
      size: size * 1024
    };
  }
};
//# sourceMappingURL=files.js.map