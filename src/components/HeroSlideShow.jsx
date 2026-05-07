import { useState, useEffect } from 'react'

const slides = [
  '/images/buildingfront.jpeg',
  '/images/flags.jpeg',
  '/images/504619291_1140145458128969_8238071332087389116_n.jpg',
  '/images/compound.jpeg',
]

export default function HeroSlideShow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hero-slideshow">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  )
}
