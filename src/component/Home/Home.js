import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Header from './Header'
import './Home.css'
import secondImage from './../../assets/1.png'
import IngredientsImg from './../../assets/2.png'
import Data from '../../Data'
import avatar1 from './../../assets/avatar.jpg'

const Home = () => {
    const blogItem = Data.map(item => {
        return (
            <div className='col-md-4'>
                <img src={item.img} alt='blog' />
                <h5>{item.title}</h5>
                <span>{item.time}</span>
                <h6>{item.price}</h6>
                <button>Order Now</button>
            </div>
        )
    })
    return (
        <>
            <Header />
            <section className='numbers'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h2>1287+</h2>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className='col-md-3'>
                            <h2>5786+</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className='col-md-3'>
                            <h2>1440+</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className='col-md-3'>
                            <h2>7110+</h2>
                            <h6>GLOBES</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className='secondsec'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-7">
                            <img src={secondImage} alt='second' />
                        </div>
                        <div className="col-md-5">
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button><a href='#more'>Learn More</a></button>
                        </div>
                    </div>
                </div>
            </section >
            <section className='ingredients'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-6">
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Erat volutpat aliquet imperdiet.</li>
                                <li>purus a odio finibus bibendum.</li>
                            </ul>
                            <button><a href='#more'>Learn More</a></button>
                        </div>
                        <div className="col-md-6">
                            <img src={IngredientsImg} alt='ingredients' />
                        </div>
                    </div>
                </div>
            </section >
            <section className='paralex'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12'>
                            <h2>When a man's stomach is full it makes no
                                <br />difference whether he is rich or poor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                                <br />finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <a href='#more'>Watch Our Story</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='blogs'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12'>
                            <h2>Explore Our foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        </div>

                    </div>
                    <div className='row'>
                        {blogItem}
                    </div>
                </div>
            </section>
            <section className='slider'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12'>
                            <h2>Testmonials</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12'>
                            <Carousel>
                                <Carousel.Item>
                                    <img src={avatar1} alt='avatar' />
                                    <Carousel.Caption>
                                        <h3>I'm really satisfied</h3>
                                        <p>Mason Mount - Front End Developer</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={avatar1} alt='avatar' />
                                    <Carousel.Caption>
                                        <h3>This is my best experience ever</h3>
                                        <p>Sadio Mane - UX Researcher</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home