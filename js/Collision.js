class Collision {
  detection(ball, rect) {
    const ballCenter = {
      x: parseInt(ball.$domIns.css('left')) + ball.radius,
      y: parseInt(ball.$domIns.css('top')) + ball.radius
    }
    const rectCenter = {
      x: parseInt(rect.$domIns.css('left')) + rect.width / 2,
      y: parseInt(rect.$domIns.css('top')) + rect.height / 2,
    }
    let dY = Math.abs(ballCenter.y - rectCenter.y);
    let dX = Math.abs(ballCenter.x - rectCenter.x);
    let maxY = rect.height / 2 + ball.radius;
    let maxX = rect.width / 2 + ball.radius;
    if(dY <= maxY && dX <= maxX) {
      //情况1：正面碰撞
      return true;
    } else if(false) {
      //情况2：撞角角
      return true;
    }
    return false
  }
}