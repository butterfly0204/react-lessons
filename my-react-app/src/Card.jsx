import profilePic from './assets/myself.jpg'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Mogaji Favour</h2>
            <p className='card-text'>SoftWare Engineering and Creator</p>
        </div>
    )
   

}


export default Card 