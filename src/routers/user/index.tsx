import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Budgets from '../../containers/budgets';

const UserRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div className={`appDiv`}>App</div>} />
                <Route path="other" element={<div className={`otherDiv`}>Other route</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default UserRouter;