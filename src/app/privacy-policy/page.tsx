"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import { Shield, Lock, Eye, Cookie, Mail, FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
    const sections = [
        {
            icon: <Shield className="h-6 w-6" />,
            title: "Information We Collect",
            content: [
                {
                    subtitle: "Personal Information",
                    text: "When you create an account or use our services, we may collect personal information such as your name, email address, and educational institution. This information is provided voluntarily and helps us personalize your experience on our platform.",
                },
                {
                    subtitle: "Usage Data",
                    text: "We automatically collect information about your interactions with our platform, including game scores, progress tracking, time spent on activities, and performance metrics. This data helps us improve our cognitive training algorithms and provide you with better insights into your learning journey.",
                },
                {
                    subtitle: "Device Information",
                    text: "We collect technical information about the device and browser you use to access our services, including IP address, browser type, operating system, and device identifiers. This helps us optimize our platform for different devices and troubleshoot technical issues.",
                },
            ],
        },
        {
            icon: <Eye className="h-6 w-6" />,
            title: "How We Use Your Information",
            content: [
                {
                    subtitle: "Service Provision",
                    text: "We use your information to provide, maintain, and improve our cognitive game platform, including tracking your progress, generating personalized recommendations, and delivering educational content tailored to your skill level.",
                },
                {
                    subtitle: "Communication",
                    text: "We may use your contact information to send you important updates about our services, respond to your inquiries, and provide customer support. You can opt out of promotional communications at any time.",
                },
                {
                    subtitle: "Analytics and Improvement",
                    text: "We analyze aggregated and anonymized data to understand user behavior, improve our game mechanics, develop new features, and enhance the overall learning experience. This helps us create more effective cognitive training tools.",
                },
                {
                    subtitle: "Advertising",
                    text: "We use Google AdSense and other advertising partners to display relevant ads on our platform. These ads help us keep the platform free for users. Our advertising partners may use cookies and similar technologies to serve personalized advertisements based on your interests.",
                },
            ],
        },
        {
            icon: <Cookie className="h-6 w-6" />,
            title: "Cookies and Tracking Technologies",
            content: [
                {
                    subtitle: "Essential Cookies",
                    text: "We use essential cookies that are necessary for the platform to function properly. These include authentication cookies, session management, and security features. These cookies cannot be disabled without affecting the core functionality of our services.",
                },
                {
                    subtitle: "Analytics Cookies",
                    text: "We use analytics tools including Google Analytics and Umami Analytics to understand how users interact with our platform. These tools help us identify areas for improvement and measure the effectiveness of our features. You can opt out of analytics tracking through your browser settings.",
                },
                {
                    subtitle: "Advertising Cookies",
                    text: "Our advertising partners, including Google AdSense, use cookies to deliver personalized ads and measure ad performance. These cookies track your browsing behavior across different websites to show you relevant advertisements. You can control advertising cookies through your browser settings or by visiting the Network Advertising Initiative opt-out page.",
                },
            ],
        },
        {
            icon: <Lock className="h-6 w-6" />,
            title: "Data Security and Protection",
            content: [
                {
                    subtitle: "Security Measures",
                    text: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. This includes encryption of data in transit, secure server infrastructure, and regular security audits.",
                },
                {
                    subtitle: "Data Retention",
                    text: "We retain your personal information only for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy. You can request deletion of your account and associated data at any time by contacting us.",
                },
                {
                    subtitle: "Third-Party Services",
                    text: "We use trusted third-party services for authentication (Better Auth), analytics (Google Analytics, Umami), and advertising (Google AdSense). These services have their own privacy policies and security measures. We carefully select partners who maintain high standards of data protection.",
                },
            ],
        },
        {
            icon: <FileText className="h-6 w-6" />,
            title: "Your Rights and Choices",
            content: [
                {
                    subtitle: "Access and Correction",
                    text: "You have the right to access, update, or correct your personal information at any time through your account settings. If you need assistance, our support team is available to help you manage your data.",
                },
                {
                    subtitle: "Data Portability",
                    text: "You have the right to request a copy of your personal data in a structured, commonly used, and machine-readable format. This allows you to transfer your data to another service if you choose.",
                },
                {
                    subtitle: "Deletion and Opt-Out",
                    text: "You can request deletion of your account and personal data at any time. You also have the right to opt out of certain data collection practices, including marketing communications and non-essential cookies. Under GDPR and CCPA, you have additional rights including the right to be forgotten and the right to restrict processing of your data.",
                },
                {
                    subtitle: "Do Not Track",
                    text: "Our platform respects Do Not Track (DNT) browser signals. When DNT is enabled, we will not use tracking cookies for advertising or analytics purposes, though essential cookies for authentication and security will still be used.",
                },
            ],
        },
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Contact Information and Updates",
            content: [
                {
                    subtitle: "Contact Us",
                    text: "If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us through our contact page or email us directly. We respond to all privacy-related inquiries within 48 hours.",
                },
                {
                    subtitle: "Policy Updates",
                    text: "We may update this privacy policy from time to time to reflect changes in our practices, legal requirements, or new features. We will notify you of any material changes through email or a prominent notice on our platform. Your continued use of our services after such updates constitutes acceptance of the revised policy.",
                },
                {
                    subtitle: "Effective Date",
                    text: "This privacy policy is effective as of February 4, 2026. Last updated: February 4, 2026. We review and update our privacy practices regularly to ensure compliance with evolving privacy regulations and best practices.",
                },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
                <Container>
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Shield className="h-5 w-5 text-primary" />
                            <span className="text-sm font-medium text-primary">Your Privacy Matters</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Privacy Policy
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            At Cognitive Games, we are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information. This policy explains our data practices in detail.
                        </p>

                        <div className="mt-8 text-sm text-muted-foreground">
                            <p>Last Updated: February 4, 2026</p>
                        </div>
                    </motion.div>
                </Container>

                {/* Background decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            </section>

            {/* Content Sections */}
            <section className="py-16 md:py-20">
                <Container className="max-w-5xl">
                    <div className="space-y-12">
                        {sections.map((section, sectionIndex) => (
                            <motion.div
                                key={sectionIndex}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: sectionIndex * 0.1 }}
                            >
                                <Card className="border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                {section.icon}
                                            </div>
                                            {section.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        {section.content.map((item, itemIndex) => (
                                            <div key={itemIndex} className="space-y-2">
                                                <h3 className="text-lg font-semibold text-foreground">
                                                    {item.subtitle}
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {item.text}
                                                </p>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Important Information */}
                    <motion.div
                        className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold mb-4">GDPR and CCPA Compliance</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>For EU residents:</strong> Under the General Data Protection Regulation (GDPR), you have enhanced rights regarding your personal data, including the right to access, rectify, erase, restrict processing, data portability, and to object to processing. You also have the right to withdraw consent at any time and to lodge a complaint with a supervisory authority.
                            </p>
                            <p>
                                <strong>For California residents:</strong> Under the California Consumer Privacy Act (CCPA), you have the right to know what personal information we collect, the right to delete your personal information, the right to opt-out of the sale of your personal information (note: we do not sell personal information), and the right to non-discrimination for exercising your privacy rights.
                            </p>
                            <p>
                                <strong>Children's Privacy:</strong> Our platform is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately, and we will take steps to delete it.
                            </p>
                            <p>
                                <strong>International Data Transfers:</strong> If you are accessing our services from outside the country where our servers are located, your information may be transferred across international borders. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact CTA */}
                    <motion.div
                        className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-3">Questions About Your Privacy?</h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            We're here to help. If you have any questions or concerns about how we handle your data, please don't hesitate to reach out to our privacy team.
                        </p>
                        {/* <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                        >
                            <Mail className="h-5 w-5" />
                            Contact Us
                        </a> */}
                    </motion.div>
                </Container>
            </section>
        </div>
    );
}
