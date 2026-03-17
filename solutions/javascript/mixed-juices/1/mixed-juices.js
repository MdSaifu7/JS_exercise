// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
if(name == 'Pure Strawberry Joy'){
  return 0.5;
}else if(name== 'Energizer' || name=='Green Garden'){
  return 1.5;
}else if(name=="Tropical Island"){
  return 3;
}else if(name=='All or Nothing'){
  return 5;
}else{
  return 2.5;
}
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges=0;
  if(wedgesNeeded==0){
    return 0;
  }
for(let i=0;i<limes.length;i++){
if(limes[i]=='small'){
  wedges+=6;
}else if(limes[i]=='medium'){
  wedges+=8;
}else{
  wedges+=10;
}
  if(wedges>=wedgesNeeded){
    return i+1;
  }
}
  return limes.length;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let orderIndex=0;
while(timeLeft>0){
let name=orders[orderIndex];
orderIndex++;
  if(name == 'Pure Strawberry Joy'){
  timeLeft-= 0.5;
}else if(name== 'Energizer' || name=='Green Garden'){
  timeLeft-= 1.5;
}else if(name=="Tropical Island"){
  timeLeft-= 3;
}else if(name=='All or Nothing'){
  timeLeft-= 5;
}else{
  timeLeft-= 2.5;
}
}

return orders.splice(orderIndex);
  
}
