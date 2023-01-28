import { createBrowserRouter } from "react-router-dom"

import { MainLayout } from "../../components/main_layout"
import { GoodList } from "../../components/good_list"

import { Main } from "../../pages/main"
import { AboutPage } from '../../pages/about'
import { ContactsPage } from '../../pages/contacts'
import { Basket } from "../../pages/basket"
import { DetailedGood } from '../../pages/detailed_good'



export const Router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Main />,
                children: [
                    {
                        index: true,
                        element: < GoodList />
                    },
                ]
            },
            {
                path: '/goods/:id',
                element: < DetailedGood />
            },
            {
                path: '/basket',
                element: <Basket />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/contacts',
                element: <ContactsPage />
            },
        ]
    }

])