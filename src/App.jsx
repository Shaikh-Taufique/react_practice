import React from 'react';
import img from './assets/react.svg'; 
import svg from './assets/angular.png'; 
import Next from './assets/next.jfif';
import Card from './components/card'; 

const name = 'React';
const name1 = 'Angular';
const name2 = 'Next.js';
const react = `The term react has two primary definitions depending
            on the context: it is either a common English verb 
            meaning to respond to a stimulus, or a popular software
            development library used to build websites.`;
const angular = `The word angular has two primary meanings depending on whether
               you are using it as an everyday adjective or referring to the 
               popular software technology.`;
const next = `Next.js is a popular open-source, full-stack web development framework
             built on top of React. While React provides the "bricks" to build user 
             interfaces, Next.js provides the blueprint, plumbing, and wiring—handling
            the tooling, optimization, and structure needed to ship fast, production-ready
             web applications.`;
export const App = () => {
  return (
    <>
    <div className="container">   
       <Card name={name} img={img} p={react} />
        <Card name={name1} img={svg} p={angular} /> 
        <Card name={name2} img={Next} p={next} /> 
    </div>
       
    </>
    ); 
};

export default App;