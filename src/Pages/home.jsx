
import { Link } from "react-router-dom";
export function Home ()
{
    return (

  <>
            <h1>Log in</h1>
    
        
            <Link to="/"><p>Home</p></Link>
            
            <Link to="/page1">&nbsp;Page1</Link>
            <Link to="/page2">&nbsp;Page2</Link>
            <Link to="/page3">&nbsp;Page3</Link>
        </>
    );
}

