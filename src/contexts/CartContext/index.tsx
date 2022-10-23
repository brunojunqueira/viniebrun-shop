import { createContext, useContext, useEffect, useState } from "react"

interface CartProviderProps {
    children: React.ReactNode
}

interface CartContextProps {
    items: Product[];
    addItem: (item: Product) => void;
    removeItem: (itemId: number) => void;
    setItemUnit: (itemId: number, value: number) => void;
    setCheckValue: (value: boolean, ...itemId: number[]) => void;
}

export interface Product{
    id: number,
    imgURL: string,
    name: string,
    description: string,
    price: number,
    units: number,
    unitsAvailable: number,
    rating: number,
    reviewCount: number,
    checked: boolean
}

export interface Cupom{
    cupom: string,
    type?: string, 
    value: number
}

const CartContext = createContext( {} as CartContextProps );

export function CartProvider( { children } : CartProviderProps) {

    const [ items, setItems ] = useState<Product[]>([]);

    useEffect(()=>{
        const _items = localStorage.getItem('cartItems');
        if(_items){
            setItems(JSON.parse(_items));
        }
    }, []);
    
    function addItem( item: Product ){
        if(items.map((_item)=>(_item.id)).includes(item.id)){
            return;
        }
        let _items = [...items, item];
        localStorage.setItem('cartItems', JSON.stringify(_items));
        setItems(_items);
    }

    function removeItem( itemId: number ){
        let _items = [...items].filter( (item) => ( item.id !== itemId ) );
        if(_items.length === 0) localStorage.removeItem('cartItems');
        localStorage.setItem('cartItems', JSON.stringify(_items));
        setItems(_items);
    }

    function setItemUnit( itemId: number, value: number){
        let _items = [...items];
        _items.map((item) => {
            if(item.id === itemId){
                    item.units = value;
                }
            }
        );
        localStorage.setItem('cartItems', JSON.stringify(_items));
        setItems(_items);
    }

    function setCheckValue(value: boolean, ...itemId: number[]){
        let _items = [...items];
        itemId.map((id)=>{
            _items.map((_item)=>{
                if(_item.id === id){
                    _item.checked = value;
                }
            })
        });
        setItems(_items);
    }

    return (
        <CartContext.Provider value={ { items, addItem, removeItem, setItemUnit, setCheckValue } }>
            { children }
        </CartContext.Provider>
    )
}

export default function useCartContext(){
    return useContext(CartContext);
}