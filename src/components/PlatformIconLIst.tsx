import { Platform } from "../hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaLinux,
  FaApple,
  FaPlaystation,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

function PlatformIconLIst({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    nintendo: SiNintendo,
    android: FaAndroid,
    mac: FaApple,
    web: BsGlobe,
  };

  return (
    <HStack margin={1.5}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
}

export default PlatformIconLIst;
