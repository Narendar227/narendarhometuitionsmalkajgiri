import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { About } from '@/components/site/about'

export const metadata: Metadata = {
  title: 'About Narendar Home Tuitions in Malkajgiri',
  alternates: { canonical: '/about' },
  description:
    'Learn about Narendar Home Tuitions — a home tuition service in Malkajgiri, Hyderabad connecting families with experienced tutors.',
}

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="About Narendar Home Tuitions"
        description="Dedicated to helping every student reach their full academic potential with experienced, verified home tutors."
        breadcrumbItems={[{ label: 'About Us' }]}
      />
      <About />
    </PageShell>
  )
}
