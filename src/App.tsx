import { Fragment } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import Header from './Components/Templates/Header';
import Footer from './Components/Templates/Footer';
import ScrollToTop from './Components/Molecules/ScrollToTop';

import routes from './Constants/routes';

function App() {
    return (
        <Fragment>
            <HashRouter>
                <ScrollToTop />
                <Header />
                <main>
                    <Routes>
                        { routes.map((route, index) => (
                                <Route key={ index } path={ route.path } Component={ route.component } />
                            )) }
                    </Routes>
                </main>
                <Footer />
            </HashRouter>
        </Fragment>
    );
}

export default App;
