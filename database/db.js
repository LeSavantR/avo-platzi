import { data } from './data';

class Database {
  #name;
  constructor (nom){
    this.#name = nom
  }
  async getAll() {
    const arrayObject = Object.values(data);
    await randomDelay();
    return arrayObject;
  }

  async getAvoId(id) {

    if(!Object.prototype.hasOwnProperty.call(data, id)){
      return null;
    };

    const entry = data[id];
    await randomDelay();
    return entry;
  }
}


function randomDelay () {

  new Promise((resolve) => {
    const max = 350;
    const min = 100;
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;

    setTimeout(resolve, delay);
  });
};

export { Database };
