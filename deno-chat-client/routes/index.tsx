/** @jsx h */
import { h } from "../client_deps.ts";
import Chat from "../islands/Chat.tsx";

export default function Home() {
  return (
    <div>
      <h1>Deno Chat</h1>
      
      <Chat />
    </div>
  );
}
