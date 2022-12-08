var Redis = require('ioredis');
var fs = require('fs');

var ping = function(e) {

    var result = redis.ping()
        .then(function(e) {
            console.log(client);
            console.log('Connected!');
        })
        .catch(function(e) {
            console.log('Error:', e);
        })
        .finally(function() {
    
        });

        redis.set("mykey", "value");

};

try {

    var redis = new Redis({
        host: 'redis-12347.c1.ap-southeast-1-1.ec2.cloud.redislabs.com',
        port: 12347,
        password: 'sjbtZdD8Jo3mZ1SwEhSb1JWqKuuVSfuF',
    });
    


}
catch (e) {
    console.log('Error: ', e);
}


