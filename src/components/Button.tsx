interface ButtonProps {
    variant: "primary" | "secondary" ;
    size?: "sm" | "md" | "lg" | "xl" ;
    text : string;
    startIcon ?: any;
    endIcon ?: any;
    onClick ?: ()=>void;
}
 
 const VariantProps ={
     "primary": "bg-purple-500 rounded-md text-white px-8 py-5",
     "secondary": "bg-purple-600 rounded-md text-white px-8 py-5"
}

export const Button = (props:ButtonProps)=>{
    return (
        <button className={`${VariantProps[props.variant]}` }>
{props.text}
        </button>
    ) 
}

