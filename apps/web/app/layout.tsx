export const metadata = {
  title: 'Checkout Shell',
  description: 'Hosted checkout modal and dashboard shell',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
