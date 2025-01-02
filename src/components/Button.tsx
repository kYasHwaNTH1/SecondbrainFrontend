import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary" ;
    size : "sm" | "md"  ;
    text : string;
    startIcon : ReactElement;
    endIcon : ReactElement;
    onClick ?: ()=>void;
}
 
 const VariantProps ={
     "primary": "bg-purple-500 rounded-md text-white ",
     "secondary": "bg-purple-600 rounded-md text-white "
}
const SizeProps ={
    "sm": "rounded-sm px-10 py-5",
    "md": "rounded-md px-10 py-5"
}

export const Button = (props:ButtonProps)=>{
    return (
        <button className={`${VariantProps[props.variant]} ${SizeProps[props.size]}`}>
{props.text}
        </button>
    )   
}

