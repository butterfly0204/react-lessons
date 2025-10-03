function List(){

        const fruits = [ {id: 1, name:"Apple", calories: 96},
                         {id: 2, name:"Mango", calories: 30}, 
                         {id:3, name: "Orange", calories:50}, 
                         {id:4,name:"strawBeries", calories: 20},
                         {id:5,name: "Grapes", calories: 62}];

        const listItems =fruits.map(fruit => <li key={fruit.id}>
                                                        {fruit.name}:&nbsp; 
                                                       <b>{fruit.calories}</b></li>)

        return ( <ol>{listItems}</ol>)
        

}

export default List