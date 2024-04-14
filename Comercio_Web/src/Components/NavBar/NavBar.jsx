import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import {  Menu,
    MenuButton,
    MenuList,
    MenuItemOption,
    MenuOptionGroup,
    MenuDivider,
    Button, 
    Heading } from '@chakra-ui/react'
import { GrSettingsOption, GrShareOption, GrInstallOption } from "react-icons/gr";

export const NavBar = () => {
  return (
    <div>
        <Heading>Tienda E-commerce</Heading>
        <Menu>
        <MenuButton colorScheme='red' as={Button} rightIcon={ <GrInstallOption />} >       
          <span>&nbsp; Menu</span>  
        </MenuButton>
        <MenuList>            
            <MenuOptionGroup defaultValue='asc' title='Submenu uno' type='radio'>
                        <MenuItemOption value='asc'>
                        <GrShareOption />
                        <span>&nbsp; Opción Uno</span>
                        </MenuItemOption>
                        <MenuItemOption value='desc'>
                        <GrSettingsOption />
                        <span>&nbsp; Opción Dos</span>
            </MenuItemOption>
            </MenuOptionGroup>
                <MenuDivider />
                <MenuOptionGroup title='Submenu Dos' type='checkbox'>
                        <MenuItemOption value='email'>Email</MenuItemOption>
                        <MenuItemOption value='phone'>Phone</MenuItemOption>
                        <MenuItemOption value='country'>Country</MenuItemOption>
            </MenuOptionGroup>
        </MenuList>
        </Menu>
        <br/>
        <CartWidget />
    </div>
  )
}
