var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

    var foodCheck = function(productList) {
      filteredResults = []
      for (var i=0;i<productList.length; i++){
        if(!productList[i].containsNuts && productList[i].ingredients.indexOf("mushrooms") === -1){
          filteredResults.push(productList[i]);
        }
      }
      return filteredResults;
    }

    var productsICanEat = [];

    productsICanEat = foodCheck(products);

    expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    
    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = _.range(0, 1000);   /* try chaining range() and reduce() */
    
    function forEach(array, action) {
      for (var i = 0; i < array.length; i++) {
        action(array[i]);
      }
    }

    var multiplesOf3and5 = function(base, element) {
      if (element % 3 === 0 || element % 5 === 0) {
        base += element;
      }
      return base;
    }

    var reduce = function(combine, base, array) {
      forEach(array, function(element) {
        base = combine(base, element);
      });
      return base;
    }

    var sum = reduce(multiplesOf3and5, 0, sum);

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    ingredientCount = _.chain(products) 
      .map(function(product){ return product.ingredients; })
      .flatten()
      .reduce(function(memo,ingredient){ memo[ingredient] = (memo[ingredient] || 0) + 1; return memo}, {})
      .value();

    expect(ingredientCount['mushrooms']).toBe(2);

  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
/*
  it("should find the largest prime factor of a composite number", function () {
    function largestPrime(n) {
      var divide = 2;
      var test = true;
      while (test === true) {
      }
    }
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
      
    
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    
  });

  it("should find the 10001st prime", function () {

  });
*/
});