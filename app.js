const express = require('express');
const app = express();


// CONFIG
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));

app.get('/', (req, res) => {
    let view = 'index';
    let model = {};

    res.render(view, model);
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});
