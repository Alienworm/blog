function scrollAnimation(dom, currentY, targetY) {
  let needScrollTop = targetY - currentY;
  let _currentY = currentY;
  setTimeout(() => {
    // 一次调用滑动帧数，每次调用会不一样
    const dist = Math.ceil(needScrollTop / 10);
    _currentY += dist;
    dom.scrollTo(_currentY, currentY);
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop > 10 || needScrollTop < -10)
      scrollAnimation(_currentY, targetY);
    else
      dom.scrollTo(_currentY, targetY);
  }, 1);
}

module.exports = {
  scrollAnimation
};
