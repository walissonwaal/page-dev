import React from 'react'
import Link from 'next/link'

const menuItens = [
  {
    title: 'Início',
    url: '/'
  },
  {
    title: 'Sobre',
    url: '/sobre'
  },
  {
    title: 'Projetos',
    url: '/projetos'
  },
  {
    title: 'Contato',
    url: '/contato'
  },
  {
    title: 'Resume',
    url: '/resume'
  }
]

const Nav = () => {
  return (
    <nav className='hidden h-full md:flex justify-center items-center gap-10'>
      {menuItens &&
        menuItens.map(item => (
          <ul key={item.title} className='font-bold text-white hover:text-secondary duration-150'>
            <li>
              <Link href={item.url}>{item.title}</Link>
            </li>
          </ul>
        ))}
    </nav>
  )
}

export default Nav
