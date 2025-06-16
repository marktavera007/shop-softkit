import { customer4, orderWithVariants } from '@base/src/common/data/dataTest';
import Overview from '@base/src/modules/account/components/overview';
import { notFound } from 'next/navigation';

export default async function OverviewPage() {
	if (!customer4) {
		notFound();
	}

	return <Overview customer={customer4} orders={orderWithVariants} />;
}
