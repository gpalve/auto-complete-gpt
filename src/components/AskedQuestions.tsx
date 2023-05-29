import {
  HStack,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { MdCheckCircleOutline } from "react-icons/md";
import useChatStore from "../store";

const AskedQuestions = () => {
  const questions = useChatStore((s) => s.questions);

  return (
    <>
      <Heading size="md" color="gray.400" marginY={1}>
        Recent Queries
      </Heading>
      <List spacing={3}>
        {questions.map((question) => (
          <ListItem>
            <HStack>
              <ListIcon as={MdCheckCircleOutline} color="green.500" />
              <Text fontSize="sm">{question}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default AskedQuestions;
