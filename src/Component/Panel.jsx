import classNames from "classnames";

const Panel=({children,...rest})=>{

    const customCss=classNames(rest.className,'border rounded p-3 shadow bg-white w-full')

    return (
        <div {...rest} className={customCss} >
            {children}
        </div>
    )
}

export default Panel;