import Image from 'next/image'
import React, { CSSProperties } from 'react'

import { Container } from '~/components/layout/container'

import s from './footer-gallery.module.scss'

type GalleryImage = {
  url: string
  stlye: CSSProperties
}

export const FooterGallery = () => {
  const images: GalleryImage[] = [
    {
      url: '/images/kelasbawah-team-4.jpg',
      stlye: {
        gridArea: '1 / 1 / 2 / 6'
      }
    },
    {
      url: '/images/kelasbawah-team-5.jpg',
      stlye: {
        gridArea: '1 / 6 / 2 / 13'
      }
    }
  ]
  return (
    <Container as="section" className={s.container}>
      {images.map((image, index) => (
        <div key={index} className={s.image} style={image.stlye}>
          <Image src={image.url} alt="kelasbawah-team" fill />
        </div>
      ))}
    </Container>
  )
}
