import { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner
  }, []);
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-900">Bold-Thread Terms and Conditions</h1>

      <div className="space-y-4">
        <p className="text-gray-700">
          Welcome to Bold-Thread! By accessing or using our services, you agree to comply with and be bound by these terms.
        </p>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to Bold-Thread (we, us, our), an online marketplace offering a wide range of stylish clothing for both men and women. These Terms and Conditions (Terms) govern your access to and use of our website, including the purchasing of products, and related services (the Services). By accessing or using our website and services, you agree to comply with and be bound by these Terms.

            These Terms are legally binding, and they form the contract between you and Bold-Thread. If you do not agree to these Terms, please do not access or use our Services.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-m font-semibold text-gray-800">1.1 About Bold-Thread</h2>
          <p className="text-gray-700">

            Bold-Thread is an e-commerce clothing retailer located in Bhopal,India. We offer a variety of clothing, including trendy outfits, casual wear, and accessories. Our mission is to deliver high-quality apparel with exceptional customer service, catering to diverse fashion preferences.          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">2. Eligibility to Use Our Services </h2>
          <p className="text-gray-700">
            You must be at least 18 years old or the legal age of majority in your jurisdiction to use our website and Services. By using our Services, you confirm that you meet this eligibility requirement.
          </p>
          <p className="text-gray-700">
            If you are under the legal age, you must have the permission of a parent or legal guardian to access and use our website. A parent or guardian must supervise your use of the website and confirm your agreement to these Terms on your behalf.



          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">3. Account Registration and Security</h2>

        </div>

        <div className="space-y-2">
          <h2 className="text-m font-semibold text-gray-800">3.1 Account Creation</h2>
          <p className="text-gray-700">
            To use certain features of our website, including placing orders, you must register for an account. You agree to provide accurate, current, and complete information when registering. Any false or incomplete information may result in the suspension or termination of your account.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">3.2 Security of Account</h2>
          <p className="text-gray-700">
            You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to notify us immediately if you suspect any unauthorized access to your account.

            You acknowledge that we are not liable for any losses or damages resulting from unauthorized access to your account, provided we have not caused the breach through negligence.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">4. Product Listings, Availability, and Pricing</h2>

        </div>

        <div className="space-y-2">
          <h2 className="text-m font-semibold text-gray-800">4.1 Product Listings</h2>
          <p className="text-gray-700">
            All products listed on our website, including clothing and accessories, are described to the best of our ability. We aim to provide accurate product descriptions, images, and specifications, but these may differ slightly due to various factors such as lighting, fabric texture, and screen display settings.

            We do not guarantee that all product details will be 100% accurate, and we reserve the right to modify or remove any product listing without prior notice.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-m font-semibold text-gray-800">4.2 Product Availability</h2>
          <p className="text-gray-700">
            We make every effort to ensure that products listed on our website are in stock. However, product availability is subject to change, and some items may be temporarily out of stock. If this occurs, we will notify you promptly and offer a suitable alternative or a full refund.
          </p>
        </div>


        <div className="space-y-2">
          <h2 className="text-m font-semibold text-gray-800">4.3 Pricing</h2>
          <p className="text-gray-700">
            Prices for all products are listed in Indian Rupees (INR) and include applicable taxes unless stated otherwise. We may change prices at any time without notice, but any changes will not affect orders already placed. Discounts, offers, and promotional pricing are subject to the terms specified at the time of the offer.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">5. Orders, Payments, and Shipping</h2>

            <div className="space-y-2">
              <h3 className="text-m font-semibold text-gray-800">5.1 Order Placement</h3>
              <p className="text-gray-700">
                Once you have selected the items you wish to purchase, you can place an order by completing the checkout process on our website. When you place an order, you are making an offer to purchase the selected items.
              </p>
              <p className="text-gray-700">
                Bold-Thread reserves the right to accept or reject your order, especially in cases of product unavailability, pricing errors, or suspicious activities.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-m font-semibold text-gray-800">5.2 Payment</h3>
              <p className="text-gray-700">
                We accept a variety of payment methods, including credit/debit cards, UPI, and net banking. Payment will be processed at the time of order placement. If your payment method is declined or if we cannot process your payment, your order will be canceled, and you will be notified immediately.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">5.3 Shipping and Delivery</h3>
              <p className="text-gray-700">
                Shipping costs will be calculated at checkout based on the delivery location and the size/weight of your order. We use third-party delivery services to fulfill our orders and aim to deliver products within 7 to 15 business days, depending on the location.
              </p>
              <p className="text-gray-700">
                Please ensure that the shipping address you provide is accurate. We are not responsible for any delays or undelivered orders caused by incorrect address information.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Section 6: Returns, Refunds, and Cancellations */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">6. Returns, Refunds, and Cancellations</h2>

            <div className="space-y-2">
              <h3 className="text-m font-semibold text-gray-800">6.1 Return Policy</h3>
              <p className="text-gray-700">
                If you are not satisfied with your purchase, we accept returns within 7 days from the date of delivery, provided that the product is unworn, unwashed, and in its original packaging. Certain items, such as intimates, jewelry, or customized products, may not be eligible for return.
              </p>
              <p className="text-gray-700">
                To initiate a return, please contact our customer service team with your order number and reason for the return.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-m font-semibold text-gray-800">6.2 Refunds</h3>
              <p className="text-gray-700">
                Refunds will be processed to your original payment method within 7-10 business days after receiving the returned product. Please note that shipping charges are non-refundable.
              </p>
              <p className="text-gray-700">
                If an item is damaged or defective, we will offer a full refund or exchange at no additional cost to you.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-m font-semibold text-gray-800">6.3 Order Cancellations</h3>
              <p className="text-gray-700">
                You may cancel an order within 24 hours of placing it. After this period, cancellations may not be accepted, especially if the order has already been shipped. If the cancellation request is made before the item is dispatched, we will process a full refund.
              </p>
            </div>
          </div>

          {/* Section 7: User-Generated Content */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">7. User-Generated Content</h2>

            <div className="space-y-2">
              <h3 className="text-m font-semibold text-gray-800">7.1 Reviews, Comments, and Feedback</h3>
              <p className="text-gray-700">
                You are encouraged to provide feedback, reviews, and comments about the products you purchase. Any content you post must comply with our guidelines and should not be defamatory, offensive, or violate any intellectual property rights.
              </p>
              <p className="text-gray-700">
                By posting content on our website, you grant us the right to use your reviews, feedback, and comments for marketing purposes, both on our website and across various promotional channels.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-m font-semibold text-gray-800">7.2 Prohibited Content</h3>
              <p className="text-gray-700">
                You agree not to post content that:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Violates any laws or infringes upon the rights of third parties.</li>
                <li>Contains harmful, harassing, or discriminatory language.</li>
                <li>Is spammy or misleading in nature.</li>
              </ul>
              <p className="text-gray-700">
                We reserve the right to remove any content that violates these Terms.
              </p>
            </div>
          </div>

          {/* Section 8: Privacy Policy */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">8. Privacy Policy</h2>
            <p className="text-gray-700">
              Your use of our website is also governed by our Privacy Policy, which outlines how we collect, use, store, and protect your personal information. Please read our Privacy Policy carefully to understand how we handle your data.
            </p>
            <p className="text-gray-700">
              By using our services, you consent to the practices described in the Privacy Policy.
            </p>
          </div>

          <div className="space-y-4">
            {/* Section 9: Intellectual Property */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">9. Intellectual Property</h2>

              <div className="space-y-2">
                <h3 className="text-lm font-semibold text-gray-800">9.1 Ownership</h3>
                <p className="text-gray-700">
                  The content on our website, including text, images, logos, product designs, and software, is the property of Bold-Thread or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or modify any content without obtaining prior written permission.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-m font-semibold text-gray-800">9.2 License</h3>
                <p className="text-gray-700">
                  We grant you a limited, non-exclusive, and non-transferable license to access and use our website for personal and non-commercial purposes. Any unauthorized use of the website or its content is prohibited.
                </p>
              </div>
            </div>

            {/* Section 10: Limitation of Liability */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">10. Limitation of Liability</h2>

              <div className="space-y-2">
                <h3 className="text-m font-semibold text-gray-800">10.1 No Warranty</h3>
                <p className="text-gray-700">
                  We make no representations or warranties about the accuracy or completeness of the websites content. We are not liable for any errors, omissions, or inaccuracies in the information provided.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-m font-semibold text-gray-800">10.2 Limitation of Liability</h3>
                <p className="text-gray-700">
                  Bold-Thread is not responsible for any indirect, incidental, special, or consequential damages arising from your use of the website or services, including lost profits or data. Our total liability, whether in contract, tort, or otherwise, shall not exceed the total amount you paid for the specific product or service that gave rise to the claim.
                </p>
              </div>
            </div>

            {/* Section 11: Indemnification */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">11. Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify, defend, and hold harmless Bold-Thread and its affiliates, employees, officers, and agents from and against any and all claims, damages, losses, and expenses (including legal fees) arising out of your use of the website, violation of these Terms, or infringement of the rights of any third party.
              </p>
            </div>

            {/* Section 12: Governing Law and Dispute Resolution */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">12. Governing Law and Dispute Resolution</h2>

              <div className="space-y-2">
                <h3 className="text-m font-semibold text-gray-800">12.1 Governing Law</h3>
                <p className="text-gray-700">
                  These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts located in Bhopal, Madhya Pradesh.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-m font-semibold text-gray-800">12.2 Dispute Resolution</h3>
                <p className="text-gray-700">
                  In case of any dispute, both parties agree to attempt resolution through informal negotiations or mediation. If informal resolution fails, the dispute will be settled by arbitration in accordance with the Indian Arbitration and Conciliation Act, 1996.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 13: Changes to Terms */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">13. Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to modify or update these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of the Services after such modifications will constitute your acceptance of the updated Terms.
          </p>
        </div>

        {/* Section 14: Contact Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">14. Contact Information</h2>
          <p className="text-gray-700">
            For any questions or concerns regarding these Terms, please contact us at:
          </p>
          <address className="text-gray-700">
            Bold-Thread-Clothes <br />
            Address: Shop No 20,Bagsewania,Near Vishwakrma Mandir,Bhopal (M.P),462043
            Email: <a href="mailto:support@bold-thread.com" className="text-blue-600">support@bold-thread.com</a><br />
            Phone: <a href="tel:+91-XXXX-XXXX" className="text-blue-600"> (+91) 9201634268</a>
          </address>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
