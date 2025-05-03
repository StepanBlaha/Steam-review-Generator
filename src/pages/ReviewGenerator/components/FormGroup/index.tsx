import { useState, useEffect } from "react"
import "./FormBlock.css"
interface FormBlockProps {
    setData: (value: string) => void;
  }

export default function FormBlock({setData}: FormBlockProps){
    const skib =["n","d", "ds", "dsd"]
    const formData = {
        "Graphics" : ["You forget what reality is", "Beautiful", "Good", "Decent", "Bad", "Dont look too long at it", "MS-DOS"],
        "Gameplay": ["Very good", "Good", "It's just gameplay", "Mehh", "Watch paint dry instead", "Just don't"],
        "Audio": ["Eargasm", "Very good", "Good", "Not too bad", "Bad", "I'm now deaf"],
        "Audience": ["Kids", "Teens", "Adults", "Grandma"],
        "PC Requirements": ["Check if you can run paint", "Potato", "Decent", "Fast", "Rich boi", "Ask NASA if they have a spare computer"],
        "Game Size": ["Floppy Disk",  "Old Fashioned", "Workable", "Big", "Will eat 15% of your 1TB hard drive", "You will want an entire hard drive to hold it", "You will need to invest in a black hole to hold all the data"],
        "Difficulty": ["Just press 'W'", "Easy", "Easy to learn / Hard to master", "Significant brain usage", "Difficult", "Dark Souls"],
        "Grind": ["Nothing to grind", "Only if u care about leaderboards/ranks", "Isn't necessary to progress", "Average grind level", "Too much grind", "You'll need a second life for grinding"],
        "Story": ["No Story", "Some lore", "Average", "Good", "Lovely", "It'll replace your life"],
        "Game Time": ["Long enough for a cup of coffee", "Short", "Average", "Long", "To infinity and beyond"],
        "Price": ["It's free!", "Worth the price", "If it's on sale", "If u have some spare money left", "Not recommended", "You could also just burn your money"],
        "Bugs": ["Never heard of", "Minor bugs", "Can get annoying", "ARK: Survival Evolved", "The game itself is a big terrarium for bugs"],
        "?/10": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          
    }
    // Initialize stats
    const [formSelections, setFormSelections] = useState<Record<string, string>>({
    });

    const [hiddenForms, setHiddenForms] = useState<Record<string, boolean>>({
        "Graphics" : false,
        "Gameplay": false,
        "Audio": false,
        "Audience": false,
        "PC Requirements": false,
        "Game Size": false,
        "Difficulty": false,
        "Grind": false,
        "Story": false,
        "Game Time": false,
        "Price": false,
        "Bugs": false,
        "?/10": false,
    });
    

    // For handling radio selection inside forms
    const handleSelection = (name: string, value: string) => {
        setFormSelections(prev=>({...prev,[name]: value}))
    }

    // Handle hidden categories
    const handleHidden=(name: string, value: boolean) => {
        setHiddenForms(prev=>({...prev,[name]: value}))

    }

    // Debug
    useEffect(() => {
        console.log(hiddenForms);
    }, [hiddenForms]);
    
    // Display all the forms
    const FormList = Object.entries(formData).map(([key, value])=>{
        return (
            <div className="card" key={key}>
                <Form title={key}optionList={value} name={key} selected={formSelections[key]} onSelectionChange={handleSelection} hidden={hiddenForms[key]} onHide={handleHidden}/>
            </div>
        );
    });

    // Load formatted review
    const handleSubmit = () => {
        const formattedData = formatReviewData(hiddenForms, formData, formSelections);
       setData(formattedData)
    }


    return(
        <>
        {FormList}
        <Button className="reviewGeneratorButton" onClick={handleSubmit}>Generate review</Button>



        </>
    )
}