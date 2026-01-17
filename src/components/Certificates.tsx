import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";

// Placeholder certificates - replace with actual certificate images
const certificates = [
  { id: 1, title: "營業執照", image: "/placeholder.svg" },
  { id: 2, title: "專業認證", image: "/placeholder.svg" },
  { id: 3, title: "服務許可證", image: "/placeholder.svg" },
  { id: 4, title: "品質保證", image: "/placeholder.svg" },
  { id: 5, title: "合法經營", image: "/placeholder.svg" },
];

const Certificates = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="section-title">CERTIFICATES</p>
          <h2 className="section-heading">專 業 認 證</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            我們擁有完整的合法經營執照與專業認證，讓您安心託付
          </p>
        </div>

        <div className="px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {certificates.map((cert) => (
                <CarouselItem key={cert.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-secondary/50 backdrop-blur-sm p-6 lg:p-8 border border-border/50 hover:border-warm-gold/30 transition-all duration-300 rounded-xl group">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-muted/50">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-center text-warm-gold font-heading text-lg font-medium">
                      {cert.title}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-warm-gold/50 text-warm-gold hover:bg-warm-gold hover:text-background" />
            <CarouselNext className="border-warm-gold/50 text-warm-gold hover:bg-warm-gold hover:text-background" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
