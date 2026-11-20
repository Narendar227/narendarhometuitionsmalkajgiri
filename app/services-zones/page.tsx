import { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Areas } from '@/components/site/areas'

export const metadata: Metadata = {
  title: 'Home Tuition Service Area in Malkajgiri',
  alternates: { canonical: '/services-zones' },
  description:
    'Home tuition enquiries in Malkajgiri, Hyderabad. Tutor availability is confirmed for each address before matching.',
  keywords: [
    'Malkajgiri home tuition',
    'home tutors in Malkajgiri',
    'Malkajgiri service area',
    'Narendar Home Tuitions',
  ],
}

export default function ServiceZonesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Service Zones"
        title="Home tuition in Malkajgiri, Hyderabad"
        description="We welcome home tuition enquiries in Malkajgiri, Hyderabad. Tutor availability is confirmed for each address before arranging a match."
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'Service Zones' },
        ]}
      />
      <Areas isHomepage={false} />
    </PageShell>
  )
}
