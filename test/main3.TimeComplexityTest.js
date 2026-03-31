import { test, describe } from "node:test";
import { strict as assert } from "node:assert";
import { assertOutput, getRandomInt } from "./HelperFunctions.js"

import { main } from "../main.js";

console.log("-----------------------------");
console.log("STARTING TIME COMPLEXITY TESTS!!!");
console.log("-----------------------------");

const dtoIn = {
  count: 2000,
  age: {
    min: 19,
    max: 35
  }
};

test("TIME COMPLEXITY TEST ! Creating "+dtoIn.count+" records ! ", {timeout: 3000},  () => {
	
	let dtoOut = main(dtoIn);
	assert(dtoOut.length === dtoIn.count, "Ammount of employees created in time sensitive test is not correct.");
	assertOutput(dtoIn, dtoOut);

});
