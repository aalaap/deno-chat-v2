/** @jsx h */
import { h, PageProps } from "../client_deps.ts";

export default function Room(props: PageProps) {
  return <div>Hello {props.params.room}. The chat room will be displayed here.</div>;
}
