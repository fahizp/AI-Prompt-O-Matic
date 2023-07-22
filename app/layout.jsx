import "@styles/globals.css";
import Head from "next/head";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "AI-Prompt-O-Matic",
  description: "Discover & Share AI Prompts",
  icons: {
    icon: '/assets/images/favicon.ico',
  },
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
