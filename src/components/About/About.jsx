import React from 'react';
import styles from './About.module.css';
import kingrat from '../../assets/king-rat.jpg';

const About = function About() {
  return (
    <div className={styles.about__container}>
      <div className={styles.about__img}>
        <img src={kingrat} alt='' />
      </div>
      <div>
        <div className={styles.about__title}>
          <h3>Rocío Fernández</h3>
          <a href='https://github.com/rociofc0312'>
            <i className='fa fa-github' />
          </a>
        </div>
        <small>rociofc0312@gmail.com</small>
        <p>
          Software Developer who likes to play around with different technologies every now and then
          :)
        </p>
        <p>Things I learnt:</p>
        <ul>
          <li>JavaScript esentials</li>
          <li>NodeJS</li>
          <li>React good practices to begin projects</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
