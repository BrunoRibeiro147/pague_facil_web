import React, { useState, ChangeEvent } from 'react';

import { useRouter } from 'next/router';

import {
  Grid,
  Flex,
  Image,
  Box,
  Text,
  Stack,
  Link,
  Button,
  Heading,
} from '@chakra-ui/core';
import { FiCreditCard, FiUser } from 'react-icons/fi';
import { FaPaypal } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Divider from '../components/Divider';
import Input from '../components/Input';

const Home: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSignUp = (e: React.FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    router.push('/signup');
  };

  const handleHome = (e: React.FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    router.push('/home');
  }

  const easing = [0.6, 0.01, -0.05, 1];

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: easing },
      }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Grid
        as="main"
        height="100vh"
        templateColumns="1fr 370px 1370px 1fr"
        templateRows="1fr 870px 1fr"
        templateAreas="
        '. . . .'
        '. form logo .'
        '. . . .'
        "
        justifyContent="center"
        alignItems="center"
      >

        <Flex
          gridArea="form"
          height="100%"
          backgroundColor="white"
          borderRadius="none"
          flexDir="column"
          alignItems="stretch"
        >
          <Box alignSelf="center">
            <Image size="175px" objectFit="contain" src="/pague_facil.svg" alt="Pague Fácil" />
          </Box>

          <Text alignSelf="center" fontWeight="bold" letterSpacing={2.5}>
            MÓDULOS
          </Text>

          <Button
            backgroundColor="white"
            onClick={handleHome}
            height="40px"
            borderRadius="none"
            marginTop={6}
            color="#7a7a7a"
            leftIcon={FiCreditCard}
            _hover={{ backgroundColor: "purple.500", color: "white" }}
          >
            <Text fontWeight="thin" letterSpacing={2.5}>
              CARTÕES DE CRÉDITO
            </Text>
          </Button>


          <Button
            backgroundColor="white"
            onClick={handleHome}
            height="40px"
            borderRadius="none"
            marginTop={6}
            color="#7a7a7a"
            leftIcon={FiUser}
            _hover={{ backgroundColor: "purple.500", color: "white" }}

          >
            <Text fontWeight="thin" letterSpacing={2.5}>
              SIMULAÇÃO
            </Text>
          </Button>

          <Button
            backgroundColor="white"
            onClick={handleHome}
            height="40px"
            borderRadius="none"
            marginTop={6}
            color="#7a7a7a"
            leftIcon={FaPaypal}
            _hover={{ backgroundColor: "purple.500", color: "white" }}

          >
            <Text fontWeight="thin" letterSpacing={2.5}>
              PAGAMENTOS
            </Text>
          </Button>

        </Flex>

        <Flex
          gridArea="logo"
          height="100%"
          flexDir="column"
          backgroundColor="white"
          justifyContent="center"
          alignItems="center">
          <Heading>Em desenvolvimento</Heading>
        </Flex>

      </Grid>
    </motion.div>
  );
};

export default Home;
