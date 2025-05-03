export const formatReviewData = (visibilityData: Record<string, boolean>, sampleData: Record<string, string[]>, formData:Record<string, string>) => {
    // Format all the categories
     const formattedData = Object.entries(sampleData).map(([key, value])=>{
         // Skip if the category is hidden
         if(visibilityData[key] === true){
             return null;
         }
         // Format the header
         const dataHeader = `---{ ${key} }---`;
         // Format the options
         const optionList = value.map((option, index)=>{
                 return formData[key] ===option ? `\n☑ ${option}` : `\n☐ ${option}`
         })
         .filter((item)=> item != null) // Filter out the null values
         .join('')
         // Join the data
         return dataHeader + "\n" + optionList
 
     })
     .filter((item)=> item != null) // Filter out the null values
     .join('\n\n\n'); 
 
     return formattedData
    }