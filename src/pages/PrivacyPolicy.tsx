import PageLayout from "@/components/PageLayout";

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="system-label mb-4">LEGAL</div>
          <h1 className="text-3xl font-bold tracking-tight mb-8">Privacy Policy</h1>
          <div className="glow-line mb-8" />
          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p>Last updated: February 2026</p>
            <p>
              Aizen Studio ("we", "our", "us") operates the MOMENTUM NULL mobile application and
              the aizenstudio.com website. This page informs you of our policies regarding the
              collection, use, and disclosure of personal data when you use our services.
            </p>
            <div className="glow-line opacity-30" />
            <h2 className="text-lg font-bold text-foreground mt-8">Information Collection</h2>
            <p>
              We collect minimal data necessary to provide our services. This may include device
              identifiers, gameplay analytics (velocity data, session length, flow ratings), and
              contact form submissions. We do not sell your personal data.
            </p>
            <div className="glow-line opacity-30" />
            <h2 className="text-lg font-bold text-foreground mt-8">Data Usage</h2>
            <p>
              Collected data is used to improve game performance, balance gameplay mechanics, and
              respond to user inquiries. Analytics data is aggregated and anonymized.
            </p>
            <div className="glow-line opacity-30" />
            <h2 className="text-lg font-bold text-foreground mt-8">Contact</h2>
            <p>
              For privacy-related inquiries, contact us at{" "}
              <a href="mailto:contact@aizenstudio.com" className="text-velocity hover:underline">
                contact@aizenstudio.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
