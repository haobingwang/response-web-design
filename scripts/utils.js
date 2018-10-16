/**
 * 获取和遍历所有匹配特定 CSS 选择符的 DOM 元素
 * 不使用 jQuery 的 JavaScript 实现
 * @param {string} selector 
 * @param {string} context 
 */
function $$(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
}

/**
 * 检测浏览器是否支持某个属性
 * 不使用 Modernizr 的 JavaScript 实现
 * @param {*} property 
 */
function testProperty(property) {
  var root = document.documentElement;

  if (property in root.style) {
    root.classList.add(property.toLowerCase());
    return true;
  }

  root.classList.add('no-' + property.toLowerCase());
  return false;
}

/**
 * 检测浏览器是否支持某个具体的属性值
 * 不使用 Modernizr 的 JavaScript 实现
 * @param {*} id 
 * @param {*} value 
 * @param {*} property 
 */
function testValue(id, value, property) {
  var dummy = document.createElement('p');
  dummy.style[property] = value;

  if (dummy.style[property]) {
    root.classList.add(id);
    return true;
  }

  root.classList.add('no-' + id);
  return false;
}