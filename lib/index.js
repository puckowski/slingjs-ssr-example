import http from 'http';

import { renderToString } from 'slingjs/sling.min.es5';
import Test1Component from './test1.component';
import Test2Component from './test2.component';
import Test3Component from './test3.component';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });

  const url = req.url;

  switch (url) {
    case '/': {
      res.end(renderToString(new Test1Component()));

      break;
    }
    case '/hydrate': {
      res.end(renderToString(new Test2Component()));

      break;
    }
    case '/hydratecomplex': {
      res.end(renderToString(new Test3Component()));

      break;
    }
    default: {
      res.end(renderToString(new Test1Component()));
    }
  }
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

export default server;
