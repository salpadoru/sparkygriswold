import "./globals.css";

export const metadata = {
  title: "Sparky Griswold — DJ & Entertainer",
  description: "DJ, music, events and entertainment by Sparky Griswold."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="film-grain">{children}</body>
    </html>
  );
}
