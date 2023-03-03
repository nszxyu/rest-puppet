/*
 * @Author: yuyongxing
 * @Date: 2022-01-13 18:07:56
 * @LastEditors: yuyongxing
 * @LastEditTime: 2022-01-16 18:30:22
 * @Description: 工具方法
 */
require('./puppeteerByPool');

const waitTime = (n) => new Promise((r) => setTimeout(r, n));
module.exports = ({ url, body, width, height }) => {
   return new Promise(async (resolve, reject) => {
     const browser = await global.pp.use();
     try{
       // 设置网络来源
       const page = await browser.newPage();
       if(url){
         await page.goto(url);
       }else if(body){
         await page.setContent(body);
       }else{
         reject('no url or body.');
         return
       }
       // 设置浏览器宽高
       await page.setViewport({
         width: parseInt(width) || 1908,
         height: parseInt(height) || 1024,
       });
       await waitTime(0);
       await resolve(page);
     }catch (error){
       reject(error);
     }
  });
}
