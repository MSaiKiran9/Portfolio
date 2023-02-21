import "./home.css"
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useAnimation, motion, animate } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Html, Text3D, Float, Center, OrbitControls } from "@react-three/drei"
import { Model } from "./Scene.jsx"
import { debounce } from "lodash"
import { useInView } from "react-intersection-observer"

const Spinningmesh = () => {
    const useref = useRef(null)
    const user = useRef(null)
    const [dimension, setDimensions] = useState({ height: window.innerHeight, width: window.innerWidth })
    useEffect(() => {
        const debouncehand = debounce(function handResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }, 300)

        window.addEventListener("resize", debouncehand);
        return () => {
            window.removeEventListener("resize", debouncehand)
        }
    }, [])

    let x = 0;
    useFrame(() => {
        useref.current.position.x = -10 + (Math.sin(x += 0.01)) * 10

    })
    return (
        <Suspense fallback={null}>
            <mesh ref={useref} position={[-10, 1, 10]}>
                <Model scale={[0.01, 0.01, 0.01]} />
            </mesh>
            <Suspense fallback={null}>
                <Center>
                    <Float
                        speed={3}
                        rotationIntensity={1}
                        floatIntensity={1}
                        floatingRange={[1, 3]}
                    >
                        <Text3D castShadow receiveShadow
                            ref={user}

                            size={(dimension.width * 9) / 1600}
                            height={0.3}
                            font={"/bangers_regular.json"}
                            curveSegments={12}
                            bevelEnabled
                            bevelSize={0.05}
                            bevelOffset={0}
                            bevelSegments={5}
                        >
                            Hello
                            <meshStandardMaterial attach={"material"} color="lightblue" roughness={0.5} metalness={1} />

                        </Text3D>
                    </Float>
                </Center>
            </Suspense>

        </Suspense>
    )
}
const Home = () => {

    const { ref, inView } = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1, x: 0,
                transition: {
                    duration: 1
                }
            })
        }
        else {
            animation.start({ opacity: 0, x: -200 })
        }
    }, [inView])

    const [stt, setStt] = useState(false)
    return (
        <>
            <div className="one">
                <Canvas camera={{ position: [-5, 2, 20], fov: 70 }}>

                    <ambientLight intensity={0.5} />
                    <Spinningmesh />


                    <Html style={{ width: "100%" }}>
                        <div id="txtout"><motion.h1
                            animate={{ scale: [1.1, 1, 1.1] }}

                            transition={{ repeat: Infinity, duration: 1 }} initial={{ scale: 1 }}
                            id="txt"> I'm Sai Kiran</motion.h1>
                        </div>
                    </Html>
                    <directionalLight intensity={0.6} position={[-10, 2, 3]} />
                    <directionalLight intensity={0.4} position={[-7, 2, 20]} />
                </Canvas>
            </div>
            <div ref={ref} className="secondpage">
                <motion.div animate={animation}
                    className="flex-cont-col">
                    <div className="first">
                        <motion.img animate={{ y: [5, 0, 5] }} transition={{ repeat: Infinity, duration: 1 }} initial={{ y: 0 }} src="homepage_assets/man-working-on-laptop.svg" />
                    </div>
                    <div className="second">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JS</span>
                        <span>REACT</span>
                    </div>
                    <div className="third"><h1>I'm a Front End Developer/.</h1></div>
                </motion.div>
            </div>
            <motion.footer animate={{ scale: [1.01, 1, 1.01] }} initial={{ scale: 1 }} transition={{ duration: 1, repeat: Infinity }}>
                <motion.div className="f-1" layout style={{ borderRadius: "8px", minWidth: "80%", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", rowGap: "10px" }} onClick={() => setStt(prev => !prev)}><motion.button style={{ fontSize: "1.5rem", border: "none" }} whileTap={{ scale: 1.9 }} initial={{ scale: 1 }}>Credits</motion.button>{stt && <><a href="https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042">Phoenix model</a><a href="https://www.flaticon.com/free-icons/sun">Icon1/sun</a><a href="https://www.flaticon.com/search/2?word=about">Icon2</a><a href="https://www.flaticon.com/search?word=home">Icon3/home</a><a href="#">Image</a></>}</motion.div>
            </motion.footer>
        </>
    )
}

export default Home