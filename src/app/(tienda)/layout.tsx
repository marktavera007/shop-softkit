import Footer from '@base/src/common/layout/footer/Footer';
import { Header } from '@base/src/common/layout/header/Header';
import Script from 'next/script';

export default async function TiendaLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Script
				id="chatwoot-script"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
             (function(d,t) {
    var BASE_URL="https://n8n-chatwoot.gsd70i.easypanel.host";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.defer = true;
    g.async = true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken: '2x4rDpNGuyV6FmHdZNVYN4jg',
        baseUrl: BASE_URL
      })
    }
  })(document,"script");
          `,
				}}
			/>
			<Header />
			{children}
			<Footer />
		</>
	);
}
