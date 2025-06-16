import { redirect } from 'next/navigation';
import { TooltipProvider } from '@shadcnui/tooltip';
import { AccountNavLinks } from '@base/src/modules/account/components/account-nav/AccounNav';
import { auth } from '@base/auth';

// export const metadata: Metadata = {
// 	metadataBase: new URL(getBaseURL()),
// };

export default async function PageDashboard(props: {
	children: React.ReactNode;
}) {
	const session = await auth();

	if (!session) {
		redirect('/account/login');
	}

	return (
		<div className="mx-auto flex max-w-[1400px] px-4 items-start gap-10 py-10 min-h-screen">
			<AccountNavLinks />
			<TooltipProvider>
				<div className="w-full h-full">{props.children}</div>
			</TooltipProvider>
		</div>
	);
}
