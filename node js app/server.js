// const http = require('http');
// const url = require('url');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//     // Parse request URL
//     const parsedUrl = url.parse(req.url);
//     // Extract the pathname
//     let pathname = `.${parsedUrl.pathname}`;

//     // If the pathname is a directory, append 'index.html' to it
//     if (pathname.charAt(pathname.length - 1) === '/') {
//         pathname += 'index.html';
//     }

//     // Determine the content type based on file extension
//     const extname = path.extname(pathname);
//     let contentType = 'text/html';

//     switch (extname) {
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//         case '.css':
//             contentType = 'text/css';
//             break;
//         case '.json':
//             contentType = 'application/json';
//             break;
//         case '.png':
//             contentType = 'image/png';
//             break;
//         case '.jpg':
//             contentType = 'image/jpg';
//             break;
//         case '.wav':
//             contentType = 'audio/wav';
//             break;
//     }

//     // Read the requested file
//     fs.readFile(pathname, (err, data) => {
//         if (err) {
//             // If file not found, return 404
//             if (err.code === 'ENOENT') {
//                 res.writeHead(404);
//                 res.end('File not found!');
//             } else {
//                 // If other error, return 500
//                 res.writeHead(500);
//                 res.end(`Server error: ${err.code}`);
//             }
//         } else {
//             // If file found, set content type and serve the file
//             res.writeHead(200, { 'Content-Type': contentType });
//             res.end(data);
//         }
//     });
// });

// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

const path = require("path");
const fs=require("fs");
const http=require("http");
const url=require("url");

const server=http.createServer((req,res)=>{

    const parseUrl=url.parse(req.url);

    let pathname=`.${parseUrl.pathname}`;
    if(pathname.charAt(pathname.length-1)==='/'){
        pathname+="index.html";
    }

    let extname=path.extname(pathname);
    let contentType="text/html";

    switch(extname){
        case '.js':
            contentType='text/javascript';
            break;
        case '.css':
            contentType='text/css';
            break;
        case '.png':
            contentType='image/png';
            break;
        case '.jpg':
            contentType='image/jpg';
            break;     
        case '.wav':
            contentType='audio/wav';
            break;
        case '.json':
            contentType='application/json';
            break;
    }

    fs.readFile(pathname,(err,data)=>{
        if(err){
            if(err.code=='ENOENT'){
                res.writeHead(404);
                res.end("File not found");
            }else{
                res.writeHead(500);
                res.end(`Internal server error ${err.code}`);
            }
        }else{
            res.writeHead(200,{'Content-type':contentType});
            res.end(data);
        }
    });

    

});


server.listen(3000,()=>{
   
    console.log(`Server is listing at 3000`);
});