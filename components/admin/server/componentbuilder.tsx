const ComponentBuilder = ({ pageData }: any) => {
    return (
        <div>
            {pageData.map((item: any) => (
                <div
                    key={item.ID}
                >
                    <p>{item.name}</p>
                </div>

            ))}
        </div>
    )
}

export default ComponentBuilder