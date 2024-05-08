import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const standardBackgroundColor = "#445389";
  const activeBackgroundColor = "#CED6F3";
  const activeFilters = "invert(95%) sepia(99%) saturate(6217%) hue-rotate(178deg) brightness(101%) contrast(90%)"
  const standardFilters = "invert(32%) sepia(9%) saturate(3204%) hue-rotate(190deg) brightness(92%) contrast(87%)"
  const routes = [
    {img: "./Home.png", path: "/"},
    {img: "./Drug.png", path: "/medications"},
    {img: "./Add.png", path: "/add"},
    {img: "./Measurements.png", path: "/doc"},
    {img: "./Hearth.png", path: "/measurements"},
    {img: "./settings.png", path: "/settings"}
  ]
  return (
    <div style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "80px",
      backgroundColor: "black",
      display: "flex"
    }}>
      {routes.map((route, index) => {
        console.log(route.path, location.pathname)
        const isActive = (location.pathname.includes(route.path) && route.path !== "/") || location.pathname === route.path
        return (
        <div key={index} style={{
          width: "16.666666666666667%",
          height: "100%",
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isActive ? activeBackgroundColor : standardBackgroundColor
        }} onClick={() => navigate(route.path)}>
          <img src={route.img} alt={route.path.replace('/','')}
               style={{
                 filter: `brightness(0) saturate(100%) ${!isActive ? activeFilters : standardFilters}`,

          }}
          />
        </div>
      )})}
    </div>
  )
}

export default Navbar;