import React, { useState, useEffect } from "react";
import "./App.css";

interface Photo {
  src: string;
  alt: string;
}

const photos: Photo[] = [
  { src: "/photos/1.jpg", alt: "Photo 1" },
  { src: "/photos/2.jpg", alt: "Photo 2" },
  { src: "/photos/3.jpg", alt: "Photo 3" },
  { src: "/photos/4.jpg", alt: "Photo 4" },
  { src: "/photos/5.jpg", alt: "Photo 5" },
  { src: "/photos/6.jpg", alt: "Photo 6" },
  { src: "/photos/7.jpg", alt: "Photo 7" },
  { src: "/photos/8.jpg", alt: "Photo 8" },
  { src: "/photos/9.jpg", alt: "Photo 9" },
  { src: "/photos/10.jpg", alt: "Photo 10" },
  { src: "/photos/11.jpg", alt: "Photo 11" },
  { src: "/photos/12.jpg", alt: "Photo 12" },
  { src: "/photos/13.jpg", alt: "Photo 13" },
  { src: "/photos/14.jpg", alt: "Photo 14" },
  { src: "/photos/15.jpg", alt: "Photo 15" },
  { src: "/photos/16.jpg", alt: "Photo 16" },
  { src: "/photos/17.jpg", alt: "Photo 17" },
  { src: "/photos/18.jpg", alt: "Photo 18" },
  { src: "/photos/19.jpg", alt: "Photo 19" },
  { src: "/photos/20.jpg", alt: "Photo 20" },
  { src: "/photos/21.jpg", alt: "Photo 21" },
  { src: "/photos/22.jpg", alt: "Photo 22" },
  { src: "/photos/23.jpg", alt: "Photo 23" },
  { src: "/photos/24.jpg", alt: "Photo 24" },
  { src: "/photos/25.jpg", alt: "Photo 25" },
  { src: "/photos/26.jpg", alt: "Photo 26" },
  { src: "/photos/27.jpg", alt: "Photo 27" },
  { src: "/photos/28.jpg", alt: "Photo 28" },
  { src: "/photos/29.jpg", alt: "Photo 29" },
  { src: "/photos/30.jpg", alt: "Photo 30" },
  { src: "/photos/31.jpg", alt: "Photo 31" },
  { src: "/photos/32.jpg", alt: "Photo 32" },
];

const App: React.FC = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [carouselStarted, setCarouselStarted] = useState(false);
  const [carouselVisible, setCarouselVisible] = useState(false);
  // const [countdown, setCountdown] = useState(10); // Initial countdown value

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (carouselStarted) {
      interval = setInterval(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);

        if (currentPhotoIndex + 1 === photos.length) {
          handleCarouselEnd();
        }
      }, 10000);
    }

    return () => clearInterval(interval);
  }, [carouselStarted, currentPhotoIndex]);

  // useEffect(() => {
  //   let countdownInterval: NodeJS.Timeout;
  //   if (carouselStarted) {
  //     countdownInterval = setInterval(() => {
  //       setCountdown((prevCountdown) =>
  //         prevCountdown === 1 ? 10 : prevCountdown - 1
  //       );
  //     }, 1000);
  //   }

  //   return () => clearInterval(countdownInterval);
  // }, [carouselStarted]);

  const handleStartCarousel = () => {
    setCarouselStarted(true);
    setCarouselVisible(true);
    // setCountdown(10); // Reset countdown when carousel starts
  };

  const handleCarouselEnd = () => {
    setCarouselStarted(false);
    setCarouselVisible(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!carouselStarted && !carouselVisible && (
          <>
            <img src="/logos/logo.png" alt="Logo" className="logo-image" />
            <img
              src="/logos/start.png"
              alt="Start"
              className="start-button"
              onClick={handleStartCarousel}
            />
          </>
        )}
        {carouselVisible && (
          <>
            <div className="carousel-container">
              <div className="photo-index-label">{currentPhotoIndex + 1}</div>
              {/* <div className="countdown-logo">
                <img src="/logos/woolworths.png" alt="Logo" />
              </div> */}
              <br />
              <img
                src={photos[currentPhotoIndex].src}
                alt={photos[currentPhotoIndex].alt}
                className="carousel-image"
              />
              {/* <br /><div className="countdown-label">
                Next photo in... {countdown}
              </div> */}
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default App;
