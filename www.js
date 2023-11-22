function invertCase(str) {
  const arr = str.split('');
  const add = ['!', '@', '#', '$', ','];
  console.log(arr);
  const newArr = [];
  arr.forEach((element) => {
    if (element == ',') {
      newArr.push(element);
    }
    if (element === element.toUpperCase()) {
      newArr.push(element.toLowerCase());
    }
    if (element === element.toLowerCase()) {
      newArr.push(element.toUpperCase());
    }
  });
  console.log(newArr);
  return newArr.join('');
}

console.log(invertCase('Hello, World!'));
