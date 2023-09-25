import Image from "next/image";
import Human from "../../public/human.jpg";
import Part1 from "../../public/part1.png";

export default function ContentImg(): JSX.Element {
  return (
    <div>
      <Image src={Part1} alt="human" width={400} />
    </div>
  );
}
