import { Flex, Heading, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/react.svg";

const Navbar = () => {
  return (
    <Flex padding="10px" alignItems="center" justifyContent="space-between">
      <Link to="/">
        <Image src={logo} boxSize="30px" />
      </Link>

      <Heading as='h3' size='lg' flex="1" textAlign="center">
        🚀 ShortGPT
      </Heading>
      <Box>
        <ColorModeSwitch />
      </Box>
    </Flex>
  );
};

export default Navbar;
