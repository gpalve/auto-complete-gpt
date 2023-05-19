import { Box, Spinner, Text } from "@chakra-ui/react";

interface Props {
  response: [];
  isLoading: boolean;
}

const ChatResponse = ({ response, isLoading }: Props) => {
  return (
    <Box
      bg="gray.700"
      w="100%"
      p={4}
      color="white"
      marginY={2}
      paddingY={4}
      rounded={10}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        response.map((line: string, index: number) => (
          <Text key={index} whiteSpace="pre-line">
            {line}
          </Text>
        ))
      )}
    </Box>
  );
};

export default ChatResponse;
