const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(obj1, obj2) {
// returns true if obj1 and obj2 match = same number of keys, key:values match in each object
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } 
  console.log(obj1);
  console.log(obj2, "Object 2");
  console.log(Object.keys(obj1));
   for (const key of Object.keys(obj1)) {
    console.log(key, "beginning of loop");
    console.log(obj1[key], "object 1");
    console.log(obj2[key], "Object 2");
    if (obj1[Object.keys[key]] !== Object.keys(obj2)[key]) {
      return false;
    }
   } return true;
// returns false if obj1 and obj2 do not match = diff number of keys or key:value pairs don't match

}; 

// TEST CODE

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual((eqObjects(shirtObject , anotherShirtObject)), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual((eqObjects(shirtObject , longSleeveShirtObject)), false);