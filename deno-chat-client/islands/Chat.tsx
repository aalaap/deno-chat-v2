/** @jsx h */
import { h, useCallback, useEffect, useState } from "../client_deps.ts";

interface Message {
  text: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");

  const API_BASE_URL = "https://aalaap-deno-chat-api.deno.dev";

  const getMessages = useCallback(async () => {
    const res = await fetch(`${API_BASE_URL}/messages`);
    const data = await res.json();
    setMessages(data);
  });

  useEffect(() => {
    getMessages();
  }, []);

  const onSendMessage = useCallback(async () => {
    await fetch(`${API_BASE_URL}/messages`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    setText("");
    getMessages();
  }, [text]);

  return (
    <div>
      <h2>Messages</h2>

      <ul>
        {messages && messages.map((msg) => <li key={msg.text}>{msg.text}</li>)}
      </ul>

      <p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </p>
      <button onClick={onSendMessage}>Send</button>
    </div>
  );
}
