import { Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import redirectTo from "../../functions/redirectTo";

import { DOUBT_TEXT } from "../../utils/constants";

export default function Service(){
    return(
        <Flex
            pt={14}
            flexDir={'column'}
            align={'center'}
            gap={5}
            color={'gray.600'}
        >
            <Text
                fontSize={32}
                fontWeight={'bold'}
            >
                Atendimento ao Cliente
            </Text>
            <Tooltip
                bg={'white'}
                color={'darkPink'}
                label={'Entre em contato pelo WhatsApp'}
            >
                <Image
                    h={'3rem'}
                    cursor={'pointer'}
                    src={'/wa-image.png'}
                    onClick={ () => redirectTo(`${import.meta.env.VITE_APP_WA_NUMBER_URL}?text=${DOUBT_TEXT}`, true) }
                />
            </Tooltip>
            <Text
                textAlign={'center'}
                lineHeight={2}
            >
                <span>
                    ou
                </span>
                <br/>
                <Text
                    as={'span'}
                    fontWeight={'bold'}
                    fontSize={24}
                >
                    Envie um email para:
                </Text>
                <br/>
                <Flex
                    as={Text}
                    align={'center'}
                    justifyContent={'center'}
                    gap={2}
                >
                    <Icon fontSize={22} icon={'ci:mail'}/>
                    loja@viniebrun.com.br
                </Flex>
            </Text>
        </Flex>
    )
}