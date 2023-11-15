import { NavLink, Outlet } from "react-router-dom";
import "../Styles/Root.css";

function Root()
{
    return(
        <div style={{display:"flex",flexFlow:"column", height:"100vh"}}>
            <header className="header">

                <div>
                    <h1>Abhishek Ainapur</h1>
                </div>
                
                <div>
                    <NavLink to="home">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="skills">Skills</NavLink>
                    <NavLink to="projects">Projects</NavLink>
                    <NavLink to="contacts">Contact</NavLink>
                </div>

            </header>

            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}

export default Root;