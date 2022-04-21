import { Application, Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts"

const messages = [];
const channel = new BroadcastChannel("chat");
channel.onmessage = (e) => {
  messages.push(event.data);
}
const router = new Router();
router
  .get("/", (ctx) => ctx.response.body = "Chat server")
  .get("/messages", (ctx) => ctx.response.body = messages)
  .post("/messages", async (ctx) => {
    const message = await ctx.request.body().value;
    messages.push(message);
    channel.postMessage(message);
    ctx.response.body = messages;
  });

const app = new Application();


app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 443 });
