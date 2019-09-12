class Controller {
  constructor() {
    this._init();
  }
  _init() {
    $('#myModal').modal('show');
    $('#normal').on('click', e => {
      $('#myModal').modal('hide');
      this.ready('normal');
      e.stopPropagation();
    });
    $('#maoqiu').on('click', e => {
      $('#myModal').modal('hide');
      this.ready('maoqiu');
      e.stopPropagation();
    });
    $('#diffcult').on('click', e => {
      $('#myModal').modal('hide');
      this.ready('diffcult');
      e.stopPropagation();
    });
  }
  ready(model) {
    window.$container = $('#root');
    window.width = $container.innerWidth();
    window.height = $container.height();
    if(model == 'maoqiu') {
      this.ball = new Ball(20, 4, -8);
      this.tick = new Tick(window.width);
      this.bricks = new BrickFactory(36);
    } else if(model == 'normal') {
      this.ball = new Ball(20, 4, -8);
      this.tick = new Tick(200);
      this.bricks = new BrickFactory(64);
    } else if(model == 'diffcult') {
      this.ball = new Ball(20, 10, -14);
      this.tick = new Tick(150);
      this.bricks = new BrickFactory(64);
    }
    this.ball.setPosition({
      x: parseInt(this.tick.$domIns.css('left')) + this.tick.width / 2 - this.ball.radius, 
      y: window.height - this.tick.height - this.ball.radius * 2 - 2
    });
    $(document).on('mousemove.tick', (e) => {
      let tickX = e.clientX;
      tickX = e.clientX - this.tick.width / 2;
      if(e.clientX <= (this.tick.width / 2)) {
        tickX = 0;
      }
      if(e.clientX >= window.width - (this.tick.width / 2)) {
        tickX = window.width - this.tick.width;
      }
      this.tick.$domIns.css({
        left: tickX + 'px'
      })
    }).on('mousemove.ball', (e) => {
      this.ball.setPosition({
        x: parseInt(this.tick.$domIns.css('left')) + this.tick.width / 2 - this.ball.radius
      });
    }).on('click.start', (e) => {
      this.start();
    });
    $('html').css({
      cursor: 'none'
    })
  }

  start() {
    $(document).off('mousemove.ball').off('click.start');
    this.timer = setInterval(() => {
      this.ball.move(this.tick, this.bricks, this);
    }, 20);
    
  }

  end() {
    clearInterval(this.timer);
    $('html').css({
      cursor: 'auto'
    });
    $(document).off('mousemove.tick').off('click.start');
    alert('毛球真笨！')
    this.ball.destroy();
    this.tick.destroy();
    this.bricks.destroyAll();
    $('#myModal').modal('show');
  }

  pass() {
    clearInterval(this.timer);
    $('html').css({
      cursor: 'auto'
    });
    $(document).off('mousemove.tick').off('click.start');
    alert('哇你个小机灵鬼也太棒了吧')
    this.ball.destroy();
    this.tick.destroy();
    this.bricks.destroyAll();
    //TODO: 彩蛋~
  }

}

(function() {
  let c = new Controller();
})();