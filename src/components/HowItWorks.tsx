import React from 'react';

interface HowItWorksProps {
  onNavigate?: (page: string) => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate }) => {
  const steps = [
    {
      number: '1',
      title: 'Register & Pay',
      description: 'Create your account, select a course, and pay the commitment fee to secure your spot',
      icon: '📝',
    },
    {
      number: '2',
      title: 'Attend Training',
      description: 'Complete our comprehensive 2-week training program with experienced instructors',
      icon: '🎓',
    },
    {
      number: '3',
      title: 'Get Certified',
      description: 'Pass assessments and receive your professional certification',
      icon: '📜',
    },
    {
      number: '4',
      title: 'Document Vetting',
      description: 'Submit required documents for verification and embassy attestation',
      icon: '✅',
    },
    {
      number: '5',
      title: 'Job Matching',
      description: 'Get matched with verified employers based on your skills and preferences',
      icon: '🤝',
    },
    {
      number: '6',
      title: 'Travel & Work',
      description: 'Receive your visa, travel to your destination, and start your new career',
      icon: '✈️',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0066B3] mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Your journey from registration to placement in 6 simple steps</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-gradient-to-br from-[#0066B3] to-[#4A9FD8] rounded-xl p-6 text-white h-full shadow-lg hover:shadow-2xl transition duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-[#B8D430] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mr-4 flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="text-5xl">{step.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-100">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => onNavigate?.('signup')}
            className="bg-[#B8D430] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#a0bd28] transform hover:scale-105 transition shadow-lg"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

