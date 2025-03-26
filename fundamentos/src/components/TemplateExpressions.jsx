const TemplateExpressions = () => {
    const name = "Dener";

    const data = {
        age: 31,
        name: "Dener",
    };
    return (
        <div>
            <h1>Hey, {data.name}! Do ya have {data.age} years old?</h1>
        </div>
    )
}

export default TemplateExpressions;