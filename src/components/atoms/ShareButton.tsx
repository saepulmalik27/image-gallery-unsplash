import { Popover } from '@headlessui/react'
import React from 'react'
import SVG from 'react-inlinesvg'

const ListSosmed = [
    {
        name: 'Facebook',
        icon: '/assets/icons/facebook.svg',
    },
    {
        name: 'Twitter',
        icon: '/assets/icons/twitter.svg',
    },
    {
        name: 'Telegram',
        icon: '/assets/icons/telegram.svg',
    },
]

const ShareButton = () => {
    return (
        <Popover className={'relative'}>
            <Popover.Button className="flex items-center gap-1 rounded-sm border border-solid">
                <div className="flex h-8 w-8 items-center justify-center text-slate-400">
                    <SVG src="/assets/icons/share.svg" className="h-4 w-4" />
                </div>
            </Popover.Button>
            <Popover.Panel className="absolute bottom-[120%] right-0  flex flex-col gap-2 rounded-sm bg-white p-4 text-black shadow-sm">
                {ListSosmed.map((item, index) => (
                    <div key={index} className="flex cursor-pointer select-none items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-solid">
                            <SVG src={item.icon} className="h-4 w-4" />
                        </div>
                        <span>{item.name}</span>
                    </div>
                ))}
            </Popover.Panel>
        </Popover>
    )
}

export default ShareButton
