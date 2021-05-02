import './index.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import {BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import Create from './components/Create'
import BlogDetails from './components/BlogDetails'
import NotFound from './components/NotFound'


function App() {
  return (
    <Router>
    <div className="App">
     <NavBar/>
     <div className="content"></div>
     <Switch>
     <Route path="/" exact={true}>   <Home/>  </Route>
     <Route path="/create"> <Create/> </Route>
     <Route path="/blogs/:id"> <BlogDetails/> </Route>
     <Route path="*"> <NotFound/> </Route>
     </Switch>
     
    </div>
    </Router>
    
  );
}

export default App;
