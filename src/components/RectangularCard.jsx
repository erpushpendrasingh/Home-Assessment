import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const RectangularCard = ({ item }) => {
     return (
          <Box border="1px solid" w="350px" h="120px">
               <Box
                    h="120px"
                    bg="#FFFF"
                    color="black"
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={2}
                    p={2}
               >
                    <Box display="flex" gap={2}>
                         <Heading as="h5" size="xs">
                              {item.title}
                         </Heading>
                         <Text fontSize="xs">{item.subTitle}</Text>
                    </Box>
                    <Box>
                         <Text fontSize="sm">{item.description}</Text>
                    </Box>
               </Box>
          </Box>
     );
};

export default RectangularCard;
