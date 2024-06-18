import React from 'react'
import Navbar from "./components/navbar/Navbar"
import Poster from './components/Poster/Poster'
import Logo from './components/Logo/Logo';
import SliderComponent from './components//slider/SliderComponent'
import SectionComponent from './components/slider/SectionComponent'

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Poster/>
      <Logo/>
      <SliderComponent />
      <SectionComponent/>
    </div>
  )
}

