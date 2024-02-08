import fastify from "fastify";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-polls";
import { voteOnPoll } from "./routes/vote-on-poll";
import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";
import { pollResults } from "./ws/poll-result";


const app = fastify()

// GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS
app.register(cookie, {
  secret: "polls-app-nlw",
  hook: 'onRequest',
})

app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.register(pollResults)

app.listen({port:3333}).then(() => {
    console.log('HTTP server running')
})