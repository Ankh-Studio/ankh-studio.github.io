import {
  Lexend,
  Radio_Canada,
  Inter,
} from "next/font/google";

export const lexand = Lexend({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lexand",
  display: "swap",
});

export const radio_canada = Radio_Canada({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-radio_canada",
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
