var o = {"a": 1,
  "b": 3,
  "name": "thing"};

var res = "";
for (var k in o) {
  res += o[k];
}

console.log(res)
