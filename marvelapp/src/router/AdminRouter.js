import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Auth, Users, Blog, SingleUser} from "../pages/admin";
import {AdminLayout} from "../layouts";
//import { map } from "lodash";
import { useAuth } from "../hooks";


import {Home} from "../pages/web/Home";



export  function AdminRouter() {
    const { user } = useAuth();
    
    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        );

    };
  return (
    <Routes>
     {!user ? (        
        <Route path="/admin/*" element = {<Auth/>} />
        ) : (
        <>
        {["/admin", "/admin/users"].map((path) => (
            <Route
            key={path}
            path={path}
            element={loadLayout(AdminLayout, Users)}
            />
        ))}
            <Route path="/admin/:nick" element = {loadLayout(AdminLayout, SingleUser)} />
        </>
       )}
    </Routes>
  );
}
