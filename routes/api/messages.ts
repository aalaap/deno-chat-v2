import { HandlerContext } from "../../server_deps.ts";

interface Message {
  room: string;
  message: string;
}

const messages: Message[] = [];

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  if (_req.method == "POST") {
    const message: Message = await _req.json();

    messages.push(message);
  }

  if (["POST", "GET"].includes(_req.method)) {
    return new Response(JSON.stringify(messages));
  }

  return new Response(JSON.stringify({ error: "Method not allowed." }));
};
