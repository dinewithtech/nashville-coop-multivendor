// components/Logo.tsx

import Image from "next/image";

const Logo = ({ className = "" }) => (
  <Image
    src="/assets/images/png/logo-main.svg"
    alt="Logo"
    className={className}
    width={80}
    height={80}
  />
);

export default Logo;
