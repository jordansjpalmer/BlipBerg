import React from "react";
import { useDispatch } from "react-redux";
import { SET_ARTICLES } from "../actions/actionTypes";
import { fetchHomePageArticles } from "../server/newsAPI";
import NavBar from "../components/Navbar";

const NavBarContainer = () => {
    const dispatch = useDispatch();

    const handleHomeClick = async () => {
        try {
            const articles = await fetchHomePageArticles();
            dispatch({ type: SET_ARTICLES, payload: articles });
        } catch (error) {
            console.error("Error fetching articles:", error)
        }
    };

    return (
        <div className="NavBarContainer">
            <NavBar onHomeClick={handleHomeClick}/>
        </div>
    )
}

export default NavBarContainer;
