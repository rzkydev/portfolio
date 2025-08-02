import TextType from "@/components/react-bits/texts/TextType";
import { Flex } from "@once-ui-system/core";

export default function OneTwoThree() {
  return (
    <Flex>
      <TextType
        text={['Text typing effect', 'for your websites', 'Happy coding!']}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
    </Flex>
  );
}