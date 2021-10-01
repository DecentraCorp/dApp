import React, { useState, useRef } from 'react';
// import {
//     Menu
// } from './Style'


export const DropdownMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState<boolean>(false);

    const onClick = () => setIsActive(!isActive);

    return (
        <div>HOLD</div>
    )
}