// Using promisify, modify the function displaySchoolValue to use ES6 async / await
import { createClient, print } from 'redis';

const client = createClient()
  client.on('error', err => console.log(`Redis client not connected to the server: ${err}`))
  client.on('connect', () => console.log('Redis client connected to the server '))

client.hset('HolbertonSchools', 'Portland', 50, print);
client.hset('HolbertonSchools', 'Seattle', 80, print);
client.hset('HolbertonSchools', 'New York', 20, print);
client.hset('HolbertonSchools', 'Bogota', 20, print);
client.hset('HolbertonSchools', 'Cali', 40, print);
client.hset('HolbertonSchools', 'Paris', 2, print);

client.hgetall('HolbertonSchools', function(err, obj) {
  console.log(obj)
});