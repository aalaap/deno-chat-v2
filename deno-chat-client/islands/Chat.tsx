/** @jsx h */
import {
  h,
  useCallback,
  useEffect,
  useState,
} from "../client_deps.ts";

interface Message {
  text: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const API_BASE_URL = "https://aalaap-deno-chat-api.deno.dev";

  const getMessages = useCallback(async () => {
    const res = await fetch(`${API_BASE_URL}/messages`);
    const data = await res.json();
    setMessages(data);
  });

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <h2>Messages</h2>
      
      <ul>
        { messages && messages.map( (msg) => <li key={msg}>{msg}</li>)}
      </ul>
    </div>
  );
}
