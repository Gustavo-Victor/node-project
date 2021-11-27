

/*
1) install and import module called express

2) get the module's return in variable

3) create routes and what will they return

4) define port on which server will run

*/

//1
const express = require("express");
//const url = require('url');

//2
const server = express();

//3
server.get('/abacate', (request, response) => {
    /*
    console.log("\nRequest\n");
    console.log(request);
    console.log("\nResponse\n");
    console.log(response);
    console.log(typeof request, typeof response);
    */
    let html = `<h1>Welcome</h1>
    <p>This is being returned by the server...</p>`
    return response.send(html);
});

server.get('/morango', (request, response) => {    
    /*let q = url.parse(request.url, true);
    console.log(q.path, q.hostname, q.search);
    const myObj = q.query;
    console.log(myObj);
    console.log("varName = " + myObj.varName);
    */
   let html = `<h1>Type any query in the url</h1>`
    html += `<p>For example: /morango?x=SomeValue&y=123</p>`;
    const q = request.query;
    for (const key in q) {
        html += `<p> ${key}: ${q[key]}</p>`;
    } 
    return response.send(html);
});

//4
server.listen(3000);




