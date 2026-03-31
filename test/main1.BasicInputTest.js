import { test, describe } from "node:test";
import { strict as assert } from "node:assert";
import { assertOutput } from "./HelperFunctions.js"

import { main } from "../main.js";


console.log("-----------------------------");
console.log("STARTING BASIC INPUT TESTS!!!");
console.log("-----------------------------");

const dtoIn = {
  count: 50,
  age: {
    min: 19,
    max: 35
  }
};
let dtoOut = main(dtoIn);

test('Testing basic input '+dtoOut.length, () => {
	assertOutput(dtoIn, dtoOut);
	
});


