import "./globals.css";
import LeftBar from "@/components/left-bar";
import RightBar from "@/components/right-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto flex justify-between">
          <div className="sticky min-w-[250px] pl-12 pr-8">
            <LeftBar/>
          </div>
          <div className="flex-1 lg:min-w-[700px] border-x-[1px] border-border-gray h-screen overflow-y-auto scrollbar-hide">
            {children}
          </div>
          <div className="flex-1 hidden lg:flex lg:min-w-[250px] pl-8 pr-8 h-screen overflow-hidden">
            <RightBar/>
          </div>
        </div>
      </body>
    </html>
  );
}
