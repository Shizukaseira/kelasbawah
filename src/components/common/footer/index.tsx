'use client'
import Link from 'next/link'

import { Container } from '~/components/layout/container'

import s from './footer.module.scss'

export const Footer = () => {
  return (
    <Container as="footer" className={s.footer}>
      <div className={s.lastPart}>
        <div className={s.social}>
          Social Media
          <p>
            <Link href="">Twitter</Link> —{' '}
            <Link href="">
              Instagram
            </Link>{' '}
            — <Link href="">Medium</Link> —{' '}
            <Link href="">Whatsapp</Link>
          </p>
        </div>
        <p className={s.email}>
          <span>Get in touch</span>
          <Link target="_self" href="mailto:kelasbawah@protonmail.com">
            kelasbawah
          </Link>
        </p>
        <p className={s.rights}>
          © Studio.Kelasbawah LLC {new Date().getFullYear()}
          <br />
          all rights reserved
        </p>
      </div>
    </Container>
  )
}
