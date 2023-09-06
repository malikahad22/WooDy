
let  waterLevel = 0;
let  coffeeBeans = 0; 
let  coffeeMixed = false;
//Add Water function
function addWater(){
  waterLevel++;
  console.log("Water is added");
}

// Add coffee Beans function
function addCoffeeBeans(){
  coffeeBeans++;
  console.log("coffeeBeans is added");
}
//mix Coffee Function
function mixCoffee(){
  if(waterLevel>0&&coffeeBeans>0){
    coffeeMixed = true;
    console.log("Coffee is Mixed")
  }
  else 
  {
    console.log("Please add water and coffeeBeans");
  }
}
//Making Coffe Function
function makingCoffee(coffeeType){
  if(coffeeMixed){
    console.log(coffeType + " is making.....");
  }
  else 
  {
    console.log("please mixed coffe first......");
  }
}
//Checking Amount Function
function insertAmount(amount){
  let validAmount = [2,5,10,20,50,100];
  let valid = validAmount.includes(amount);
  if(valid){
    console.log("You inserted " + amount);
  }
  else {
    console.log("please inserted valid amount");
  }
}

function main(){
    let cash = 10;
    let choice = 6;
    let coffeeType ="" 
        console.log("\n1. Insert Cash");
        console.log("2. Add Water");
        console.log("3. Add Coffee Beans");
        console.log("4. Mix Coffee");
        console.log("5. Make Coffee");
        console.log("6. Exit");

        switch (choice) {
            case 1:
                insertAmount(cash);
                break;
            case 2:
                addWater();
                break;
            case 3:
                addCoffeeBeans();
                break;
            case 4:
                mixCoffee();
                break;
            case 5:
              makingCoffee(coffeeType);
                break;
            case 6:
                console.log("Exiting...");
                return;
            default:
                console.log("Invalid choice. Try again.");
        }
}

main();

































