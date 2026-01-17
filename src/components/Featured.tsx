import { motion } from "framer-motion";

const Featured = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            精選展示
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            專業服務的品質保證
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a 
            href="https://lh3.googleusercontent.com/pw/AP1GczNcgT3LP9ZJZcX0tljOVmcaZFYU1fGXx1F1q1AoHjy_wpTb2-b3o8aT__ioCcGtMr6HTDOWr8UHqgAYQbA-7joaYYms9W6HU8pLxcpy645qiqIQ6A=w2400?source=screenshot.guru"
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img 
              src="https://lh3.googleusercontent.com/pw/AP1GczNcgT3LP9ZJZcX0tljOVmcaZFYU1fGXx1F1q1AoHjy_wpTb2-b3o8aT__ioCcGtMr6HTDOWr8UHqgAYQbA-7joaYYms9W6HU8pLxcpy645qiqIQ6A=w600-h315-p-k"
              alt="精選展示"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
