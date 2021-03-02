import Home from './Home';
import New1 from './New1';
import New2 from './New2';
import News from './News';
import NewsHome from './NewsHome';

export  const config = [
    
    {
        path: "/news", component: News,
        children:[
            {path:"/news1", exact: true,component:New1,},
            {path:"/news2", exact: true,component:New2,},
            {path:"/", exact: true,component:NewsHome,},
        ]
    },
    { path: "/",  component: Home },
]

// export const config = [
//     {
//         path: "/news", component: News, name: "news",
//         children: [
//             { path: "/", name: "newsHome", exact: true, component: NewsHome },
//             { path: "/news1", name: "newsDetail", exact: true, component: New1 },
//             { path: "/news2", name: "newsSearch", exact: true, component: New2 }
//         ]
//     },
//     { path: "/", name: "home", component: Home },
// ]