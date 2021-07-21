import logo from "./logo.svg";
import {
  Box,
  Code,
  Container,
  Flex,
  IconButton,
  Image,
  Link,
  Spacer,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const logoSpin = {
    loop: Infinity,
    ease: "linear",
    duration: 20,
  };

  const LogoSpin = motion(Image);

  return (
    <Container size={"xl"}>
      <Flex w="full">
        <Spacer />
        <IconButton
          rounded="full"
          aria-label="Toggle color mode"
          bgColor="transparent"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />
      </Flex>
      <VStack spacing={4}>
        <LogoSpin
          src={logo}
          animate={{ rotate: 360 }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        />
        <Text>
          Edit <Code>src/App.js</Code> and save to reload.
        </Text>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </VStack>
    </Container>
  );
}

export default App;
