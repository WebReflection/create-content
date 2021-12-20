// DOM env boilerplate
const {DOMParser} = require('linkedom');

testHTML();
delete require.cache[require.resolve('../cjs')];
testSVG();

function testHTML() {
  global.document = (new DOMParser).parseFromString('', 'text/html');
  const create = require('../cjs');
  const div1 = create('<div id="1" /><p />');
  const div2 = create('<div id="2" /><p />');
  console.assert(div1 !== div2);
  console.assert(div1.childNodes.length === 1);
  console.assert(div2.childNodes.length === 1);
  console.assert(div1.firstChild.localName === 'div');
  console.assert(div2.firstChild.localName === 'div');
  console.assert(div1.firstChild.id === '1');
  console.assert(div2.firstChild.id === '2');
  console.assert(div1.firstChild.firstChild.localName === 'p');
  console.assert(div2.firstChild.firstChild.localName === 'p');
}

function testSVG() {
  global.document = (new DOMParser).parseFromString('', 'image/svg+xml');
  const create = require('../cjs');
  const rect1 = create('<rect id="1" /><circle />', 'svg');
  const rect2 = create('<rect id="2" /><circle />', 'svg');
  console.assert(rect1 !== rect2);
  console.assert(rect1.childNodes.length === 2);
  console.assert(rect2.childNodes.length === 2);
  console.assert(rect1.firstChild.localName === 'rect');
  console.assert(rect2.firstChild.localName === 'rect');
  console.assert(rect1.firstChild.id === '1');
  console.assert(rect2.firstChild.id === '2');
  console.assert(rect1.lastChild.localName === 'circle');
  console.assert(rect2.lastChild.localName === 'circle');
}
