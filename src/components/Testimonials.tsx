const testimonials = [
  {
    quote: "感謝壕芯實業的專業服務，讓我們在悲傷中感受到溫暖。禮儀師細心周到，讓父親走得安詳莊嚴。",
    author: "張先生",
    location: "台北市",
  },
  {
    quote: "從接洽到告別式結束，每個環節都處理得非常專業。收費透明，服務態度更是讓人感動。",
    author: "李女士",
    location: "新北市",
  },
  {
    quote: "24小時的服務讓我們在深夜也能得到即時協助，減輕了我們很多壓力。非常感謝壕芯實業團隊。",
    author: "王先生",
    location: "桃園市",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="section-title">TESTIMONIALS</p>
          <h2 className="section-heading">客 戶 感 言</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary/50 p-8 lg:p-10 relative"
            >
              {/* Quote Mark */}
              <div className="text-6xl font-heading text-warm-gold/30 absolute top-4 left-6">
                "
              </div>
              
              <blockquote className="text-lg leading-relaxed mb-8 pt-8">
                {testimonial.quote}
              </blockquote>
              
              <div className="border-t border-border pt-6">
                <p className="font-heading text-lg font-medium">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
