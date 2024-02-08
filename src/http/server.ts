import fastify from "fastify";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-polls";
import { voteOnPoll } from "./routes/vote-on-poll";
import cookie from "@fastify/cookie";


const app = fastify()

// GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS
app.register(cookie, {
    secret: "my-secret",
    hook: 'onRequest',
    parseOptions: {}
})

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)


app.listen({port:3333}).then(() => {
    console.log('HTTP server running')
})