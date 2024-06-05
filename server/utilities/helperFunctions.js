function validateUserData(userData, requiredFields = []) {
  console.log("validateUserData :>> ", userData, requiredFields);
  for (const field of requiredFields) {
    console.log("userData[field]r :>> ", userData[field]);
    if (
      !userData[field] ||
      (typeof userData[field] === "string" && userData[field].trim() === "") ||
      (Array.isArray(userData[field]) && userData[field].length === 0)
    ) {
      return false; // Missing or empty field found
    }
  }
  return true; // All required fields are filled
}

// function checkObjectData(obj) {
//   if (Object.keys(obj).length === 0) {
//     return false;
//   }
//   for (const key in obj) {
//     if (typeof obj[key] === "object") {
//       if (!checkObjectData(obj[key])) {
//         return false;
//       }
//     } else if (
//       !obj[key] ||
//       (typeof obj[key] === "string" && obj[key].trim() === "")
//     ) {
//       return false;
//     }
//   }
//   return true;
// }

// function checkArrayData(arr) {}

module.exports = { validateUserData };
