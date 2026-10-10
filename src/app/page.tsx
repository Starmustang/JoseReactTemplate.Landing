'use client';
import React from 'react';
import PageContainer from '@/app/components/container/PageContainer';
import Header from '@/app/components/landingpage/header/Header';
import Hero from '@/app/components/landingpage/hero/Hero';
import DaySection from '@/app/components/landingpage/day/DaySection';
import OdontogramSection from '@/app/components/landingpage/odontogram/OdontogramSection';
import ScheduleSection from '@/app/components/landingpage/schedule/ScheduleSection';
import WorkflowSection from '@/app/components/landingpage/workflow/WorkflowSection';
import JourneySection from '@/app/components/landingpage/journey/JourneySection';
import ModulesSection from '@/app/components/landingpage/modules/ModulesSection';
import RoadmapSection from '@/app/components/landingpage/roadmap/RoadmapSection';
import PricingSection from '@/app/components/landingpage/pricing/PricingSection';
import C2a from '@/app/components/landingpage/c2a/C2a';
import Footer from '@/app/components/landingpage/footer/Footer';
import LanguageSync from '@/app/components/landingpage/header/LanguageSync';

export default function LandingPage() {
  return (
    <PageContainer>
      <LanguageSync />
      <Header />
      <main>
        <Hero />
        <DaySection />
        <OdontogramSection />
        <ScheduleSection />
        <WorkflowSection />
        <JourneySection />
        <ModulesSection />
        <RoadmapSection />
        <PricingSection />
        <C2a />
      </main>
      <Footer />
    </PageContainer>
  );
}
