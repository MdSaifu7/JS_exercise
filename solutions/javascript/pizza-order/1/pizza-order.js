/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
let cost=0;
  if(pizza=="Margherita"){
    cost+=7;
  }else if(pizza=="Caprese"){
    cost+=9
  }else{
    cost+=10
  }
for(let ex of extras){
  if(ex=="ExtraSauce"){
    cost+=1;
  }else{
    cost+=2;
  }
}
  return cost;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {

let cost=0;
for(let pizza of pizzaOrders){
    if(pizza.pizza=="Margherita"){
    cost+=7;
  }else if(pizza.pizza=="Caprese"){
    cost+=9
  }else{
    cost+=10
  }
for(let ex of pizza.extras)
  if(ex=="ExtraSauce"){
    cost+=1;
  }else if(ex=="ExtraToppings"){
    cost+=2;
  }
  
}


  return cost;
  
}
