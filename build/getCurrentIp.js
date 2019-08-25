/**
 * @author varnew
 * @date 2019/6/2
 * @desc: 获取本机的ip地址
*/
exports.getIp = (() => {
  const interfaces = require('os').networkInterfaces();
  let IPAdress = '';
  for(let devName in interfaces){
    const iface = interfaces[devName];
    for(let i = 0;i < iface.length;i++){
      const alias = iface[i];
      if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
        IPAdress = alias.address;
      }
    }
  }
  return IPAdress
})()

