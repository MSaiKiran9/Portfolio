import React from 'react'
import { InfinitySpin } from 'react-loader-spinner';
import { motion } from 'framer-motion';
const Animation = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}><InfinitySpin
            width='200'
            color="#4fa94d"
        />
            <motion.div
                animate={{ y: [-2000, 0], opacity: 1 }} transition={{ duration: 1, type: "spring" }} initial={{ y: -2000, opacity: 0 }}
                style={{ fontFamily: 'Bangers, cursive', fontSize: "2rem" }}>pinging Portfolio/SaiKiran ...</motion.div>
        </div>
    )
}
export default Animation;
