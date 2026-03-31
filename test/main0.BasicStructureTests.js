import { test, describe } from "node:test";
import { strict as assert } from "node:assert";
import { assertOutput, assertBasicStructure, parseISOString, assertDate } from "./HelperFunctions.js"

import { main } from "../main.js";


console.log("-----------------------------");
console.log("STARTING BASIC STRUCTURE TESTS!!!");
console.log("-----------------------------");

const dtoIn = {
  count: 50,
  age: {
    min: 19,
    max: 35
  }
};
let dtoOut = main(dtoIn);

test('Testing basic structure of input and output ', () => {
	assertBasicStructure(dtoIn, dtoOut);
});

test('Testing date format', () => {
	for(let i =0;i<dtoOut.length;i++){
		const person = dtoOut[i];
	  		
		let date = parseISOString(person.birthdate);
	}
});

test('Testing date in correct time interval', () => {
	for(let i =0;i<dtoOut.length;i++){
		const person = dtoOut[i];
	  		
		let date = parseISOString(person.birthdate);
		assertDate(date, dtoIn);
	}
});
