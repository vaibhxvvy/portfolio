import "./globals.css";

export const metadata = {
  title: "Vaibhav Surthi",
  description: "Data Analyst | Data Scientist | ML Engineer Portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
