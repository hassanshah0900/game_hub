import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
function Emoji({ rating }: Props) {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "20px" },
    4: { src: thumbsUp, alt: "Recommended", boxSize: "20px" },
    5: { src: bullsEye, alt: "Exceptional", boxSize: "30px" },
  };
  return <Image marginLeft="10px" display="inline" {...emojiMap[rating]} />;
}

export default Emoji;
