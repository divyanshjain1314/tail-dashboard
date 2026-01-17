"use client";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux/store';
import AuthGuard from "@/components/providers/AuthGuard";
import ThemeProvider from '@/components/providers/ThemeProvider';
import './globals.css';
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans`}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AuthGuard>
              <ThemeProvider>
                {children}
              </ThemeProvider>
            </AuthGuard>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}