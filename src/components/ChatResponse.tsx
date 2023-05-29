import { Box, Spinner, Text } from "@chakra-ui/react";

interface Props {
  response: string[];
  isLoading: boolean;
}

const ChatResponse = ({ response, isLoading }: Props) => {
  return (
    <>
      {isLoading ? <Spinner /> : ""}
      {(isLoading || response.length > 0) && (
        <Box
          bg="gray.700"
          w="100%"
          p={4}
          color="white"
          marginTop={2}
          rounded={10}
          maxH="500px"
          overflow="auto"
        >
          {response
            .filter((line) => line.trim() !== "")
            .map((line: string, index: number) => (
              <Box
                key={index}
                bg={"whiteAlpha.200"} // Alternate background colors based on index
                w="100%"
                padding={2}
                marginY={2}
                color="white"
                rounded={10}
              >
                <Text whiteSpace="pre-line">
                  {index % 2 === 0 ? "Q : " + line : line}
                </Text>
              </Box>
            ))}
        </Box>
      )}
    </>
  );
};

export default ChatResponse;
