import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Wallet } from '../SwapMenu/SwapInput'
import NetworksDropdown from '../NetworksDropdown'
import WalletsDropdown from '../WalletsDropdown'

const networks = [{ name: 'Ethereum' }, { name: 'Polygon' }]
var sampleUserWallets: Wallet[] = [{ name: 'Wallet A' }, { name: 'Wallet B' }]

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="relative flex justify-between bg-black text-white dark:bg-transparent">
      <div className="flex items-center justify-center p-3">
        <div className="relative h-12 w-12  flex-none hover:animate-spin-once">
          <Link href="/">
            <Image src="/logo.png" layout="fill" objectFit="contain" />
          </Link>
        </div>
        <div className="hidden items-center text-2xl font-medium md:flex">
          CryptoSwap
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 w-auto shrink-0 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="flex grow items-center justify-center gap-5 text-[#7D7E90]">
          <Link href="/swap">
            <a className="hover:text-white">Trade</a>
          </Link>
          <Link href="/pool">
            <a className="hover:text-white">Pool</a>
          </Link>
          <Link href="/docs">
            <a className="hover:text-white">Whitepaper</a>
          </Link>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 flex w-auto flex-row-reverse items-center justify-between bg-black py-2 dark:bg-[#24264C] sm:shrink  lg:static  lg:flex-row dark:lg:bg-transparent">
        <span className="flex w-full flex-row justify-center gap-5 sm:gap-2 ">
          <NetworksDropdown networks={networks} />
          <WalletsDropdown wallets={sampleUserWallets} />
        </span>
        <button
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="relative mx-3 flex h-6 w-6 items-center justify-center"
        >
          {theme === 'dark' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:fill-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 hover:fill-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

export default Navbar
