import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating UI design of the site using Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating UI design of the site using Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating UI design of the site using Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating UI design of the site using Figma</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Web Dewelopment</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating UI design of the site using Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating UI design of the site using Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating UI design of the site using Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating UI design of the site using Figma</p>
            </li>
          </ul>
        </article>
          

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating UI design of the site using Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating UI design of the site using Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating UI design of the site using Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating UI design of the site using Figma</p>
            </li>
          </ul>
        </article>
      </div>
    </section >
  )
}

export default Services