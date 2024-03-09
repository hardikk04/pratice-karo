const str1 = "hello";
const str2 = "hardik";

const fun = (str1, str2) => {
  const merge = str1.concat(str2);
  const obj = {};
  for (let i = 0; i < merge.length; i++) {
    obj[merge[i]] = (obj[merge[i]] || 0) + 1;
  }

  let result = "";
  for (let key in obj) {
    result += key.repeat(obj[key]);
  }
  return result;
};

console.log(fun(str1, str2));
