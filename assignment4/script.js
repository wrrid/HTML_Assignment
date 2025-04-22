// map
Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// filter
Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// reduce
Array.prototype.myReduce = function (callback){
    let result = 0;

    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

// include
Array.prototype.myInclude = function (value) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i] === value){
      return true;
      }; 
  }
  return false;
};

// find
Array.prototype.myFind = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)){
      return this[i];
    } 
  }
  return undefined;
};

// slice
Array.prototype.mySlice = function (start = 0, end = this.length) {
  const result = [];

  for (let i = start; i < end && i < this.length; i++) {
    result.push(this[i]);
  }

  return result;
};

const arr = [1, 2, 3, 4, 5];

console.log(arr.myMap(x => x * 2));
console.log(arr.myFilter(x => x % 2 !== 0));
console.log(arr.myReduce((acc, cur) => acc + cur));
console.log(arr.myInclude(3));
console.log(arr.myFind(x => x > 2));
console.log(arr.mySlice(1,3));