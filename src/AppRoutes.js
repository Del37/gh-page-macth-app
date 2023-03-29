import  Home from "./components/Home";
import  Profile  from "./components/Profile";
import  Login  from "./components/Login";
import  Register  from "./components/Register";
import CreateProject from "./components/CreateProject.js";
import ProjectList from "./components/ProjectList";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/profile',
    element: <Profile />
  } ,
  {
    path: '/login',
    element: <Login />
  }
  ,
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/createproject',
    element: <CreateProject />
  }
  ,
  {
    path: '/projectlist',
    element: <ProjectList />
  }
];

export default AppRoutes;
