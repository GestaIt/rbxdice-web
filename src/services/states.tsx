import {useState} from "react";

const useWebSocket = () => {
  const [webSocket, setWebSocket] = useState<WebSocket>()

  const reboot = () => {

  }

  // TODO: Initialization & rebooting
  return [webSocket, setWebSocket, reboot]
}