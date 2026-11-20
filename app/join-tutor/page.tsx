import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { JoinTutorForm } from '@/components/site/join-tutor-form'

export const metadata: Metadata = {
  title: 'Join as a Home Tutor in Malkajgiri',
  alternates: { canonical: '/join-tutor' },
  description:
    'Register as a home tutor with Narendar Home Tuitions in Malkajgiri, Hyderabad. Share your qualifications and teaching experience to enquire about matching.'
}

export default function JoinTutorPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Join as Tutor"
        title="Become a home tutor in Malkajgiri"
        description="Register your profile below. Our team will review your details and contact you if you are shortlisted for teaching opportunities."
        breadcrumbItems={[{ label: 'Join as Tutor' }]}
      />
      <section className="bg-secondary/40 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <JoinTutorForm />
        </div>
      </section>
    </PageShell>
  )
}
