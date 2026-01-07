import { useState } from "react";
import Top from "./Top";
import ChatInput from './ChatInput'

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#121212] text-white text-xs">
      {/*DESKTOP*/}
      <aside
        className={`
          hidden lg:flex flex-col
          h-screen bg-[#121212] border-r border-white/10
          transition-all duration-300 ease-in-out
          ${open ? "w-[260px]" : "w-[72px]"}
          overflow-hidden
        `}
      >
        <div className="flex items-center justify-between px-4 h-14">
          <span className={`font-bold text-lg ${!open && "hidden"}`}>
            <img src="/images/Logo.png" alt="" />
          </span>

          <button onClick={() => setOpen(!open)}>
            <img src="/images/button-icons.png" />
          </button>
        </div>

        {/* Menu */}
        <div className="px-2 mt-4 space-y-1 w-[268px]">
          {open && <p className="text-gray-500">General</p>}
          <MenuItem icon="/images/tabler-icon-brand-hipchat.png" label="AI Chat" open={open} />
          <MenuItem icon="/images/Vector.png" label="AI Video" open={open} />
          <MenuItem icon="/images/tabler-icon-photo.png" label="AI Image" open={open} />
          <MenuItem icon="/images/tabler-icon-code.png" label="AI Development" open={open} />
          {open && <p className="text-gray-500">Previous Chat</p>}
          <MenuItem icon="/images/Inbox Icon.png" label="Describe the benefits for a..." open={open} />
          <MenuItem icon="/images/Inbox Icon.png" label="Generate a list current we..." open={open} />
          <MenuItem icon="/images/Inbox Icon.png" label="Condense the following se..." open={open} />
          <MenuItem icon="/images/Inbox Icon.png" label="Describe what post moder..." open={open} />
        </div>

        {/* Bottom Section */}
        {open && (
          <div className="mt-auto p-4">
            <div className="bg-gradient-to-r from-[#5B6CFF] to-[#4C5AD9] rounded-[12px] p-3">
              <div className="flex items-start gap-1">
                <img src="/images/tabler-icon-sparkles.png" alt="upgrade" className="w-7 h-7 bg-white mt-2 rounded-full object-cover p-1" />
                <div>
                  <p className="text-sm font-semibold">Upgrade Plan</p>
                  <p className="text-xs opacity-80">More access to the best models</p>
                </div>
              </div>
              <button className="mt-3 w-full bg-white text-black rounded-md py-1.5 text-sm">
                Upgrade Plan
              </button>
            </div>

            <div className="flex items-center justify-between rounded-xl p-3">
              <div className="flex items-center gap-3">
                <img src="/images/User Avatar Container.png" className="w-9 h-9 rounded-full" />
                <div>
                  <p className="text-sm font-medium">Nutan Sai Nandam</p>
                  <p className="text-xs text-gray-400">nutansainandam.com</p>
                </div>
              </div>
              <img src="/images/more.png" />
            </div>
          </div>
        )}
      </aside>

      {/*MOBILE & TABLET */}
      {/* <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40"
      >
        <img src="/images/button-icons.png" />
      </button> */}

      {open && (
        <div className="lg:hidden fixed inset-0 z-[999]">
          <div
            className="absolute inset-0 bg-black/40        
                       md:bg-zinc-700/100
                       md:hidden
                       lg:hidden"
            onClick={() => setOpen(false)}
          />
          {/* Drawer */}
          <aside
            className="
              relative h-screen bg-[#0f0f0f] flex flex-col
              w-full md:w-[260px]
              p-4 overflow-y-auto
            "
          >
            <div className="flex items-center justify-between">
              <img src="/images/Logo.png" alt="" />
              <button onClick={() => setOpen(false)}>
                <img src="/images/button-icons.png" />
              </button>
            </div>

            {/* Menu */}
            <div className="space-y-1 mt-4">
              <p>General</p>
              <MenuItem icon="/images/tabler-icon-brand-hipchat.png" label="AI Chat" open />
              <MenuItem icon="/images/Vector.png" label="AI Video" open />
              <MenuItem icon="/images/tabler-icon-photo.png" label="AI Image" open />
              <MenuItem icon="/images/tabler-icon-code.png" label="AI Development" open />
              <p>Previous Chat</p>
              <MenuItem icon="/images/Inbox Icon.png" label="Describe the benefits for a..." open />
              <MenuItem icon="/images/Inbox Icon.png" label="Generate a list current we..." open />
              <MenuItem icon="/images/Inbox Icon.png" label="Condense the following se..." open />
              <MenuItem icon="/images/Inbox Icon.png" label="Describe what post moder..." open />
            </div>

            {/* Bottom */}
            <div className="mt-auto pt-3">
              <div className="bg-[#5865f2] rounded-xl p-3">
                <div className="flex items-start gap-1">
                  <img src="/images/tabler-icon-sparkles.png" alt="upgrade" className="w-7 h-7 bg-white mt-2 rounded-full object-cover p-1" />
                  <div>
                    <p className="text-sm font-semibold">Upgrade Plan</p>
                    <p className="text-xs opacity-80">More access to the best models</p>
                  </div>
                </div>
                <button className="mt-3 w-full bg-white text-black rounded-md py-1.5 text-sm">
                  Upgrade
                </button>
              </div>
              <div className="flex items-center justify-between rounded-xl p-3">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/User Avatar Container.png"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-white">Nutan Sai Nandam</p>
                    <p className="text-xs text-gray-400">nutansainandam.com</p>
                  </div>
                </div>

                <button>
                  <img src="/images/more.png" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}

      <main className="flex-1 relative z-10">
        <Top onMenuClick={() => setOpen(true)} />
        <div className={open ? "md:hidden lg:block" : ""}>
  <ChatInput />
</div>
      </main>
    </div>
  );
}

function MenuItem({ icon, label, open }) {
  return (
    <div className="flex items-center gap-3 px-[16px] py-2 rounded-lg hover:bg-white/5">
      <img src={icon} />
      {open && <span className="text-sm whitespace-nowrap">{label}</span>}
    </div>
  );
}
