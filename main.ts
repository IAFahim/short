import {Application, Router} from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/:path", (context) => {
    context.response.body = Deno.env.get("URL")+context.params.path;
})

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });