'use client'

import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

import { Container } from '~/components/layout/container'

import s from './hero.module.scss'

export const Hero = () => {
  return (
    <Container as="section" className={s.container}>
      <h1>
       Community
        <span>Studio</span>
      </h1>
      <Marquee className={s.marquee} autoFill aria-label="Marquee section">
        <p>
          Every code is a small step towards a big dream.
        </p>
      </Marquee>
      <div className={s.awwward}>
        <Image
          alt="Awwwards trophy"
          height={360}
          priority
          quality={100}
          src="/assets/awwwards-trophy.png"
          width={250}
        />
      </div>
    </Container>
  )
}
