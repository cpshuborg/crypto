// app/layout.js
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <main style={{ flex: 1 }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
