import Accordion from "../Component/Accordion";

const AccordionPage=()=>{

    const items=[
        {
            id:1,
            label:'Bio Of Aman Purohit',
            content:'He is hardworking and naught Boy He is hardworking and naught Boy He is hardworking and naught Boy'
        },
        {
            id:2,
            label:'Bio Of Krishna',
            content:'He is supreme Lord and the Father of unlimited multiverse He is supreme Lord and the Father of unlimited multiverse He is supreme Lord and the Father of unlimited multiverse He is supreme Lord and the Father of unlimited multiverse'
        },
        {
            id:3,
            label:'Bio Of Angad',
            content:'He is hardworking and naught BoyHe is hardworking and naught BoyHe is hardworking and naught BoyHe is hardworking and naught BoyHe is hardworking and naught BoyHe is hardworking and naught Boy'
        },
    ]

    return (
        <div>
            <Accordion item={items}/>
        </div>
    )
        
    
}

export default AccordionPage;