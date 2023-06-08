import Image from "next/image";
import React from "react";

interface Props {}

function Logo(props: Props) {
  const {} = props;

  return <Image src="/icons/logo.png" alt="logo" width="168" height="50" />;
}

export default Logo;
