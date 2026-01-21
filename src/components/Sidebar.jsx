import { useState } from "react";
import Top from "./Top";
import ChatInput from "./ChatInput";

export default function Sidebar() {
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-[100hv] lg:h-screen text-white text-xs">
      {/* DESKTOP*/}
      <aside
        className={`
          hidden lg:flex flex-col
          h-[105vh] bg-[#121212] border-r border-white/10
          transition-all duration-300 ease-in-out
          ${desktopOpen ? "w-[260px]" : "w-[72px]"}
          overflow-hidden
        `}
      >
        <div className="flex items-center justify-between px-4 h-14">
          <span
            className={`font-bold mt-[7px] text-lg ${
              !desktopOpen && "hidden"
            }`}
          >
            <img src="/images/Logo.png" alt="" />
          </span>

          <button onClick={() => setDesktopOpen(!desktopOpen)}>
            <img src="/images/button-icons.png" alt="" />
          </button>
        </div>

        {/* Menu */}
        <ul className="px-2 mt-2 space-y-1 w-[268px]">
          {desktopOpen && <p className="text-gray-500">General</p>}

          <Menu
            icon="/images/tabler-icon-brand-hipchat.png"
            label="AI Chat"
            open={desktopOpen}
            onClick={() => setDesktopOpen(false)}
          />
          <Menu
            icon="/images/Vector.png"
            label="AI Video"
            open={desktopOpen}
            onClick={() => setDesktopOpen(false)}
          />
          <Menu
            icon="/images/tabler-icon-photo.png"
            label="AI Image"
            open={desktopOpen}
            onClick={() => setDesktopOpen(false)}
          />
          <Menu
            icon="/images/tabler-icon-code.png"
            label="AI Development"
            open={desktopOpen}
            onClick={() => setDesktopOpen(false)}
          />

          {desktopOpen && <p className="text-gray-500">Previous Chat</p>}

          <Menu
            icon="/images/Inbox Icon.png"
            label="Describe the benefits for a..."
            open={desktopOpen}
            onClick={() => setDesktopOpen(false)}
          />
          <Menu
            icon="/images/Inbox Icon.png"
            label="Generate a list current we..."
            open={desktopOpen}
            onClick={() => setDesktopOpen(false)}
          />
          <Menu
            icon="/images/Inbox Icon.png"
            label="Condense the following se..."
            open={desktopOpen}
            onClick={() => setDesktopOpen(false)}
          />
          <Menu
            icon="/images/Inbox Icon.png"
            label="Describe what post moder..."
            open={desktopOpen}
            onClick={() => setDesktopOpen(false)}
          />
        </ul>

        {/* Bottom Section */}
        {desktopOpen && (
          <div className="mt-auto p-4">
            <div className="bg-gradient-to-r from-[#5B6CFF] to-[#4C5AD9] rounded-[12px] p-3">
              <div className="flex items-start gap-1">
                <img
                  src="/images/tabler-icon-sparkles.png"
                  alt="upgrade"
                  className="w-7 h-7 bg-white mt-2 rounded-full object-cover p-1"
                />
                <div>
                  <p className="text-sm font-semibold">Upgrade Plan</p>
                  <p className="text-xs opacity-80">
                    More access to the best models
                  </p>
                </div>
              </div>

              <button className="mt-3 w-full bg-white text-black rounded-md py-1.5 text-sm">
                Upgrade Plan
              </button>
            </div>

            <div className="flex items-center justify-between rounded-xl p-3">
              <div className="flex items-center gap-3">
                <img
                  src="/images/User Avatar Container.png"
                  className="w-9 h-9 rounded-full"
                  alt=""
                />
                <div>
                  <p className="text-sm font-medium">Nutan Sai Nandam</p>
                  <p className="text-xs text-gray-400">nutansainandam.com</p>
                </div>
              </div>
              <img src="/images/more.png" alt="" />
            </div>
          </div>
        )}
      </aside>

      {/* MOBILE & TABLET */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[999]">
          <div
            className="absolute inset-0 bg-black/40        
                       md:bg-zinc-700/100
                       md:hidden
                       lg:hidden"
            onClick={() => setMobileOpen(false)}
          />

          <aside
            className="
              relative h-screen max-[340px]:h-[107vh] bg-[#0f0f0f] flex flex-col
              w-full md:w-[260px]
              p-4 overflow-y-auto
            "
          >
            <div className="flex items-center justify-between">
              <img src="/images/Logo.png" alt="" />
              <button onClick={() => setMobileOpen(false)}>
                <img src="/images/button-icons.png" alt="" />
              </button>
            </div>

            {/* Menu */}
            <ul className="space-y-1 mt-4">
              <p>General</p>

              <Menu
                icon="/images/tabler-icon-brand-hipchat.png"
                label="AI Chat"
                open
                onClick={() => setMobileOpen(false)}
              />
              <Menu
                icon="/images/Vector.png"
                label="AI Video"
                open
                onClick={() => setMobileOpen(false)}
              />
              <Menu
                icon="/images/tabler-icon-photo.png"
                label="AI Image"
                open
                onClick={() => setMobileOpen(false)}
              />

              <p>Previous Chat</p>

              <Menu
                icon="/images/Inbox Icon.png"
                label="Describe the benefits for a..."
                open
                onClick={() => setMobileOpen(false)}
              />
              <Menu
                icon="/images/Inbox Icon.png"
                label="Generate a list current we..."
                open
                onClick={() => setMobileOpen(false)}
              />
              <Menu
                icon="/images/Inbox Icon.png"
                label="Condense the following se..."
                open
                onClick={() => setMobileOpen(false)}
              />
              <Menu
                icon="/images/Inbox Icon.png"
                label="Describe what post moder..."
                open
                onClick={() => setMobileOpen(false)}
              />
            </ul>

            {/* Bottom */}
            <div className="mt-auto pt-3">
              <div className="bg-[#5865f2] rounded-xl p-3">
                <div className="flex items-start gap-1">
                  <img
                    src="/images/tabler-icon-sparkles.png"
                    alt="upgrade"
                    className="w-7 h-7 bg-white mt-2 rounded-full object-cover p-1"
                  />
                  <div>
                    <p className="text-sm font-semibold">Upgrade Plan</p>
                    <p className="text-xs opacity-80">
                      More access to the best models
                    </p>
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
                    alt=""
                  />
                  <div>
                    <p className="text-sm font-medium text-white">
                      Nutan Sai Nandam
                    </p>
                    <p className="text-xs text-gray-400">nutansainandam.com</p>
                  </div>
                </div>

                <button>
                  <img src="/images/more.png" alt="" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* MAIN CONTENT*/}
      <main className="flex-1 relative z-10">
        {/*opens ONLY mobile drawer */}
        <Top onMenuClick={() => setMobileOpen(true)} />
        <div className={mobileOpen ? "md:hidden lg:block" : ""}>
          <ChatInput />
        </div>
      </main>
    </div>
  );
}

function Menu({ icon, label, open, onClick }) {
  return (
    <li
      onClick={onClick}
      className="
        flex items-center gap-3
        px-[16px] py-2 rounded-lg
        hover:bg-white/5
        cursor-pointer
        list-none me-3
      "
    >
      <img src={icon} alt="" />
      {open && <span className="text-sm">{label}</span>}
    </li>
  );
}
