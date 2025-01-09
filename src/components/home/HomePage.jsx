import { courseHome } from "../../dummyData"
import { Course } from "../Course/Course"
import Footer from "../Footer/Footer"
import { HomeSectionPage } from "./HomeSectionPage"
import { useState } from "react"


export const HomePage= () => {
   const[items, setitems] = useState(courseHome)
    return ( 
        <><HomeSectionPage />
        <Course items={items} title="Cursos Disponiveis" />
        <Course items={items} title="Teologia Basica" />
        <Footer/>
        </>
    )
}  