const Koa = require("koa")
const views = require("koa-views")
const nunjucks = require("nunjucks");
const router = require("koa-router")();
const app = new Koa();
// app.use(views(__dirname + "/views", {
//     map: {
//         html: 'nunjucks'
//     }
// }))
app.use(router.routes());

app.use(views(__dirname + "/views", {
    map: {
        html: 'nunjucks'
    }
}))
// app.use(async ctx => {
//     await ctx.render("index",{title:"hello nunjucks"})
// })
router.get("/home", async ctx => {
    await ctx.render('index',{title:"home page"})
})
router.get("/imgs",async  ctx=>{
    await  ctx.render('index',{title:"imgs"})
})
app.listen(9090, () => {
    console.log('server is running')
})

