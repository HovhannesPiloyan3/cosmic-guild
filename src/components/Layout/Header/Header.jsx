import React, {memo, useState} from 'react';
import Logo from "../../../assets/image/logo.webp"
import "./Header.scss"
import {Link} from "react-router-dom";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import BurgerMenu from "../../Ui/BurgerMenu/BurgerMenu";
import NavigationPanel from "../../Ui/NavigationPanel/NavigationPanel";

const Header = memo(() => {
    const [open, setOpen] = useState(false)
    const {width} = useWindowDimensions()

    const navbarResizeProperties = () => {
        if(width <= 1024) {
                return <BurgerMenu burger open={open} setOpen={setOpen}/>
        }
        else {
            return <NavigationPanel open={open} setOpen={setOpen}/>
        }

    }

    console.log(width);
    return (
        <header className="header">
            <Link to="/"><img className="logo" src={Logo} alt="logo"/></Link>
            {navbarResizeProperties()}
        </header>
    );
});


export default Header;