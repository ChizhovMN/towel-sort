
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix)) {
    return [];
  } else {
    // for (let i = 0; i < matrix.length; i++) {
    //   if (i % 2 === 1) {
    //     matrix[i].sort((a, b) => b - a)
    //   }
    // }
    // return matrix.flat();
    return matrix.map((item, index) => index % 2 == 1 ? item.sort((a, b) => b - a) : item).flat();
  }
}