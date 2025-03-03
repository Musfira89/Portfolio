import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
