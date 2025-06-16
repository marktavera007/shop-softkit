/* eslint-disable @typescript-eslint/no-explicit-any */

import { cn } from '@/lib/utils'
import Image from 'next/image'
import StylesCarousel from './carousel.module.css'
type PropType = {
  selected: boolean
  index: any
  onClick: () => void
}
export const ThumbsMinuature: React.FC<PropType> = (props) => {
  const { selected, index, onClick } = props
  return (
    <div
      className={cn({
        'text-[rgb(222, 222, 222)]': selected,
        'opacity-45': !selected
      })}
    >
      <button
        onClick={onClick}
        type="button"
        className={cn(StylesCarousel['embla-thumbs__slide__number'])}
      >
        <Image
          className="rounded-xl"
          src={`${index}`}
          alt={`producto ${index}`}
          width="75"
          height="75"
        />
      </button>
    </div>
  )
}
