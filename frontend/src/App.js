import './App.css';
import React, {useState, useEffect} from "react";
import InfoPage from "./components/InfoPage";
import { Button } from 'reactstrap';



function App() {
    const Loginpage = () => {
        return (

            <div className="info-container">
                <div className="modal">
                    <div className="header">
                      <img src="https://ok7static.oktacdn.com/fs/bco/1/fs0lpaqyuGwmQWvC8356" alt ="" className="logo"/>
                    </div>
                    <div className="body">
                        <p> FSP IT Verification</p>
                    </div>
                    <div className="logindiv">
                    <Button className ="loginbtn" onClick={login}>Login</Button>
                    </div>
                </div>
            </div>
        );
    }
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(undefined);
  // const [cookies] = useCookies(['XSRF-TOKEN']);

  useEffect(() => {
    setLoading(true);
    fetch('payload/user')
        .then(response => response.text())
        .then(body => {
          if (body === '') {
            setAuthenticated(false);
          } else {
            setUser(JSON.parse(body));
            setAuthenticated(true);
          }
          setLoading(false);
        });
  }, [setAuthenticated, setLoading, setUser])

  const login = () => {
    let port = (window.location.port ? ':' + window.location.port : '');
    console.log("port" + port)
    if (port === ':3000') {
      port = ':8080';
    }
    window.location.href = `//${window.location.hostname}${port}/private`;
  }

  const message = user ?
      <h1>Welcome, {user.name}!</h1> :
    null

  const button = authenticated ?
      <div>
          <InfoPage />
      </div>
   :
      <Loginpage />



    if (loading) {
    return <p>Loading...</p>;
  }

    return (
           <>
               {message}
               {button}

           </>
    );
}

export default App;
