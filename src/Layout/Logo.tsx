import Image from "next/image";
import React from "react";

interface Props {}

function Logo(props: Props) {
  const {} = props;

  return <Image src="/icons/logo.png" alt="logo" width="200" height="100" />;
}

export default Logo;
