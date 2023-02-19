import {Application, Router} from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", (context) => {
    context.response.body = Deno.env.get("URL");
})