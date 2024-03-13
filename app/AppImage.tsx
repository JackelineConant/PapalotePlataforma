
import Image from "next/image";

export default function AppBgImg() {
  return (
    <Image
        src="/images/datos.jpg"
        className="blur"
        fill
        sizes="100vw"
        style={{
            objectFit:'cover',
            zIndex: -1,
        }}
        alt="sopa"
    />)
}