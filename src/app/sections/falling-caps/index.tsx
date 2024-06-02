'use client'

import Image from 'next/image'
import React, { CSSProperties } from 'react'

import { Container } from '~/components/layout/container'

import s from './caps.module.scss'

export const FallingCaps = () => {
  const caps: CSSProperties[] = [
  ]
  return (
    <Container className={s.container}>
      <h2>
        We want to help make <br />
        the internet <br />
        <span>everything it can be.</span>
      </h2>
      {caps.map((style, index) => (
        <Image
          alt="Cap"
          className={s.cap}
          height={509}
          key={index}
          quality={100}
          src="/assets/Cap.png"
          style={{ ...style }}
          width={509}
        />
      ))}
    </Container>
  )
}
