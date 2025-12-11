import React from 'react';
import { Search, User, ShoppingBag, Menu, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Layout.css';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const { getCartCount } = useCart();
    const { user, logout } = useAuth();
    const cartCount = getCartCount();

    return (
        <header className="layout-header">
            <div className="top-bar">
                ¡Bienvenida a tu Espacio Digital Jarusa! Envíos gratis en compras superiores a S/150
            </div>

            <div className="container header-main">
                <div className="logo-container">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            color: 'var(--color-primary)',
                            fontFamily: '"Playfair Display", serif',
                            letterSpacing: '-2px',
                            lineHeight: '1',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            jarusa
                        </div>
                    </Link>
                </div>

                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="¿Qué estás buscando hoy?"
                    />
                    <Search className="search-icon" size={20} />
                </div>

                <div className="header-actions">
                    {user ? (
                        <div className="action-item" style={{ cursor: 'pointer' }} onClick={() => {
                            if (window.confirm('¿Deseas cerrar sesión?')) {
                                logout();
                            }
                        }}>
                            <User size={24} />
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1' }}>
                                <span style={{ fontSize: '0.8rem' }}>Hola, {user.firstName || user.name || 'Usuario'}</span>
                                <span style={{ fontSize: '0.7rem', color: 'var(--color-primary)' }}>Salir</span>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="action-item">
                                <User size={24} />
                                <span>Mi Cuenta</span>
                            </div>
                        </Link>
                    )}
                    <div className="action-item">
                        <Heart size={24} />
                        <span>Favoritos</span>
                    </div>
                    <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="action-item" style={{ position: 'relative' }}>
                            <ShoppingBag size={24} />
                            {cartCount > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-5px',
                                    right: '0',
                                    backgroundColor: 'var(--color-primary)',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '18px',
                                    height: '18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.7rem',
                                    fontWeight: 'bold'
                                }}>
                                    {cartCount}
                                </span>
                            )}
                            <span>Bolsa</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
