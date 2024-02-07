import fastify from "fastify";
import { createPoll } from "./create-poll";
import { getPoll } from "./get-polls";
import { voteOnPoll } from "./vote-on-poll";
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