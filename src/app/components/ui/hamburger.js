import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

export default function Hamburger({ onClick, display }) {
    return (
        <IconButton
            aria-label="Open Sidebar"
            icon={<HamburgerIcon />}
            size="md"
            backgroundColor={'white'}
            onClick={onClick}
            display={display}  // Set display from props
            position="absolute"
            top={0}
            right={4}
            zIndex={1000}
        />
    );
}
