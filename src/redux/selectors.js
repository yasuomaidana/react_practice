export const getCounterState = (store) => store.counter;

export const getCounterList = (store) =>
  getCounterState(store) ? getCounterState(store).count : 0;

//export const getTodoById = (store, id) =>
//  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {}

export const getCounter = (store) => getCounterList(store);