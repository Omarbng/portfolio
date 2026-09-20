/* The published site needs a full HTML document; Claude Artifacts supply their
   own <head>/<body> skeleton and reject one. Generate the artifact form from
   the same source so the two can never drift. */
const fs = require('fs');
const src = fs.readFileSync('index.html', 'utf8');
const head = src.slice(src.indexOf('<title>'), src.indexOf('</head>'));
const body = src.slice(src.indexOf('<body>') + 6, src.lastIndexOf('</body>'));
fs.writeFileSync('artifact.html', head.trim() + '\n' + body.trim() + '\n');
console.log('artifact.html written,', fs.statSync('artifact.html').size, 'bytes');
