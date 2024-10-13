import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "ЧЗХ",
  description: "Хотите вывести свои товары в топовые позиции Ozon, Wildberries, Мегамарĸет, AliExpress, Яндеĸс Марĸет и другие? Предлагаю вам свои услуги.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
