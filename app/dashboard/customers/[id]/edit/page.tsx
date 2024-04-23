import Form from '@/app/ui/customers/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { Metadata } from 'next';
import { fetchCustomerById } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Edit Customer',
};

export default async function Page({ params }: { params: { id: string } }) {
  const customer = await fetchCustomerById(params.id);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Edit Customer',
            href: `/dashboard/invoices/${params.id}/edit`,
            active: true,
          },
        ]}
      />
      <Form customer={customer} />
    </main>
  );
}
