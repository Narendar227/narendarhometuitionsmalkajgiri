import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Testimonials } from '@/components/site/testimonials'

export const metadata: Metadata = {
  title: 'Home Tuition Testimonials in Malkajgiri',
  alternates: { canonical: '/testimonials' },
  description:
    'Feedback from families whose children learn with Narendar Home Tuitions.',
}

export default function TestimonialsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Testimonials"
        title="What parents say about us"
        description="Feedback from families whose children learn with Narendar Home Tuitions."
        breadcrumbItems={[{ label: 'Testimonials' }]}
      />
      <Testimonials />
    </PageShell>
  )
}
