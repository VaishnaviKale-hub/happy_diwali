function areElementsEqual(a, b) {
  for (const key in a) {
    if (!isEqual(a[key], b[key]) || !(key in b)) return false;
  }
  return true;
}

function isEqual(a, b) {
  if (a === b) return true;
  if (typeof b === 'object' && typeof a === 'object') {
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    if (Array.isArray(a) === Array.isArray(b)) return areElementsEqual(a, b);
  }

  return false;
}


test("function", console.log, console.log, true); //true
test("undefineds", undefined, undefined, true);//true
test("numbers", 1, 3, false);//true
test("object with different keys", { a: undefined }, { b: 1 }, false);//false
test("empty object and array", {}, [], false);
test("undefined and empty object", undefined, {}, false); //false
test("strings", "a", "a", true); // true
test("Empty arrays", [], [], true); // true
test("array with same numbers", [1], [1], true); // true
test("Arrays of different length", [1], [1, 2], false); // false
test("arrays of different numbers", [1, 2], [2, 1], false); //false
test("string and number", 1, "1", false); // false
test("object with same key and value", { a: 1 }, { a: 1 }, true); // true
test("object with different key and same value", { a: 1 }, { b: 1 }, false); // false
test("object with same key-value in diff order", { a: 1, b: 2 }, { b: 2, a: 1 }, true); //true
test("object with array", { a: [1] }, { a: [1] }, true); // true
test("nested objects", { a: { b: 1 } }, { a: { b: 1 } }, true); // true 
test("array of object", [{ a: 1 }], [{ a: 2 }], false);

test("array object", [1, 2], { 0: 1, 1: 2 }, false);
test("comparing NaN", NaN, NaN, false);

function test(description, a, b, expectedResult) {
  const result = isEqual(a, b);
  const icon = result === expectedResult ? "✅" : "❌";
  console.log(icon, description);
}
