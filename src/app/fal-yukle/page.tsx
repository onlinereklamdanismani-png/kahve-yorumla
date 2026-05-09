import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { FalForm } from '@/components/FalForm';
import { AdSlot } from '@/components/AdSlot';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Fal Yükle',
  description:
    'Adını, fal türünü ve fincan fotoğrafını seç; yorumun sembol sözlüğümüze göre tarayıcında hazırlansın. Eğlence amaçlıdır.',
  path: '/fal-yukle/',
});

export default function FalYuklePage() {
  return (
    <>
      <PageHeader
        eyebrow="Fal aracı"
        title="Fal Yükle"
        description="Adını, fal türünü ve fincan fotoğrafını seç; yorumun anında hazırlansın. Fotoğraf cihazından çıkmaz."
        breadcrumb={[
          { href: '/', label: 'Ana Sayfa' },
          { href: '/fal-yukle/', label: 'Fal Yükle' },
        ]}
      />
      <section className="container-page py-12">
        <FalForm />
      </section>
      <div className="container-page">
        <AdSlot label="Reklam alanı" />
      </div>
    </>
  );
}
