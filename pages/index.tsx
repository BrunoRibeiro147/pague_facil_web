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
} from '@chakra-ui/core';
import { FaGithub, FaEnvelope, FaLock } from 'react-icons/fa';
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
				templateColumns="1fr 480px 480px 1fr"
				templateRows="1fr 480px 1fr"
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
					paddingX={16}
				>
					<Box alignSelf="center">
						<Image size="175px" objectFit="contain" src="/pague_facil.svg" alt="Pague Fácil" />
					</Box>
					<form action="submit">
						<Stack spacing={8}>
							<Input
								placeholder="Usuário"
								name="email"
								icon={FaEnvelope}
								onChange={handleInputChange}
							/>

							<Input
								placeholder="Senha"
								name="password"
								isPassword
								icon={FaLock}
								onChange={handleInputChange}
							/>
						</Stack>
					</form>

					<Button
						backgroundColor="purple.500"
						height="40px"
						borderRadius="none"
						marginTop={6}
						isDisabled={formData.email === '' || formData.password === ''}
						color="#fff"
						_hover={
							formData.email !== '' && formData.password !== ''
								? { backgroundColor: 'purple.600' }
								: {}
						}
					>
						LOGIN
          </Button>

					<Link
						alignSelf="center"
						marginTop={8}
						fontSize="sm"
						color="purple.700"
						fontWeight="bold"
						_hover={{ color: 'purple.500' }}
					>
						Esqueceu a senha?
          </Link>

					<Text textAlign="center" justifySelf="end" fontSize="sm" color="purple.600" marginTop={6}>
						Primeira vez no Sistema?{' '}
						<Link
							onClick={handleSignUp}
							color="purple.700"
							fontWeight="bold"
							_hover={{ color: 'purple.500' }}
						>
							Cadastre-se
            </Link>
					</Text>

				</Flex>

				<Flex gridArea="logo" height="100%" flexDir="column" alignItems="center">
					<img src="/bg.jpg" alt="Rocketseat" style={{ height: '100%', objectFit: 'cover' }} />
				</Flex>

			</Grid>
		</motion.div>
	);
};

export default Home;
