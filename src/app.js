const express = require('express');
const path = require('path');
const {resolve} = require('path');
const app = express();

app.set('port', process.env.PORT || 3030);

app.set('view engine', 'ejs');

app.set('views', resolve(__dirname, './views'));

//app.listen(app.get('port'),() => console.log('listenin on port http://localhost:'+app.get('port')));

const listen = () => console.log('listening on port http://localhost:'+app.get('port'));

app.listen(app.get('port'),listen);

app.use(express.static(resolve(__dirname,'../public')))

//app.get('/', (req, res) => res.sendFile(path.resolve(__dirname,'views','home.html')));

