function List(){

        const fruits = [ {name:"apple", calories: 96},
                         {name:"Mango", calories: 30}, 
                         {name: "orange", calories:50}, 
                         {name:"strawBeries", calories: 20},
                         {name: "grapes", calories: 62}];

        const listItems =fruits.map(fruit => <li>{fruit}</li>)

        return ( <ul>{listItems}</ul>)
        

}

export default List