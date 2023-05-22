import { Input, Button, HStack } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import useHugging from "../hooks/useHugging";
import ChatResponse from "./ChatResponse";
import { BiSend } from "react-icons/bi";
import AlignQuestions from "./AlignQuestions";

const ChatForm = () => {
  const [question, setQuestion] = useState("");
  const [showAlignQuestions, setShowAlignQuestions] = useState(true);
  const [responseList, setResponseList] = useState<string[]>([]);

  const { data: response, isLoading, isSuccess } = useHugging(question);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSuccess && response?.[0]?.generated_text) {
      const answer = response[0].generated_text.split("\n");
      setResponseList((prevResponseList) => [...answer, ...prevResponseList]);
    }
  }, [isSuccess, response]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setQuestion(inputRef.current?.value || "");
    setShowAlignQuestions(false); // Hide the AlignQuestions component
  };

  if (isSuccess && inputRef.current?.value) inputRef.current.value = "";

  return (
    <>
      <form onSubmit={handleSubmit}>
        <HStack marginBottom={1}>
          <Input
            ref={inputRef}
            borderColor="blue.500"
            placeholder="Ask me some basic questions factual maybe.."
          ></Input>
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
      {showAlignQuestions && (
        <AlignQuestions
          InitQuestion={(question) => {
            setQuestion(question);
            setShowAlignQuestions(false);
          }}
        />
      )}
      <ChatResponse response={responseList} isLoading={isLoading} />
      <Button
        colorScheme="gray"
        marginY={2}
        onClick={() => {
          setShowAlignQuestions(true);
          setQuestion("");
          setResponseList([]);
        }}
      >
        Reset
      </Button>
    </>
  );
};

export default ChatForm;
