const addCounter = (list) => {
  // list.push(0);
  // return list;

  // immutation
  return list.concat([0]);
  return [...list, 0];
}
/** 
 * Array mutation remove: list.splice(index, 1) =>
 *  1.1> list.slice(0, index).concat(list.slice(index + 1))
 *  1.2> [...list.slice(0, index), ...list.slice(index + 1)]
 * 
 * Object mutation:
 *  1> Object.assign({}, todo, {completed: !todo.completed})
 *  2> {...todo, completed: !todo.completed}
 * */

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  // not allow listBefore changed
  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

testAddCounter();
console.log('All tests passed.');