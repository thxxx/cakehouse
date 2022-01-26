import React, { useEffect} from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import MainPage from './pages/MainPage/MainPage'

const AppRouter = () => {
    return(
        <Router>
            <>
            <div className="Container" style={{ minHeight: 'calc(100vh - 80px)', zIndex:-1 }}>
                <Route path="/" component={MainPage} />
            </div>
            </> 
        </Router>
    )
}
export default AppRouter;