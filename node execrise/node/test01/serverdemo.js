const Koa = require("koa")
const router = require("koa-router")()
const views = require("koa-views");
const nunjucks = require("nunjucks")
const session = require("koa-session");
const app = new Koa();
app.use(views(__dirname + "/views", {
    map: {
        html: 'nunjucks'
    }
}))
app.use(router.routes())
app.keys = ['123456']
app.use(session({
    maxAge: 20000
}, app))
router.get("/", async ctx => {
    ctx.cookies.set("user", "admin")
    ctx.body = "cookie"
})
router.get("/test", async ctx => {
    ctx.body = ctx.cookies.get("user")
})
router.get("/cnt", async ctx => {
    let cnt = ctx.cookies.get("cookie")
    if (cnt > 0) {
        cnt++;
        ctx.cookies.set("cookie", cnt, {
            maxAge: 2000
        })
    } else {
        cnt = 1;
        ctx.cookies.set("cookie", 1);
    }
    ctx.body = cnt
})
router.get("/session", async ctx => {
    ctx.session.user = "admin"
    ctx.body = 'set session'
})
router.get("/tem", async ctx => {
    // let user = ctx.session.user
    // ctx.body = user
    if (ctx.session.count > 0) {
        ctx.session.count++;
    } else {
        ctx.session.count = 1
    }
    ctx.body = ctx.session.count
})
app.listen(9090, () => {
    console.log('server is running')
})