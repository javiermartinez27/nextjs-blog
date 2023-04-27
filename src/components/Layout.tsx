import Head from "next/head";
import Navbar from "./NavBar";

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout( { children }: LayoutProps) {
  return (
    <div className="bg-[#EAB676]">
      <Head>
        <title>JMSabathier Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar />
      <div className="mt-20">{children}</div>
      <Footer /> */}
      {children}
    </div>
  )
}