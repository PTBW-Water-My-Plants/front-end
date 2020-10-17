const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

// Each array is a database
const users = [
	{
		id: 0,
		name: 'Big stres' ,
		email: 'nias@nass.com',
		password: 'f3bigstairs3hf33',
		phone: '383233222',

	}
]


const plants = [
	{
		id: 0,
		title: 'The Godfather',
		director: 'Francis Ford Coppola',
		metascore: 100,
		stars: ['Marlon Brando', 'Al Pacino', 'Robert Duvall'],
	},
	{
		id: 1,
		title: 'Star Wars',
		director: 'George Lucas',
		metascore: 92,
		stars: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
	},
	{
		id: 2,
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		director: 'Peter Jackson',
		metascore: 92,
		stars: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
	},
	{
		id: 3,
		title: 'Terminator 2: Judgement Day',
		director: 'James Cameron',
		metascore: 94,
		stars: ['Arnold Schwarzenegger', 'Edward Furlong', 'Linda Hamilton'],
	},
	{
		id: 4,
		title: 'Dumb and Dumber',
		director: 'The Farely Brothers',
		metascore: 76,
		stars: ['Jim Carrey', 'Jeff Daniels', 'Lauren Holly'],
	},
	{
		id: 5,
		title: 'Tombstone',
		director: 'George P. Cosmatos',
		metascore: 89,
		stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
	},
];



/// Plants

app.get('/api/plants', (req, res) => {
	res.status(200).json(plants.map(({ id, title, director, metascore }) => ({ id, title, director, metascore })));
});

app.get('/api/plants/:id', (req, res) => {
	const movie = plants.find(movie => movie.id.toString() === req.params.id);
	res.status(200).json(movie);
});

app.post('/api/plants', (req, res) => {
	if (req.body.id !== undefined) plants.push(req.body);
	res.status(201).json(plants);
});



// Users
app.get('/api/users', (req, res) => {
	res.status(200).json(users.map(({ id, name, 
		 email, password, phone }) => ({ id, 
			name,  email, password, phone })));
});

app.get('/api/users/:id', (req, res) => {
	const plant = plants.find(plant => 
		plant.id.toString() === req.params.id);
	res.status(200).json(plant);
});

app.post('/api/users', (req, res) => {
	if (req.body.id !== undefined)
	 users.push(req.body);
	res.status(201).json(users);
});





// Connectivity

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
