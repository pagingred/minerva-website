import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen px-4 py-16 flex justify-center">
      <div
        className="
          w-full max-w-5/6
          p-8 md:p-12
          text-zinc-300
          leading-relaxed
		  topOffset
        "
      >
        <h1 className="text-3xl font-semibold text-black dark:text-white mb-4">
          Terms of Service
        </h1>

        <p className="text-sm text-zinc-500 mb-8">
          Last updated: April 15, 2026
        </p>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Agreement to Our Legal Terms
          </h2>

          <p>
            We are Minerva Defense (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;), a company
            registered in Alabama, United States at 115 Murray Drive, Madison,
            AL 35758.
          </p>

          <p>
            We operate the website{" "}
            <a
              href="https://minervadefense.com"
              target="_blank"
              className="text-blue-400 underline"
            >
              minervadefense.com
            </a>{" "}
            (the &quot;Site&quot;), as well as any other related products and services
            (the &quot;Services&quot;).
          </p>

          <p>
            These Legal Terms constitute a legally binding agreement between you
            and Minerva Defense. By accessing the Services, you agree to be bound
            by these terms. If you do not agree, you must discontinue use
            immediately.
          </p>

          <p>
            The Services are intended for users who are at least 18 years old.
          </p>

          {/* ================= SECTION 1 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">1. Our Services</h2>

          <p>
            The information provided when using the Services is not intended for
            distribution where it would violate laws or regulations.
          </p>

          {/* ================= SECTION 2 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            2. Intellectual Property Rights
          </h2>

          <p>
            We own or license all intellectual property in the Services,
            including content, trademarks, and materials (&quot;Content&quot; and
            &quot;Marks&quot;).
          </p>

          <p>
            The Content and Marks are provided &quot;AS IS&quot; for personal,
            non-commercial use only.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>You may access and use the Services</li>
            <li>You may download content for personal use only</li>
            <li>No reproduction or commercial use without permission</li>
          </ul>

          {/* ================= SECTION 3 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            3. User Representations
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>You have legal capacity</li>
            <li>You are not a minor</li>
            <li>You will not use bots or automation</li>
            <li>You will comply with laws</li>
          </ul>

          {/* ================= SECTION 4 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            4. Prohibited Activities
          </h2>

          <p>You agree not to:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Scrape or collect data</li>
            <li>Bypass security features</li>
            <li>Upload malicious code</li>
            <li>Harass or harm others</li>
            <li>Use automation tools or bots</li>
          </ul>

          {/* ================= SECTION 5 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            5. User Contributions
          </h2>
          <p>The Services do not allow user-generated content.</p>

          {/* ================= SECTION 6 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            6. Contribution License
          </h2>
          <p>
            Any feedback or submissions you provide may be used by us without
            compensation.
          </p>

          {/* ================= SECTION 7 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            7. Third-Party Websites
          </h2>

          <p>
            We are not responsible for third-party websites or content. Use them
            at your own risk.
          </p>

          {/* ================= SECTION 8 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            8. Services Management
          </h2>

          <p>
            We reserve the right to monitor, restrict, or remove content and
            users.
          </p>

          {/* ================= SECTION 9 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            9. Privacy Policy
          </h2>

          <p>
            Please review our Privacy Policy at{" "}
            <a
              href="https://minervadefense.com/privacy"
              className="text-blue-400 underline"
            >
              minervadefense.com/privacy
            </a>
          </p>

          {/* ================= SECTION 10 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            10. Term and Termination
          </h2>

          <p>
            We may terminate or suspend access at any time without notice.
          </p>

          {/* ================= SECTION 11 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            11. Modifications and Interruptions
          </h2>

          <p>
            We may modify or discontinue Services at any time without liability.
          </p>

          {/* ================= SECTION 12 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            12. Governing Law
          </h2>

          <p>These Terms are governed by Alabama law.</p>

          {/* ================= SECTION 13 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            13. Dispute Resolution
          </h2>

          <p>
            Disputes will first be resolved informally, then through arbitration
            if necessary.
          </p>

          {/* ================= SECTION 14 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            14. Corrections
          </h2>

          <p>
            We may correct errors or inaccuracies at any time without notice.
          </p>

          {/* ================= SECTION 15 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            15. Disclaimer
          </h2>

          <p>
            The Services are provided &quot;AS IS&quot; without warranties of any kind.
          </p>

          {/* ================= SECTION 16 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            16. Limitation of Liability
          </h2>

          <p>
            We are not liable for indirect or consequential damages.
          </p>

          {/* ================= SECTION 17 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            17. Indemnification
          </h2>

          <p>
            You agree to indemnify and hold us harmless from claims arising from
            your use.
          </p>

          {/* ================= SECTION 18 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            18. User Data
          </h2>

          <p>
            You are responsible for your data. We are not liable for loss or
            corruption.
          </p>

          {/* ================= SECTION 19 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            19. Electronic Communications
          </h2>

          <p>
            You consent to electronic communications and signatures.
          </p>

          {/* ================= SECTION 20 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            20. Miscellaneous
          </h2>

          <p className="text-xl font-semibold text-black dark:text-white">
            These Terms constitute the entire agreement between you and us.
          </p>

          {/* ================= SECTION 21 ================= */}
          <h2 className="text-xl font-semibold text-black dark:text-white">
            21. Contact Us
          </h2>

          <p>
            Minerva Defense
            <br />
            115 Murray Drive
            <br />
            Madison, AL 35758
            <br />
            United States
            <br />
            contact@minervadefense.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;