import Image from "next/image";
import src1 from "@/public/light.gif";
import src2 from "@/public/develop.gif";
import src3 from "@/public/create.gif";
import src4 from "@/public/believe.gif";
import src5 from "@/public/self-study.gif";

export default function ContentImg({ id }: { id: number }): JSX.Element {
  return (
    <div>
      {id === 1 ? <Image src={src1} alt="human" width={400} height={0} /> : ""}
      {id === 2 ? <Image src={src2} alt="human" width={400} height={0} /> : ""}
      {id === 3 ? <Image src={src3} alt="human" width={400} height={0} /> : ""}
      {id === 4 ? <Image src={src4} alt="human" width={400} height={0} /> : ""}
      {id === 5 ? <Image src={src5} alt="human" width={400} height={0} /> : ""}
    </div>
  );
}
