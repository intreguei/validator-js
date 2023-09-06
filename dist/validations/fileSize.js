export default ((files, size) => {
  if (isNaN(size)) return false;
  var nSize = size * 1024;
  return files.size <= nSize;
});