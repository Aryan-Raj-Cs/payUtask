import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './Components/Search'
import Navbar from './Components/Navbar'
import History from './Components/History'
import User from './Components/User'
import AllRepos from './Components/AllRepos'
function Appcontainer(){
   
     return(
      <Router>
      <Route  path={"/"} component={Navbar}></Route>
      <Switch>
 
      <Route exact path={"/"} component={Search}></Route>
      <Route exact path={"/user/:username"} component={User}></Route>
      <Route exact path={"/history"} component={History}></Route>
      <Route exact path={"/repo/:username"} component={AllRepos}></Route>
    
      </Switch>
      </Router>  
     )
}

export default Appcontainer