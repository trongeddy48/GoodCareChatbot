import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './configs/viewEngine';
import webRoutes from './routes/web';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//config view engine
viewEngine(app);

//config web routes
webRoutes(app);


let port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Server listening on port ' + port);
})