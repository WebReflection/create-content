var createContent = (function (exports) {
  'use strict';

  /*! (c) Andrea Giammarchi - ISC */
  const createHTML = ml => {
    const template = document.createElement('template');
    template.innerHTML = ml;
    return template.content;
  };

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const range = document.createRange();
  const createSVG = ml => {
    svg.innerHTML = ml;
    range.setStartBefore(svg.firstChild);
    range.setEndAfter(svg.lastChild);
    return range.extractContents();
  };

  const create = (ml, type) => type === 'svg' ? createSVG(ml) : createHTML(ml);

  exports["default"] = create;

  return exports;

})({}).default;
