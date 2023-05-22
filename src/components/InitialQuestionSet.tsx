import { Box } from "@chakra-ui/react";

interface Props {
  children: string;
  onSelectQuestion: (children: string) => void;
}

const InitialQuestionSet = ({ children, onSelectQuestion }: Props) => {
  return (
    <Box
      as="button"
      bg="gray.700"
      marginY={1}
      color="white"
      padding={3}
      rounded={10}
      onClick={() => onSelectQuestion(children)}
    >
      {children}
    </Box>
  );
};

export default InitialQuestionSet;
