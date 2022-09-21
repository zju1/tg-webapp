import { useContext } from "react";
import { WebAppContext } from "../context/WebAppProvider";

/**
 *
 * @returns {Telegram.WebApp}
 */

export default function useWebApp() {
  const webApp = useContext(WebAppContext);

  return webApp;
}
