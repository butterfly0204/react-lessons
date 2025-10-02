function UserGreeting(props) {
   
        return(props.isLoggedIn ? <h2 className="logged-in">welcome {props.username}</h2> :
                                  <h2 className="Not-logged-in">Please log in to continue </h2>
              
        )
    
        

    

}

export default UserGreeting 



