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
    { id: 1, size: 420, top: "5%", left: "-10%", duration: 80, delay: 0, opacity: 0.55, speed: "fast", horizontal: "left", drift: 25, rotate: 3 },
    { id: 2, size: 350, top: "15%", left: "20%", duration: 95, delay: 3, opacity: 0.5, speed: "medium", horizontal: "right", drift: 35, rotate: -2 },
    { id: 3, size: 390, top: "25%", left: "60%", duration: 75, delay: 6, opacity: 0.52, speed: "slow", horizontal: "left", drift: 20, rotate: 4 },
    { id: 4, size: 310, top: "40%", left: "-5%", duration: 100, delay: 9, opacity: 0.45, speed: "fast", horizontal: "right", drift: 40, rotate: -3 },
    { id: 5, size: 360, top: "60%", left: "30%", duration: 88, delay: 12, opacity: 0.5, speed: "medium", horizontal: "left", drift: 30, rotate: 2 },
    { id: 6, size: 340, top: "75%", left: "70%", duration: 92, delay: 4, opacity: 0.52, speed: "slow", horizontal: "right", drift: 28, rotate: -4 },
    { id: 7, size: 280, top: "10%", left: "80%", duration: 78, delay: 15, opacity: 0.45, speed: "fast", horizontal: "left", drift: 22, rotate: 3 },
    { id: 8, size: 320, top: "50%", left: "50%", duration: 85, delay: 8, opacity: 0.48, speed: "medium", horizontal: "right", drift: 32, rotate: -2 },
    { id: 9, size: 380, top: "35%", left: "10%", duration: 82, delay: 2, opacity: 0.5, speed: "slow", horizontal: "left", drift: 26, rotate: 5 },
    { id: 10, size: 290, top: "70%", left: "45%", duration: 98, delay: 11, opacity: 0.46, speed: "fast", horizontal: "right", drift: 38, rotate: -3 },
    { id: 11, size: 400, top: "20%", left: "40%", duration: 86, delay: 7, opacity: 0.53, speed: "medium", horizontal: "left", drift: 24, rotate: 2 },
    { id: 12, size: 270, top: "85%", left: "15%", duration: 105, delay: 14, opacity: 0.44, speed: "slow", horizontal: "right", drift: 34, rotate: -4 },
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
          initial={{ x: "-100%", opacity: 0, scale: 0.9 }}
          animate={{ 
            x: ["0%", "120vw"],
            opacity: [0, cloud.opacity, cloud.opacity, cloud.opacity * 0.8, 0],
            scale: [0.9, 1, 1.05, 1.02, 0.95],
            rotate: [0, cloud.rotate, -cloud.rotate * 0.5, cloud.rotate * 0.3, 0],
          }}
          transition={{
            duration: cloud.duration,
            delay: cloud.delay + 2,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
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
          {/* Inner wind drift animation */}
          <motion.div
            animate={{
              y: [-cloud.drift * 0.5, cloud.drift, -cloud.drift * 0.3, cloud.drift * 0.7, -cloud.drift * 0.5],
              x: [0, cloud.drift * 0.4, -cloud.drift * 0.2, cloud.drift * 0.3, 0],
              scaleX: [1, 1.02, 0.98, 1.01, 1],
            }}
            transition={{
              duration: 12 + cloud.id * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full"
          >
            <svg
              viewBox="0 0 200 120"
              className="w-full h-full drop-shadow-[0_8px_40px_rgba(120,120,120,0.35)] dark:drop-shadow-none transition-[filter] duration-500"
              style={{ filter: "blur(8px)" }}
            >
              <defs>
                <radialGradient id={`cloud-grad-${cloud.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" className="[stop-color:rgb(160,160,160)] dark:[stop-color:white]" stopOpacity="0.9" />
                  <stop offset="50%" className="[stop-color:rgb(185,185,185)] dark:[stop-color:white]" stopOpacity="0.7" />
                  <stop offset="100%" className="[stop-color:rgb(210,210,210)] dark:[stop-color:white]" stopOpacity="0" />
                </radialGradient>
              </defs>
              <ellipse cx="100" cy="70" rx="80" ry="40" fill={`url(#cloud-grad-${cloud.id})`} />
              <ellipse cx="60" cy="60" rx="50" ry="30" fill={`url(#cloud-grad-${cloud.id})`} />
              <ellipse cx="140" cy="65" rx="45" ry="28" fill={`url(#cloud-grad-${cloud.id})`} />
              <ellipse cx="100" cy="50" rx="40" ry="25" fill={`url(#cloud-grad-${cloud.id})`} />
            </svg>
          </motion.div>
        </motion.div>
      ))}

      {/* Additional wispy clouds that float vertically - with parallax and wind */}
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
            opacity: [0, 0.35, 0.42, 0.38, 0.35, 0],
            scale: [0.95, 1, 1.03, 1.01, 0.98, 0.95],
            rotate: [0, 1, -0.5, 0.8, -0.3, 0],
          }}
          transition={{
            duration: 55 + i * 10,
            delay: 2 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
        >
          {/* Wind drift layer */}
          <motion.div
            animate={{
              y: [-15, 20, -10, 18, -15],
              x: [0, 25, -15, 20, 0],
              scaleX: [1, 1.04, 0.97, 1.02, 1],
            }}
            transition={{
              duration: 18 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full"
          >
            <div 
              className="w-full h-full rounded-full bg-gray-400/80 dark:bg-white drop-shadow-[0_8px_50px_rgba(100,100,100,0.3)] dark:drop-shadow-none transition-[filter] duration-500"
              style={{ filter: "blur(40px)" }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Large slow-moving background clouds - slowest parallax with gentle sway */}
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
            opacity: [0, 0.38, 0.45, 0.42, 0.38, 0],
            scale: [0.98, 1, 1.02, 1.01, 0.99, 0.98],
          }}
          transition={{
            duration: 110 + i * 20,
            delay: i * 10,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
        >
          {/* Gentle wind sway */}
          <motion.div
            animate={{
              y: [-10, 15, -8, 12, -10],
              x: [0, 30, -20, 25, 0],
              rotate: [0, 0.5, -0.3, 0.4, 0],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full"
          >
            <div 
              className="w-full h-full rounded-full bg-gradient-to-r from-gray-400/60 via-gray-300 to-gray-400/60 dark:from-white/60 dark:via-white dark:to-white/60 drop-shadow-[0_12px_60px_rgba(100,100,100,0.25)] dark:drop-shadow-none transition-[filter] duration-500"
              style={{ filter: "blur(50px)" }}
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FloatingClouds;
