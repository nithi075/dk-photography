import "./Services.css";

export default function Services() {
  const servicesList = [
    {
      id: "01",
      title: "Wedding Storytelling",
      desc: "More than just imagery—we archive the silent glances, the unscripted tears, and the soulful bond of your union.",
      tag: "LUXURY WEDDINGS"
    },
    {
      id: "02",
      title: "Cinematic Motion",
      desc: "Narrative-driven wedding films with high-end color grading that transforms your legacy into a silver-screen experience.",
      tag: "MOTION PICTURE"
    },
    {
      id: "03",
      title: "Couture Archive",
      desc: "Handcrafted physical legacies printed on high-grade archival paper, designed to breathe life into memories for generations.",
      tag: "PRINTED LEGACY"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        
        {/* Header Section */}
        <div className="services-header">
          <div className="services-tag-wrapper">
            <span className="services-tag">Our Expertise</span>
            <div className="tag-dot"></div>
          </div>
          <h2 className="services-title">
            Tailored <br/> 
            <span className="title-accent">Visual Artistry</span>
          </h2>
          <p className="services-subtitle">Transforming your extraordinary journey into a timeless cinematic archive.</p>
        </div>

        {/* Services List with Interaction */}
        <div className="services-list-wrapper">
          {servicesList.map((service, index) => (
            <div className="service-row" key={index}>
              <div className="service-id-box">
                <span className="service-number">{service.id}</span>
              </div>
              
              <div className="service-info-box">
                <span className="service-item-tag">{service.tag}</span>
                <h3 className="service-item-title">{service.title}</h3>
                <p className="service-item-desc">{service.desc}</p>
              </div>

              <div className="service-action">
                <div className="service-circle-btn">
                  <div className="btn-inner">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Animated Background Layers */}
              <div className="row-divider"></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}