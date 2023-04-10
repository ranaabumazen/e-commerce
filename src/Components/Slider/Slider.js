import React from 'react';
import style from './Slider.module.css'
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box';
import { slides } from './data';

const Slider = () => {
  

  return (
    <Box className={style.root}
         showArrows={false}
         showStatus={false}
         showIndicators={true}
         showThumbs={false}
         swipeable
         infiniteLoop
         emulateTouch> 
      <Carousel className={style.carousel} > 
        {slides.map((slide) => (
          <Box key={slide.id} display="flex" alignItems="center" justifyContent="space-between" style={{height: '100%'}}>
            <Box flexGrow={1} className={style.slideTitleContainer}>
              <img className={style.slideTitle} src={slide.tag} />
              <div className={style.slideDescription}>{slide.description}</div>
              <a className={style.buyButton} href='#'>Shop Now </a>
            </Box>
            <Box flexShrink={0}>
              <img className={style.slideImage} src={slide.image} alt={slide.description} />
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default Slider;
