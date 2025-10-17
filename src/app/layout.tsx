import type { Metadata } from 'next';
import { Inter, Pacifico, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const pacifico = Pacifico({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
});
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Crochet Corner House - Đồ len móc handmade',
  description: 'Kết nối sáng tạo, dệt nên yêu thương. Mỗi mũi kim là một câu chuyện, mỗi sản phẩm là một tác phẩm nghệ thuật.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${inter.className} ${pacifico.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
