import { motion } from "framer-motion";

const FloatingClouds = () => {
  const clouds = [
    { id: 1, size: 300, top: "5%", left: "-10%", duration: 60, delay: 0, opacity: 0.35 },
    { id: 2, size: 250, top: "15%", left: "20%", duration: 70, delay: 3, opacity: 0.3 },
    { id: 3, size: 280, top: "25%", left: "60%", duration: 55, delay: 6, opacity: 0.32 },
    { id: 4, size: 220, top: "40%", left: "-5%", duration: 75, delay: 9, opacity: 0.25 },
    { id: 5, size: 260, top: "60%", left: "30%", duration: 65, delay: 12, opacity: 0.3 },
    { id: 6, size: 240, top: "75%", left: "70%", duration: 72, delay: 4, opacity: 0.32 },
    { id: 7, size: 200, top: "10%", left: "80%", duration: 58, delay: 15, opacity: 0.25 },
    { id: 8, size: 230, top: "50%", left: "50%", duration: 68, delay: 8, opacity: 0.28 },
    { id: 9, size: 270, top: "35%", left: "10%", duration: 62, delay: 2, opacity: 0.3 },
    { id: 10, size: 210, top: "70%", left: "45%", duration: 78, delay: 11, opacity: 0.26 },
    { id: 11, size: 290, top: "20%", left: "40%", duration: 66, delay: 7, opacity: 0.33 },
    { id: 12, size: 195, top: "85%", left: "15%", duration: 80, delay: 14, opacity: 0.24 },
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
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <motion.div
          key={`wisp-${i}`}
          className="absolute w-96 h-48"
          style={{
            left: `${i * 18 - 10}%`,
            top: `${15 + i * 12}%`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -40, 0, 30, 0],
            opacity: [0, 0.18, 0.22, 0.18, 0],
            x: [0, 80, 160, 240, 320],
          }}
          transition={{
            duration: 45 + i * 8,
            delay: 2 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div 
            className="w-full h-full bg-white rounded-full"
            style={{ filter: "blur(30px)" }}
          />
        </motion.div>
      ))}

      {/* Large slow-moving background clouds */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={`bg-cloud-${i}`}
          className="absolute"
          style={{
            width: 400 + i * 50,
            height: 200 + i * 25,
            top: `${10 + i * 25}%`,
            left: "-20%",
          }}
          initial={{ x: 0, opacity: 0 }}
          animate={{
            x: ["0%", "140vw"],
            opacity: [0, 0.2, 0.25, 0.2, 0],
          }}
          transition={{
            duration: 90 + i * 15,
            delay: i * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div 
            className="w-full h-full bg-gradient-to-r from-white/60 via-white to-white/60 rounded-full"
            style={{ filter: "blur(40px)" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingClouds;
