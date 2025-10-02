function List(){

        const fruit = ["apple", "Mango", "orange", "strawBeries", "grapes"];

        const listItems =fruit.map(fruit => <li>{fruit}</li>)

        return ( <ul>{listItems}</ul>)
        

}

export default List