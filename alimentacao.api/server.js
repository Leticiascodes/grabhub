const app = require('./src/config/custom-express');

// let req = require("request");

// const uri = "<your-api-uri>";
// const apiKey = "<your-api-key>";

// let data = {
//     "Inputs": {
//         "input1":
//         [
//             {
//                 'column1': "value1",
//                 'column2': "value2",
//                 'column3': "value3"
//             }
//         ],
//     },
//     "GlobalParameters": {}
// }

// const options = {
//     uri: uri,
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer " + apiKey,
//     },
//     body: JSON.stringify(data)
// }

// req(options, (err, res, body) => {
//     if (!err && res.statusCode == 200) {
//         console.log(body);
//     } else {
//         console.log("The request failed with status code: " + res.statusCode);
//     }
// });


app.listen(3000, function() {
    console.log(`Servidor rodando na porta 3000`);
});
