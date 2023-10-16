import Image from "next/image";
import develop from "@/public/develop.gif";

export default function ContentDevelop(): JSX.Element {
  return (
    <div>
      <Image src={develop} alt="human" width={400} height={0} />
    </div>
  );
}
