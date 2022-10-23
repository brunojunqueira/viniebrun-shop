import { useEffect, useState } from "react";
import { Button, Checkbox, Flex, Input, Stack, Text } from "@chakra-ui/react";
import CartItem from "../../components/CartItem";
import useCartContext, { Cupom } from "../../contexts/CartContext";

import cupoms from '../../tests/cupoms.json'

import convertNumberToCurrency from "../../functions/convertNumberToCurrency";

export default function Cart() {

    const { items, setCheckValue } = useCartContext();

    const [discount, setDiscount] = useState(0);

    const [total, setTotal] = useState(0);

    const [cupomInputValue, setCupomInputValue] = useState('');

    const [cupom, setCupom] = useState<Cupom>();

    const handleSetCheckValue = (itemId: number, value: boolean) => {
        setCheckValue(value, itemId);
    }

    const checkCupom = () => {
        cupoms.map((_cupom)=>{
            if(_cupom.cupom === cupomInputValue){
                setCupom(_cupom);
                switch(_cupom.type){
                    case "%":
                        setDiscount(total * (_cupom.value/100));
                        break;
                    default:
                        setDiscount(_cupom.value);
                        break;
                }
            }
        })
    }

    useEffect(()=>{
        let _total = 0;
        items.map((item)=>{
            _total += item.price * item.units;
        });
        setTotal(_total);
    }, [items]);

    return (
        <Flex
            p={20}
            align={'center'}
            flexDir={'column'}
            gap={'1rem'}
        >
            <Stack 
                shadow={'md'}
                direction={'row'}
                spacing={'2rem'}
                p={5}
                justify={'center'}
                align={'center'}
                textAlign={'center'}
                maxW={'60rem'}
                w={'100%'}
            >
                <Checkbox 
                    colorScheme={'pink'}
                    _focus={{outline: 'none'}}
                    isChecked={items.every((item)=>(item.checked))}
                    onChange={(event)=>setCheckValue(event.target.checked, ...items.map((item)=>(item.id)))}
                />
                <Text
                    w={'15rem'}
                    textAlign={'left'}
                >
                    Produto
                </Text>
                <Text
                    w={'8rem'}
                >
                    Preço Unitário
                </Text>
                <Text
                    w={'8rem'}
                >
                    Preço Total
                </Text>
                <Text
                    w={'10rem'}
                >
                    Quantidade
                </Text>
                <Text
                    w={'5rem'}
                >
                    Excluir
                </Text>
            </Stack>
            <Stack
                shadow={'md'}
                direction={'column'}
                maxW={'60rem'}
                w={'100%'}
            >
                {items.map((item, key)=>{
                    return(
                        <CartItem
                            key={key}
                            {...item}
                            handleSetCheckValue={handleSetCheckValue}
                        />
                    )
                })}
            </Stack>
            <Flex
                shadow={'md'}
                maxW={'60rem'}
                w={'100%'}
                align={'center'}
                justify={'space-between'}
                p={5}
            >
                <Flex
                    gap={4}
                    align={'center'}
                >
                    <Text>Adicionar Cupom</Text>
                    <Input
                        w={'10rem'}
                        onChange={(event)=>setCupomInputValue(event.target.value)}
                        value={cupomInputValue}
                    />
                    <Button
                        colorScheme={'pink'}
                        onClick={checkCupom}
                    >
                        OK
                    </Button>
                </Flex>
                {cupom &&
                    <Text>
                        Cupom {cupom?.cupom} Aplicado!
                    </Text>
                }
                <Flex
                    justify={'center'}
                    align={'end'}
                    gap={5}
                >
                    <Text
                        fontSize={18}
                        fontWeight={'bold'}
                    >
                        { cupom &&
                            <Text
                                as={'span'}
                                fontSize={14}
                                color={'gray.600'}
                            >
                                Desconto:
                                <br/>
                            </Text>
                        }
                        Total:
                    </Text>
                    <Flex
                        flexDir={'column'}
                        textAlign={'right'}
                        justify={'end'}
                        align={'center'}
                    >  
                        <Text
                            as={'span'}
                            textDecoration={cupom && 'line-through'}
                            textDecorationColor={'darkPink'}
                        >
                            {convertNumberToCurrency(total)}
                        </Text>
                        { cupom &&
                            <Text>
                                - {cupom?.type ? convertNumberToCurrency(discount) : convertNumberToCurrency(cupom.value)}
                                <br/>
                                {convertNumberToCurrency(total - discount)}
                            </Text>
                        }
                    </Flex>
                    
                </Flex>
            </Flex>
        </Flex>
    )
}
