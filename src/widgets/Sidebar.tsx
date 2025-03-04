import {
    Box,
    Drawer,
    DrawerBody,
    DrawerContent,
    Flex,
    IconButton,
    Image,
    Text,
    useDisclosure,
} from "@chakra-ui/react"
import { FiLogOut, FiMenu } from "react-icons/fi"
import Logo from "/assets/images/fastapi-logo.svg"

const Sidebar = () => {
const { isOpen, onOpen, onClose } = useDisclosure() as any // 타입 문제 해결

return (
    <>
    {/* Mobile Sidebar */}
    <IconButton
        onClick={onOpen}
        display={{ base: "flex", md: "none" }}
        aria-label="Open Menu"
        position="absolute"
        fontSize="20px"
        m={4}
        icon={<FiMenu />}
    />
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent maxW="250px">
        <DrawerBody py={8}>
            <Flex flexDir="column" justify="space-between">
            <Box>
                <Image src={Logo} alt="logo" p={6} />
                <Flex as="button" p={2} color="red.500" fontWeight="bold" alignItems="center">
                <FiLogOut />
                <Text ml={2}>Log out</Text>
                </Flex>
            </Box>
            <Text fontSize="sm" p={2}>Logged in as: user@example.com</Text>
            </Flex>
        </DrawerBody>
        </DrawerContent>
    </Drawer>

    {/* Desktop Sidebar */}
    <Box p={3} h="100vh" position="sticky" top="0" display={{ base: "none", md: "flex" }}>
        <Flex flexDir="column" justify="space-between" p={4} borderRadius={12}>
        <Image src={Logo} alt="Logo" w="180px" maxW="2xs" p={6} />
        <Text fontSize="sm" p={2} maxW="180px">Logged in as: user@example.com</Text>
        </Flex>
    </Box>
    </>
)
}

export default Sidebar
