import { motion } from "framer-motion";

const MotionListItem = ({
  children,
  index,
  className,
  baseDelay = 0.2, 
  duration = 1, 
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
  baseDelay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay: index * baseDelay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionListItem;
