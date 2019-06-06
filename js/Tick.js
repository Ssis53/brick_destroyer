class Tick {
  constructor(width) {
    this.width = width;
    this.height = 15;
    this._init();
  }
  _init() {
    this.createTick();
  }
  createTick() {
    try {
      this.$domIns = $('<div></div>').css({
        width: this.width + 'px',
        height: this.height + 'px',
        borderRadius: '5px',
        background: 'rgba(123, 222, 67, .8)',
        position: 'fixed',
        bottom: 0 + 'px',
        left: window.width / 2 - this.width / 2
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