import React from 'react';
import Home from './components/ui/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import RouteGuard from './security/RouteGuard';
import BookTable from './components/tables/BookTable';
import BookForm from './components/forms/BookForm';
import AuthorForm from './components/forms/AuthorForm';
import AuthorTable from './components/tables/AuthorTable';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/books"
          element={
            <RouteGuard>
              <BookTable />
            </RouteGuard>
          }
        />
        <Route
          path="/books/create"
          element={
            <RouteGuard>
              <BookForm isEdit={false} />
            </RouteGuard>
          }
        />
        <Route
          path="/books/edit/:id"
          element={
            <RouteGuard>
              <BookForm isEdit={true} />
            </RouteGuard>
          }
        />
        <Route
          path="/authors/create"
          element={
            <RouteGuard>
              <AuthorForm isEdit={false} />
            </RouteGuard>
          }
        />
        <Route
          path="/authors/edit/:id"
          element={
            <RouteGuard>
              <AuthorForm isEdit={true} />
            </RouteGuard>
          }
        />
        <Route
          path="/authors"
          element={
            <RouteGuard>
              <AuthorTable />
            </RouteGuard>
          }
        />

      </Routes>
    </Router>

  );
}





