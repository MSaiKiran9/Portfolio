import { json, Link } from "react-router-dom";
import { useEffect, useState } from "react"
import "./first.css"
import { motion, AnimatePresence } from "framer-motion";
// import { flatMap, isNull } from "lodash";
const Nav = () => {

    const [disp, setDisp] = useState(false)
    const [navs, setNavs] = useState(localStorage.getItem("navs") == null ? [true, false, false] : JSON.parse(localStorage.getItem("navs")))
    const [source, setSource] = useState(localStorage.getItem("source") == null ? 1 : JSON.parse(localStorage.getItem("source")))
    const Display = (e) => {
        setDisp(disp => !disp)
    }
    if (localStorage.getItem("navs") == "null") {
        localStorage.setItem("navs", JSON.stringify([true, false, false]))
        // console.log(localStorage.getItem("navs"))
    }
    if (localStorage.getItem("source") == "null") {
        localStorage.setItem("source", JSON.stringify(1))
    }
    useEffect(() => {
        const data1 = localStorage.getItem("navs")
        const data2 = localStorage.getItem("source")
        if (data1 !== null) {
            setNavs(JSON.parse(data1))
            // console.log(data1, "second")
        }
        if (data2 !== null) {
            setSource(JSON.parse(data2))
            // console.log(data2, "second")
        }
        const fire = () => {
            if (window.innerWidth > 565) {
                setDisp(true)
            }
            else {
                setDisp(false)
            }
            // console.log(window.innerWidth)
        }
        if (window.innerWidth > 565) {
            setDisp(true);
        }
        window.addEventListener("resize", fire)
        return () => {
            window.removeEventListener("resize", fire)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("navs", JSON.stringify(navs))
        localStorage.setItem("source", JSON.stringify(source))
        // console.log(navs)
    }, [navs, source])
    function callthis(x, e) {
        if (x === 1) {
            setNavs([true, false, false])
            setSource(1)
            if (window.innerWidth <= 565) {
                setDisp(disp => !disp)
            }

        }
        else if (x === 2) {
            setNavs([false, true, false])
            setSource(2)
            if (window.innerWidth <= 565) {
                setDisp(disp => !disp)
            }
        }
        else {
            setNavs([false, false, true])
            setSource(3)
            if (window.innerWidth <= 565) {
                setDisp(disp => !disp)
            }
        }
    }
    return (

        <nav id="heading" >

            <motion.h1 animate={{ y: 0, opacity: 1 }} initial={{ y: -1000, opacity: 0 }} transition={{ duration: 1, type: "spring", stiffness: 50 }} >


                <motion.img


                    animate={{ y: source !== 3 ? [9, 0, 9] : [0, 0, 0], rotate: source === 3 ? [0, 180, 360] : [0, 0, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}

                    style={{ width: "50px", marginRight: "10px" }}
                    initial={{ scale: 1, x: 0, y: 0, rotate: 0 }}

                    src={source === 1 ? "home.png" : (source === 2) ? "id-card.png" : "sun_big.png"} /><motion.span onClick={Display} animate={{ rotate: disp ? 90 : 0 }} >
                    <motion.img whileTap={{ scale: 1.2 }} initial={{ scale: 1 }} src="menu.png" alt="menu" className="m-1" style={{ width: "30px" }} />
                </motion.span></motion.h1>
            <AnimatePresence>
                {
                    disp && <motion.div id="rel"
                        animate={{
                            x: 0
                        }}
                        initial={{ x: -400 }
                        }
                        key="sidebar" exit={{ x: 500, opacity: 0 }}
                    ><ul>
                            <motion.li initial={{ scale: 1 }}
                                whileHover={{ scale: 1.8 }}
                                whileTap={{ scale: 1.3 }}><Link to="/" onClick={(e) => callthis(1, e)} style={{ color: navs[0] ? "red" : "black" }} >Home</Link></motion.li>
                            <motion.li initial={{ scale: 1 }}
                                whileHover={{ scale: 1.8 }}
                                whileTap={{ scale: 1.3 }}><Link onClick={(e) => callthis(2, e)} style={{ color: navs[1] ? "red" : "black" }} to="/About">About</Link></motion.li>
                            <motion.li initial={{ scale: 1 }}
                                whileHover={{ scale: 1.8 }}
                                whileTap={{ scale: 1.3 }} ><Link onClick={(e) => callthis(3, e)} style={{ color: navs[2] ? "red" : "black" }} to="/Contact">Projects</Link></motion.li>
                        </ul></motion.div>
                }</AnimatePresence>

        </nav >
    )
}

export default Nav;