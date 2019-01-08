const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("Request for" + req.url + 'By method' + req.method);
    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;
        var filepath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filepath);
        if (fileExt == '.html') {
            fs.exists(filepath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>Error 404: ' + fileUrl + ' Page not found</h1></body></html>');
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text-html');
                fs.createReadStream(filepath).pipe(res);
            });
        }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: ' + fileUrl + ' Page a html file</h1></body></html>');
            return;
        }
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method + ' Page not Support</h1></body></html>');
        return;
    }
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});