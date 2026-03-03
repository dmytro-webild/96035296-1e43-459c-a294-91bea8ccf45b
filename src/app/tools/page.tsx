"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroBillboardDashboard from "@/components/sections/hero/HeroBillboardDashboard";
import FeatureCardSeven from "@/components/sections/feature/FeatureCardSeven";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import {
  BarChart3,
  Brain,
  ImageIcon,
  Mic,
  Settings,
  Sparkles,
  TrendingUp,
  Wand2,
  Zap,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function ToolsPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="fluid"
      cardStyle="soft-shadow"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="AICore"
          navItems={[
            { name: "Tools", id: "tools" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "FAQ", id: "faq" },
          ]}
          button={{ text: "Back Home", href: "/" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          title="Free AI Tools Platform"
          description="Access our suite of powerful AI-powered tools including image generation, voice creation, and advanced AI utilities. All completely free, no limits."
          tag="Choose Your Tool"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          buttons={[
            { text: "Start Creating", href: "#tools" },
            { text: "Back Home", href: "/" },
          ]}
          buttonAnimation="blur-reveal"
          dashboard={{
            title: "Available AI Tools",            logoIcon: Zap,
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/a-modern-sleek-ai-dashboard-interface-wi-1772542588693-f10752a8.png",            searchPlaceholder: "Search tools...",            sidebarItems: [
              { icon: ImageIcon, active: true },
              { icon: Mic, active: false },
              { icon: Wand2, active: false },
            ],
            buttons: [
              { text: "Explore", href: "#tools" },
              { text: "Learn More", href: "/" },
            ],
            stats: [
              {
                title: "Tools Available",                values: [3, 6, 12],
                valuePrefix: "",                valueSuffix: "+",                description: "AI-powered tools"},
              {
                title: "Always Free",                values: [100, 100, 100],
                valuePrefix: "",                valueSuffix: "%",                description: "No hidden fees"},
              {
                title: "No Limits",                values: [999, 9999, 99999],
                valuePrefix: "",                valueSuffix: "+",                description: "Unlimited usage"},
            ],
            chartTitle: "Tool Performance",            chartData: [
              { value: 80 },
              { value: 85 },
              { value: 90 },
              { value: 92 },
              { value: 95 },
            ],
            listTitle: "Featured Tools",            listItems: [
              { icon: ImageIcon, title: "Image Generation", status: "Free" },
              { icon: Mic, title: "Voice Generation", status: "Free" },
              { icon: Wand2, title: "AI Utilities", status: "Free" },
            ],
          }}
        />
      </div>

      <div id="tools" data-section="tools">
        <FeatureCardSeven
          title="Our AI Tools"
          description="Explore our comprehensive collection of AI-powered tools. Each tool is designed for simplicity and power, accessible to everyone."
          tag="Available Tools"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="blur-reveal"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "Image Generation",              description: "Create stunning images from text descriptions. Use your imagination and let AI bring your vision to life with unlimited generation capability.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/abstract-visualization-of-artificial-neu-1772542587328-cfcff9b6.png"},
            {
              id: 2,
              title: "Voice Generation",              description: "Transform text into natural-sounding speech. Create voiceovers, narrations, and podcasts in multiple languages and voices—no mic required.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/a-professional-workspace-showing-ai-powe-1772542587629-ff99eba2.png"},
            {
              id: 3,
              title: "Text Analysis",              description: "Analyze, summarize, and enhance your text. Extract key insights, check grammar, and improve clarity with advanced NLP technology.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/visual-representation-of-ai-powered-auto-1772542587098-5506675c.png"},
            {
              id: 4,
              title: "Code Assistant",              description: "Get AI-powered coding help. Debug, optimize, and generate code snippets in multiple programming languages instantly.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/futuristic-visualization-of-predictive-a-1772542587310-0a73569d.png"},
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Tools",              items: [
                { label: "Image Generation", href: "#tools" },
                { label: "Voice Generation", href: "#tools" },
                { label: "AI Utilities", href: "#tools" },
                { label: "Back Home", href: "/" },
              ],
            },
            {
              title: "Resources",              items: [
                { label: "Documentation", href: "#" },
                { label: "API", href: "#" },
                { label: "Examples", href: "#" },
                { label: "Tutorial", href: "#" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#" },
              ],
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Security", href: "#" },
                { label: "Compliance", href: "#" },
              ],
            },
          ]}
          copyrightText="© 2025 AICore. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
