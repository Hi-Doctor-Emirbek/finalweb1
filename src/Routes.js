import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navibar from './components/Navibar';
import ServiceContextProvider from './contexts/serviceContext';
import UserContextProvider from './contexts/userContext';
import CartPage from './pages/CartPage';
import AllDoctorsPage from './pages/AllDoctorsPage';
import DoctorPage from './pages/DoctorPage';
import EditPage from './pages/EditPage';
import MainPage from './pages/MainPage';
import ServicePage from './pages/ServicePage';
import OrderPage from './pages/OrderPage';
import CommentContextProvider from './contexts/commentsContext';
import Favorites from './pages/Favorites';
import FeedbackContextProvider from './contexts/feedbackContext';


const MyRoutes = () => {
    return (
        <UserContextProvider>
            <ServiceContextProvider >
                <CommentContextProvider>
                    <FeedbackContextProvider>
                        <BrowserRouter>
                            <Navibar />
                            <Routes>
                                <Route path='/' element={<MainPage />} />
                                <Route path='/doctor/:id' element={<DoctorPage />} />
                                <Route path='/service' element={<ServicePage />} />
                                <Route path="/edit/:id" element={<EditPage />} />
                                <Route path="/cart" element={<CartPage />} />
                                <Route path="/doctor" element={<AllDoctorsPage />} />
                                <Route path='/order' element={<OrderPage />} />
                                <Route path='/favorites' element={<Favorites />} />
                            </Routes>
                        </BrowserRouter>
                    </FeedbackContextProvider>
                </CommentContextProvider>
            </ServiceContextProvider>
        </UserContextProvider>
    );
};

export default MyRoutes;