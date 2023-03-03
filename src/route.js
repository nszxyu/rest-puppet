/*
 * @Author: yuyongxing
 * @Date: 2022-01-14 14:29:07
 * @LastEditors: yuyongxing
 * @LastEditTime: 2022-01-16 18:58:35
 * @Description: 
 */

const getPage = require('./puppeteer');

module.exports = app => {
    app.post('/api/image', (req, res) => {
        getPage(req.body).then(async page => {
            const { type, quality} = req.body;
            const shotConf = {
                fullPage: true,
                omitBackground: true,
                type: type || 'jpeg'
            };
            if(shotConf.type === 'jpeg'){
                shotConf.quality = quality || 100;
            }
            const pic = await page.screenshot(shotConf);
            page.close();
            res.status(200);
            res.write(pic);
            res.end();
        }).catch(err => {
            res.json({
                code: 1,
                data: null,
                msg: String(err)
            });
        });
    });

    app.post('/api/image/base64', (req, res) => {
        getPage(req.body).then(async page => {
            const { type, quality} = req.body;
            const shotConf = {
                fullPage: true,
                omitBackground: true,
                type: type || 'jpeg',
                encoding: 'base64'
            };
            if(shotConf.type === 'jpeg'){
                shotConf.quality = quality || 100;
            }
            const pic = await page.screenshot(shotConf);
            page.close();
            res.json({
                code: 0,
                data: `data:image/${shotConf.type};base64,${pic}`,
                msg: 'success'
            });
        }).catch(err => {
            res.json({
                code: 1,
                data: null,
                msg: String(err)
            });
        });
    });

    app.post('/api/html', (req, res) => {
        getPage(req.body).then(async page => {
            const { type, quality, tag} = req.body;
            const shotConf = {
                fullPage: true,
                omitBackground: true,
                type: type || 'jpeg'
            };
            if(shotConf.type === 'jpeg'){
                shotConf.quality = quality || 100;
            }
            let els = await page.waitForSelector(tag || 'html');
            let html = await page.evaluate(body => {
                return body.innerHTML
            }, els);
            await els.dispose();
            page.close();
            res.send(html);
        }).catch(err => {
            res.json({
                code: 1,
                data: null,
                msg: String(err)
            });
        });
    });
}