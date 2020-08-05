import React from 'react';
import Footer from "../components/MainPage/Footer";
import GridLayout from '../components/MainPage/GridLayout';
import Header from '../components/MainPage/Header';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import ShoppingListContent from './ShoppingListContent';

const ShoppingListPage = () => {

    return (
        <div>
            <GridLayout>
                <Header>
                    <Link to="/main">
                    <img
                        className="logo"
                        src="https://i.ibb.co/3znmZs9/Daco-4332189.png"
                        alt="Daco-4332189"
                        border="0"
                    />
                    </Link>
                    <h1>ShakeIt</h1>
                </Header>
            <ShoppingListContent /> 
            </GridLayout>

            <Footer>
                <Navbar />
            </Footer>
        </div>
    )
}

export default ShoppingListPage;
