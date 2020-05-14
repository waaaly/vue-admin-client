const OSS = require('ali-oss');
const client = new OSS({
  // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。
  region: 'oss-cn-shenzhen',
  // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，
  //请登录 https://ram.console.aliyun.com 创建RAM账号。
  accessKeyId: 'LTAI4GDgDHDhn6P1kc6nGEyS',
  accessKeySecret: '7azstId2J3pIJiRE00F1LJ2FrEIir7',
  bucket: 'vue-blog-oss'
});

async function list() {
  try {
    // 列举前缀为'my-'且在'my-object'之后的文件。
    var result = await client.list({
      prefix: 'jay/',
	  maxKeys:10,
    });
    return result
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
	list
}