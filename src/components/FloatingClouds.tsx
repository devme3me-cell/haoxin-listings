import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FloatingClouds = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Fade out clouds as user scrolls past hero (roughly 100vh)
  const containerOpacity = useTransform(scrollY, [0, 600, 1200], [1, 0.7, 0]);

  // Different parallax speeds for different cloud layers
  const parallaxSlow = useTransform(scrollY, [0, 1000], [0, -50]);
  const parallaxMedium = useTransform(scrollY, [0, 1000], [0, -120]);
  const parallaxFast = useTransform(scrollY, [0, 1000], [0, -200]);
  const parallaxHorizontalLeft = useTransform(scrollY, [0, 1000], [0, -80]);
  const parallaxHorizontalRight = useTransform(scrollY, [0, 1000], [0, 80]);

  const clouds = [
    { id: 1, size: 420, top: "5%", left: "-10%", duration: 60, delay: 0, opacity: 0.55, speed: "fast", horizontal: "left" },
    { id: 2, size: 350, top: "15%", left: "20%", duration: 70, delay: 3, opacity: 0.5, speed: "medium", horizontal: "right" },
    { id: 3, size: 390, top: "25%", left: "60%", duration: 55, delay: 6, opacity: 0.52, speed: "slow", horizontal: "left" },
    { id: 4, size: 310, top: "40%", left: "-5%", duration: 75, delay: 9, opacity: 0.45, speed: "fast", horizontal: "right" },
    { id: 5, size: 360, top: "60%", left: "30%", duration: 65, delay: 12, opacity: 0.5, speed: "medium", horizontal: "left" },
    { id: 6, size: 340, top: "75%", left: "70%", duration: 72, delay: 4, opacity: 0.52, speed: "slow", horizontal: "right" },
    { id: 7, size: 280, top: "10%", left: "80%", duration: 58, delay: 15, opacity: 0.45, speed: "fast", horizontal: "left" },
    { id: 8, size: 320, top: "50%", left: "50%", duration: 68, delay: 8, opacity: 0.48, speed: "medium", horizontal: "right" },
    { id: 9, size: 380, top: "35%", left: "10%", duration: 62, delay: 2, opacity: 0.5, speed: "slow", horizontal: "left" },
    { id: 10, size: 290, top: "70%", left: "45%", duration: 78, delay: 11, opacity: 0.46, speed: "fast", horizontal: "right" },
    { id: 11, size: 400, top: "20%", left: "40%", duration: 66, delay: 7, opacity: 0.53, speed: "medium", horizontal: "left" },
    { id: 12, size: 270, top: "85%", left: "15%", duration: 80, delay: 14, opacity: 0.44, speed: "slow", horizontal: "right" },
  ];

  const getParallaxY = (speed: string) => {
    switch (speed) {
      case "fast": return parallaxFast;
      case "medium": return parallaxMedium;
      default: return parallaxSlow;
    }
  };

  const getParallaxX = (direction: string) => {
    return direction === "left" ? parallaxHorizontalLeft : parallaxHorizontalRight;
  };

  return (
    <motion.div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none overflow-hidden z-[5]"
      style={{ opacity: containerOpacity }}
    >
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ 
            x: ["0%", "120vw"],
            opacity: [0, cloud.opacity, cloud.opacity, 0]
          }}
          transition={{
            duration: cloud.duration,
            delay: cloud.delay + 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: cloud.top,
            left: cloud.left,
            width: cloud.size,
            height: cloud.size * 0.6,
            y: getParallaxY(cloud.speed),
            x: getParallaxX(cloud.horizontal),
          }}
        >
          <svg
            viewBox="0 0 200 120"
            className="w-full h-full drop-shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:drop-shadow-none"
            style={{ filter: "blur(6px)" }}
          >
            <defs>
              <radialGradient id={`cloud-grad-${cloud.id}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" className="[stop-color:rgb(180,180,180)] dark:[stop-color:white]" stopOpacity="0.95" />
                <stop offset="60%" className="[stop-color:rgb(200,200,200)] dark:[stop-color:white]" stopOpacity="0.6" />
                <stop offset="100%" className="[stop-color:rgb(220,220,220)] dark:[stop-color:white]" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="100" cy="70" rx="80" ry="40" fill={`url(#cloud-grad-${cloud.id})`} />
            <ellipse cx="60" cy="60" rx="50" ry="30" fill={`url(#cloud-grad-${cloud.id})`} />
            <ellipse cx="140" cy="65" rx="45" ry="28" fill={`url(#cloud-grad-${cloud.id})`} />
            <ellipse cx="100" cy="50" rx="40" ry="25" fill={`url(#cloud-grad-${cloud.id})`} />
          </svg>
        </motion.div>
      ))}

      {/* Additional wispy clouds that float vertically - with parallax */}
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <motion.div
          key={`wisp-${i}`}
          className="absolute"
          style={{
            width: 480 + i * 20,
            height: 240 + i * 10,
            left: `${i * 18 - 10}%`,
            top: `${15 + i * 12}%`,
            y: i % 3 === 0 ? parallaxFast : i % 2 === 0 ? parallaxMedium : parallaxSlow,
            x: i % 2 === 0 ? parallaxHorizontalLeft : parallaxHorizontalRight,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.35, 0.42, 0.35, 0],
          }}
          transition={{
            duration: 45 + i * 8,
            delay: 2 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div 
            className="w-full h-full rounded-full bg-gray-300 dark:bg-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.12)] dark:drop-shadow-none"
            style={{ filter: "blur(35px)" }}
          />
        </motion.div>
      ))}

      {/* Large slow-moving background clouds - slowest parallax */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={`bg-cloud-${i}`}
          className="absolute"
          style={{
            width: 550 + i * 70,
            height: 280 + i * 35,
            top: `${10 + i * 25}%`,
            left: "-20%",
            y: parallaxSlow,
            x: i % 2 === 0 ? parallaxHorizontalRight : parallaxHorizontalLeft,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.38, 0.45, 0.38, 0],
          }}
          transition={{
            duration: 90 + i * 15,
            delay: i * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div 
            className="w-full h-full rounded-full bg-gradient-to-r from-gray-300/70 via-gray-200 to-gray-300/70 dark:from-white/60 dark:via-white dark:to-white/60 drop-shadow-[0_6px_30px_rgba(0,0,0,0.1)] dark:drop-shadow-none"
            style={{ filter: "blur(45px)" }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FloatingClouds;
