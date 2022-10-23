import { Button, Checkbox, Flex, Image, OmitCommonProps, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import React from "react";
import useCartContext, { Product } from "../../contexts/CartContext";
import convertNumberToCurrency from "../../functions/convertNumberToCurrency";
import CustomNumberInput from "../CustomNumberInput";

interface CartItemProps extends Product{
    handleSetCheckValue: (itemId: number, value: boolean) => void
}

export default function CartItem({id, imgURL, name, price, units, unitsAvailable, handleSetCheckValue, checked}: CartItemProps) {

    const { removeItem, setItemUnit } = useCartContext();

    const handleSelectItem = (event: React.ChangeEvent<HTMLInputElement>) =>{
        handleSetCheckValue(id, event.target.checked);
    }

    return (
        <Stack
            direction={'row'}
            spacing={'2rem'}
            p={5}
            justify={'center'}
            align={'center'}
            textAlign={'center'}
            w={'100%'}
        >
            <Checkbox
                colorScheme={'pink'}
                _focus={{outline: 'none'}}
                isChecked={checked}
                onChange={handleSelectItem}
            />
            <Flex
                align={'center'}
                gap={'2rem'}
            >
                <Image
                    w={'4rem'}
                    src={imgURL}
                />
                <Text
                    w={'9rem'}
                    textAlign={'left'}
                    noOfLines={1}
                >
                    {name}
                </Text>
            </Flex>
            <Text
                w={'8rem'}
            >
                {convertNumberToCurrency(price)}
            </Text>
            <Text
                w={'8rem'}
                color={'darkPink'}
            >
                {convertNumberToCurrency(price*units)}
            </Text>
            <CustomNumberInput
                w={'10rem'}
                defaultValue={units}
                maxValue={unitsAvailable}
                onSetValue={(value)=>setItemUnit(id, value)}
            />
            <Flex
                w={'5rem'}
                justify={'center'}
            >
                <Icon
                    color={'red'}
                    icon={'codicon:trash'}
                    fontSize={24}
                    cursor={'pointer'}
                    onClick={()=>removeItem(id)}
                />
            </Flex>
            
            
        </Stack>
    )
}
