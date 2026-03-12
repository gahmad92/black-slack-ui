import React from "react";
import Navbar from "./components/Navbar.jsx";
import SectionNav from "./components/SectionNav.jsx";
import Hero from "./sections/Hero.jsx";
import ActionPanel from "./sections/ActionPanel.jsx";
import SignalSection from "./sections/SignalSection.jsx";
import AiSection from "./sections/AiSection.jsx";
import KnowledgeSection from "./sections/KnowledgeSection.jsx";
import PeopleSection from "./sections/PeopleSection.jsx";
import ProcessSection from "./sections/ProcessSection.jsx";
import PlatformSection from "./sections/PlatformSection.jsx";
import StatsSection from "./sections/StatsSection.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1e1020]">
      <div className="relative">
        <div className="absolute left-[-12%] top-[-20%] h-72 w-72 rounded-full orb orb--slow" />
        <div className="absolute right-[-8%] top-[10%] h-60 w-60 rounded-full orb orb--fast" />
        <div className="absolute left-[40%] top-[55%] h-72 w-72 rounded-full pulse-ring" />

        <Navbar />

        <main className="relative z-10">
          <Hero />
          <ActionPanel />
          <SignalSection />
          <AiSection />
          <SectionNav />
          <KnowledgeSection />
          <PeopleSection />
          <ProcessSection />
          <PlatformSection />
          <StatsSection />
        </main>
      </div>
    </div>
  );
}

export default App;
