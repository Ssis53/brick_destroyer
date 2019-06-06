class BrickFactory {
  constructor(count) {
    this.count = count;
    this.rowCount = 0;
    this.brickArr = [];
    this._init();
  }
  _init() {
    this.rowCount = this.count / 6;
    const brickWidth = window.width / this.rowCount - 4;
    const brickHeight = 20;
    this.createBricks(brickWidth, brickHeight);
  }
  createBricks(brickWidth, brickHeight) {
    let x = 4;
    let y = 0;
    for(let i = 0; i < 6; i ++) {
      x = 4;
      for(let j = 0; j < this.rowCount; j++) {
        this.brickArr.push(new Brick(brickWidth, brickHeight, {x, y}));
        x += brickWidth + 1; 
      }
      y += brickHeight + 2;
    }
  }
  destroyAll() {
    this.brickArr.forEach(instance => {
      instance.destroy();
    });
    this.brickArr = [];
  }
}