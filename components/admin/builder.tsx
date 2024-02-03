
const Item = ({keyName, item}: {keyName: string, item: any}) => {

    switch (keyName) {
        case 'title':
        case 'text':
        case 'mainText':
            return (
               <div className="border-2 p-1 mb-2 border-black w-full">{keyName}: <input type="text" className="w-fit text-black" readOnly value={item} /></div> 
            )
        case 'button': 
            const {text, url} = item
            return (
                <div className="w-full text-black bg-gray-200 p-8 my-5 rounded-md">
                    <p>{keyName}: </p>
                    text:<input type="text" className="w-fit text-black mb-2" value={text} readOnly /> 
                    url:<input type="text" className="w-fit text-black" value={url} readOnly />
                </div>
            )
        case "subText": 
            return (
                <>{keyName}: <textarea className="w-fit text-black" value={item} readOnly/></>
            )
        case 'image':
            return (
                <div className="flex flex-wrap">
                    <div className="w-full">
                    {keyName}: 
                    </div>
                    <div className="flex w-full">
                        <input type="file" className="w-4/5 text-black" value={item.url}readOnly />
                        <img src={item.url} className="w-1/5"/>
                    </div>
                
                </div>
            )
        default:
            console.log(keyName)
            return (
                <>{keyName} missing</>
            )
    }
}
const Section = ({keyName, item}: {keyName: string, item: any}) => {
    return(
        <div className="w-full text-black bg-gray-200 p-8 my-5 rounded-md">
            <h2 className="text-black">{keyName}</h2>
            <div className="flex flex-col builder-container">
                {Object.entries(item).map(([key, value]: [string, any]) => (
                    <Item key={key} keyName={key} item={value} />
                ))}
            </div>
            
        </div>
    )
}

const Builder = (data:any) => {
    if(!data.data) return <div>No Data</div>

    const jsonData = JSON.parse(data.data)    
    return (
        <>
          {Object.entries(jsonData).map(([key, value]) => (
            <Section key={key} keyName={key} item={value} />
          ))}
        </>
      );
}

export default Builder  