const router = require("koa-router")();
const Koa = require("koa");
const views = require("koa-views")
const app = new Koa();
const parser = require("koa-parser")

app.use(views(__dirname + "/views",
    {
    map: {
        html: 'nunjucks'
    }
}
))
app.use(parser());
app.use(router.routes())

router.get("/", async ctx => {
    await ctx.render("index", {title: "home page"})
})
router.get("/video", async ctx => {
    await ctx.render("index", {title: "video"})
})
router.get("/sign", async ctx => {
    await ctx.render("sign")
})
router.get("/login", async ctx => {
    let username = ctx.query.username;
    let password = ctx.query.password;
    await ctx.render("home", {
        username,
        password
    })
})
router.post("/login", async ctx => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    ` `
    await ctx.render("home", {
        username,
        password
    })
})
router.get("/for", async ctx => {
    let studentList = ['xixi', 'haha', 'heihei']
    await ctx.render("for", {

        title: "the data",
        studentList,
        login: false,
        // username: "lei",
    })
})
// router.get("/for", async ctx => {
//     let studentList = ['xixi', 'haha', 'heihei']
//     await ctx.render("for", {
//         studentList,
//         title: "the data",
//         login: true
//     })
// })
router.get("/image", async ctx => {
    await ctx.render("image")
})
app.listen(9090, () => {
    console.log('server is running ')
})