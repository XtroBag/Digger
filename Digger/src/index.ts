class Digger {
  size: number;
  items: string[];
  status: boolean;
  /**
   * @param {number} size The level of the digger machine
   * @param {array} items The array of items you wanna be drilling for
   * @param {boolean} status The status if the machine works or not
   */
  constructor(obj: { size: number, items: string[], status: boolean }) {
    this.size = obj.size;
    this.items = obj.items;
    this.status = obj.status;

    if (this.size === 0) {
      throw new Error("Please give a size!");
    }

    if (this.items.length === 0) {
      throw new Error('Please give items!');
    }
  }

}

export default Digger;


