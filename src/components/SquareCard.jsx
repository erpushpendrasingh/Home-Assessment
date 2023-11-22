import { Box, Input, Select, Text } from "@chakra-ui/react";
import React from "react";

const SquareCard = ({ item }) => {
     const { isInput, isDrop, isQuotes, dropText, quotes } = item;
     return (
          <Box
               padding={"10px"}
               width="250px"
               height="200px"
               margin="20px"
               color="black"
               style={{ background: "#FFFF" }}
          >
               <Box
                    bg="#FFFFF"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    p={2}
               >
                    {item.icon}
                    <Text fontSize={"md"}>{item.icon2}</Text>
               </Box>
               <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="space-between"
               >
                    <span style={{ fontSize: "14px" }}>{item.description}</span>
                    {isInput ? (
                         <Input />
                    ) : isDrop ? (
                         <Select>
                              <option value={dropText}>{dropText}</option>
                         </Select>
                    ) : null}
                    <span>{isQuotes ? quotes : null}</span>
               </Box>
          </Box>
     );
};

export default SquareCard;
