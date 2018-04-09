/**
 * Created by Administrator on 2018/4/9.
 */

// 计算基础rem值
export function flexible(baseFontSize = 7.5) {
  // baseFontSize = baseFontSize || 7.5;
  let docEl = document.documentElement;
  let refresh = function () {
    let dpr: any = window.devicePixelRatio;
    let deviceWidth = docEl.getBoundingClientRect().width;
    let deviceFontSize = deviceWidth / baseFontSize + "px";
    docEl.setAttribute('data-dpr', dpr);
    docEl.style.fontSize = deviceFontSize;
  };
  window.addEventListener('resize', function () {
    refresh();
    return;
  }, false);
  refresh();
}
