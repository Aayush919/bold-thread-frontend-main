import { useEffect } from "react";


const CancelPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top-left corner
    }, []);
    return (
        <div className="container mx-auto p-6">
            {/* Header */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Order Cancellation and Return Policy</h1>
                <p className="text-lg text-gray-600 mt-2">Welcome to Bold-Thread, your go-to destination for stylish and high-quality clothing.</p>
            </header>

            {/* Introduction */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
                <p className="text-gray-700 mt-4 ml-6">
                    We at Bold-Thread believe that shopping for clothes should be an enjoyable and seamless experience. We understand that sometimes returns and cancellations may be necessary.
                    Whether it’s a size issue, a wrong color, or you simply changed your mind, we are here to help. Our cancellation and return process is designed to be transparent, fair, and easy to follow.
                </p>
            </section>

            {/* Cancellation Policy */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800">Cancellation Policy</h2>

                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                    <h3 className="text-xl font-medium text-gray-800">Standard Cancellation</h3>
                    <ul className="list-disc ml-6 mt-4 text-gray-700">
                        <li><strong>Before Dispatch:</strong> You can cancel the order at any time before it is dispatched from our warehouse or our Bold-Thread Bhopal store.</li>
                        <li><strong>After Dispatch:</strong> Once the order has been dispatched, it cannot be canceled directly from your account. However, you can refuse the package upon delivery.</li>
                        <li><strong>Cancellation Fees:</strong> There may be cancellation charges if your order is already processed or involves customizations (e.g., embroidery).</li>
                    </ul>

                    <h3 className="text-xl font-medium text-gray-800 mt-6">How to Cancel an Order</h3>
                    <ul className="list-disc ml-6 mt-4 text-gray-700">
                        <li>Visit our website and log in to your Bold-Thread account.</li>
                        <li>Navigate to the Order History section.</li>
                        <li>Click on the order you wish to cancel and select Cancel Order.</li>
                        <li>If the order is still in the Processing stage, the cancellation will be processed immediately.</li>
                    </ul>
                </div>
            </section>

            {/* Returns Policy */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800">Returns Policy</h2>

                <div className="bg-gray-50 p-6 rounded-lg  mt-4">
                    <h3 className="text-xl font-medium text-gray-800">General Return Conditions</h3>
                    <ul className="list-disc ml-6 mt-4 text-gray-700">
                        <li><strong>Return Timeframe:</strong> You have 7 days from the date of delivery to return your product. The product must be in its original, unused, and unwashed condition with all tags attached.</li>
                        <li><strong>Refunds:</strong> Once we receive your returned item, it will be inspected. A full refund will be processed to the original payment method , depending on your preference.</li>
                        <li><strong>Exchange Option:</strong> If you want a different size, color, or style, we can arrange for an exchange, subject to product availability.</li>
                        <li><strong>Return Shipping:</strong> If the return is due to a defective item or an error on our part, we will cover the return shipping cost. Otherwise, the return shipping will be at your expense.</li>
                    </ul>
{/* 
                    <h3 className="text-xl font-medium text-gray-800 mt-6">Categories with Specific Return Policies</h3>
                    <div className="mt-4 text-gray-700">
                        <p><strong>Apparel (Clothing):</strong> Return within 7 days in unused, unwashed condition with tags intact.</p>
                        <p><strong>Accessories (Bags, Jewelry, etc.):</strong> Return within 7 days, unused, undamaged with original packaging.</p>
                        <p><strong>Sale and Discounted Items:</strong> Non-returnable unless defective, marked clearly during checkout.</p>
                        <p><strong>Items from Bold-Thread Bhopal Store:</strong> In-store purchases must be returned within 7 days directly at the store.</p>
                    </div> */}
                </div>
            </section>

            {/* Refund Policy */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800">Refund Policy</h2>

                <div className="bg-gray-50 p-6 rounded-lg  mt-4">
                    <h3 className="text-xl font-medium text-gray-800">Refund Method</h3>
                    <p className="text-gray-700 mt-4">Refunds will be made to the original payment method (Credit/Debit Card, Net Banking, UPI, etc.) </p>

                    <h3 className="text-xl font-medium text-gray-800 mt-6">Refund Timeline</h3>
                    <p className="text-gray-700 mt-4">Refunds will be credited to the original payment method within 5-7 business days after the return is approved. Depending on your payment provider, the refund may take additional time to reflect in your account.</p>
 
                    <h3 className="text-xl font-medium text-gray-800 mt-6">Partial Refund</h3>
                    <p className="text-gray-700 mt-4">If the product is returned damaged, without tags, or with visible wear and tear, we may issue a partial refund after deductions for damages.</p>
                </div>
            </section>

            {/* How to Initiate a Return or Exchange */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-800">How to Initiate a Return or Exchange</h2>

                <div className="bg-gray-50 p-6 rounded-lg  mt-4">
                    <ul className="list-disc ml-6 mt-4 text-gray-700">
                        <li>Log in to your Bold-Thread account.</li>
                        <li>Navigate to the Order History and select the item you wish to return or exchange.</li>
                        <li>Click on Return/Exchange and select the reason for return.</li>
                        <li>Ship the Item using the pre-paid return label (for eligible returns), or arrange for return shipping at your cost.</li>
                        <li>Once the item is received, we will inspect it and notify you of the return status and proceed with the refund or exchange.</li>
                    </ul>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center mt-8">
                <p className="text-sm text-gray-600">For any questions or assistance, feel free to contact us at <a href="mailto:support@boldthread.com" className="text-blue-500">support@bold-thread.com</a> or call us at <strong>(+91) 9201634268</strong>.</p>
            </footer>
        </div>
    );
};

export default CancelPolicy;
