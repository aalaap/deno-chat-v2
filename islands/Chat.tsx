/** @jsx h */
import { h, useCallback, useEffect, useState } from "../client_deps.ts";
import { slugify } from "https://deno.land/x/slugify/mod.ts";

interface Message {
  text: string;
}

interface ChatProps {
  room: string;
}

export default function Chat(props: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");

  const API_BASE_URL = "https://aalaap-deno-chat-api.deno.dev";
  const room = slugify(props.room);

  const getMessages = useCallback(async () => {
    const res = await fetch(`${API_BASE_URL}/messages?room=${room}`);
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
      body: JSON.stringify({ text, room }),
    });
    setText("");
    getMessages();
  }, [text]);

  return (
    <div>
      <h2>{props.room} Messages</h2>

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
