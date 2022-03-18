import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from '../../containers/register';

const GuestRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace={true} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<div className={`otherDiv`}>Login</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default GuestRouter;