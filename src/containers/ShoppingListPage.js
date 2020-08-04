import React from 'react';
import Footer from "../components/MainPage/Footer";
import GridLayout from '../components/MainPage/GridLayout';
import Header from '../components/MainPage/Header';
import { Link } from "react-router-dom";
import Main from '../components/MainPage/Main';
import Navbar from './Navbar';

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
                <Main>
                    <h1>Ma shopping-list</h1>
                    <ul>
                        <li>Ingrédient1</li>
                        <li>Ingrédient2</li>
                        <li>Ingrédient3</li>
                        <li>Ingrédient4</li>
                    </ul>
                    <button>Vider ma liste</button>
                </Main>
                
            </GridLayout>

            

            <Footer>
                <Navbar />
            </Footer>
        </div>
    )
}

export default ShoppingListPage;