import Image from "next/image";
import notFound from "../../public/next.svg";

export default function NotFound() {
  return (
    <>
      <section className="flex justify-center items-center h-[80vh]">
        <Image src={notFound} width={500} alt="Not Found" />
      </section>
    </>
  );
}
