class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor(...args) {
    super(...args);
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }
  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble() {
    super.forage();
  }
}
