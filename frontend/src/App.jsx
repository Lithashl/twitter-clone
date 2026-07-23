import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import LoginPage from './pages/auth/login/LoginPage';
import SignUpPage from './pages/auth/signup/SignUpPage';
import ProfilePage from './pages/profile/ProfilePage';
import NotificationPage from './pages/notification/NotificationPage';

import Sidebar from './components/common/Sidebar';
import RightPanel from './components/common/RightPanel'; 



function App() {
  return (
    <div className='flex max-w-6xl mx-auto'>
      {/* Common component, cuz it's not wrapped with routes */}
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/notifications' element={<NotificationPage/>}/>
        <Route path='/profile/:username' element={<ProfilePage/>}/>
      </Routes>
      <RightPanel></RightPanel>
    </div>
  );
}

export default App