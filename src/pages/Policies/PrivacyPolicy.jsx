import { useEffect } from "react";


const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top-left corner
    }, []);
    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen p-6">
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    At <strong>Bold-Thread Clothing</strong>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or engage with us in any other way. By accessing or using our services, you agree to the practices described in this policy.
                </p>



                {/* Section 1 - Information We Collect */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Information We Collect</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        We collect different types of information to provide you with a better shopping experience. The information we collect includes:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-4">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, shipping address, billing address, and payment information.</li>
                        <li><strong>Usage Data:</strong> IP address, browser type, operating system, page views, and time spent on our website.</li>
                        <li><strong>Cookies and Tracking Data:</strong> We use cookies to track your preferences and improve your experience.</li>
                        <li><strong>Account Data:</strong> If you create an account, we store your account settings and order history.</li>
                        <li><strong>Transactional Data:</strong> Order details, payment history, and shipping records.</li>
                    </ul>
                </section>

                {/* Section 2 - How We Use Your Information */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. How We Use Your Information</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        We use the collected data to provide a seamless shopping experience and improve our services. Some key uses include:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-4">
                        <li>Processing orders, managing payments, and fulfilling shipments.</li>
                        <li>Sending order confirmations, shipping notifications, and marketing communications (with your consent).</li>
                        <li>Personalizing your experience by providing product recommendations based on your browsing behavior.</li>
                        <li>Conducting market research and improving website performance.</li>
                        <li>Responding to customer service inquiries and resolving issues.</li>
                        <li>Securing your account and preventing fraud.</li>
                    </ul>
                </section>

                {/* Section 3 - Sharing of Personal Data */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Sharing of Personal Data</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        We do not sell your personal data. However, we may share it with third parties for the following purposes:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-4">
                        <li><strong>Service Providers:</strong> We may share your information with trusted third parties to process payments, deliver packages, or provide customer support services.</li>
                        <li><strong>Legal Requirements:</strong> We may disclose your personal data to comply with legal obligations, respond to court orders, or protect the rights and safety of Bold-Thread Clothing and our customers.</li>
                        <li><strong>Business Transfers:</strong> In case of a merger, acquisition, or sale of assets, your personal data may be transferred to the new owner.</li>
                        <li><strong>Advertising and Marketing:</strong> We may share non-personal data with advertisers or marketers to help us reach potential customers.</li>
                    </ul>
                </section>

                {/* Section 4 - Cookies and Tracking Technologies */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Cookies and Tracking Technologies</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Cookies are small files stored on your device that help us improve our services. We use cookies to:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-4">
                        <li>Enhance user experience by remembering login details, shopping cart contents, and preferences.</li>
                        <li>Analyze website traffic and usage patterns to optimize performance.</li>
                        <li>Serve personalized advertisements and promotional content based on your interests.</li>
                    </ul>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        You can manage cookies through your browser settings. However, disabling cookies may affect certain website functionalities, such as adding items to your cart or checking out.
                    </p>
                </section>

                {/* Section 5 - Data Security */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Data Security</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        We take reasonable measures to protect your personal information from unauthorized access, alteration, and disclosure. These measures include:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-4">
                        <li>Secure socket layer (SSL) encryption for sensitive data transactions.</li>
                        <li>Regular security audits and risk assessments to identify vulnerabilities.</li>
                        <li>Access controls to ensure that only authorized personnel can access personal data.</li>
                    </ul>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        While we use best practices to protect your personal data, no method of transmission over the internet is 100% secure. We recommend using strong passwords and keeping your login credentials confidential.
                    </p>
                </section>

                {/* Section 6 - Your Rights and Choices */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Your Rights and Choices</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        You have certain rights regarding the personal information we hold about you:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-4">
                        <li><strong>Access:</strong> You can request a copy of the personal data we have collected about you.</li>
                        <li><strong>Correction:</strong> You can request updates to incorrect or incomplete information.</li>
                        <li><strong>Deletion:</strong> You can request to delete your personal data, subject to legal obligations and retention policies.</li>
                        <li><strong>Opt-Out:</strong> You can opt-out of receiving promotional emails or other marketing communications at any time.</li>
                    </ul>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        To exercise your rights, please contact us at support@boldthread.com. We will respond to your request within the timeframes prescribed by law.
                    </p>
                </section>

                {/* Section 7 - Data Retention */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Data Retention</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        If you delete your account or request to delete your data, we may still retain some of your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.
                    </p>
                </section>

                {/* Section 8 - Third-Party Websites */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">8. Third-Party Websites</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Our website may contain links to third-party websites. These websites are not under our control, and we are not responsible for their privacy practices or content. We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>
                </section>

                {/* Section 9 - Changes to This Privacy Policy */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">9. Changes to This Privacy Policy</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website with an updated revision date.
                    </p>
                </section>

                {/* Section 10 - Contact Us */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">10. Contact Us</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        If you have any questions or concerns about this Privacy Policy or your personal data, please contact us:
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Email: support@bold-thread.com
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Address: Shop No 20,Bagsewania,Near Vishwakrma Mandir,Bhopal (M.P),462043
                    </p>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Phone Number: (+91)9201634268.
                    </p>
                </section>

                {/* Section 11 - Contact Us */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">11. Shipping and Delivery</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Shipping costs will be calculated at checkout based on the delivery location and the size/weight of your order. We use third-party delivery services to fulfill our orders and aim to deliver products within 7 to 15 business days, depending on the location.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Please ensure that the shipping address you provide is accurate. We are not responsible for any delays or undelivered orders caused by incorrect address information.
                    </p>
                </section>







            </div>
        </div>
    );
};

export default PrivacyPolicy;
