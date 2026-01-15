import { motion } from "framer-motion";

const FloatingClouds = () => {
  const clouds = [
    { id: 1, size: 200, top: "5%", left: "-10%", duration: 80, delay: 0, opacity: 0.15 },
    { id: 2, size: 150, top: "15%", left: "20%", duration: 90, delay: 5, opacity: 0.1 },
    { id: 3, size: 180, top: "25%", left: "60%", duration: 70, delay: 10, opacity: 0.12 },
    { id: 4, size: 120, top: "40%", left: "-5%", duration: 100, delay: 15, opacity: 0.08 },
    { id: 5, size: 160, top: "60%", left: "30%", duration: 85, delay: 20, opacity: 0.1 },
    { id: 6, size: 140, top: "75%", left: "70%", duration: 95, delay: 8, opacity: 0.12 },
    { id: 7, size: 100, top: "10%", left: "80%", duration: 75, delay: 25, opacity: 0.08 },
    { id: 8, size: 130, top: "50%", left: "50%", duration: 88, delay: 12, opacity: 0.1 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
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
            delay: cloud.delay + 2, // Start after reveal animation
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: cloud.top,
            left: cloud.left,
            width: cloud.size,
            height: cloud.size * 0.6,
          }}
        >
          <svg
            viewBox="0 0 200 120"
            className="w-full h-full"
            style={{ filter: "blur(8px)" }}
          >
            <defs>
              <radialGradient id={`cloud-grad-${cloud.id}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="100" cy="70" rx="80" ry="40" fill={`url(#cloud-grad-${cloud.id})`} />
            <ellipse cx="60" cy="60" rx="50" ry="30" fill={`url(#cloud-grad-${cloud.id})`} />
            <ellipse cx="140" cy="65" rx="45" ry="28" fill={`url(#cloud-grad-${cloud.id})`} />
            <ellipse cx="100" cy="50" rx="40" ry="25" fill={`url(#cloud-grad-${cloud.id})`} />
          </svg>
        </motion.div>
      ))}

      {/* Additional wispy clouds that float vertically */}
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={`wisp-${i}`}
          className="absolute w-64 h-32"
          style={{
            left: `${i * 25 - 10}%`,
            top: `${20 + i * 15}%`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -30, 0, 20, 0],
            opacity: [0, 0.06, 0.08, 0.06, 0],
            x: [0, 50, 100, 150, 200],
          }}
          transition={{
            duration: 60 + i * 10,
            delay: 3 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div 
            className="w-full h-full bg-white rounded-full"
            style={{ filter: "blur(20px)" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingClouds;
