const Policy = () => (
  <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <section className="text-center mb-20">
      <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
        Privacy Policy
      </h1>
      <p className="text-xl text-gray-600">Your data safety is our priority. Last updated: April 2026.</p>
    </section>

    <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-12 shadow-2xl space-y-12">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
        <ul className="space-y-3 text-gray-600 list-disc pl-6">
          <li>Personal info: Name, phone, email during booking</li>
          <li>Payment details: Processed securely via gateway</li>
          <li>Usage data: To improve service (anonymized)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How We Use Data</h2>
        <p className="text-gray-600 mb-6">We use your info to process bookings, send confirmations, and provide support. No selling/sharing without consent.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Security</h2>
        <p className="text-gray-600">Data encrypted at rest/transit. Compliant with Indian DPDP Act 2023.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Your Rights</h2>
        <ul className="space-y-3 text-gray-600 list-disc pl-6">
          <li>Access/delete your data anytime</li>
          <li>Opt-out of marketing</li>
          <li>Contact: privacy@laxmirentals.com</li>
        </ul>
      </section>

      <section className="pt-12 border-t border-gray-200 text-center">
        <p className="text-gray-600">Questions? <a href="/contact" className="text-orange-500 hover:underline">Contact us</a></p>
      </section>
    </div>
  </div>
);

export default Policy;