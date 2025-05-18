import "./globals.css";
import LeftBar from "@/components/LeftBar";
import RigthBar from "@/components/RigthBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex justify-between">
          <div className="px-2 xsm:px-4 xxl:px-8 h-screen">
            <LeftBar/>
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-border-gray h-screen">{children}</div>
          <div className="hidden lg:flex ml-4 md:ml-8 h-screen">
            <RigthBar/>
          </div>
        </div>
      </body>
    </html>
  );
}
