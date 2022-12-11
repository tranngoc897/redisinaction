/**
 * https://github.com/luin/ioredis
 * https://docs.redis.com/latest/rs/references/client_references/client_ioredis/
 */
const Redis = require("ioredis");
const main01 = require("./ch01/main01");

async function run() {


  const redis = new Redis({
    host: "redis-12347.c1.ap-southeast-1-1.ec2.cloud.redislabs.com",
    port: 12347,
    password: "sjbtZdD8Jo3mZ1SwEhSb1JWqKuuVSfuF",
  });

  redis
    .ping()
    .then(function (e) {
      console.log("Connected!");
    })
    .catch(function (e) {
      console.log("Error:", e);
    });


  await redis.flushdb();

  const articleId = await main01.postArticle(
    redis,
    "username",
    "A title",
    "http://www.google.com"
  );
  if (articleId > 0) {
    console.log(`We posted a new article with id:${articleId}`);
  } else {
    return;
  }

  await redis.quit();

}

run();
