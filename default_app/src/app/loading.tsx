import loading from "../../public/next.svg";
import Image from "next/image";
export default function Loading() {
  return (
    <>
      <section className="flex justify-center items-center h-[80vh]">
        <Image src={loading} width={500} alt="loading" />
      </section>
    </>
  );
}
