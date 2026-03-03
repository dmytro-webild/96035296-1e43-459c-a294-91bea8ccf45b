"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroBillboardDashboard from "@/components/sections/hero/HeroBillboardDashboard";
import FeatureCardSeven from "@/components/sections/feature/FeatureCardSeven";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import {
  AlertCircle,
  BarChart3,
  Brain,
  Brain as BrainIcon,
  CheckCircle,
  Crown,
  Globe,
  ImageIcon,
  Mic,
  Settings,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Wand2,
  Zap,
} from "lucide-react";

export default function LandingPage() {
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
          button={{ text: "Get Started", href: "/tools" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          title="Free AI Tools at Your Fingertips"
          description="Generate stunning images, create natural voices, and access advanced AI capabilities—all completely free. No credit card required. Start creating today."
          tag="AI-Powered Innovation"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          buttons={[
            { text: "Explore Tools", href: "/tools" },
            { text: "Learn More", href: "#features" },
          ]}
          buttonAnimation="blur-reveal"
          dashboard={{
            title: "AI Tools Dashboard",            logoIcon: Zap,
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/a-modern-sleek-ai-dashboard-interface-wi-1772542588693-f10752a8.png?_wi=1",            searchPlaceholder: "Search tools...",            sidebarItems: [
              { icon: ImageIcon, active: true },
              { icon: Mic, active: false },
              { icon: Wand2, active: false },
            ],
            buttons: [
              { text: "Try Now", href: "/tools" },
              { text: "View Examples", href: "#features" },
            ],
            stats: [
              {
                title: "Images Generated",                values: [10000, 50000, 150000],
                valuePrefix: "",                valueSuffix: "+",                description: "AI-powered images created"},
              {
                title: "Voices Created",                values: [5000, 25000, 75000],
                valuePrefix: "",                valueSuffix: "+",                description: "Natural voice generations"},
              {
                title: "Active Users",                values: [1000, 5000, 20000],
                valuePrefix: "",                valueSuffix: "+",                description: "Users leveraging free AI tools"},
            ],
            chartTitle: "Tool Usage Growth",            chartData: [
              { value: 65 },
              { value: 75 },
              { value: 85 },
              { value: 90 },
              { value: 95 },
            ],
            listTitle: "Popular Tools",            listItems: [
              { icon: ImageIcon, title: "Image Generation", status: "100% Free" },
              { icon: Mic, title: "Voice Generation", status: "Zero Limits" },
              { icon: Wand2, title: "AI Enhancement", status: "Always Free" },
            ],
          }}
        />
      </div>

      <div id="tools" data-section="tools">
        <FeatureCardSeven
          title="Powerful Free AI Tools"
          description="A comprehensive suite of AI-powered utilities designed to enhance your creativity and productivity. All tools are completely free with no hidden charges."
          tag="Core Tools"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="blur-reveal"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "Image Generation",              description: "Create stunning, high-quality images from text descriptions. Powered by advanced neural networks, generate unlimited images with complete creative freedom.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/abstract-visualization-of-artificial-neu-1772542587328-cfcff9b6.png?_wi=1"},
            {
              id: 2,
              title: "Voice Generation",              description: "Transform text into natural-sounding speech in multiple languages. Create voiceovers, narrations, and audio content with realistic AI voices—completely free.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/a-professional-workspace-showing-ai-powe-1772542587629-ff99eba2.png?_wi=1"},
            {
              id: 3,
              title: "Advanced AI Utilities",              description: "Access a collection of specialized AI tools including text analysis, content generation, code assistance, and creative writing—all integrated in one platform.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/visual-representation-of-ai-powered-auto-1772542587098-5506675c.png?_wi=1"},
            {
              id: 4,
              title: "Unlimited Creativity",              description: "No limits, no restrictions. Generate as many images and voices as you want. Create, iterate, and refine your projects without worrying about quotas or charges.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/futuristic-visualization-of-predictive-a-1772542587310-0a73569d.png?_wi=1"},
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <TestimonialAboutCard
          tag="Why Choose AICore"
          tagIcon={BrainIcon}
          tagAnimation="slide-up"
          title="Professional-Grade AI Accessible to Everyone"
          description="Completely Free and Always Will Be"
          subdescription="Delivering powerful AI capabilities without barriers"
          icon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/illustration-of-an-ai-chatbot-interface--1772542586957-26dc1352.png"
          mediaAnimation="blur-reveal"
          useInvertedBackground={true}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Industry-Leading Capabilities"
          description="Our free AI tools deliver professional-grade results with ease and reliability."
          tag="Performance"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="scale-rotate"
          useInvertedBackground={false}
          metrics={[
            { id: "1", icon: Zap, title: "Lightning Fast", value: "<2s" },
            { id: "2", icon: Star, title: "High Quality", value: "99%" },
            { id: "3", icon: Users, title: "Active Users", value: "50K+" },
            { id: "4", icon: Globe, title: "Global Reach", value: "180+" },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Users Love"
          description="Discover how creatives and professionals are transforming their work with our free AI tools."
          tag="Testimonials"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "1",              name: "Alex Rivera",              role: "Graphic Designer",              testimonial: "Finally, professional-grade image generation that's actually free. No hidden fees, no limits. I've replaced three paid tools with this platform.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/professional-portrait-photograph-of-a-bu-1772542586545-0885d63a.png"},
            {
              id: "2",              name: "Jordan Lee",              role: "Content Creator",              testimonial: "The voice generation tool is incredible. Natural sounding, multiple languages, and I can create unlimited voiceovers for my videos without breaking the bank.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/professional-portrait-photograph-of-a-te-1772542586736-b68ca490.png"},
            {
              id: "3",              name: "Sam Chen",              role: "Developer",              testimonial: "Amazing suite of AI tools. The code assistance and text analysis features have saved me countless hours. Best part? It's completely free.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/professional-portrait-photograph-of-a-bu-1772542587072-e7fa89df.png"},
            {
              id: "4",              name: "Morgan James",              role: "Marketing Manager",              testimonial: "Our entire team uses AICore. The image and voice tools have transformed how we create marketing materials. No more budget constraints.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/professional-portrait-photograph-of-a-te-1772542586942-5933d843.png"},
            {
              id: "5",              name: "Casey Park",              role: "Entrepreneur",              testimonial: "Building my startup with limited budget was tough until I found AICore. These tools have been invaluable for prototyping and MVP development.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/professional-portrait-photograph-of-a-bu-1772542587421-e2283c5c.png"},
            {
              id: "6",              name: "Riley Singh",              role: "Digital Artist",              testimonial: "The quality is exceptional. I can experiment endlessly without worrying about costs. This platform truly democratizes AI technology.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/professional-portrait-photograph-of-an-e-1772542587045-57684197.png"},
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="All features are completely free. We believe AI should be accessible to everyone. No credit card required, no limits on usage."
          tag="100% Free"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="blur-reveal"
          useInvertedBackground={false}
          plans={[
            {
              id: "free",              badge: "Always Free",              badgeIcon: Zap,
              price: "$0/mo",              subtitle: "All features included, forever",              features: [
                "Unlimited image generation",                "Unlimited voice generation",                "All AI utilities",                "No credit card required",                "No usage limits",                "Community support"],
            },
            {
              id: "professional",              badge: "Coming Soon",              badgeIcon: Star,
              price: "TBD",              subtitle: "Enhanced features and priority support",              features: [
                "All free features",                "Priority processing",                "Advanced customization",                "Dedicated support",                "API access",                "White-label options"],
            },
            {
              id: "enterprise",              badge: "Enterprise",              badgeIcon: Crown,
              price: "Custom",              subtitle: "For organizations with custom needs",              features: [
                "All features included",                "Dedicated infrastructure",                "24/7 support",                "Custom integrations",                "On-premise deployment",                "SLA guarantee"],
            },
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about AICore and our free AI tools."
          textPosition="left"
          useInvertedBackground={true}
          animationType="smooth"
          faqsAnimation="blur-reveal"
          faqs={[
            {
              id: "1",              title: "Is AICore really completely free?",              content: "Yes, absolutely! All our tools—image generation, voice generation, and AI utilities—are completely free with no hidden fees. We believe AI should be accessible to everyone. No credit card is required to get started."},
            {
              id: "2",              title: "Are there any limits on usage?",              content: "No limits whatsoever. Generate as many images and voices as you want. Create unlimited projects and explore all AI utilities without any restrictions. Our free tier includes everything."},
            {
              id: "3",              title: "Can I use the generated content commercially?",              content: "Yes! All content generated using AICore tools is yours to use freely. You can use generated images, voices, and text for personal and commercial projects without any additional licensing fees."},
            {
              id: "4",              title: "What AI models do you use?",              content: "We leverage state-of-the-art AI models for image generation, natural language processing, and voice synthesis. Our tools are constantly updated with the latest advancements in AI technology."},
            {
              id: "5",              title: "How long does it take to generate content?",              content: "Most generations complete in seconds. Image generation typically takes 1-5 seconds, voice generation 2-10 seconds depending on length, and text processing is nearly instantaneous."},
            {
              id: "6",              title: "Do you store my generated content?",              content: "Your generated content belongs to you. We store your projects securely and only retain data necessary to provide our service. You can delete any content anytime from your account dashboard."},
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Tools",              items: [
                { label: "Image Generation", href: "/tools" },
                { label: "Voice Generation", href: "/tools" },
                { label: "AI Utilities", href: "/tools" },
                { label: "Explore All", href: "/tools" },
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
