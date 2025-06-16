import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logoMarus from '@public/logo-blanco.webp';
import libroReclamaciones from '@public/libro.webp';
import masterCard from '@public/pagosFooter/MasterCard.svg';
import visa from '@public/pagosFooter/visa.svg';
import americanExpress from '@public/pagosFooter/americanExpress.svg';
import yape from '@public/pagosFooter/yape.svg';
// import dinnerClub from '@public/pagosFooter/dinersClub.svg';
import fb from '@public/redes/fb.webp';
import wsp from '@public/redes/wsp.webp';
import adorno from '@public/adorno-footer.png';

export default function Footer() {
	return (
		<footer className=" bg-maquiperu-azul text-white overflow-hidden relative">
			<Image
				src={adorno}
				alt="adorno"
				className=" object-contain absolute left-[20%] bottom-0 object-top md:max-w-[500px] lg:max-w-[400px]"
			/>
			<div className="container max-w-[1400px] relative z-10 mx-auto flex flex-col items-center justify-between gap-8 px-4 pt-12 lg:items-start xl:flex-row xl:items-start xl:gap-10 2xl:gap-20">
				<div className="mb-2 flex w-full flex-col items-start md:mb-0 lg:max-w-[500px] xl:max-w-[400px]">
					<Link href="/" className="mb-4 flex  items-end gap-2">
						<Image
							src={logoMarus}
							alt="Store Logo"
							className="w-auto object-cover"
						/>
						<span className="text-xs font-light">1.1.1</span>
					</Link>
					<p className="text-left text-sm leading-normal text-pretty text-gray-300">
						Empresa con más de 28 años de experiencia en la venta de maquinaria
						pesada, logística y agrícola. Dealer Oficial de Hyundai, Yale,
						Sonalika y Shacman.
					</p>
					<div className="mt-6 flex items-center gap-3">
						<a href="#">
							<Image
								src={fb}
								alt="facebook"
								className=" w-auto h-6 object-contain"
							/>

							<span className="sr-only">Facebook</span>
						</a>
						<a href="#">
							<Image
								src={wsp}
								alt="whatsapp"
								className=" w-auto h-6 object-contain"
							/>

							<span className="sr-only">whatsapp</span>
						</a>
					</div>
				</div>
				<div className="flex w-full flex-wrap items-start gap-10 xl:justify-end xl:gap-10 2xl:gap-16">
					<div className="md:mb-0">
						<h3 className="text-white mb-3 text-sm font-semibold uppercase">
							Mapa del Sitio
						</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/"
									className="text-gray-300 transition-colors hover:text-white"
								>
									<span className="mr-2">›</span>
									Inicio
								</Link>
							</li>

							<li>
								<Link
									href="/sobre-nosotros"
									className="text-gray-300 transition-colors hover:text-white"
								>
									<span className="mr-2">›</span>
									Nosotros
								</Link>
							</li>
							<li>
								<Link
									href="/politica-privacidad"
									className="text-gray-300 transition-colors hover:text-white"
								>
									<span className="mr-2">›</span>
									Promociones
								</Link>
							</li>
							<li>
								<Link
									href="/politica-privacidad"
									className="text-gray-300 transition-colors hover:text-white"
								>
									<span className="mr-2">›</span>
									Contacto
								</Link>
							</li>
						</ul>
					</div>
					<div className="md:mb-0">
						<h3 className="text-white mb-3 text-sm font-semibold uppercase">
							Legal
						</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/"
									className="text-gray-300 transition-colors hover:text-white"
								>
									<span className="mr-2">›</span>
									Términos y condiciones
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-gray-300 transition-colors hover:text-white"
								>
									<span className="mr-2">›</span>
									Políticas de privacidad
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-gray-300 transition-colors hover:text-white"
								>
									<span className="mr-2">›</span>
									Legales
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-white mb-3 text-sm font-semibold uppercase">
							Contacto
						</h3>
						<ul className="space-y-2 text-sm">
							<li className="flex items-center text-gray-300">
								<Phone className=" mr-2 size-4" />
								<span>+51 982 749 592</span>
							</li>
							<li className="flex items-center text-gray-300">
								<Mail className=" mr-2 size-4" />
								<span>ventas@maquiperu.com</span>
							</li>

							<li className="flex items-start text-sm text-gray-300">
								<MapPin className=" mr-2 size-4" />
								<span>Calle Primero de Mayo, Ate, Lima.</span>
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-8 sm:gap-4">
						<div>
							<h3 className="text-white mb-3 text-sm font-semibold uppercase">
								Formas de Pago
							</h3>
							<div className="flex items-center gap-2">
								<Image
									src={masterCard}
									alt="masterCard"
									className="w-[40px] rounded-xs object-cover sm:w-[35px] xl:w-[30px]"
								/>
								<Image
									src={visa}
									alt="visa"
									className="w-[40px] rounded-xs object-cover sm:w-[35px] xl:w-[30px]"
								/>
								<Image
									src={americanExpress}
									alt="americanExpress"
									className="w-[40px] rounded-xs object-cover sm:w-[35px] xl:w-[30px]"
								/>
								<Image
									src={yape}
									alt="yape"
									className="w-[40px] rounded-xs object-cover sm:w-[35px] xl:w-[30px]"
								/>
								{/* <Image
									src={dinnerClub}
									alt="dinnerClub"
									className="w-[40px] rounded-xs object-cover sm:w-[35px] xl:w-[30px]"
								/> */}
							</div>
						</div>
						<div>
							{/* <h3 className="text-white mb-3 text-sm font-semibold">
								Libro de Reclamaciones
							</h3> */}
							<Link
								href="/categoria/hogar"
								className="flex items-start transition-colors mt-3 hover:text-white"
							>
								<Image
									src={libroReclamaciones}
									alt="libro de reclamaciones"
									className="w-[80px] rounded-xs object-cover"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="border-white/20 mt-12 border-t py-4 text-center ">
				<p className="text-xs md:text-sm text-gray-300">
					&copy; {new Date().getFullYear()} Maquiperú. Todos los derechos
					reservados.
				</p>
			</div>
		</footer>
	);
}
