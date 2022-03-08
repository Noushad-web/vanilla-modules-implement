
import { createClient } from 'pexels';

const client = createClient('563492ad6f91700001000001aaedb0b3a07a46f1b2d02debd50d0a85');
const query = 'Nature';

client.photos.search({ query, per_page: 15 })
.then(data => console.log(data)
)

// import naturePhotos from '../nature';
const naturePhotos = require('../nature');

console.log('naturePhotos')
