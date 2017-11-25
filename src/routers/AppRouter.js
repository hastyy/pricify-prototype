import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../components/pages/LandingPage';
import SearchPage from '../components/pages/SearchPage';
import ResultsPage from '../components/pages/ResultsPage';
import ProductPage from '../components/pages/ProductPage';
import ShoppingListPage from '../components/pages/ShoppingListPage';
import PlanPage from '../components/pages/PlanPage';
import NotFoundPage from '../components/pages/NotFoundPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <main className="container-fluid">
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/results" component={ResultsPage} />
                    <Route path="/product/:id" component={ProductPage} />
                    <Route path="/list" component={ShoppingListPage} />
                    <Route path="/plan" component={PlanPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </main>
            <Footer />
        </div>
    </BrowserRouter>
);


export default AppRouter;