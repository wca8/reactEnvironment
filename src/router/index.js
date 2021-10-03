import React from "react";
import { Redirect } from "react-router-dom"

// import index from "../views/index";
// import askQuestions from "../views/ask-questions";
// import news from "../views/news";
// import shop from "../views/shop";


const index=React.lazy(()=>import('../views/index'))
const askQuestions=React.lazy(()=>import('../views/ask-questions'))
const news=React.lazy(()=>import('../views/news'))
const shop=React.lazy(()=>import('../views/shop'))


const routes = [
    {
        path:'/',
        exact: true,
        render: () => (
            <Redirect to="/index"/>
          )
    },
    {
        path:'/index',
        component:index
    },
    {
        path:'/ask',
        component:askQuestions
    },
    {
        path:'/news',
        component:news
    },
    {
        path:'/shop',
        component:shop
    }
];

export default routes;
