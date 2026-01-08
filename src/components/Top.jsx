import React from "react";
import ChatInput from './ChatInput'
export default function Top({ onMenuClick }) {
  return (
    <>
      <header
        className="
        bg-[#111111] h-[60px]
        flex items-center justify-between
        px-[16px] md:px-[20px]
        relative z-20
      "
      >
        {/* LEFT: Mobile Toggle */}
        <button
          onClick={onMenuClick}
          className="lg:hidden"
        >
          <img src="/images/button-icons.png" alt="menu" />
        </button>

        {/* RIGHT: Actions */}
        <div className="flex gap-[12px] md:gap-[16px] ml-auto">
          <button
            className="
            flex items-center gap-[8px]
            bg-[#FFFFFF]/10 text-white text-sm
            border border-white/10 rounded-[8px]
            px-[12px] py-[8px]
            md:px-[15px] md:py-[8px]
          "
          >
            <img src="/images/star.png" />
            <span className="font-small">SuperAI 2.0</span>
            <img src="/images/arrow-down.png" />
          </button>

          <button
            className="
            flex items-center gap-[8px]
            bg-white text-black text-sm
            border border-white/10 rounded-[8px]
            px-[12px] py-[8px]
            md:px-[15px] md:py-[8px]
          "
          >
            <img src="/images/NewChatIcon.png" />
            <span className="hidden sm:inline">New Chat</span>
          </button>
        </div>
      </header>
    </>
  );
}
