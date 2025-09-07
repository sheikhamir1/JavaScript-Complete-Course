/****************************************************
 📘 JavaScript Comparisons - Complete Guide
-----------------------------------------------------
👉 In this file, we’ll explore comparison operators:
   >   <   >=   <=   ==   !=   ===   !==
   
✅ Covered Topics:
1. Basic comparisons
2. Boolean results
3. String comparisons
4. Different types in comparison
5. Strict vs loose equality
6. null & undefined quirks
7. Real-world scenarios
****************************************************/

// 1️⃣ Basic Comparison Operators
// console.log("🔹 Basic Numbers Comparison");
// console.log(2 > 1); // true ✅
// console.log(2 == 1); // false ❌
// console.log(2 != ); // true ✅

// 2️⃣ Boolean as Result
// console.log("🔹 Boolean Results");
// let result = 5 > 4;
// console.log(result); // true (because 5 is greater than 4)

// 3️⃣ String Comparisons (Lexicographical 📖)
// console.log("🔹 String Comparison");
// console.log("Z" > "A"); // true ✅
// console.log("Glow" > "Glee"); // true (o > e)
// console.log("Bee" > "Be"); // true (longer wins if prefix same)

// // ⚠️ Case matters because of Unicode values
// console.log("a" > "a"); // false (lowercase has higher code)
// console.log("a" > "B"); // true (lowercase has higher code)

// 🛠 Real-world: sorting names alphabetically
// let names = ["Zara", "Adam", "John", "Alex"];
// console.log("Before sorting:", names);
// names.sort();
// console.log("After sorting:", names); // Sorted lexicographically

// 4️⃣ Comparison of Different Types (Type Conversion 🔄)
// console.log("🔹 Type Conversion in Comparison");
// console.log("2" > 1); // true ('2' → 2)
// console.log("01" == 1); // true ('01' → 1)
// console.log(true == 1); // true
// console.log(false == 0); // true

// 5️⃣ Funny Consequence 😅
// let a = 0;
// let b = "0";
// console.log(Boolean(a)); // false
// console.log(Boolean(b)); // true
// console.log(a == b); // true 🤯

// 6️⃣ Strict Equality (=== vs ==)
// console.log("🔹 Strict Equality");
// console.log(0 == false); // true 😕 (loose equality converts types)
// console.log(0 === false); // false ✅ (different types)
// console.log("" == false); // true 😕
// console.log("" === false); // false ✅

// 🚨 Always prefer === and !== for safer comparisons

// 7️⃣ null & undefined Comparisons
// console.log("🔹 null & undefined");
// console.log(null === undefined); // false (different types)
// console.log(null == undefined); // true ✅ (special rule)

// ⚠️ Strange results with null
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true 🤯

// ⚠️ undefined comparisons
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// console.log(undefined == 0); // false
// (undefined → NaN in math ops, NaN is never > or < anything)

// 8️⃣ Real-world Scenarios 🌍

// ✅ Example 1: Age verification
// let age = 18;
// if (age >= 18) {
//   console.log("🎉 Welcome! You are an adult.");
// } else {
//   console.log("🚫 Sorry, you must be 18+.");
// }

// ✅ Example 2: Checking user input
// let userInput = null;
// if (userInput === null) {
//   console.log("⚠️ No input provided!");
// }

// // ✅ Example 3: Form validation
// let password = "12345";
// if (password.length < 6) {
//   console.log("🔑 Password too short!");
// }

// // ✅ Example 4: Sorting numbers correctly
// let numbers = [10, 2, 30, 5];
// console.log("Before:", numbers);
// numbers.sort((a, b) => a - b); // numeric sort
// console.log("After:", numbers);

/****************************************************
 ✅ Summary
-----------------------------------------------------
> , < , >= , <=  → Numeric / Lexicographic comparisons
== , !=          → Loose equality (converts types)
=== , !==        → Strict equality (no type conversion)
null & undefined → Only loosely equal to each other
Always prefer === to avoid JavaScript quirks ⚠️
****************************************************/
