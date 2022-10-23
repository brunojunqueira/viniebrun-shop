import { Button, Flex, FlexProps, Input } from "@chakra-ui/react"
import { useState } from "react";

interface CustomNumberInputProps extends FlexProps{
    defaultValue: number,
    maxValue: number,
    onSetValue: (value: number)=>void
}

export default function CustomNumberInput({defaultValue, maxValue, onSetValue, ...rest}: CustomNumberInputProps) {

    const [inputValue, setInputValue] = useState(1);

    const handleSetValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        let num = Number(event.target.value);
        if(isNaN(num))
            num = 1;
        else if(num < 1)
            num = 1;
        else if(num > maxValue)
            num = maxValue;
        setInputValue(num);
        onSetValue(num);
    }

    const handleIncreaseValue = () =>{
        let num = inputValue + 1;
        setInputValue(num);
        onSetValue(num);
    }

    const handleDecreaseValue = () =>{
        let num = inputValue - 1;
        setInputValue(num);
        onSetValue(num);
    }

    return (
        <Flex 
            {...rest}
        >
            <Button
                disabled={inputValue === 1}
                onClick={()=>handleDecreaseValue()}
                colorScheme={'pink'}
            >
                -
            </Button>
            <Input 
                min={1}
                max={maxValue}
                defaultValue={defaultValue}
                _focus={{boxShadow:'none', outline:'none', borderColor:'darkPink'}}
                onChange={(event) => handleSetValue(event)}
                value={inputValue}
            />
            <Button 
                disabled={inputValue === maxValue}
                onClick={()=>handleIncreaseValue()}
                colorScheme={'pink'}
            >
                +
            </Button>
        </Flex>
    )
  }