const Koa = require("koa");
const views = require("koa-views");
const router = require("koa-router")();
const nunjucks = require("nunjucks");
const parser = require("koa-parser");
const session = require("koa-session");
const app = new Koa();
app.use(views(__dirname + "/views", {
    map: {
        html: "nunjucks"
    }
}))
app.keys = ['111111']
app.use(session({
    maxAge: 10000
}, app))
app.use(parser())
app.use(router.routes())
router.get("/", async ctx => {
    await ctx.render("finalhome.html")
})
router.get("/login", async ctx => {
    await ctx.render("finallogin.html")
})
router.get("/logout", async ctx => {
    ctx.session.user="";
    ctx.redirect("/")
})
router.get("/list", async ctx => {
    if (ctx.session.user) {
        await ctx.render("finallist.html")
    } else ctx.redirect("/")
})
router.post("/login", async ctx => {
    let username = ctx.request.body.username
    let password = ctx.request.body.password
    if (username === 'root' && password === 'root') {
        ctx.redirect("/list")
        ctx.session.user = "root"
    } else ctx.redirect("/")
})
app.listen(9090, () => {
    console.log('server is running')
})