// Using promisify, modify the function displaySchoolValue to use ES6 async / await
import { createClient, print } from 'redis';

const client = createClient()
  client.on('error', err => console.log(`Redis client not connected to the server: ${err}`))
  client.on('connect', () => console.log('Redis client connected to the server '))

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, print);
}

async function displaySchoolValue(schoolName) {
  value = await client.get(schoolName)
  console.log(value);
}
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
