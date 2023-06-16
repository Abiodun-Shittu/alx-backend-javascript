import { strictEqual } from "assert";
import { calculateNumber } from "./0-calcul.js";

describe("calculateNumber", () => {
	it("should return the sum of rounded numbers", () => {
		strictEqual(calculateNumber(1.4, 2.6), 4);
		strictEqual(calculateNumber(0.1, 0.2), 0);
		strictEqual(calculateNumber(5, 6), 11);
	});
});
