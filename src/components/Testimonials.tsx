const testimonials = [
  {
    quote: "壕芯實業超有效率，沒幾天就媒合到賣家，讚！",
    author: "客戶A",
    location: "",
  },
  {
    quote: "精準，快狠準。感謝壕芯的用心服務！滿意！",
    author: "客戶B",
    location: "",
  },
  {
    quote: "沒有話術沒有套路，真誠！效率高！服務好！必須推！",
    author: "客戶C",
    location: "",
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
