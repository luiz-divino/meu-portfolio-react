import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AnimatePage from './components/AnimatedPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function Rotas() {
    const location = useLocation();
    return (
        <>
            <Navbar />
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<AnimatePage>
                        <HomePage />
                    </AnimatePage>} />

                    <Route path="/projetos" element={<AnimatePage>
                        <ProjectsPage />
                    </AnimatePage>} />

                    <Route path="/contato" element={<AnimatePage>
                        <ContactPage />
                    </AnimatePage>} />
                </Routes>

            </AnimatePresence>
        </>
    );
}

export default Rotas;