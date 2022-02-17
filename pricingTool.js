const discountArray = [0.75, 0.80, 0.90, 0.95];
const pricePerItem = 299;

exports.productDictionary = { A:0, B:0, C:0, D:0, E:0};

exports.computeTotalPrice = (productsArray) => {

  this.countProducts(productsArray);
  let uniqueGroupArray = this.countProductsWithinEachGroup();
  let totalPrice = this.addProductPricesAndDiscounts(uniqueGroupArray);

  return totalPrice.toLocaleString("en-us", {style: 'currency',currency: 'USD', minimumFractionDigits: 2});
}

exports.countProducts = (productsArray) => {
  productsArray.forEach(product => {
    switch (product) {
      case 'A':
        this.productDictionary.A++;
        break;
      
      case 'B':
        this.productDictionary.B++;
        break;

      case 'C':
        this.productDictionary.C++;
        break;

      case 'D':
        this.productDictionary.D++;
        break;

      case 'E':
        this.productDictionary.E++;
        break;

      default:
        console.log('Unknown product: ' + product);
        break;
    }
  });
}

exports.countProductsWithinEachGroup = () => {

  let discountableProductsArray = [];
  let remaingQuantityofProducts = true;

  while(remaingQuantityofProducts) {
    let discountableProducts = 0;

    Object.entries(this.productDictionary).forEach(productKeyAndQuantity => {

      const [product, quantity] = productKeyAndQuantity;

      if (quantity > 0) {
        discountableProducts++;
        this.productDictionary[product]--;
      }
    });

    if (discountableProducts > 0) {
      discountableProductsArray.push(discountableProducts);
    } else {
      remaingQuantityofProducts = false;
    }
  }

  return discountableProductsArray;
}

exports.addProductPricesAndDiscounts = (uniqueGroupArray) => {

  let totalPrice = 0;

  uniqueGroupArray.forEach(uniqueGroup => {

    switch (uniqueGroup) {

      case 4:
        totalPrice += ((uniqueGroup * pricePerItem) * discountArray[1]);
        break;
      
      case 3:
        totalPrice += ((uniqueGroup * pricePerItem) * discountArray[2]);
        break;

      case 2:
        totalPrice += ((uniqueGroup * pricePerItem) * discountArray[3]);
        break;

      case 1:
        totalPrice += (uniqueGroup * pricePerItem);
        break;

      default:
        totalPrice += ((uniqueGroup * pricePerItem) * discountArray[0]);
        break;
    };
  });

  return totalPrice;
}

