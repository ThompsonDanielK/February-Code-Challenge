const pricing = require('../pricingTool.js');

test("Original Code Review Problem", () => {
    expect(pricing.computeTotalPrice(['A', 'A', 'B', 'B', 'C', 'C', 'D', 'E'])).toEqual("$1,928.55");
});

test("countProducts Is Incrementing productDictionary", () => {
    pricing.countProducts(['A', 'B', 'C', 'D', 'E']);
    expect(pricing.productDictionary).toEqual({ A:1, B:1, C:1, D:1, E:1});
});

test("countProductsWithinEachGroup Is Counting Quantities Within Unique Groups", () => {
    pricing.productDictionary = { A:5, B:4, C:3, D:2, E:1};

    expect(pricing.countProductsWithinEachGroup()).toEqual([5, 4, 3, 2, 1]);
});

test("addProductsAndDiscount Is Returning Correct Amount", () => {
    expect(pricing.addProductPricesAndDiscounts([5, 4, 3, 2, 1]).toFixed(2)).toEqual("3752.45");
});