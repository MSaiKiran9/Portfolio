import React from 'react'
import "./about.css"
import { motion } from 'framer-motion'
import { useState } from 'react'
import profile from "./images/profile.jpg"
import li from "./images/linkedin.png"
import inst from "./images/instagram.png"
import gmail from "./images/gmail.png"
import gthub from "./images/github.png"
export const About = () => {
    const [divdisp, setDivdisp] = useState(false);
    return (
        <main>
            <motion.div layout className="mainclass">
                <motion.h1 onClick={() => { setDivdisp((prev) => !prev) }} whileHover={{
                    scale: 1.5,
                    transition: { duration: 0.1 },
                }}
                    initial={{ scale: 1 }} transition={{ duration: 1, repeat: Infinity }} animate={{ scale: [1, 1.1, 1] }}>About Me</motion.h1>
                {divdisp && <div className='textout'>
                    <div className='text'>
                        <div className='profile'><img src={profile} /></div>
                        <p>
                            Hello ! I'm Sai Kiran
                            <br />I'm a web developer.
                            <br />Currently,i'm pusing my undergraduation in COMPUTER SCIENCE AND ENGINEERING III Year.
                            <br />As per our curriculum I explored different real-world usecases of programming with c++ , java , c & python . I used bunch of opensource projects like
                            blender , krita.. they always fascinated me . In the go i developed interest in making Apps.
                            <br />And I started enjoying making webapps & i'm currently focussed in front-end and UI .
                            <br />
                            I'm equally interested in learning backend Development with node
                            <br /> In the process i learnt react library ....
                            it added new state management techniques to my workflow. <br></br>I started integrating and learning multiple opensource libraries like ts,framer motion,React three fiber which improved the UI & my approach <br />
                            I'm happy to pick any suggestions and best practices in the go .....<br />
                            Also, I'm an amateur artist .<br />I like visual story telling as a part of it i explored different art forms like : video editing , photography , composition , making 3d models in blender etc... art related pinned @ portfolio/instagram below : )
                            <br />Have a good day!
                        </p>
                    </div>
                    <div className='socials'>
                        <a href='https://www.linkedin.com/in/sai-kiran-m-6b0294235/'> <motion.img whileTap={{ scale: 5, transition: { duration: 100 } }} initial={{ scale: 1 }} src={li} /></a>
                        <a href='https://www.instagram.com/vinylrecords_msk'><motion.img whileTap={{ scale: 100, transition: { duration: 0.4 } }} initial={{ scale: 1 }} src={inst} /></a>
                        <a href='mailto:msaikiran9848250763@gmail.com'> <motion.img whileTap={{ scale: 100, transition: 10 }} initial={{ scale: 1 }} src={gmail} /></a>
                        <a href='https://github.com/MSaiKiran9'> <motion.img whileTap={{ scale: 100, transition: 10 }} initial={{ scale: 1 }} src={gthub} /></a>
                    </div>
                </div>}

            </motion.div>
        </main>
    )
}