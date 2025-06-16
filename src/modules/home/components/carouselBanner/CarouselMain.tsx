'use client';
import React, { useRef } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
// import { useDotButton } from './DotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './Arrows';
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css';
// import HomePublicStyles from '../../styles/homePublic.module.css';
// import Fade from 'embla-carousel-fade';

import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { useAutoplayProgress } from './useAutoplayProgress';
import Image from 'next/image';
import fondo from '@public/home/banner1.jpg';
import fondo2 from '@public/home/banner2.jpg';
import ButtonMaquiperu from '@base/src/common/components/personalizados/ButtonMaquiperu';

type PropType = {
	options?: EmblaOptionsType;
};

const BannerCarouselHome: React.FC<PropType> = (props) => {
	const { options } = props;
	const progressNode = useRef<HTMLDivElement>(null!); // Usamos "non-null assertion"

	const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false });
	// const fade = Fade();
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{ ...options, loop: true, containScroll: false },
		[autoplay]
	);

	const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

	// Pasamos handleSlideChange al hook para que se ejecute tras scrollPrev/scrollNext
	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	return (
		<section className="relative h-[calc(75dvh)] w-full overflow-hidden">
			<div
				className="bg-thedooragency-negro relative h-full w-full"
				ref={emblaRef}
			>
				<div className="flex h-full w-full">
					<div className="flex h-full shrink-0 basis-full items-center justify-center">
						<div className="relative z-10 h-full w-full">
							<Image
								src={fondo}
								alt="fondo de combat"
								className="object-cover"
								fill
								placeholder="blur"
								blurDataURL="data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAAAwBACdASogABAAPpE4mEeloyKhMAgAsBIJYwC7AYvOsq/a93k0ny0uZdAA/v8tERUk2vJ/+sL99U1GZtfeWXGN7InPpjbYqq52PEG3yoH+fs5nctcGbBqa7866+VmvxGmd70a/EalJoUtqnCAEse1xrylc6rDvOweFJoSWW/JT9l7O2x+s8Z1oM38mzWEVgLb+chAmMlr3I8TwhILVBOkMQDMrhom+2ZRkqJ2gO8yrDSbS257wsrGYQ2OAAA=="
							/>
							<div className="fade-in-unique absolute inset-0 flex flex-col items-center justify-center gap-6">
								<h2 className="text-center text-2xl leading-tight font-black text-white md:text-[40px]">
									DONDE TODO EMPIEZA
								</h2>
								<ButtonMaquiperu
									href="/servicios"
									variant="filled"
									className="w-full max-w-fit px-6 py-4 !font-normal"
								>
									Explora nuestros servicios
								</ButtonMaquiperu>
							</div>
						</div>
					</div>
					<div className="flex h-full shrink-0 basis-full items-center justify-center">
						<div className="relative z-10 h-full w-full">
							<Image
								src={fondo2}
								alt="fondo de combat"
								className="object-cover"
								fill
								placeholder="blur"
								blurDataURL="data:image/webp;base64,UklGRtwAAABXRUJQVlA4INAAAAAQBQCdASogABAAPpE6l0eloyIhMAgAsBIJZwC/P2pVWA6xuZh8u7MQyQLMp7nljJgAAP7/iGTfv4s+HNY3hKrP3aaP+G18UNzYvDvd/s707C7NuNJ7ax52bamqI79k9Jj0NoIdlrn/yiqFyUPCqM2VfJJf0QbL/xyrb5kdCSdbuyi5xOqWHYoGRgF/oQ3r7qOWQd8dq8esUuYZaj/g0mo3LSmD9e9IKwLYenXkvILoVJiwDipILuoDM/lKz1FLL3NUhoDc93xfh2f/FHz0MAAA"
							/>
							<div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
								<h2 className="text-center text-2xl leading-tight font-black text-white md:text-[40px]">
									IDEAMOS. EJECUTAMOS. IMPACTAMOS.
								</h2>
								<ButtonMaquiperu
									href="/trabajos"
									variant="filled"
									className="w-full max-w-fit px-6 py-4 !font-normal"
								>
									Conoce nuestro trabajo
								</ButtonMaquiperu>
							</div>
						</div>
					</div>
				</div>
			</div>
			<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
			<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
			<div className="fade-in-unique absolute bottom-6 left-1/2 -translate-x-1/2">
				<div
					className={cn('embla__progress', {
						'embla__progress--hidden': !showAutoplayProgress,
					})}
				>
					<div className="embla__progress__bar" ref={progressNode} />
				</div>
			</div>

			{/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn('embla__dot', {
                'embla__dot--selected': index === selectedIndex,
              })}
            />
          ))}
        </div>
      </div> */}
		</section>
	);
};

export default BannerCarouselHome;
