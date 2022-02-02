import React from 'react';
import { 
    BrowserRouter as Router, 
    Routes,
    Route, 
    Navigate, 
    Link, 
    Outlet,
    useParams,
    NavLink,
    useNavigate,
    useLocation
 } from 'react-router-dom';

export default function Routing () {
  return <div>
      <Router>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/learn/*' element={<Learn />} >
                <Route path='courses' element={<Courses />}>
                    {/* this is known as param */}
                    <Route path=':courseId' element={<CourseId />}/>
                </Route>
                <Route path='bundles' element={<Bundles />}/>
              </Route>
              <Route path='/dashboard' element={<Dashboard />}/>
              {/* We can make many path redirect to a single Route using the #Navigate Component provides by router API v6 
                to make the #return back action we need to specify the replace keyword, and this way we'll not been having issues with return back process
              */}
              <Route path='/myapps' replace element={<Navigate to='/learn'/>} />
              <Route path='*' element={<PageNotFound />}/>
          </Routes>
      </Router>
  </div>;
};

function Home() {
    return <h1>This is the Home Page</h1>
}

function Learn() {
    // To make Links we will use the Link Component. Dispite the a tag, Link does not reload the page and this is the benefit of SPA
    return (<>
        <h1>All courses are listed here</h1>
        <Link to='/learn/courses'>Courses</Link> ||
        <Link to='/learn/bundles'>Bundles</Link>
        {/* <Routes>
            <Route path='nodejs' element={<NOdejs />}/>
        </Routes> */}

        {/* the Outlet component defines where to render a the Component specify in the Route. Here we render all components at the very bottom of the Parent Component, i.e <Learn /> */}
        <Outlet />
    </>
    )
}

function Courses() {
    const navigate = useNavigate()
    const coursesList = ['Reactjs','ReactNative','Angular','View','Nodejs'];
    // getting a random course name
    const randomCourseName = coursesList[Math.floor(Math.random() * coursesList.length)]
    return <>
        <h1>All courses go here</h1>
        {/* when using NavLink we must provide the full path to the ressources */}
        {/* NavLink provides the feature that will helping us to check whether a link is active and apply some styles to it, this feature is not available with the #Link Component */}
        <NavLink style={({isActive}) => {
            return {
                background: isActive ? 'red' : 'blue',
                textDecoration: 'none',
                borderBottom: '5px solid yellow'
            }
        }} to={`/learn/courses/${randomCourseName}`}>{randomCourseName}</NavLink>
        
        <button onClick={() => {
            navigate('/dashboard', {state:'400'})
        }}>Pricing</button>

        {/* We can also get this functionality by using the #Link component */}
        <Link to='/dashboard' state={'DJANGO'}>TEST PRICING</Link> 
        <Outlet />
    </>
}

function Bundles() {
    return <>
        <h1>All Bundles go here</h1>
    </>
}

function Dashboard() {
    const location = useLocation()
    return <>
        <h1>Course Price is {location.state}</h1>
    </>
}

function CourseId() {
    const {courseId} = useParams();
    return <>
        <h1>Course ID :  {courseId} </h1>
    </>
}

function PageNotFound() {
    return <h1>404 Page Not Found</h1>
}
