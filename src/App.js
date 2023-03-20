import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import SettingPage from "./pages/setting";
import SignInPage from "./pages/signin";
import MailBoxPage from "./pages/mailbox";
import PageNotFound from "./pages/page-not-found";
import LoginPage from "./pages/login";

import InboxPage from "./pages/inbox";
import SentPage from "./pages/sent.js";
import TrashPage from "./pages/trash";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./css/style.css";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<HomePage></HomePage>}></Route>
                    <Route path="contact" element={<ContactPage></ContactPage>}></Route>
                    <Route path="setting" element={<SettingPage></SettingPage>}></Route>
                    <Route path="signin" element={<SignInPage></SignInPage>}></Route>
                    <Route path="mail" element={<MailBoxPage></MailBoxPage>}>
                        <Route path="inbox" element={<InboxPage></InboxPage>}></Route>
                        <Route path="sent" element={<SentPage></SentPage>}></Route>
                        <Route path="trash" element={<TrashPage></TrashPage>}></Route>
                        <Route path="login" element={<LoginPage></LoginPage>}></Route>
                        </Route>
                    <Route path="login" element={<LoginPage></LoginPage>}></Route>
                    <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App;