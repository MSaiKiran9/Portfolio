import React, { useState } from 'react'
import "./project.css"
import night from "./images/night.gif"
import { motion } from 'framer-motion'
import apistuff from "./images/apistuff.jpeg"
const pro = [
    {
        id: 1, name: "sudoku-solver", description: "i made this project using a free api from rapid api it takes (9*9)inputs from users and posts it to the api endpoint,the api responds with the result ", src: "https://msaikiran9.github.io/Sudoku_Solver9x9/", imgsrc: apistuff, gitrep: "https://github.com/MSaiKiran9/Sudoku_Solver9x9"
    }
]
export const Projects = () => {
    const [disp, setDisp] = useState(false);
    return (
        <motion.div layout className='container'>
            <div className='catcontainer'><img src={night} /></div>
            <motion.button onClick={() => { setDisp(!disp) }}>Projects</motion.button>
            {disp &&

                <>
                    <Proj /></>

            }
        </motion.div>
    )
}
function Proj() {
    function handle(data) {
        return <div className='projects' key={data.id
        }>
            <h1>{data.name}</h1>
            <img src={data.imgsrc} />
            <a href={data.src}>click to view live </a>
            <a href={data.gitrep}>source code</a>
            <p>{data.description}</p>
        </div>
    }
    return (
        <>
            {pro.map((data) => handle(data))}</>
    )
}