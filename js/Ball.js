class Ball {
  constructor(radius, vx, vy) {
    this.flag = true;
    this.radius = radius;
    this.vx = vx;
    this.vy = vy;
    this._init();
  }
  _init() {
    const res = this.createBall();
    // if(res) {
    //   this.move();
    // }
  }

  _protect() {
    this.flag = false;
    setTimeout(() => {
      this.flag = true;
    }, 300);
  }

  createBall() {
    try {
      this.$domIns = $('<div></div>').css({
        width: this.radius * 2 + 'px',
        height: this.radius * 2 + 'px',
        borderRadius: '50%',
        background: 'rgba(234, 123, 67, .5)',
        position: 'fixed'
      });
      window.$container.append(this.$domIns[0]);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  move(tick, { brickArr }, controller) {
    const curX = parseInt(this.$domIns.css('left'));
    const curY = parseInt(this.$domIns.css('top'));
    (curX <= 0) && (this.vx = -this.vx);          //撞左边
    (curY <= 0) && (this.vy = -this.vy);          //撞上面
    ((2 * this.radius + curX) >= window.width) && (this.vx = -this.vx);   //右
    ((2 * this.radius + curY) >= window.height) && controller.end();  //下
    if(new Collision().detection(this, tick)) {
      if(this.flag) {
        this.vy = -this.vy;
        this._protect();
      }
    }
    if(brickArr.length <= 0) {
      controller.pass();
    }
    for(let i = 0; i < brickArr.length; i++) {
      if(new Collision().detection(this, brickArr[i])) {
        if(this.flag) {
          this.vy = -this.vy;
          this._protect();
        }
        brickArr[i].destroy();
        brickArr.splice(i, 1);
      }
    }
    this.$domIns.css({
      top: curY + this.vy + 'px',
      left: curX + this.vx + 'px'
    });
  }

  setPosition({ x, y }) {
    if(x && y) {
      this.$domIns.css({
        top: y + 'px',
        left: x + 'px'
      });
    } else if(x) {
      this.$domIns.css({
        left: x + 'px'
      });
    } else if(y) {
      this.$domIns.css({
        top: y + 'px'
      });
    }
  }

  destroy() {
    this.$domIns.remove();
  }

}