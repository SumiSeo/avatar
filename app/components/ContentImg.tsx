import Image from "next/image";
import src1 from "@/public/light.gif";
import src2 from "@/public/develop.gif";
import src3 from "@/public/create.gif";
import src4 from "@/public/believe.gif";
import src5 from "@/public/self-study.gif";

//comp
import ContentDevelop from "./ContentDevelop";

export default function ContentImg({ id }: { id: number }): JSX.Element {
  let source;
  if (id === 1) {
    source = src1;
  }
  return (
    <div>
      {id === 2 ? (
        <ContentDevelop />
      ) : (
        <Image
          src={source ? source : src1}
          alt="human"
          width={400}
          height={0}
        />
      )}
      {id === 3 ? <Image src={src3} alt="human" width={400} height={0} /> : ""}
      {id === 4 ? <Image src={src4} alt="human" width={400} height={0} /> : ""}
      {id === 5 ? <Image src={src5} alt="human" width={400} height={0} /> : ""}
    </div>
  );
}
