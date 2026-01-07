import React, { useState } from 'react'

export default function ChatInput() {
  const [text, setText] = useState("");

  return (
    <div className='bg-[#FFFFFF]/10 p-[30px]'>
      <div className='flex flex-col gap-[50px]'>
        <div className='flex flex-col gap-[27px]'>
          <div className='flex flex-col items-center justify-center'>
            <img src="/images/User Avatar.png" alt="" className='w-[100px] h-[100px] rounded-full object-cover opacity-95' />
            <p className='text-sm 2xl:text-[17px] text-gray-500'>Good Morning John</p>
            <h1 className='text-[17px] md:text-[23px] 2xl:text-[25px] font-medium'>How can i assist you today?</h1>
          </div>
          {/* cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:px-8 lg:px-12">
            {/* Card 1 */}
            <div className=" bg-[#FFFFFF]/10  rounded-[16px] p-[20px]">
              <img src="/images/Logomark.png" alt="" />
              <h3 className="md:text-[14px] 2xl:text-[19px] text-[#FFFFFF]/50 mt-[10px]">
                Help Me To Create A Personal Branding And Web Pages
              </h3>
            </div>
            <div className=" bg-[#FFFFFF]/10  rounded-[16px] p-[20px]">
              <img src="/images/Logomark (1).png" alt="" />
              <h3 className="md:text-[14px] 2xl:text-[19px] text-[#FFFFFF]/50 mt-[10px]">
                Write A Report Based On My Website Data
              </h3>
            </div>
            <div className="
    bg-[#FFFFFF]/10  rounded-[16px] p-[20px]
    col-span-2              /* mobile + tablet: own row */
    md:max-w-[340px]       /* same visual width as top cards */
    md:mx-auto             /* centered BETWEEN them */
    lg:col-span-1
    lg:max-w-none
    lg:mx-0
  ">
              <img src="/images/Logomark (2).png" alt="" />
              <h3 className="md:text-[14px] 2xl:text-[19px] text-[#FFFFFF]/50 mt-[10px]">
                Write A Tailored Engaging Content, With A Focus Quality
              </h3>
            </div>


          </div>

        </div>
        {/* bottom input */}
        <div className="w-full hidden sm:flex justify-center ">
          <div className="w-full bg-black/30 rounded-lg p-3 border border-zinc-700 flex flex-col gap-[10px]">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 h-[40px] bg-transparent text-sm text-white placeholder-white/60 outline-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button className="flex items-center gap-1 px-3 h-[40px] text-sm text-white bg-[#FFFFFF]/10 rounded-[60px]">
                <img src="/images/tabler-icon-world.png" />
                All Web
                <img src="/images/arrow-down.png" />
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-white/60">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 hover:text-white">
                  <img src="/images/tabler-icon-circle-plus.png" alt="" />
                  <span>Add Attachment</span>
                </button>
                <button className="flex items-center gap-1 hover:text-white">
                  <img src="/images/tabler-icon-photo.png" alt="" />
                  <span>Use Image</span>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span> {text.length}/1500</span>
                <img src="/images/Send Button.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:hidden gap-[10px]">
          {/* mobile chat */}
          <div className=' bg-black text-center'>
            <img src="/images/tabler-icon-circle-plus.png" alt="" />
          </div>
          <div className='flex'>
            <input type="text" placeholder="Ask me anything..." value={text}
              onChange={(e) => setText(e.target.value)}
              className='bg-transparent text-sm text-white placeholder-white/60 outline-none' />
            <div className="flex items-center gap-1">
              <span> {text.length}/1500</span>
              <img src="/images/Send Button.png" alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}



