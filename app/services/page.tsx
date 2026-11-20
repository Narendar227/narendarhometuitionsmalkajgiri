import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Services } from '@/components/site/services'
import { HowItWorks } from '@/components/site/how-it-works'

export const metadata: Metadata = {
  title: 'Home Tuition Services in Malkajgiri',
  alternates: { canonical: '/services' },
  description:
    'Home tuition services in Malkajgiri, Hyderabad — private tutors, one-to-one tutoring, board exam preparation and academic support for CBSE, ICSE and State Board.',
}

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Complete home tutoring solutions"
        description="From everyday homework help to exam preparation, explore one-to-one home tuition services for families in Malkajgiri, Hyderabad."
        breadcrumbItems={[{ label: 'Services' }]}
      />
      <Services />
      <HowItWorks />
    </PageShell>
  )
}
