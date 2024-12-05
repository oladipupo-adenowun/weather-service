const express = require('express');
const app = express();
const port = 8080;

app.get('/temperature/:location_code',(request,response)=>{
    const location_code = request.params.location_code;
    console.log(location_code);
    /*weather.current(location_code,(error,temp_f)=>{

    });*/
});

let server = app.listen(port,()=>{
    console.log("Listening on http://localhost:"+port);
});