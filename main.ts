import {Application, Router} from "https://deno.land/x/oak/mod.ts";
const URL= Deno.env.get("URL");
const JWT= Deno.env.get("JWT");

const app = new Application();
const router = new Router();

router.get("/:path", (context) => {
    context.response.body = URL + context.params.path+ "?token=" + JWT;
})

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });