"use client";
import Navbar from '@/components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
