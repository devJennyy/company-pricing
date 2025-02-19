import { FiChevronsRight } from "react-icons/fi";
import { motion } from 'framer-motion';

interface ButtonProps {
  type?: 'primary' | 'secondary';
  hasIcon?: boolean;
}

const SharedButton = ({ type = 'primary', hasIcon }: ButtonProps) => {
  const baseStyles =
    'w-full h-12 flex justify-center items-center border border-brand bg-brand !mt-1 cursor-pointer rounded-sm hover:bg-white active:bg-white focus:bg-white text-white hover:text-brand active:text-brand focus:text-brand transition-default';
  const label = {
    primary: 'Get Started',
    secondary: 'Get Started Now',
  };

  return (
    <button className={`flex gap-1 ${baseStyles}`}>
      <p className="text-[15px] font-medium">{label[type]}</p>
      {hasIcon && type === 'secondary' && (
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiChevronsRight size={16} />
        </motion.div>
      )}
      {hasIcon && type === 'primary' && <FiChevronsRight size={16} />}
    </button>
  );
};

export default SharedButton;
