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
  Settings,
  Sparkles,
  Star,
  TrendingUp,
  Users,
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
            { name: "Features", id: "features" },
            { name: "Capabilities", id: "capabilities" },
            { name: "Pricing", id: "pricing" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "footer" },
          ]}
          button={{ text: "Get Started", href: "pricing" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          title="Intelligent AI Solutions for Modern Business"
          description="Harness the power of artificial intelligence to automate workflows, gain predictive insights, and transform your business operations with cutting-edge machine learning technology."
          tag="AI-Powered Innovation"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          buttons={[
            { text: "Start Free Trial", href: "pricing" },
            { text: "View Demo", href: "capabilities" },
          ]}
          buttonAnimation="blur-reveal"
          dashboard={{
            title: "Real-Time AI Analytics Hub",            logoIcon: Zap,
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/a-modern-sleek-ai-dashboard-interface-wi-1772542588693-f10752a8.png",            searchPlaceholder: "Search insights...",            sidebarItems: [
              { icon: BarChart3, active: true },
              { icon: Brain, active: false },
              { icon: Settings, active: false },
            ],
            buttons: [
              { text: "Export Report", href: "#" },
              { text: "Share Dashboard", href: "#" },
            ],
            stats: [
              {
                title: "Processing Speed",                values: [450, 680, 920],
                valuePrefix: "",                valueSuffix: "ops/sec",                description: "AI inference operations per second"},
              {
                title: "Accuracy Rate",                values: [92.5, 94.8, 97.2],
                valuePrefix: "",                valueSuffix: "%",                description: "Model prediction accuracy"},
              {
                title: "Active Models",                values: [12, 24, 42],
                valuePrefix: "",                valueSuffix: "",                description: "Deployed AI models in production"},
            ],
            chartTitle: "Model Performance",            chartData: [
              { value: 75 },
              { value: 85 },
              { value: 92 },
              { value: 88 },
              { value: 95 },
            ],
            listTitle: "Recent Predictions",            listItems: [
              { icon: TrendingUp, title: "Revenue Forecast: +34%", status: "High Confidence" },
              { icon: AlertCircle, title: "Risk Detection: Critical", status: "Anomaly Detected" },
              { icon: CheckCircle, title: "Process Optimization: Complete", status: "Deployed" },
            ],
          }}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Powerful AI Capabilities"
          description="Explore our comprehensive suite of AI-powered tools designed to streamline your business processes and unlock actionable insights."
          tag="Core Features"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="blur-reveal"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "Neural Network Processing",              description: "Advanced deep learning algorithms that continuously improve with each interaction, providing increasingly accurate predictions and insights over time.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/abstract-visualization-of-artificial-neu-1772542587328-cfcff9b6.png"},
            {
              id: 2,
              title: "Real-Time Data Analysis",              description: "Process and analyze massive datasets in real-time, transforming raw data into actionable business intelligence instantly.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/a-professional-workspace-showing-ai-powe-1772542587629-ff99eba2.png"},
            {
              id: 3,
              title: "Intelligent Automation",              description: "Automate repetitive tasks and complex workflows with AI-driven automation that learns from patterns and optimizes processes continuously.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/visual-representation-of-ai-powered-auto-1772542587098-5506675c.png"},
            {
              id: 4,
              title: "Predictive Analytics",              description: "Forecast trends, anticipate market changes, and make data-driven decisions with our advanced predictive modeling capabilities.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/futuristic-visualization-of-predictive-a-1772542587310-0a73569d.png"},
          ]}
        />
      </div>

      <div id="capabilities" data-section="capabilities">
        <TestimonialAboutCard
          tag="AI Excellence"
          tagIcon={BrainIcon}
          tagAnimation="slide-up"
          title="Enterprise-Grade AI Technology Built for Scale"
          description="Trusted by Fortune 500 Companies"
          subdescription="Delivering measurable results across industries"
          icon={Zap}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/illustration-of-an-ai-chatbot-interface--1772542586957-26dc1352.png"
          mediaAnimation="blur-reveal"
          useInvertedBackground={true}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Industry-Leading Performance"
          description="Our AI platform delivers measurable results that drive real business value."
          tag="Performance"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="scale-rotate"
          useInvertedBackground={false}
          metrics={[
            { id: "1", icon: Zap, title: "Speed Improvement", value: "10x" },
            { id: "2", icon: TrendingUp, title: "Accuracy Gain", value: "97%" },
            { id: "3", icon: Users, title: "Active Users", value: "50K+" },
            { id: "4", icon: Globe, title: "Global Reach", value: "120+" },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Customer Success Stories"
          description="See how leading companies are transforming their operations with our AI solutions."
          tag="Testimonials"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "1",              name: "Sarah Chen",              role: "Chief Technology Officer",              testimonial: "This AI platform transformed our data processing workflows. We've achieved 10x faster insights with unprecedented accuracy. The results have been phenomenal for our entire organization.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/professional-portrait-photograph-of-a-bu-1772542586545-0885d63a.png"},
            {
              id: "2",              name: "Marcus Johnson",              role: "VP of Operations",              testimonial: "Implementing this solution reduced our operational costs by 40% in the first quarter. The automation capabilities freed up our team to focus on strategic initiatives.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/professional-portrait-photograph-of-a-te-1772542586736-b68ca490.png"},
            {
              id: "3",              name: "Elena Rodriguez",              role: "Head of Data Science",              testimonial: "The platform's predictive analytics have become essential to our decision-making process. Accuracy improved dramatically, and the learning curve was minimal.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/professional-portrait-photograph-of-a-bu-1772542587072-e7fa89df.png"},
            {
              id: "4",              name: "David Kim",              role: "Enterprise Solutions Director",              testimonial: "Supporting thousands of concurrent users without a hiccup. The scalability and reliability are exactly what an enterprise solution should be.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/professional-portrait-photograph-of-a-te-1772542586942-5933d843.png"},
            {
              id: "5",              name: "Jennifer Wells",              role: "Product Manager",              testimonial: "The integration process was seamless. Our team had the AI models deployed in production within two weeks. Customer satisfaction scores increased significantly.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/professional-portrait-photograph-of-a-bu-1772542587421-e2283c5c.png"},
            {
              id: "6",              name: "Thomas Anderson",              role: "Director of AI Research",              testimonial: "This platform represents the future of enterprise AI. The flexibility and power combined with ease of use make it the best solution on the market.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR5L3TkBQonTQ7kp66p2VA0p6f/professional-portrait-photograph-of-an-e-1772542587045-57684197.png"},
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your AI Plan"
          description="Start free and scale as your business grows. All plans include core AI capabilities with enterprise support."
          tag="Flexible Pricing"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="blur-reveal"
          useInvertedBackground={false}
          plans={[
            {
              id: "starter",              badge: "For Startups",              badgeIcon: Zap,
              price: "$99/mo",              subtitle: "Perfect for teams just starting with AI",              features: [
                "Up to 100K AI predictions/month",                "3 custom AI models",                "Real-time data processing",                "Email support",                "Basic analytics dashboard"],
            },
            {
              id: "professional",              badge: "Most Popular",              badgeIcon: Star,
              price: "$499/mo",              subtitle: "Ideal for growing businesses",              features: [
                "Up to 1M AI predictions/month",                "15 custom AI models",                "Advanced automation",                "Priority support",                "Advanced analytics & reporting",                "API access"],
            },
            {
              id: "enterprise",              badge: "For Enterprise",              badgeIcon: Crown,
              price: "Custom",              subtitle: "Unlimited scale and capabilities",              features: [
                "Unlimited AI predictions",                "Unlimited custom models",                "Dedicated infrastructure",                "24/7 dedicated support",                "Custom integrations",                "On-premise deployment available"],
            },
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our AI platform and how to get started."
          textPosition="left"
          useInvertedBackground={true}
          animationType="smooth"
          faqsAnimation="blur-reveal"
          faqs={[
            {
              id: "1",              title: "How does the AI model training work?",              content: "Our platform uses state-of-the-art deep learning algorithms that automatically train on your data. The system learns patterns and improves continuously with new information, requiring no manual model tuning from your side."},
            {
              id: "2",              title: "What data formats are supported?",              content: "We support CSV, JSON, Parquet, SQL databases, and real-time data streams. Our data ingestion pipeline is flexible and can handle structured and semi-structured data at scale."},
            {
              id: "3",              title: "Is my data secure and private?",              content: "Yes. We implement bank-level encryption, SOC 2 Type II compliance, and offer on-premise deployment options. Your data never leaves your infrastructure if you choose the private deployment option."},
            {
              id: "4",              title: "How long does implementation take?",              content: "Most customers are up and running within 2-4 weeks. Our implementation team guides you through data preparation, model configuration, and deployment. We provide comprehensive documentation and training."},
            {
              id: "5",              title: "Can I integrate with my existing tools?",              content: "Absolutely. We provide REST APIs, webhooks, and pre-built connectors for popular business tools. Our API documentation is comprehensive, and our support team can assist with custom integrations."},
            {
              id: "6",              title: "What kind of support is included?",              content: "All plans include email support. Professional plans get priority support, and Enterprise customers receive 24/7 dedicated support with a designated account manager."},
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "API Documentation", href: "#" },
                { label: "Status", href: "#" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#footer" },
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
