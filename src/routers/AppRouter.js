import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../components/pages/LandingPage';
import NotFoundPage from '../components/pages/NotFoundPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <main className="container-fluid">
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </main>
            <Footer />
        </div>
    </BrowserRouter>
);


export default AppRouter;