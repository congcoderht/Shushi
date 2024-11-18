import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


// Middlewares
app.use(morgan('combined'));
app.use(express.static(join(__dirname, 'public')));

// Template engine
app.engine('handlebars', engine({ defaultLayout: 'main', layoutsDir: join(__dirname, 'resources/views/layouts') }));
app.set('view engine', 'handlebars');
app.set('views', join(__dirname, 'resources/views'));

// console.log(__dirname);
app.get('/', (req, res) => {
    return res.render('home', { title: 'Home Page' });
});

app.listen(port, () => console.log(`Example app listening on port at http://localhost:${port}`));
