import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import bankManagement from './assets/img/back_management.png';
import movieRecommendation from './assets/img/movie_recommandation.png';
import analysisDataMorocco from './assets/img/Analysis-data-in-morocco.jpg';
import todoListLaravel from './assets/img/todo-list-laravel.png';
import tikTokJs from './assets/img/tik_tok_js.png';
import weatherApReact from './assets/img/weather-app-react.png';
import ELearningWebAppLaravel from './assets/img/e_learning_web_app_laravel.png';
import chessGameReact from './assets/img/chess_game_react.png';

export default function Portfolio() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const portfolioItems = [
        { img: analysisDataMorocco, category: "filter-1", title: "Analysis of Covid19 Data in Morocco", link: "https://github.com/aminehalal/Analysis-of-Covid-19-data-in-Morocco" },
        { img: bankManagement, category: "filter-2", title: "Bank Management System", link: "https://github.com/aminehalal/Bank-Management-System" },
        { img: movieRecommendation, category: "filter-2", title: "Movie Recommendation System", link: "https://github.com/aminehalal/Movie-Recommandation" },
        { img: todoListLaravel, category: "filter-4", title: "To Do List using Laravel framework", link: "https://todolisthalal.000webhostapp.com/" },
        { img: tikTokJs, category: "filter-3", title: "Tik Tok game with Java Script", link: "https://aminehalal.github.io/Tic-Toc-Game-JS/" },
        { img: ELearningWebAppLaravel, category: "filter-4", title: "E-Learning Web App using Laravel framework", link: "https://github.com/aminehalal/E-Learning-Web-App" },
        { img: weatherApReact, category: "filter-5", title: "Weather App using React js", link: "https://aminehalal.github.io/Weather-App-ReactJS/" },
        { img: chessGameReact, category: "filter-5", title: "Chess Game using React js", link: "https://chess-game-aminehalal.vercel.app/" }
    ];

    const [filter, setFilter] = useState("*");
    const [filteredItems, setFilteredItems] = useState(portfolioItems);

    useEffect(() => {
        if (filter === "*") {
            setFilteredItems(portfolioItems);
        } else {
            setFilteredItems(portfolioItems.filter(item => {
                const itemCategories = item.category.split(" ");
                const filterCategories = filter.split(" ");
                return filterCategories.some(category => itemCategories.includes(category));
            }));
        }
    }, [filter]);

    const handleFilterClick = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <>
            <div className="portfolio" id="portfolio" data-aos="zoom-in">
                <div className="container">
                    <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <p>My Portfolio</p>
                        <h2>My Excellent Portfolio</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul id="portfolio-filter">
                                <li onClick={() => handleFilterClick("*")} className={filter === "*" ? "filter-active" : ""}>All</li>
                                <li onClick={() => handleFilterClick("filter-1")} className={filter === "filter-1" ? "filter-active" : ""}>Data Analyst</li>
                                <li onClick={() => handleFilterClick("filter-2")} className={filter === "filter-2" ? "filter-active" : ""}>Python</li>
                                <li onClick={() => handleFilterClick("filter-3")} className={filter === "filter-3" ? "filter-active" : ""}>Java Script</li>
                                <li onClick={() => handleFilterClick("filter-4")} className={filter === "filter-4" ? "filter-active" : ""}>Laravel</li>
                                <li onClick={() => handleFilterClick("filter-5")} className={filter === "filter-5" ? "filter-active" : ""}>React js</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container">
                        {filteredItems.map((item, index) => (
                            <div key={index} className={`col-lg-4 col-md-6 col-sm-12 portfolio-item ${item.category} wow fadeInUp`} data-wow-delay={`${0.2 * index}s`}>
                                <div className="portfolio-wrap">
                                    <div className="portfolio-img">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className="portfolio-text">
                                        <h3>{item.title}</h3>
                                        <a className="btn" href={item.link} target='_blank' rel="noreferrer" data-lightbox="portfolio">+</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
