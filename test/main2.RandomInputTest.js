import { test, describe } from "node:test";
import { strict as assert } from "node:assert";
import { assertOutput, getRandomInt } from "./HelperFunctions.js"

import { main } from "../main.js";


console.log("-----------------------------");
console.log("STARTING RANDOM INPUT TESTS!!!");
console.log("-----------------------------");

for(let i = 0;i<100;i++){
	const dtoIn = {
		count: getRandomInt(51)+50,
		age: {
			min: getRandomInt(35),
			max: getRandomInt(50)+35
		}
	};
	let dtoOut = main(dtoIn);

	test('Testing random input '+dtoOut.length, () => {
		assertOutput(dtoIn, dtoOut);
	});
	//TODO test 2 outputs are not same in any field
}



