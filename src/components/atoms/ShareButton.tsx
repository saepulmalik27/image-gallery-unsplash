import { Popover } from '@headlessui/react'
import React from 'react'
import SVG from 'react-inlinesvg'
import { twMerge } from 'tailwind-merge'

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

export enum PopoverPosition {
    TOP_RIGHT = 'top-right',
    BOTTOM_LEFT = 'bottom-left',
    BOTTOM_RIGHT = 'bottom-right',
    TOP_LEFT = 'top-left',
}

type ShareButtonProps = {
    popover?:
        | PopoverPosition.BOTTOM_LEFT
        | PopoverPosition.BOTTOM_RIGHT
        | PopoverPosition.TOP_LEFT
        | PopoverPosition.TOP_RIGHT
}

const ShareButton: React.FC<ShareButtonProps> = ({ popover = 'top-right' }) => {
    return (
        <Popover className={'relative'}>
            <Popover.Button className="flex items-center gap-1 rounded-sm border border-solid">
                <div className="flex h-8 w-8 items-center justify-center text-slate-400">
                    <SVG src="/assets/icons/share.svg" className="h-4 w-4" />
                </div>
            </Popover.Button>
            <Popover.Panel
                className={twMerge(
                    'absolute bottom-[120%] right-0 flex h-fit  w-fit flex-col gap-2 rounded-sm bg-white p-4 text-black shadow-sm',
                    getVariantClass(popover)
                )}>
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

const getVariantClass = (variant: string) => {
    switch (variant) {
        case PopoverPosition.TOP_RIGHT:
            return 'bottom-[120%] right-0'
        case PopoverPosition.BOTTOM_LEFT:
            return 'top-[120%] left-0'
        case PopoverPosition.BOTTOM_RIGHT:
            return 'top-[120%] right-0'
        case PopoverPosition.TOP_LEFT:
            return 'bottom-[120%] left-0'
        default:
            return 'bottom-[120%] right-0'
    }
}

export default ShareButton
