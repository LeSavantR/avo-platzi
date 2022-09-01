import allData from './data';

// Let's also add a delay to make it a bit closer to reality
const randomDelay = () => {
  // eslint-disable-next-line no-new
  new Promise((resolve) => {
    const max = 350;
    const min = 100;
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;

    setTimeout(resolve, delay);
  });
};

class Database {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  // eslint-disable-next-line class-methods-use-this
  async getAll() {
    const asArray = Object.values(allData);
    await randomDelay();
    return asArray;
  }

  // eslint-disable-next-line class-methods-use-this
  async getById(id) {
    if (!Object.prototype.hasOwnProperty.call(allData, id)) {
      return null;
    }
    const entry = allData[id];
    await randomDelay();
    return entry;
  }
}

export default Database;
