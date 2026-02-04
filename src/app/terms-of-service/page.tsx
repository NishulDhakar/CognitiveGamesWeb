"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import { Scale, CheckCircle, AlertTriangle, BookOpen, UserCheck, Gavel } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TermsOfServicePage() {
    const sections = [
        {
            icon: <UserCheck className="h-6 w-6" />,
            title: "Acceptance of Terms",
            content: [
                {
                    subtitle: "Agreement to Terms",
                    text: "By accessing and using Cognitive Games (referred to as 'the Platform,' 'our services,' or 'the website'), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform. Your continued use of the services constitutes ongoing acceptance of these terms and any future modifications.",
                },
                {
                    subtitle: "Eligibility",
                    text: "You must be at least 13 years of age to use this platform. If you are between 13 and 18 years old, you must have permission from a parent or legal guardian to use our services. By using our platform, you represent that you meet these age requirements and have the authority to agree to these terms.",
                },
                {
                    subtitle: "Account Registration",
                    text: "To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information during registration and to update it as necessary to keep it accurate and current.",
                },
            ],
        },
        {
            icon: <BookOpen className="h-6 w-6" />,
            title: "Use of Services",
            content: [
                {
                    subtitle: "Permitted Use",
                    text: "Our platform is designed for educational and practice purposes to help users prepare for cognitive ability assessments used in placement drives and recruitment processes. You may use our cognitive games, track your progress, and access educational resources for personal, non-commercial purposes.",
                },
                {
                    subtitle: "User Conduct",
                    text: "You agree not to: (a) use the platform for any unlawful purpose or in violation of these terms; (b) attempt to gain unauthorized access to our systems or other users' accounts; (c) interfere with or disrupt the platform's functionality; (d) use automated tools, bots, or scripts to access or interact with the platform; (e) copy, modify, or distribute our content without permission; (f) harass, abuse, or harm other users; or (g) impersonate any person or entity.",
                },
                {
                    subtitle: "Content Standards",
                    text: "Any content you submit, post, or share on our platform must not: contain illegal, offensive, or inappropriate material; infringe on intellectual property rights; contain malware or harmful code; or violate any applicable laws or regulations. We reserve the right to remove any content that violates these standards without notice.",
                },
                {
                    subtitle: "Academic Integrity",
                    text: "Our platform is designed as a practice tool. While we provide cognitive games similar to those used in actual assessments, you must not use our platform to cheat or violate the rules of any actual examination or assessment. We encourage ethical preparation and skill development.",
                },
            ],
        },
        {
            icon: <Scale className="h-6 w-6" />,
            title: "Intellectual Property Rights",
            content: [
                {
                    subtitle: "Platform Ownership",
                    text: "All content, features, functionality, and materials on this platform, including but not limited to text, graphics, logos, game mechanics, software, and design elements, are owned by Cognitive Games or its licensors and are protected by copyright, trademark, and other intellectual property laws. All rights are reserved.",
                },
                {
                    subtitle: "Limited License",
                    text: "We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our platform for personal, educational purposes in accordance with these terms. This license does not include any right to: (a) resell or commercial use of our services; (b) collection and use of game content or data; (c) derivative use of our platform; or (d) downloading or copying content except as expressly permitted.",
                },
                {
                    subtitle: "User-Generated Content",
                    text: "If you submit feedback, suggestions, or any other content to us, you grant us a worldwide, perpetual, irrevocable, royalty-free license to use, reproduce, modify, and distribute such content for any purpose related to our platform. You represent that you have all necessary rights to grant this license.",
                },
                {
                    subtitle: "Trademarks",
                    text: "The Cognitive Games name, logo, and all related names, logos, and product names are trademarks of Cognitive Games. You may not use these marks without our prior written permission. All other trademarks mentioned on our platform are the property of their respective owners.",
                },
            ],
        },
        {
            icon: <CheckCircle className="h-6 w-6" />,
            title: "Service Availability and Modifications",
            content: [
                {
                    subtitle: "Service Availability",
                    text: "We strive to maintain high availability of our platform, but we do not guarantee uninterrupted or error-free service. The platform may be unavailable due to maintenance, updates, technical issues, or circumstances beyond our control. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.",
                },
                {
                    subtitle: "Updates and Changes",
                    text: "We continuously improve our platform and may add new features, modify existing ones, or remove features entirely. We may also update game mechanics, scoring algorithms, or difficulty levels to improve the learning experience. While we strive to notify users of significant changes, we are not obligated to do so.",
                },
                {
                    subtitle: "Account Termination",
                    text: "We reserve the right to suspend or terminate your account at our discretion if we believe you have violated these terms, engaged in fraudulent activity, or for any other reason we deem necessary to protect our platform or other users. You may also terminate your account at any time by contacting us or using the account deletion feature.",
                },
            ],
        },
        {
            icon: <AlertTriangle className="h-6 w-6" />,
            title: "Disclaimers and Limitations of Liability",
            content: [
                {
                    subtitle: "No Warranties",
                    text: 'THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. We do not warrant that the platform will be error-free, secure, or available at all times.',
                },
                {
                    subtitle: "No Guarantee of Results",
                    text: "While our cognitive games are designed to help users practice and improve their skills, we make no guarantees regarding your performance in actual assessments or placement tests. Success in recruitment processes depends on many factors beyond practice on our platform. Your results may vary based on individual abilities, effort, and other circumstances.",
                },
                {
                    subtitle: "Third-Party Content and Links",
                    text: "Our platform may contain links to third-party websites or services that are not owned or controlled by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that we shall not be liable for any damage or loss caused by your use of third-party content or services.",
                },
                {
                    subtitle: "Limitation of Liability",
                    text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL COGNITIVE GAMES, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
                },
            ],
        },
        {
            icon: <Gavel className="h-6 w-6" />,
            title: "Governing Law and Dispute Resolution",
            content: [
                {
                    subtitle: "Governing Law",
                    text: "These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Your use of the platform may also be subject to other local, state, national, or international laws.",
                },
                {
                    subtitle: "Dispute Resolution",
                    text: "In the event of any dispute arising out of or relating to these terms or your use of the platform, you agree to first attempt to resolve the dispute informally by contacting us. If the dispute cannot be resolved within 30 days, the parties agree to resolve the dispute through binding arbitration in accordance with applicable arbitration rules.",
                },
                {
                    subtitle: "Class Action Waiver",
                    text: "You agree to resolve disputes with us only on an individual basis and not as part of any class, consolidated, or representative action. You waive any right to participate in a class action lawsuit or class-wide arbitration against us.",
                },
                {
                    subtitle: "Severability",
                    text: "If any provision of these terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving the original intent.",
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
                            <Scale className="h-5 w-5 text-primary" />
                            <span className="text-sm font-medium text-primary">Legal Terms</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Terms of Service
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Please read these Terms of Service carefully before using the Cognitive Games platform. By accessing or using our services, you agree to be bound by these terms and our Privacy Policy.
                        </p>

                        <div className="mt-8 text-sm text-muted-foreground">
                            <p>Effective Date: February 4, 2026 | Last Updated: February 4, 2026</p>
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

                    {/* Additional Information */}
                    <motion.div
                        className="mt-16 space-y-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-primary/20 bg-primary/5">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                                <div className="space-y-3 text-muted-foreground">
                                    <p>
                                        We reserve the right to modify these Terms of Service at any time. We will notify users of material changes through email or a prominent notice on our platform. Changes will become effective immediately upon posting for new users and after 30 days for existing users.
                                    </p>
                                    <p>
                                        Your continued use of the platform after the effective date of any changes constitutes your acceptance of the modified terms. If you do not agree to the modified terms, you should discontinue use of the platform and may request account deletion.
                                    </p>
                                    <p>
                                        We encourage you to review these terms periodically to stay informed about your rights and obligations when using our services.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-primary/20 bg-primary/5">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4">Contact and Support</h2>
                                <div className="space-y-3 text-muted-foreground">
                                    <p>
                                        If you have any questions about these Terms of Service, need clarification on any provisions, or wish to report a violation, please contact our legal team through our contact page.
                                    </p>
                                    <p>
                                        For technical support, account issues, or general inquiries, please visit our Help Center or contact our support team. We strive to respond to all inquiries within 48 hours.
                                    </p>
                                    <div className="mt-6">
                                        {/* <a
                                            href="/contact"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                                        >
                                            Contact Us
                                        </a> */}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Acknowledgment */}
                    <motion.div
                        className="mt-12 p-6 border-2 border-primary/20 rounded-xl bg-gradient-to-r from-primary/5 to-transparent"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm text-muted-foreground italic">
                            By using Cognitive Games, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. These terms constitute the entire agreement between you and Cognitive Games regarding your use of the platform.
                        </p>
                    </motion.div>
                </Container>
            </section>
        </div>
    );
}
