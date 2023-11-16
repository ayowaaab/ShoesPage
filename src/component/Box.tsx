import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { Flex, Heading, HStack, Stack, Button } from "@chakra-ui/react";

import "/public/this.css";

export default function Box() {
  const app = useRef(null);
  const [imgUrl, setImgUrl] = useState("redJordan");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".buttons", { opacity: 0 });
      gsap
        .timeline()
        .from(".slider", { stagger: 0.5, width: 0, duration: 1 })
        .from(".navbtn", { stagger: 0.5, y: "+=10", opacity: 0, duration: 0.5 })
        .from(".title", { opacity: 0, y: "-=200", duration: 1 })
        .from("#img", { opacity: 0, y: "-=200", duration: 1, scale: 0.7 })
        .to(".buttons", { stagger: 0.5, y: "-=10", opacity: 1, duration: 1 });
    }, app);

    return () => ctx.revert();
  }, []);

  const onShoe = (val: string) => {
    if (val === imgUrl) return;
    setImgUrl(val);
    gsap.from("#img", { opacity: 0, y: "-=100", duration: 1 });
  };

  return (
    <>
      <Stack ref={app}>
        <Heading
          opacity=".7"
          fontSize={{ base: "60px", sm: "100px", xl: "200px" }}
          className="title"
        >
          Air Jordan
        </Heading>
        <Flex
          position={"fixed"}
          py={5}
          justifyContent={"center"}
          gap={{ base: "1rem", sm: "5rem", xl: "10rem" }}
          w={"full"}
        >
          <button className="navbtn">Home</button>
          <button className="navbtn">Products</button>
          <button className="navbtn">Contact</button>
        </Flex>

        <div className="allBoxes">
          <Stack className="slider"></Stack>
          <Stack className="slider"></Stack>
          <Stack className="slider"></Stack>
        </div>

        <div className="d-flex flex-column align-items-center product">
          <img
            id="img"
            className="d-inline img-fluid"
            src={imgUrl + ".webp"}
            width={"800px"}
            alt="red"
          />
          <HStack gap={{ base: 5, sm: 10 }}>
            <Button
              onClick={() => onShoe("redJordan")}
              color={"white"}
              fontWeight={300}
              colorScheme={"red"}
              w={{ base: "80px", sm: "100px", md: "100px", lg: "150px" }}
              className="buttons"
            >
              Red
            </Button>
            <Button
              className="buttons"
              onClick={() => onShoe("greenJordan")}
              color={"white"}
              fontWeight={300}
              colorScheme="whatsapp"
              w={{ base: "80px", sm: "100px", md: "100px", lg: "150px" }}
            >
              Green
            </Button>
            <Button
              className="buttons"
              onClick={() => onShoe("blackJordan")}
              colorScheme="blackAlpha"
              fontWeight={300}
              color={"white"}
              w={{ base: "80px", sm: "100px", md: "100px", lg: "150px" }}
            >
              Black
            </Button>
          </HStack>
        </div>
      </Stack>
    </>
  );
}
