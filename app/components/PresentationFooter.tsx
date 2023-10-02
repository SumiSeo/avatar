import { PresentationFooterProps } from "../types/PresentationProps";

export default function PresentationFooter({
  text,
}: PresentationFooterProps): JSX.Element {
  return <div>{text}</div>;
}
