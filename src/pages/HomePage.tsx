import { Grid, Show, GridItem, Heading, Box } from "@chakra-ui/react";

import ChatForm from "../components/ChatForm";
import AskedQuestions from "../components/AskedQuestions";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <Heading size="md" color="gray.100">
            <AskedQuestions />
          </Heading>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box marginX={5}>
          <ChatForm />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
