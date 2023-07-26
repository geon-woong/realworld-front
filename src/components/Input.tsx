import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface InputProps{
    label?: string,
    type: string,
    placeholder?: string,
    value: string,
    disabled?: boolean,
    readonly?: boolean,
    autoFocus?: boolean,
    maxLength? : number,
    minLength? : number,
    handleChange:React.FormEventHandler;
}
export const Input = (
    {
        label,
        type,
        placeholder,
        value,
        disabled,
        readonly,
        autoFocus,
        maxLength,
        minLength,
        handleChange
    }:InputProps
    
    ) => {
        
    const id = uuidv4();
    const [v, setV] = useState(value)
    
    return(
        <>
            <label htmlFor={`label-${id}`}>{label}</label>
            <input 
            type={type}
            disabled={disabled}
            readOnly={readonly}
            autoFocus={autoFocus}
            maxLength={maxLength}
            minLength={minLength}
            placeholder={placeholder} 
            value={v} 
            onChange={(e)=>{
                setV(e.target.value)
                handleChange(v)
            }} />
        </>
    )
}