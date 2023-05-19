import { Input, Button, HStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import useHugging from "../hooks/useHugging";
import ChatResponse from "./ChatResponse";
import { BiSend } from "react-icons/bi";

const ChatFrom = () => {
  const [question, setQuestion] = useState("");

  const { data: response, isLoading, isSuccess } = useHugging(question);

  const inputRef = useRef<HTMLInputElement>(null);

  const answer = response?.[0]?.generated_text.split("\n") || [];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setQuestion(inputRef.current?.value || "");
  };

  if (isSuccess && inputRef.current?.value) inputRef.current.value = "";

  return (
    <>
      <form onSubmit={handleSubmit}>
        <HStack>
          <Input ref={inputRef} placeholder="Let's chat"></Input>
          <Button
            colorScheme="blue"
            marginY={2}
            onClick={handleSubmit}
            type="submit"
          >
            <BiSend size={25} color="white" />
          </Button>
        </HStack>
      </form>
      <ChatResponse response={answer} isLoading={isLoading} />
    </>
  );
};

export default ChatFrom;
