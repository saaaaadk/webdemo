const Koa = require("koa")
const router = require("koa-router")();
const static = require("koa-static")
const app = new Koa();
// app.use(async ctx => {
//     ctx.body ='hello world'
// })
// console.log(__dirname +"this is direct name")
app.use(static("D:/project/web/webstorm/commonDemo/node/test01"))
// console.log(__dirname)
// console.log(static().valueOf())
router.get("/", async ctx => {
    ctx.body = 'home page';
})
router.get("/imgs", async ctx => {
        ctx.body=`<h1 class="h1">hello koa</h1> <br>
                    <p class="p">这是一段文字</p>
        <img src="/public/imgs/1.jpg" alt="" class="img">`

})
router.get("/video", async ctx => {
    ctx.body = 'video page';
})
app.use(router.routes());
app.listen(9090, () => {
    console.log('server is running')
})
// let element = document.querySelector('.img');
// console.log(element.innerHTML)