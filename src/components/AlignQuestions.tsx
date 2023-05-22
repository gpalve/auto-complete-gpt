import { Box, HStack, useBreakpointValue } from "@chakra-ui/react";
import question from "../data/question";
import InitialQuestionSet from "./InitialQuestionSet";

interface Props {
  InitQuestion: (question: string) => void;
}

const AlignQuestions = ({ InitQuestion }: Props) => {
  const isSmallScreen = useBreakpointValue({ base: true, sm: false });

  return (
    <HStack flexWrap={isSmallScreen ? "wrap" : "nowrap"}>
      {question.map((q) => (
        <Box key={q} mb={isSmallScreen ? 1 : 0}>
          <InitialQuestionSet onSelectQuestion={() => InitQuestion(q)}>
            {q}
          </InitialQuestionSet>
        </Box>
      ))}
    </HStack>
  );
};

export default AlignQuestions;
