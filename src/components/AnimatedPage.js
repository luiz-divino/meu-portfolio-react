import React from "react";
import { motion } from "framer-motion";

const pageAnimation ={
    initial:{
        opacity:0,
        y:20,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{duration:0.5,
            ease:"easeInOut"
        }
    },
    exit:{
        opacity:0,
        y:-20,
        transition:{duration:0.5,
            ease:"easeInOut"
        }
    }
};

const AnimatePage = ({ children }) => {
    return (
        <motion.div
            variants={pageAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    )
}

export default AnimatePage;