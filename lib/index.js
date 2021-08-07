import http from 'http';

import { textNode, markup, renderToString } from 'slingjs/sling.min.es5';

class TestComponent1 {
  view() {
    return markup('div', {
      attrs: {
        style: 'color: blue;',
        id: 'testdiv'
      }, 
      children: [
        markup('span', {
          children: [
            textNode('Plain text')
          ]
        }),
        textNode('DOMString')
      ]
    })
  }
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(renderToString(new TestComponent1()));
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

export default server;
