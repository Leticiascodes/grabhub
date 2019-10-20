var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let req = require("request");

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//Integrating Prediction Model with server
const uri = "https://ussouthcentral.services.azureml.net/workspaces/4c216a5766b54b3daa00a8661b9060b8/services/e3bcc1f0a91b47cfa0d9c3bd8eae66a6/execute?api-version=2.0&details=true";
const apiKey = "l6NCwuMkmTTG8W5J1KSNcshdaR1hQZ2v3hEFC+CyLtJh4Rvapt1iyIFBA71uzMLVFUXPcCLstaR+KK0oP+idww==";

let data = {
  "Inputs": {
    "input1": {
      "ColumnNames": [
        "id_estabelecimento",
        "Nome_do_prato",
        "Dia_da_semana",
        "app_id",
        "Valor_do_produto",
        "Desconto_praticado"
      ],
      "Values": [
        [
          "1",
          "Churrasco carioca para 4 pessoas",
          "quinta-feira",
          "2",
          "12.90",
          "0"
        ],
      ]
    }
  },
  "GlobalParameters": {}
}

const options = {
    uri: uri,
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey,
    },
    body: JSON.stringify(data)
}

req(options, (err, res, body) => {
        console.log(body);
    }
);

module.exports = app;
