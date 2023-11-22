import "./App.css";
import "swiper/css";
import { Box, Button, Heading, Image, Input, Text } from "@chakra-ui/react";
import { FiBell } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { RectCardData, squData } from "./data";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SquareCard from "./components/SquareCard";
import RectangularCard from "./components/RectangularCard";
import { useState } from "react";
function App() {
     const [email, setEmail] = useState("");
     const [isValidEmail, setIsValidEmail] = useState(true);

     const handleEmailChange = (event) => {
          const newEmail = event.target.value;
          setEmail(newEmail);

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          setIsValidEmail(emailRegex.test(newEmail));
     };

     const handleSignUp = () => {
          if (isValidEmail) {
               console.log("Signing up with email:", email);
               window.location.href = "https://app.loch.one/welcome";
          } else {
               console.log("Please enter a valid email");
          }
     };

     return (
          <Box className="main-container">
               <Box className="left">
                    <Box className="grid-container">
                         <Box className="box1">
                              <FiBell className="bellIcon" />
                              <Heading as="h5" size="lg">
                                   Get notified when a highly correlated whale
                                   makes a move
                              </Heading>
                              <Text fontSize="md">
                                   Find out when a certain whale moves more than
                                   any preset amount on-chain or when a dormant
                                   whale you care about becomes active.
                              </Text>
                         </Box>
                         <Box className="box2">
                              <Swiper
                                   spaceBetween={1}
                                   slidesPerView={2}
                                   autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                   }}
                                   pagination={{
                                        clickable: true,
                                   }}
                                   loop={true}
                                   navigation={true}
                                   modules={[Autoplay, Pagination, Navigation]}
                                   className="mySwiper"
                                   // }
                                   onSwiper={(swiper) => console.log(swiper)}
                              >
                                   {squData?.map((item) => {
                                        return (
                                             <SwiperSlide>
                                                  <SquareCard item={item} />
                                             </SwiperSlide>
                                        );
                                   })}
                              </Swiper>
                         </Box>
                         <Box
                              className="box3"
                              display={"flex"}
                              alignItems="center"
                              gap={5}
                              justifyContent="space-between"
                         >
                              <Image
                                   height="200px"
                                   w="350px"
                                   src="./Cohorts1.png"
                              />
                              <Box
                                   display={"flex"}
                                   flexDir="column"
                                   alignItems="flex-end"
                                   paddingRight="15px"
                              >
                                   <IoEyeOutline />
                                   <Heading w="250px" as="h5" size="lg">
                                        Watch what the whales are doing
                                   </Heading>
                                   <Text w="270px" fontSize="md">
                                        All whales are not equal. Know exactly
                                        what the whales impacting YOUR portfolio
                                        are doing.
                                   </Text>
                              </Box>
                         </Box>
                         <Box
                              className="box4"
                              display="flex"
                              alignItems={"center"}
                              justifyContent={"space-between"}
                         >
                              <Image src="./Vector.png" />
                              <Swiper
                                   style={{
                                        width: "80%",
                                   }}
                                   spaceBetween={1}
                                   slidesPerView={2}
                                   onSlideChange={() =>
                                        console.log("slide change")
                                   }
                                   onSwiper={(swiper) => console.log(swiper)}
                              >
                                   {RectCardData?.map((item) => {
                                        return (
                                             <SwiperSlide>
                                                  <RectangularCard
                                                       item={item}
                                                  />
                                             </SwiperSlide>
                                        );
                                   })}
                              </Swiper>
                         </Box>
                    </Box>
               </Box>

               <Box className="right">
                    <Box
                         w="365px"
                         m="auto"
                         display="flex"
                         flexDirection="column"
                         alignContent="center"
                         gap={5}
                    >
                         <Heading width="80%">
                              Sign up for exclusive access.
                         </Heading>
                         <Input
                              border="1px solid"
                              placeholder="Your Email Address"
                              value={email}
                              onChange={handleEmailChange}
                         />
                         <Button
                              bg="black"
                              color="white"
                              onClick={handleSignUp}
                         >
                              Get Started
                         </Button>
                         {!isValidEmail && (
                              <Text color="red">
                                   Please enter a valid email address.
                              </Text>
                         )}
                         <Text>
                              You’ll receive an email with an invite link to
                              join.
                         </Text>
                    </Box>
               </Box>
          </Box>
     );
}

export default App;
