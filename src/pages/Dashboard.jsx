import { useState } from "react";
import Top from "../components/Top";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import ChatInput from "../components/ChatInput";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-[#1e1e1e]">
      
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col">
        {/* <Top setOpen={setSidebarOpen} /> */}
        {/* <MainContent /> */}
        {/* <ChatInput /> */}
      </div>

    </div>
  );
}
