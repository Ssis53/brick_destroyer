class Brick {
  constructor(width, height, position) {
    this.width = width;
    this.height = height;
    this.position = position
    this._init();
  }
  _init() {
    this.create();
  }
  create() {
    try {
      this.$domIns = $('<div></div>').css({
        width: this.width + 'px',
        height: this.height + 'px',
        borderRadius: '2px',
        background: 'rgba(178, 132, 67, .5)',
        position: 'fixed',
        top: this.position.y,
        left: this.position.x
      });
      window.$container.append(this.$domIns[0]);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  destroy() {
    this.$domIns.remove();
  }
}