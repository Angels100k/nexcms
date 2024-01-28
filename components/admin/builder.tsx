const Item = ({keyName, item}: {keyName: any, item: any}) => {
    switch (keyName) {
        case 'title':
        case 'text':
        case 'mainText':
            return (
               <>{keyName}: <input type="text" className="w-fit text-black" value={item} /></> 
            )
        case 'button': 
            console.log(item)
            const {text, url} = item
            return (
                <>
                <p>{keyName}: </p>
            
                    text:<input type="text" className="w-fit text-black mb-2" value={text} /> 
                    url:<input type="text" className="w-fit text-black" value={url} /></>
            )
        case "subText": 
            return (
                <>{keyName}: <textarea className="w-fit text-black" value={item} /></>
            )
        case 'image':
            return (
                <>
                {keyName}: 
                <input type="text" className="w-fit text-black" value={item.url} />
                <img src={item.url} width={100} height={100} />
                </>
            )
        default:
            console.log(keyName)
            return (
                <>{keyName} missing</>
            )
    }
}
const Section = ({keyName, item}: {keyName: any, item: any}) => {
    // console.log(keyName);
    return(
        <div className="w-full text-black bg-gray-200 p-8 my-5 rounded-md">
            <h2 className="text-black">{keyName}</h2>
            <div className="flex flex-col">
                {Object.entries(item).map(([key, value]: [any, any]) => (
                    <Item key={key} keyName={key} item={value} />
                ))}
            </div>
            
        </div>
    )
}

const Builder = (data:any) => {
    console.log("daadata",data)
    // if data = {} return empty
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