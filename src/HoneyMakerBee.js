class HoneyMakerBee extends Bee {
  // TODO..
  constructor(...args) {
    super(...args);
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
    // this.food = Grub.proptotype.food;
  }
  makeHoney () {
    this.honeyPot += 1;
    return this.honeyPot;
  }
  giveHoney () {
    this.honeyPot -= 1;
    return this.honeyPot;
  }
}
