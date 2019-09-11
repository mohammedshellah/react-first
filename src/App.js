import React from 'react';

import './App.css';
import huddle from './/hudd.png';
import illustration from './/illustration-mockups.png';
import img from './/images.jpg';
import t from './/twitt.png';
import ins from './/inst.png';
import face from './/face.jpg';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div className="navcont flex">
            <img  className="logo-1" 
                  src={huddle}/>
               <a href="#" 
                  className="btn-1" 
                  type="button">
                 try it free
               </a> 
          </div>
        </div>
      </nav>
      <section className="imgname">
        <div className="container">
          <img className="pic2" src={illustration}>
          </img>
        </div>
      </section>
      <header className="pargraph" >
        <div className="container">
          <h1 className="head-1">
            Build The Community Your Fans Will Love
          </h1>
          <p className="par-1">Huddle re-imagines the way we build communities.
          You have a voice, but so does your audience.
          Create connections with your users as you engage in genuine discussion.
          </p>
          <a href="#" className="btn-2" type="button">get started for free
          </a>
        </div>
      </header>
      <section className="pargraph-2"> 
        <div className="container" >  
          <div className="wi-1">
            <img className="pic-3" src={img}>
            </img>                                                                                         
              <h2 className="head-2">
                flowing converstion
              </h2>
                <p className="par-2">You wouldn't paginate a conversation in real life,
                so why do it online?
                Our threads have just-in-time loading for a more natural flow.
                </p>
                  <h3 className="head-2"> Grow Together
                  </h3>
                    <p className="par-2"> Generate meaningful discussions with your audience,
                     and build a strong,
                     loyal community.
                     Think of the insightful conversations you miss out on with a feedback form
                    </p>
                      <h4 className="head-2"> Your Users
                      </h4>
                        <p className="par-2">It takes no time at all to integrate Huddle,
                         with your app's authentication solution.
                         This means, once signed in to your app,
                         your users can start chatting immediately.
                        </p> 
          </div>
        </div>
      </section>
      <section className="box-conte">
        <div className="box">
          < h5 className="head-3">
            try it free
          </h5>
            <p className="par-4">
               fully featured 30-day free trial-no credit card required
            </p>
              <a href="#" className="btn-2" type="button">
                get started for free
              </a>
        </div>
      </section>
      <footer className="buttom">
        <div className= "container"> 
          <div className="buttom-cont"> 
            <div className="buttom-logo">
              <img  className="logo-1"
              src={huddle}> 
              </img>
        </div>
                <div className="buttom-class">                                                                                                    
                  <div className="flex list">
                    <ul class="flex social-media">
                      <li>
                        <img className="face" 
                        src={face}>
                        </img>
                          <img class="twitt " 
                          src={t}>
                          </img>
                            <img className="insta" 
                            src={ins}>
                            </img>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">
                         about us
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          what we do
                        </a>
                        </li>
                        <li>
                          <a href="#">
                            faQ
                          </a> 
                        </li> 
                    </ul>
                    <ul>
                      <li>
                        <a href="#">
                          carerr
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Contact Us
                        </a>
                      </li>
                    </ul>  
                    <ul className="inputs">
                      <li>
                        <h7 className="head-5">
                          Subscirbe
                        </h7>
                      </li>
                      <li>
                        <p7 className="par-5">to receive tips on how to grow your community
                                              sign up to our weekly newsletter.
                                              we'll never send you span or pass on your email
                                              address
                        </p7>
                      </li>
                      <li>
                        <form classname="form-1">
                          <input className="input-1" 
                           type="text"> 
                          </input>
                            <button className="button-5" 
                            type="submit">
                              Subscribe
                            </button>
                        </form>
                      </li>
                    </ul> 
                  </div>
                </div>
              </div> 
            </div>
          </footer>
        </div>
        ); 
               }
export default App;
