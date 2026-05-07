import { useState, useEffect, useRef, useCallback } from 'react'

export default function GalleryCarousel({ images, heightClass = 'h-64' }) {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef(null)

  const startAuto = useCallback(() => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 5000)
  }, [images.length])

  const stopAuto = useCallback(() => {
    clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    startAuto()
    return () => clearInterval(intervalRef.current)
  }, [startAuto])

  function go(dir) {
    setCurrent(prev => (prev + dir + images.length) % images.length)
    startAuto()
  }

  return (
    <div
      className={`gallery-carousel relative overflow-hidden ${heightClass}`}
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
    >
      <div
        className="gallery-carousel-inner h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="gallery-carousel-item h-full flex-shrink-0">
            <img src={src} alt="" className="gallery-img w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <button className="carousel-btn prev" onClick={e => { e.stopPropagation(); go(-1) }}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="carousel-btn next" onClick={e => { e.stopPropagation(); go(1) }}>
        <i className="fas fa-chevron-right"></i>
      </button>

      <div className="carousel-indicators">
        {images.map((_, i) => (
          <div
            key={i}
            className={`carousel-indicator ${i === current ? 'active' : ''}`}
            onClick={e => { e.stopPropagation(); setCurrent(i); startAuto() }}
          />
        ))}
      </div>
    </div>
  )
}
