import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🎓',
      title: 'Professional Training',
      description: 'Comprehensive 2-week training programs to prepare you for international employment',
    },
    {
      icon: '📜',
      title: 'Certification',
      description: 'Receive recognized certificates upon successful completion of training',
    },
    {
      icon: '💼',
      title: 'Job Placement',
      description: 'Direct placement with verified employers in UAE and other Gulf countries',
    },
    {
      icon: '✈️',
      title: 'Fast Processing',
      description: 'Quick visa processing and travel arrangements for successful candidates',
    },
    {
      icon: '🏠',
      title: 'Accommodation',
      description: 'Comfortable housing provided by employers with all amenities',
    },
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Attractive salary packages with regular increments and benefits',
    },
    {
      icon: '🤝',
      title: 'Broker Network',
      description: 'Partner with us as a broker and earn competitive commissions',
    },
    {
      icon: '📱',
      title: 'Digital Platform',
      description: 'Track your progress from enrollment to placement on our platform',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0066B3] mb-4">Why Choose UMSL?</h2>
          <p className="text-xl text-gray-600">Your trusted partner in international labour mobility</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#0066B3] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

