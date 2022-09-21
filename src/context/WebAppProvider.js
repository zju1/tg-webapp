const { createContext, useEffect } = require("react");

export const WebAppContext = createContext();

const webApp = window.Telegram.WebApp;

export default function WebAppProvider({ children }) {
  useEffect(() => {
    webApp.ready();
  }, []);

  return (
    <WebAppContext.Provider value={webApp}>{children}</WebAppContext.Provider>
  );
}
