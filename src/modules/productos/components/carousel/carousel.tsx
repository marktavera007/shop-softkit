/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import Image from 'next/image';
import { ThumbsMinuature } from './ThumbsMinuature';
import StylesCarousel from './carousel.module.css';
import { cn } from '@/lib/utils';

type PropType = {
	slides: any[];
	options?: any;
};

export const CarruselImagenes: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, [Fade()]);
	const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
		containScroll: 'keepSnaps',
		dragFree: true,
	});

	const onThumbClick = useCallback(
		(index: number) => {
			if (!emblaMainApi || !emblaThumbsApi) return;
			emblaMainApi.scrollTo(index);
		},
		[emblaMainApi, emblaThumbsApi]
	);

	const onSelect = useCallback(() => {
		if (!emblaMainApi || !emblaThumbsApi) return;
		const newIndex = emblaMainApi.selectedScrollSnap();
		setSelectedIndex(newIndex);
		emblaThumbsApi.scrollTo(newIndex);
	}, [emblaMainApi, emblaThumbsApi]);

	useEffect(() => {
		if (!emblaMainApi) return;
		onSelect();

		emblaMainApi.on('select', onSelect).on('reInit', onSelect);
	}, [emblaMainApi, onSelect]);

	// Funciones para manejar el clic de las flechas
	const scrollToPrev = useCallback(() => {
		if (emblaMainApi) emblaMainApi.scrollPrev();
	}, [emblaMainApi]);

	const scrollToNext = useCallback(() => {
		if (emblaMainApi) emblaMainApi.scrollNext();
	}, [emblaMainApi]);

	const isPrevDisabled = selectedIndex === 0;
	const isNextDisabled = emblaMainApi
		? selectedIndex === emblaMainApi.scrollSnapList().length - 1
		: true;

	return (
		<div className=" w-auto">
			<div className="relative overflow-hidden rounded-xl" ref={emblaMainRef}>
				<div className={cn(StylesCarousel.embla__container)}>
					{slides?.map((slide, index) => (
						<div className="min-w-0 shrink-0 grow-0 basis-full" key={index}>
							<div className={cn(StylesCarousel.embla__slide__number)}>
								<Image
									className="h-full w-full max-w-full rounded-xl object-contain"
									src={`${slide}`}
									alt="imagen del producto"
									width="600"
									height="600"
								/>
							</div>
						</div>
					))}
				</div>
				<button
					className={cn(
						'absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-linear-to-r from-red-500 to-orange-500 text-marus-white-300',
						{ hidden: isPrevDisabled }
					)}
					onClick={scrollToPrev}
					aria-label="Previous slide"
					disabled={isPrevDisabled}
				>
					{`<`}
				</button>
				<button
					className={cn(
						'absolute right-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-linear-to-r from-red-500 to-orange-500 text-marus-white-300',
						{ hidden: isNextDisabled }
					)}
					onClick={scrollToNext}
					aria-label="Next slide"
					disabled={isNextDisabled}
				>
					{`>`}
				</button>
			</div>

			<div className="mt-3">
				<div className="overflow-hidden" ref={emblaThumbsRef}>
					<div
						className={cn(
							StylesCarousel['embla-thumbs__container'],
							'flex items-center gap-2.5'
						)}
					>
						{slides?.map((slide, index) => (
							<ThumbsMinuature
								key={index}
								onClick={() => onThumbClick(index)}
								selected={index === selectedIndex}
								index={slide}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
