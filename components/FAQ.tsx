export default function FAQ() {
  const faqs = [
    {
      question: 'Can you customize machines according to our requirements?',
      answer:
        'Yes, absolutely. Custom machine design is one of our core strengths. Our engineering team can modify existing designs or create completely new machines based on your production needs, space constraints, and output requirements.',
    },
    {
      question: 'Do you provide installation and commissioning?',
      answer:
        "Yes, we provide complete installation and commissioning services. Our technicians will set up the machine at your facility, test it, and ensure it's running at optimal performance before handover.",
    },
    {
      question: 'Do you provide operator training?',
      answer:
        'Yes, comprehensive operator training is included. We train your team on machine operation, basic troubleshooting, cleaning procedures, and safety protocols. Training materials and manuals are also provided.',
    },
    {
      question: 'Do you provide spare parts?',
      answer:
        'Yes, we maintain inventory of all critical spare parts and can dispatch them quickly across India. All parts are genuine and manufactured to the same quality standards as the original machine.',
    },
    {
      question: 'What is the warranty period?',
      answer:
        'We provide a standard warranty on all machines. The warranty period varies by machine type and is clearly specified in the quotation. Extended warranty and AMC options are also available.',
    },
    {
      question: 'What is the typical delivery time?',
      answer:
        'Delivery time depends on the machine type and customization level. Standard machines typically take 4-8 weeks, while custom-designed equipment may take 8-12 weeks. Exact timelines are confirmed during quotation.',
    },
    {
      question: 'Do you export machines internationally?',
      answer:
        'Yes, we export to multiple countries. Our machines meet international food processing standards and we can handle export documentation, packaging, and shipping logistics.',
    },
    {
      question: 'Do you offer Annual Maintenance Contracts (AMC)?',
      answer:
        'Yes, we offer comprehensive AMC plans that include scheduled preventive maintenance, priority support, discounted spare parts, and free inspections. AMC ensures your machine runs at peak performance year-round.',
    },
  ]

  return (
    <section className="section bg-card">
      <div className="section-header">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Everything you need to know about our machines and services
        </p>
      </div>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
