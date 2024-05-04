import { useEffect } from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/search');
  }, []);
  return (
    <div>
      <Navbar />
      <div className="w-[60%] mx-auto   rounded-md shadow-md px-10 py-10 ">
        <Outlet />
      </div>
    </div>
  );
}
