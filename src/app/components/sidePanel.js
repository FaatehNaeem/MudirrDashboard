"use client";
import React from 'react';
import { useMediaQuery, useDisclosure } from '@chakra-ui/react';

import Hamburger from './ui/hamburger';
import LargeScreenPanel from './ui/largeScreenPanel';
import Drawer2 from './ui/drawer';

export default function SidePanel() {
    const [isLargerThan1250] = useMediaQuery("(min-width: 1250px)");
    const [isBetween768And1249] = useMediaQuery("(min-width: 200px) and (max-width: 1250px)");
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        
        <>
            {isLargerThan1250 ? (
                <LargeScreenPanel />
            ) : (
                <>
                    {/* Show Hamburger only when between 768px and 1249px */}
                    <Hamburger onClick={onOpen} display={isBetween768And1249 ? "block" : "none"} />
                    <Drawer2 isOpen={isOpen} onClose={onClose} />
                </>
            )}
        </>
    );
}
