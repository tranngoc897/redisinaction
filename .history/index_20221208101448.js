var Redis = require('ioredis');
var fs = require('fs');

var ping = function(e) {
    var result = client.ping()
        .then(function(e) {
            console.log(client);
            console.log('Connected!');
        })
        .catch(function(e) {
            console.log('Error:', e);
        })
        .finally(function() {
            client.quit();
        });
};

try {
    var client = new Redis({
        host: 'redis-12347.c1.ap-southeast-1-1.ec2.cloud.redislabs.com',
        port: 12347,
        password: 'sjbtZdD8Jo3mZ1SwEhSb1JWqKuuVSfuF',
    });
    

    
redis.set("mykey", "value")
 
}
catch (e) {
    console.log('Error: ', e);
}


