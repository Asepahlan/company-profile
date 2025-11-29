import { Button } from '@/components/ui/Button';

const teamMembers = [
  {
    name: 'Ahmad Wijaya',
    position: 'CEO & Founder',
    description: 'Berpengalaman 15+ tahun di industri teknologi',
    image: '/images/team-1.svg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    name: 'Siti Nurhaliza',
    position: 'CTO',
    description: 'Expert dalam arsitektur sistem dan cloud computing',
    image: '/images/team-2.svg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    name: 'Budi Santoso',
    position: 'Lead Designer',
    description: 'Spesialis UI/UX design dengan 10+ tahun pengalaman',
    image: '/images/team-3.svg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    name: 'Dewi Lestari',
    position: 'Project Manager',
    description: 'Berpengalaman mengelola proyek skala enterprise',
    image: '/images/team-4.svg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
];

interface TeamSectionProps {
  showTitle?: boolean;
}

export function TeamSection({ showTitle = true }: TeamSectionProps) {
  return (
    <section id="tim" className="section bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berkenalan dengan tim profesional yang siap membantu kesuksesan bisnis Anda
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-blue-100 rounded-full flex items-center justify-center">
                <span className="text-gray-400 text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-3">{member.position}</p>
              <p className="text-gray-600 text-sm mb-4">{member.description}</p>
              
              <div className="flex justify-center space-x-3">
                <a
                  href={member.social.linkedin}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href={member.social.twitter}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a
                  href={member.social.email}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            Bergabung dengan Tim Kami
          </Button>
        </div>
      </div>
    </section>
  );
}
