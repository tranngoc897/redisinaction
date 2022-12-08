/**
 * https://github.com/luin/ioredis
 * https://docs.redis.com/latest/rs/references/client_references/client_ioredis/
 */
const Redis = require('ioredis');

const redis = new Redis({
    host: 'redis-12347.c1.ap-southeast-1-1.ec2.cloud.redislabs.com',
    port: 12347,
    password: 'sjbtZdD8Jo3mZ1SwEhSb1JWqKuuVSfuF',
});


redis.ping().then(function(e) {
            console.log(redis);
            console.log('Connected!');
        })
        .catch(function(e) {
            console.log('Error:', e);
        });


redis.set("mykey", "value");