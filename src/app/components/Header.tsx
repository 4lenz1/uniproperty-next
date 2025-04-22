'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  InstagramOutlined,
  MailOutlined,
  MessageOutlined,
  MenuOutlined,
  CloseOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { AboutDropdown } from './AboutDropdown';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // 手機版用

  return (
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* 左側 Logo */}
        <Link
          href="/"
          className="flex items-center gap-4"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={48}
            height={48}
          />
          <div className="leading-snug">
            <h1 className="text-2xl font-semibold tracking-widest">
              UNIPROPERTY
            </h1>
            <p className="text-xs text-gray-700 tracking-wider">
              ユニプロパティ株式会社
            </p>
          </div>
        </Link>

        {/* 桌面版導覽列 */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-800">
          <Link
            href="/"
            className="hover:text-blue-600"
          >
            ホーム / Home
          </Link>
          <AboutDropdown />
          <Link
            href="/services"
            className="hover:text-blue-600"
          >
            事業內容 / Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-600"
          >
            連絡先 / Contact
          </Link>
        </nav>

        {/* 桌面版 icon */}
        <div className="hidden md:flex gap-3 text-xl text-blue-800">
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            title="LINE"
          >
            <MessageOutlined />
          </a>
          <a
            href="mailto:info@uniproperty.co.jp"
            title="Email"
          >
            <MailOutlined />
          </a>
          <a
            href="https://www.instagram.com/unipro_jp"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <InstagramOutlined />
          </a>
        </div>

        {/* 手機漢堡按鈕 */}
        <div className="md:hidden text-2xl text-blue-800">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      {/* 手機選單 */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-sm font-medium text-gray-800">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-600"
          >
            ホーム / Home
          </Link>

          {/* 手機版 About 展開 */}
          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="flex items-center justify-between w-full hover:text-blue-600"
          >
            <span>企業情報 / About</span>
            <DownOutlined
              className={`transition-transform duration-300 ${
                aboutOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          {aboutOpen && (
            <div className="ml-4 space-y-2">
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block hover:text-blue-600"
              >
                プライバシーについて
              </Link>
              <Link
                href="/about/brand"
                onClick={() => setIsOpen(false)}
                className="block hover:text-blue-600"
              >
                ブランドについて
              </Link>
            </div>
          )}

          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-600"
          >
            事業內容 / Services
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-600"
          >
            連絡先 / Contact
          </Link>

          {/* icon 區 */}
          <div className="flex gap-4 pt-2 text-blue-800 text-xl">
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              title="LINE"
            >
              <MessageOutlined />
            </a>
            <a
              href="mailto:info@uniproperty.co.jp"
              title="Email"
            >
              <MailOutlined />
            </a>
            <a
              href="https://www.instagram.com/unipro_jp"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <InstagramOutlined />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
