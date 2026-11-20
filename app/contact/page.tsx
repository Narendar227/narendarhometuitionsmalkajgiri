import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { MapSection } from '@/components/site/map-section'

export const metadata: Metadata = {
  title: 'Contact Home Tuitions in Malkajgiri',
  alternates: { canonical: '/contact' },
  description:
    'Ask about home tuition in Malkajgiri, Hyderabad. Tutor availability is confirmed per address. Map reference: CGRM+9Q Secunderabad, Telangana; not a verified business address.',
}

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Contact our Malkajgiri team"
        description="Tell us about your child’s learning needs and locality. Call, WhatsApp or send us a message to ask about tutor availability."
        breadcrumbItems={[{ label: 'Contact Us' }]}
      />
      <MapSection />
    </PageShell>
  )
}
