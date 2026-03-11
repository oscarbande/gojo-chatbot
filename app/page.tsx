import { HeroSection } from '@/components/bio/hero-section'
import { BioNav } from '@/components/bio/bio-nav'
import { InfoSection } from '@/components/bio/info-section'
import { AbilitiesSection } from '@/components/bio/abilities-section'
import { TimelineSection } from '@/components/bio/timeline-section'
import { RelationshipsSection } from '@/components/bio/relationships-section'
import { QuotesSection } from '@/components/bio/quotes-section'
import { BioFooter } from '@/components/bio/bio-footer'
import { ChatWidget } from '@/components/chat-widget'

export default function Home() {
  return (
    <>
      <BioNav />
      <main>
        <HeroSection />
        <div id="historia">
          <InfoSection />
        </div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-border" />
        </div>
        <div id="poderes">
          <AbilitiesSection />
        </div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-border" />
        </div>
        <div id="timeline">
          <TimelineSection />
        </div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-border" />
        </div>
        <div id="relaciones">
          <RelationshipsSection />
        </div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-border" />
        </div>
        <div id="frases">
          <QuotesSection />
        </div>
        <BioFooter />
      </main>
      <ChatWidget />
    </>
  )
}
