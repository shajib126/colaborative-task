import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Taskmanage from "./components/Taskmanage";
import CreateTask from "./pages/CreateTask";
import Alltask from "./pages/Alltask";
import CreateTeam from "./pages/CreateTeam";
import AllUser from "./pages/AllUser";


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:"sign-up",
    element:<SignUp/>
  },
  {
    path:"sign-in",
    element:<SignIn/>
  },
  {
    path:"profile",
    element:<Profile/>
  },
  {
    path:"task-manage",
    element:<Taskmanage/>
  },
  {
    path:"create",
    element:<CreateTask/>
  },
  {
    path:'all-task',
    element:<Alltask/>
  },
  {
    path:'create-team',
    element:<CreateTeam/>
  }, {
    path:'all-user',
    element:<AllUser/>
  }
])


function App() {
  return (
    <RouterProvider router={router}>
    <div className="App">
      
    </div>
    </RouterProvider>
  );
}

export default App;
