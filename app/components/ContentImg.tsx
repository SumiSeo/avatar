import Image from "next/image";
import src1 from "@/public/light-1.png";
import src2 from "@/public/develop-1.png";
import src3 from "@/public/create-1.png";
import src4 from "@/public/believe-1.png";
import src5 from "@/public/study-1.png";

export default function ContentImg({ id }: { id: number }): JSX.Element {
  let source;
  if (id === 1) {
    source = src1;
  } else if (id === 2) {
    source = src2;
  } else if (id === 3) {
    source = src3;
  } else if (id === 4) {
    source = src4;
  } else {
    source = src5;
  }
  return (
    <div>
      <Image src={source ? source : src1} alt="human" width={400} height={0} />
    </div>
  );
}
