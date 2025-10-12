import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { add } from './utils/add.js'
import { subtract } from './utils/subtract.js'


// 코드 스플리팅: React.lazy()로 동적 import
// 각 페이지는 별도의 청크로 분리되어 필요할 때만 로드됩니다
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'));

const App = () => {
    return (
        <BrowserRouter>
            <div style={{ padding: '20px' }}>
                <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                    <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
                    <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </nav>

                {/* Suspense: 컴포넌트 로딩 중 fallback UI 표시 */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);