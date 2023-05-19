import { Grid, Show, GridItem, Heading, Box } from "@chakra-ui/react";

import ChatFrom from "../components/ChatFrom";

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
            Recent Queries
          </Heading>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box marginX={5}>
          <ChatFrom />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
