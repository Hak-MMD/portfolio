import React from 'react';
import './portfolio.css';
import Project from '../../assets/project/text.txt';
import Img1 from '../../assets/portfolio1.jpg';
import Img2 from '../../assets/portfolio2.jpg';
import Img3 from '../../assets/portfolio3.jpg';
import Img4 from '../../assets/portfolio4.jpg';
import Img5 from '../../assets/portfolio5.png';

const data = [
  {
    id: 1,
    image: Img1,
    title: 'TWorker - job search site for Teens!',
    github: 'https://github.com',
    demo: 'http://portfolio.startit.lviv.ua/tworker/'
  },
  {
    id: 2,
    image: Img2,
    title: 'ToDo CRUD App!',
    github: 'https://github.com',
    demo: 'http://portfolio.startit.lviv.ua/tworker'
  },
  {
    id: 3,
    image: Img3,
    title: 'Dental Clinic Site!',
    github: 'https://github.com',
    demo: 'http://portfolio.startit.lviv.ua/tworker/'
  },
  {
    id: 4,
    image: Img4,
    title: 'User Creator!',
    github: 'https://github.com',
    demo: 'http://portfolio.startit.lviv.ua/tworker/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {/* Download button test you can change it if you want !!!*/}
                  {/* /*<a href={Project} download className='btn'>Download</a> */}
                  <a href={github} target='_blank' className='btn'>GitHub</a>
                  <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio