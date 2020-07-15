import { createServer } from 'http';
import { exists as _exists, readFile } from 'fs';
import { extname } from 'path';

const getContentType = (extName) => {
  switch (extName) {
    case '.js':
      return 'text/javascript';
    case '.css':
      return 'text/css';
    case '.png':
      return 'image/png';
    case '.xml':
      return 'text/xml';
    case '.json':
      return 'text/json';
    default:
      return 'text/html';
  }
};

const serveFile = (url, response) => {
  if (url.indexOf('?') > -1) {
    url = url.substring(0, url.indexOf('?'));
  }

  const filePath = url === '/' ? './dist/index.html' : `.${url}`;
  const extName = extname(filePath);
  const contType = getContentType(extName);

  _exists(filePath, (exists) => {
    if (exists) {
      readFile(filePath, (error, content) => {
        if (error) {
          response.writeHead(500);
          response.end();
        } else {
          response.writeHead(200, { 'Content-Type': contType });
          response.end(content, 'utf-8');
        }
      });
    } else {
      response.writeHead(404);
      response.end();
    }
  });
};


const handlePost = (request, response) => {
  let postData = '';
  request.addListener('data', (chunk) => {
    postData += chunk;
  });

  request.addListener('end', () => {
    response.writeHead(200, { 'Content-type': 'text/plain' });
    response.write(`You sent: ${postData}`);
    response.end();
  });
};


/**
 * You may need to change the port that the server is
 * listening on. To do so, just change the number below
 * in the '.listen()` to something else.
 *
 * Usually we use 8125.
 */
createServer((request, response) => {
  const extName = extname(request.url);
  if (request.url === '/' || extName !== '') {
    serveFile(request.url, response);
  } else {
    handlePost(request, response);
  }
}).listen(8000);

console.log('If you are running this test outside of hackerrank');
console.log('your server is currently running at http://127.0.0.1:8000/');
console.log('');
console.log('If that port is in use, go to ./http.js and update');
console.log('line 78 to use a new port.');
