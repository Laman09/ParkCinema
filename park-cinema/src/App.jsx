import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignIn/SignUp/SignUp";
import AdminPanel from "./components/Admin/AdminPanel";
import AdminFilms from "./components/Admin/Films/AdminFilms";
import ProtectedRoute from "./auth/ProtectedRoute";
import Tickets from "./components/Home/Movies/Tickets/Tickets";
import Cinemas from "./components/Cinemas/Cinemas";
import Campaigns from "./components/Campaigns/Campaigns";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import BuyTickets from "./components/Home/Movies/Tickets/BuyTickets/BuyTickets";
import AdminUsers from "./components/Admin/Users/AdminUsers";
import AdminTickets from "./components/Admin/UserTicket/AdminTickets";

function App() {

    return (
        <Routes>
            <Route path='/' element = {<Layout />}>
                <Route index element = {<Home />} />
                <Route path='/az' element = {<Home />} />
                <Route path = '/az/tickets' element = {<Tickets />}></Route>
                <Route path = '/az/buytickets' element = {<BuyTickets />}></Route>
                <Route path = '/az/cinemas' element = {<Cinemas />}></Route>
                <Route path = '/az/campaigns' element = {<Campaigns />}></Route>
                <Route path = '/az/faq' element = {<FAQ />}></Route>
                <Route path = '/az/contact' element = {<Contact />}></Route>
                <Route path = '/az/sign-in' element = {<SignIn />}></Route>
                <Route path = '/az/sign-up' element = {<SignUp />}></Route>
            </Route>

            <Route
                path="/admin"
                element={
                    <ProtectedRoute>
                        <AdminPanel />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/films"
                element={
                    <ProtectedRoute>
                        <AdminFilms />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/users"
                element={
                    <ProtectedRoute>
                        <AdminUsers />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/userTickets"
                element={
                    <ProtectedRoute>
                        <AdminTickets />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
