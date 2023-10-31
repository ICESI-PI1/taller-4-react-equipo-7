import React,{useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';
import instance from '../config/tokenAxios';



const RouteGuard = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (!token) {
          setIsAuthenticated(false);
        } else {
          instance.get('/libros')
            .then(() => {
              setIsAuthenticated(true);
            })
            .catch((error) => {
              console.error('Error al verificar el token:', error);
              setIsAuthenticated(false);
              localStorage.setItem('token', null);

            });
        }
      }, []);

      if (isAuthenticated === null) {
        return <div>Cargando...</div>;
      } else if (isAuthenticated) {
        return children;
      } else {
        return <Navigate to="/login" />;
      }
        
 
};

export default RouteGuard;
