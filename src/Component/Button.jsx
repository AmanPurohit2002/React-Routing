// import PropTypes from "prop-types";
import className from 'classnames';

// const finalCss=className('px-3','py-1.5','text-white');

/* 
const finalCss=className('my-5',{
    'bg-yellow-500':true,
    'text-green-600':false
})

console.log(finalCss);

*/
const Button=({
    children,
    primary,
    secondary,
    success,
    danger,
    warning,
    outline,
    rounded,
    ...rest
})=>{
    const customCss=className(rest.className,'flex items-center px-3 py-1.5 my-1 border  border-solid',{
        'bg-blue-400 border-blue-500':primary,
        'bg-gray-500  border-gray-500':secondary,
        'bg-green-400  border-green-500':success,
        'bg-yellow-500  border-yellow-500':warning,
        'bg-red-400  border-red-500':danger,
        'rounded-full ':rounded,
        'outline outline-2 outline-offset-2 text-black':outline,
        'text-blue-600':outline && primary,
        'text-gray-400':outline && secondary,
        'text-green-600':outline && success,
        'text-yellow-600':outline && warning,
        'text-red-600':outline && danger

    })

    return (
        <button {...rest} className={customCss}>{children}</button>
    )
}

Button.propTypes={
    checkVariationType:({primary,secondary,success,warning,danger})=>{
        const count=Number(!!primary)
        +Number(!!secondary)
        +Number(!!danger)
        +Number(!!success)
        +Number(!!warning);
        if(count>1) return (
            new Error("only one of primary, secondary, success, danger, warning ,can be used")
        )
    }
}

export default Button;