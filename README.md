# deno-chat

This is a simple chat application built using [Deno](http://deno.land/) and
deployed to [Deno Deploy](https://deno.com/deploy).

This was originally based on code from Jack Herrington's [Deno Deploy Architecture Speedrun](https://www.youtube.com/watch?v=yZDvE0mP4Y4), but that is now outdated, so this repo contains code that's fixed and working as of Deno 1.21 and Deno Deploy beta 3.

I'll leave this repo here and fork it to make my own variant.

## Tech stack

- [Deno](http://deno.land/): A modern runtime for JavaScript and TypeScript.
- [Deno Deploy](https://deno.com/deploy): A distributed system that runs
  JavaScript, TypeScript, and WebAssembly at the edge, worldwide.
- [oak](https://oakserver.github.io/oak/): A middleware framework for Deno’s
  native HTTP server, inspired by [Koa](https://koajs.com/).
- [fresh](https://fresh.deno.dev/): A web framework built on top of [Preact](https://preactjs.com/) that lets you build projects very fast, highly dynamic, and without the need of a build step.

## Getting started 

To deploy this to Deno Deploy:

1. Create a project for the API and link it to `deno-chat-api/index.js`.
2. Grab the API URL and change it in `deno-chat-client/islands/Chat.tsx`.
3. Create a project for the client and link it to `deno-chat-client/main.ts`.

## Demo

This should be live at [aalaap-deno-chat-client.deno.dev](https://aalaap-deno-chat-client.deno.dev) and the API should be running at [aalaap-deno.chat-api.deno.dev](https://aalaap-deno.chat-api.deno.dev).

## License

Copyright 2022 Aalaap Ghag

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
