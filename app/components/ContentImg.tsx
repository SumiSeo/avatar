import Image from "next/image";
import Human from "../../public/human.jpg";
import Part1 from "../../public/part1.png";
import Light from "../../public/light.gif";

export default function ContentImg(): JSX.Element {
  return (
    <div>
      <Image src={Light} alt="human" width={500} />
    </div>
  );
}
