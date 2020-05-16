const OSS = require('ali-oss');
const client = new OSS({
  // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。
  region: 'oss-cn-shenzhen',
  // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。
  //强烈建议您创建并使用RAM账号进行API访问或日常运维，
  //请登录 https://ram.console.aliyun.com 创建RAM账号。
  accessKeyId: 'LTAI4G6q5GNbTy1wesXx4PxG',
  accessKeySecret: 'oJfDIYTnwmeO9ionMp6SR8owycJxix',
  bucket: 'vue-blog-oss'
});
//列出当前目录下的100个文件
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
//上传文件到指定目录
async function put (target,src) {
  try {
    //object-name可以自定义为文件名（例如file.txt）
	//或目录（例如abc/test/file.txt）的形式，
	//实现将文件上传至当前Bucket或Bucket下的指定目录。
	// src 支持类型Buffer/Blob/File
	let result = await client.put(target, src);
    return result
  } catch (e) {
    console.log(e);
  }
}
module.exports = {
	list,
	put
}