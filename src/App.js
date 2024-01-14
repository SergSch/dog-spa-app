import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/Pages/HomePage/HomePage';
import SubHeader from './components/SubHeader/SubHeader';
import BookPage from './components/Pages/BookPage/BookPage';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import ProductsPage from './components/Pages/ProductsPage/ProductsPage';
import ServicesPage from './components/Pages/ServicesPage/ServicesPage';
import BlogPage from './components/Pages/BlogPage/BlogPage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import ContactPage from './components/Pages/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
