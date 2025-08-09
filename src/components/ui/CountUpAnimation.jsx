import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CountUpAnimation = ({ from = 0, to = 100, duration = 2 }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
      });

      const unsubscribe = rounded.on("change", (latest) => {
        setDisplay(latest);
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, count, to, duration, rounded]);

  return (
    <motion.span ref={ref}>
      {display}%
    </motion.span>
  );
};

export default CountUpAnimation;
