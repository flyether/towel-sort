
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let towelSortNumbers
  let arrayTowelSortNumber = []
  if (matrix === undefined){ return []}
    else {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          let columIndex = i % 2 === 0
          ? j
          : (matrix[i].length - j -1);
          towelSortNumbers = ( matrix[i][columIndex])
        arrayTowelSortNumber.push(towelSortNumbers)
        }  
      }
    }
   return arrayTowelSortNumber
}  





