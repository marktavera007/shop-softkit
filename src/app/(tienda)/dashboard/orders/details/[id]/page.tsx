// type Props = {
//   params: Promise<{ id: string }>
// }

import OrderDetailsTemplate from '@base/src/modules/orders/order-details-template';

// export async function generateMetadata(props: Props): Promise<Metadata> {
//   const params = await props.params
//   const order = await retrieveOrder(params.id).catch(() => null)

//   if (!order) {
//     notFound()
//   }

//   return {
//     title: `Order #${order.display_id}`,
//     description: `View your order`,
//   }
// }

export default async function OrderDetailPage() {
	return <OrderDetailsTemplate />;
}
