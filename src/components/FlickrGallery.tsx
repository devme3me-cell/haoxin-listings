import { useEffect } from "react";
import { motion } from "framer-motion";

const FlickrGallery = () => {
  useEffect(() => {
    // Load Flickr embed script
    const script = document.createElement("script");
    script.src = "//embedr.flickr.com/assets/client-code.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="//embedr.flickr.com/assets/client-code.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="flickr-gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            相簿
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mt-2 text-foreground">
            精選相簿
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            data-flickr-embed="true"
            href="https://www.flickr.com/photos/204069435@N05/albums/72177720331486610"
            title="a"
          >
            <img
              src="https://live.staticflickr.com/65535/55045856660_b30f80106b.jpg"
              width="640"
              height="480"
              alt="精選相簿"
              className="rounded-lg shadow-lg"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FlickrGallery;
