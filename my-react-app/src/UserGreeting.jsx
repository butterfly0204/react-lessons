
function UserGreeting(props){
if(props.isLoggedIn){
    return <div className="student"> <p> Welcome back, {props.username}!</p> </div>
}
{
    return <div className="login"> <p>Please sign up.</p> </div>
}
}
   

export default UserGreeting 