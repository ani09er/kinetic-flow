import PageLayout from "@/components/PageLayout";

const TermsOfService = () => {
  return (
    <PageLayout>
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="system-label mb-4">LEGAL</div>
          <h1 className="text-3xl font-bold tracking-tight mb-8">Terms of Service</h1>
          <div className="glow-line mb-8" />
          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p>Last updated: February 2026</p>
            <p>
              By accessing MOMENTUM NULL or Aizen Studio services, you agree to be bound by
              these Terms of Service. If you disagree with any part of the terms, you may not
              access the service.
            </p>
            <div className="glow-line opacity-30" />
            <h2 className="text-lg font-bold text-foreground mt-8">Use License</h2>
            <p>
              Permission is granted to use MOMENTUM NULL for personal, non-commercial gameplay.
              This license does not include modification, distribution, or reverse engineering
              of the application.
            </p>
            <div className="glow-line opacity-30" />
            <h2 className="text-lg font-bold text-foreground mt-8">Disclaimer</h2>
            <p>
              The game is provided "as is" without warranty of any kind. Aizen Studio shall not
              be liable for any damages arising from the use of our services.
            </p>
            <div className="glow-line opacity-30" />
            <h2 className="text-lg font-bold text-foreground mt-8">Contact</h2>
            <p>
              Questions about these terms can be directed to{" "}
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

export default TermsOfService;
