import { UserContext } from "../utils/UserContext";
import UserClass from "./UserClass";

const About =()=>{
    return(
        <div>
            <h1>About US</h1>
            <UserContext.Consumer>
                {(data)=> <UserClass name={data.loggedInUser} contact={"8077778418"}/>}
           
            </UserContext.Consumer>
        </div>
    )
}
export default About;