import React from 'react'
import bankManagement from './assets/img/back_management.png'
import movieRecommendation from './assets/img/movie_recommandation.png'
import analysisDataMorocco from './assets/img/Analysis-data-in-morocco.jpg'
import todoListLaravel from './assets/img/todo-list-laravel.png'
import tikTokJs from './assets/img/tik_tok_js.png'
import weatherApReact from './assets/img/weather-app-react.png'
import ELearningWebAppLaravel from './assets/img/e_learning_web_app_laravel.png'
import chessGameReact from './assets/img/chess_game_react.png'

export default function Portfolio() {
  return (
    <>
        
        {/* <!-- Portfolio Start --> */}
        <div class="portfolio" id="portfolio">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Portfolio</p>
                    <h2>My Excellent Portfolio</h2>
                </div>
                <div class="row">
                    <div class="col-12">
                        <ul id="portfolio-filter">
                            <li data-filter="*" class="filter-active">All</li>
                            <li data-filter=".filter-1">Data Analyst</li>
                            <li data-filter=".filter-2">Pyton</li>
                            <li data-filter=".filter-3">Java Script</li>
                            <li data-filter=".filter-4">Laravel</li>
                            <li data-filter=".filter-5">React js</li>
                        </ul>
                    </div>
                </div>
                <div class="row portfolio-container">
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                                <img src={analysisDataMorocco} alt="Covid19 Data in Morocco"/>
                            </div>
                            <div class="portfolio-text">
                                <h3>Analysis of Covid19 Data in Morocco</h3>
                                <a class="btn" href="https://github.com/aminehalal/Analysis-of-Covid-19-data-in-Morocco" target='_blank' rel="noreferrer"  data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                                <img src={bankManagement} alt="Bank Management"/>
                            </div>
                            <div class="portfolio-text">
                                <h3>Bank Management System</h3>
                                <a class="btn" href="https://github.com/aminehalal/Bank-Management-System" target='_blank' rel="noreferrer"  data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                                <img src={movieRecommendation} alt="Movie Recommenadtion"/>
                            </div>
                            <div class="portfolio-text">
                                <h3>Movie Recommandation System</h3>
                                <a class="btn" href="https://github.com/aminehalal/Movie-Recommandation" target='_blank' rel="noreferrer"  data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                                <img src={todoListLaravel} alt="To Do List by Laravel"/>
                            </div>
                            <div class="portfolio-text">
                                <h3>To Do List using Laravel framework</h3>
                                <a class="btn" href="https://todolisthalal.000webhostapp.com/" target='_blank' rel="noreferrer"  data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                                <img src={tikTokJs} alt="Tik Tok JS"/>
                            </div>
                            <div class="portfolio-text">
                                <h3>Tik Tok game with Java Script</h3>
                                <a class="btn" href="https://aminehalal.github.io/Tic-Toc-Game-JS/" target='_blank' rel="noreferrer"  data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                                <img src={ELearningWebAppLaravel} alt="E-Learning Web App Laravel"/>
                            </div>
                            <div class="portfolio-text">
                                <h3>E-Learning Web App using Laravel framework</h3>
                                <a class="btn" href="https://github.com/aminehalal/E-Learning-Web-App" target='_blank' rel="noreferrer"  data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-5 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                                <img src={weatherApReact} alt="Weather App React js"/>
                            </div>
                            <div class="portfolio-text">
                                <h3>Weather App using React js</h3>
                                <a class="btn" href="https://aminehalal.github.io/Weather-App-ReactJS/" target='_blank' rel="noreferrer"  data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-5 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                                <img src={chessGameReact} alt="Chess Game React js"/>
                            </div>
                            <div class="portfolio-text">
                                <h3>Chess Game using React js</h3>
                                <a class="btn" href="https://chess-game-aminehalal.vercel.app/" target='_blank' rel="noreferrer"  data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
