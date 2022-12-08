var Redis = require('ioredis');
var fs = require('fs');

try {

    var redis = new Redis({
        host: 'redis-12347.c1.ap-southeast-1-1.ec2.cloud.redislabs.com',
        port: 12347,
        password: 'sjbtZdD8Jo3mZ1SwEhSb1JWqKuuVSfuF',
    });
    
    redis.ping()
    .then(function(e) {
        console.log('Connected!');
    })
    .catch(function(e) {
        console.log('Error:', e);
    })

}
catch (e) {
    console.log('Error: ', e);
}


