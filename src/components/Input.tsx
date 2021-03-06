import React, { useState } from 'react';
import { IconType } from 'react-icons';

import {
	Box,
	InputRightElement,
	Input as ChakraInput,
	InputGroup,
	InputLeftElement,
	InputProps as ChakraInputProps,
} from '@chakra-ui/core';

import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

interface InputProps extends ChakraInputProps {
	icon: IconType;
	isPassword?: boolean;
}

const Input: React.FC<InputProps> = props => {
	const [isFocused, setFocused] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const { icon, isPassword } = props;

	const handleEyeClick = () => setShowPassword(!showPassword);

	return (
		<InputGroup>
			<InputLeftElement
				height="3rem"
				children={
					<Box
						as={icon}
						color={isFocused ? 'purple.500' : 'gray.600'}
						size="14px"
					/>
				}
			/>
			<ChakraInput
				height="50px"
				_hover={{ borderColor: "gray.500" }}
				focusBorderColor="purple.500"
				borderRadius="none"
				backgroundColor="#fff"
				type={isPassword ? (showPassword ? 'text' : 'password') : 'text'}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				{...props}
			/>
			<InputRightElement
				height="3.3rem"
				width="3.5rem"
				children={
					isPassword ? (
						<Box
							as={!showPassword ? MdVisibility : MdVisibilityOff}
							color={!showPassword ? 'purple.500' : 'purple.700'}
							onClick={handleEyeClick}
							size="18px"
						/>
					) : (
							<></>
						)
				}
			/>
		</InputGroup>
	);
};

export default Input;
