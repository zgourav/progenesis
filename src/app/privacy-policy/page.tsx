import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <div className="w-full">
      {/* ===== Hero Section ===== */}


      <section
        className="relative w-full h-[500px] md:h-[600px] flex pl-[12px] md:pl-[120px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "/online-consultation/online_consultation_bg.png",
        }}
      >
        {/* Blurred gradient shape */}
        <div
          className="absolute left-[-150px] top-[80px] w-[445px] h-[441px] rounded-full opacity-70"
          style={{
            background: "#94BA3D",
            filter: "blur(250px)",
            transform: "rotate(-2deg)",
          }}
        ></div>

        {/* Left content */}
        {/* <div className="relative z-10 mt-2 md:mt-[85px] max-w-5xl">
          <p className="text-[18px] text-gray-600 mb-2 md:mb-[44px]">
            Home<span className="px-[12px]">›</span>
            <span
              className="inline-block px-3 py-1 rounded-md text-[18px] font-medium leading-[40px] tracking-[-0.36px] text-blue-700"
            >
              International Patient
            </span>
          </p>
          <h1 className="md:text-[5rem] font-bold leading-tight mb-[44px] text-[#252525]">
            IVF Treatment for International Patient
          </h1>
          <button className="mt-6 px-[20px] py-[16px] bg-black text-white rounded-[14px]">
            Book Your Appointment
          </button>
        </div> */}

        {/* Right image */}
        <div className="hidden md:block relative w-[591px] h-[600px] ml-auto mr-[150px]">
          <Image
            src="/online-consultation/Backgroundshape.png"
            alt="Background shape"
            fill
            className="object-contain object-bottom rounded-lg"
          />

        </div>
      </section>
      {/* <section
        className="relative w-full h-[250px] md:h-[300px] flex flex-col justify-center px-6 md:px-[120px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/privacy-bg.jpg')", // must be in /public
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-transparent"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-sm md:text-lg text-gray-700 mt-2">
            Last updated: August 2025
          </p>
        </div>
      </section> */}

      {/* ===== Content Section ===== */}
      <section className="w-full flex flex-col md:flex-row gap-10 px-6 md:px-[120px] py-[60px] md:py-[80px] max-w-[1440px] mx-auto">
        {/* Sidebar */}
        {/* <aside className="w-full md:w-1/4 border-l-4 border-blue-600 pl-4"> */}
        <ul className="space-y-3 text-sm md:text-base">
          <li className="text-blue-600 font-medium">Overview</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">What This Privacy Policy Covers</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Collection & Use of Personal Information</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Collection & Use of Non-personal Information</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Information Sharing & Disclosure</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Consent</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Security</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Changes to this Privacy Policy</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Questions or Suggestions</li>
        </ul>
        {/* </aside> */}

        {/* Main Content */}
        <article className="w-full md:w-3/4 space-y-10">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Progenesis Fertility Center, from the house of We Care Hospital Services & Advanced Center for
              Reproductive Medicine (hereinafter “Progenesis IVF”), is the author of this Privacy Policy.
              This policy demonstrates our commitment to protect the privacy of clients and users of our website.
              We urge everyone to read the terms of this Privacy Policy that describe acceptable uses and outline
              how we treat the personally identifiable information we collect.
            </p>
          </div>

          {/* What This Privacy Policy Covers */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What This Privacy Policy Covers</h2>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy only covers the treatment of personally identifiable information that we collect
              through websites owned and operated by Progenesis IVF. It does not apply to organizations not owned
              by us, individuals we do not employ, or third-party websites linked from our site.
            </p>
          </div>

          {/* Collection & Use of Personal Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Collection & Use of Personal Information</h2>
            <p className="text-gray-700 leading-relaxed">
              You can visit our website without revealing any personal information. However, we may collect
              personal information if you choose to use our services. This information helps us respond to
              enquiries, provide treatment-related services, and contact you regarding new services. By providing
              this information voluntarily, you consent to its collection and use in accordance with this Privacy Policy.
            </p>
          </div>

          {/* Collection & Use of Non-personal Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Collection & Use of Non-personal Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We automatically collect non-personal information such as your IP address, cookie data, and page
              requests. This may be used to customize content and improve services. However, we do not link
              non-personal data with personally identifiable information.
            </p>
          </div>

          {/* Information Sharing & Disclosure */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing & Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share personal information with trusted third parties who help provide treatment and counseling
              services, but only with your explicit consent. We may also disclose your information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>When legally required (court orders, legal processes, etc.)</li>
              <li>To protect the rights and safety of users and Progenesis</li>
              <li>If your actions violate our Terms of Use</li>
            </ul>
          </div>

          {/* Consent */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Consent</h2>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree to the collection, use, or disclosure of your personal information as outlined,
              please do not provide any personal information. If you wish to withdraw consent, contact us at{" "}
              <a href="mailto:contact@progenesisivf.com" className="text-blue-600 underline">
                contact@progenesisivf.com
              </a>.
            </p>
          </div>

          {/* Security */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security</h2>
            <p className="text-gray-700 leading-relaxed">
              No internet transmission is 100% secure, but Progenesis employs strict internal security policies,
              access controls, firewalls, and physical security measures to protect your information.
            </p>
          </div>

          {/* Changes to this Privacy Policy */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to this Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Progenesis may amend this Privacy Policy at any time without notice. We encourage users to review
              this page periodically. Continued use of our website after changes implies acceptance.
            </p>
          </div>

          {/* Questions or Suggestions */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Questions or Suggestions</h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions or suggestions about this Privacy Policy, please email us at{" "}
              <a href="mailto:sandeep@progenesisivf.com" className="text-blue-600 underline">
                sandeep@progenesisivf.com
              </a>.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
