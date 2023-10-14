import "./globals.css";

export const metadata = {
  title: "模写コーディングしたdemoサイトです",
  description: "これは模写コーディングしたdemoサイトです",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
