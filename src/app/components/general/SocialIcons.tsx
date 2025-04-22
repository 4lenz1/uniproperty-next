'use client';

import { SocialIcon } from './SocialIcon';

export const SocialIcons = () => {
  return (
    <div className="flex gap-3 items-center">
      <SocialIcon
        href="https://www.instagram.com/unipro_jp"
        src="/icons/instagram.svg"
        alt="Instagram"
        label="Instagram"
      />
      <SocialIcon
        href="mailto:info@uniproperty.co.jp"
        src="/icons/mail.svg"
        alt="Email"
        label="Email"
      />
      <SocialIcon
        href="https://line.me/R/ti/p/@364oungl"
        src="/icons/line.svg"
        alt="LINE"
        label="LINE"
      />
    </div>
  );
};
