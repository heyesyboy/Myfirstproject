let orderCount = 0;
const takeOrder = (topping1, topping2, topping3) => {
 console.log(`Pizza with ${topping1}, ${topping2}, ${topping3}`);
 orderCount++;
 console.log(orderCount);
}
takeOrder("chicken", "mushroom","Cheese");
takeOrder ("pepperoni","cheese","sweetcorn")
