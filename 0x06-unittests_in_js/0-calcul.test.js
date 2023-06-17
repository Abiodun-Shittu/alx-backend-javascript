import { strictEqual } from "assert";
import { calculateNumber } from "./0-calcul.js";

describe("calculateNumber", () => {
	it("checks the output", () => {
		strictEqual(calculateNumber(1, 3), 4);
		strictEqual(calculateNumber(1, 3.7), 5);
		strictEqual(calculateNumber(1.2, 3.7), 5);
		strictEqual(calculateNumber(1.5, 3.7), 6);
		strictEqual(calculateNumber(3.7, 1), 5);
		strictEqual(calculateNumber(3.7, 1.2), 5);
	});
	it("negative numbers", () => {
		strictEqual(calculateNumber(-1, 1), 0);
		strictEqual(calculateNumber(1, -1), 0);
		strictEqual(calculateNumber(-1, -1), -2);
	});
	it("checks arguments", () => {
		strictEqual(isNaN(calculateNumber(1)), true);
		strictEqual(isNaN(calculateNumber()), true);
	});
});
