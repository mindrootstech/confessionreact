import './App.css';
import './css/style.css';
import Feed from "./pageElements/Feed";
import Login from "./pageElements/Login";
import Register from "./pageElements/Register";
import CreatePost from "./pageElements/CreatePost";
import Chat from "./pageElements/Chat";
import Report from "./pageElements/Report";
import Profile from "./pageElements/Profile";
import AddNewFriends from "./pageElements/AddNewFriends";
import Messages from "./pageElements/Messages";
import RequestsGot from "./pageElements/RequestsGot";
import CommentsGot from "./pageElements/CommentsGot";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Switch>

          {/* Feed Page */}
          <Route path="/" element={<Feed />}>
          </Route>
          {/* Feed Page */}
          
          
          {/* Profile Page */}
          <Route path="profile" element={<Profile />}>
          </Route>
          {/* Profile Page */}
          
          
          {/* Chat Page */}
          <Route path="chat" element={<Chat />}>
          </Route>
          {/* Chat Page */}
          
          
          {/* Report Page */}
          <Route path="report" element={<Report />}>
          </Route>
          {/* Report Page */}
          
          
          {/* CreatePost Page */}
          <Route path="createPost" element={<CreatePost />}>
          </Route>
          {/* CreatePost Page */}
          
          
          {/* Login Page */}
          <Route path="login" element={<Login />}>
          </Route>
          {/* Login Page */}
          
          
          {/* Register Page */}
          <Route path="register" element={<Register />}>
          </Route>
          {/* Register Page */}
          
          
          {/* AddNewFriends Page */}
          <Route path="addfriends" element={<AddNewFriends />}>
          </Route>
          {/* AddNewFriends Page */}
          
          
          {/* Messages Page */}
          <Route path="messages" element={<Messages />}>
          </Route>
          {/* Messages Page */}
          
          
          {/* RequestsGot Page */}
          <Route path="requests" element={<RequestsGot />}>
          </Route>
          {/* RequestsGot Page */}
          
          
          {/* CommentsGot Page */}
          <Route path="comments" element={<CommentsGot />}>
          </Route>
          {/* CommentsGot Page */}

        </Switch>
      </Router>
    </>
  );
}

export default App;
