# deno-chat-v2

This is a simple chat application built using [Deno](http://deno.land/) and
deployed to [Deno Deploy](https://deno.com/deploy).

This version bundles the backend API into the fresh app itself, removing the need for a separate oak-based API project.

> Note: This is WIP, so it does not work yet.

## Tech stack

- [Deno](http://deno.land/): A modern runtime for JavaScript and TypeScript.
- [Deno Deploy](https://deno.com/deploy): A distributed system that runs
  JavaScript, TypeScript, and WebAssembly at the edge, worldwide.
- [fresh](https://fresh.deno.dev/): A web framework built on top of [Preact](https://preactjs.com/) that lets you build projects very fast, highly dynamic, and without the need of a build step.

## Usage

- Visit `https://your-deploy-url.deno.dev/` to see the "root" or default chat room.
- Visit `https://your-deploy-url.deno.dev/room` to see chat only for the <room>.

## Getting started

To locally start the project:

```bash
deno run -A --watch --no-check main.ts
```

After adding, removing, or moving a page in the `routes` or directory, or
adding, removing, or moving an island in the `islands` directory, run:

```bash
fresh manifest
```

## Deployment

To deploy this to Deno Deploy:

1. Push code to GitHub.
2. Grab the URL to your project's `/main.ts`, i.e. `https://raw.githubusercontent.com/username/deno-chat-v2/main/main.ts`
3. Create a project in Deno Deploy.
4. Link it to `deno-chat-client/main.ts`.

## Demo

> This is still a work in progress, so there is no demo link yet.

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
