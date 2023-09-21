function analizeArray(arr) {
  const average = (arr) => {
    let res = 0
    arr.forEach((element) => {
      res = res + element
    })
    return res / arr.length
  }
  
  return {
    average: average(arr),
    max: Math.max(...arr),
    min: Math.min(...arr),
    length: arr.length
  }
}

module.exports = analizeArray
