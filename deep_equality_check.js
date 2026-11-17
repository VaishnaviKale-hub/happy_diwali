function test(message, expectedResult, a, b) {
  const result = isEqual(a, b);
  const icon = expectedResult === result ? "✅" : "❌";
  console.log(`${icon} || ${message}`);
}

function testNumber() {
  test("same numbers are equal", true, 1, 1);
  test("different number values are unequal", false, 1, 3);
}

function testString() {
  test("same strings are equal", true, "1", "1");
  test("different strings are unequal", false, "hi", "1");
}

function testBoolean() {
  test("same booleans are equal", true, false, false);
  test("different booleans are unequal", false, true, false);
}

function testArray() {
  test("two arrays with same values are equal", true, [1], [1]);
  test("two arrays  with different values are unequal", false, [1], [2]);
  test("two nested arrays with same values are equal", true, [[1]], [[1]]);
  test("two nested arrays with different values are unequal", false, [[1]], [[2]]);
  test("two empty arrays are equal", true, [], []);
  test("arrays with different values are unequal", false, [], [1]);
  test("two nested empty arrays  equal", true, [[]], [[]]);
  test("nested empty array and nested array with values are unequal", false, [[]], [[1, 2]]);


}

function testObject() {
  test("objects with same key and values are equal", true, { a: 1 }, { a: 1 });
  test("two objects with same key and different values are unequal", false, { a: 1 }, { a: 2 });
  test("two objects with same key and values in different order are equal", true, { a: 1, b: 2 }, { b: 2, a: 1 });
  test("two nested objects with different key and values are unequal", false, { a: 2 }, { b: 3 });
  test("same objects are equal", true, {}, {});
  test("two nested objects with same key values are equal", true, { a: {} }, { a: {} });
}

function testDifferentTypesEquality() {
  test("number and string are unequal", false, 1, "1");
  test("number and boolean are unequal", false, 1, false);
  test("number and array are unequal", false, 1, [1]);
  test("number and object are unequal", false, 1, {});

  test("boolean and string are unequal", false, true, "hi");
  test("boolean and array are unequal", false, false, [1]);
  test("boolean and object are unequal", false, false, {});

  test("string and boolean are unequal", false, "hi", false);
  test("string and array are unequal", false, "hi", [1]);
  test("string and object are unequal", false, "hi", {});

  test("two array of object with same keys and values are equal", true, [{ a: 1 }], [{ a: 1 }]);
  test("two objects containing array with same keys and values are equal", true, { a: [1] }, { a: [1] });
  test("one array and one object are not equal", false, {}, []);
}

function testNaNUndefinedNull() {
  test("two NaNs are equal", true, NaN, NaN);
  test("two nulls are equal", true, null, null);
  test("two undefinds are equal", true, undefined, undefined);
}


function type(a) {
  if (a === null) return "null";
  if (Array.isArray(a)) return "array";
  if (Number.isNaN(a)) return "NaN";
  return typeof a;
}

function areTypesEqual(a, b) {
  return type(a) === type(b);
}

function areValuesEqual(a, b) {
  return a === b;
}

function areArraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (const key in a) {
    if (!isEqual(a[key], b[key])) return false;
  }
  return true;
}

function areObjectsEqual(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  for (const key in a) {
    if (!(key in b)) return false;
    if (!isEqual(a[key], b[key])) return false;
  }
  return true;
}

function isEqual(a, b) {
  if (!areTypesEqual(a, b)) return false;

  switch (type(a)) {
    case "array": return areArraysEqual(a, b);
    case "object": return areObjectsEqual(a, b);
    case "NaN": return true;
  }
  return areValuesEqual(a, b);
}

function main() {
  testNumber();
  testString();
  testBoolean();
  testArray();
  testObject();
  testDifferentTypesEquality();
  testNaNUndefinedNull();
}

main();


