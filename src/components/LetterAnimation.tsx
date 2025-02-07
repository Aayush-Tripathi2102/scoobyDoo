// "use client";

// import { motion } from "framer-motion";

// export default function LetterAnimation({ children }: { children: string }) {
//   return (
//     <div className="flex flex-wrap ml-24 mt-16 max-w-[70rem] text-2xl leading-relaxed">
//       {children.split("").map((char, index) => (
//         <motion.span
//           key={index}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: index * 0.03, duration: 0.03 }}
//         >
//           {char === " " ? "\u00A0" : char}
//         </motion.span>
//       ))}
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function LetterAnimation({ children }: { children: string }) {
  return (
    <div className="flex flex-wrap ml-24 mt-16 max-w-[70rem] text-2xl leading-relaxed break-words whitespace-pre-wrap">
      {children.split(/(\s+)/).map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.08, duration: 0.05 }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

