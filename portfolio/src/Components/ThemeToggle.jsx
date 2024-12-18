import '../Styles/ThemeToggle.css';
import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        const htmlElement = document.documentElement;
        htmlElement.setAttribute('data-bs-theme', theme)
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle bg-purple z-3">
            <button
                className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
                id="bd-theme"
                type="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                aria-label={`Toggle theme (${theme})`}
            >
                <i className={`bi ${theme === 'dark' ? 'bi-moon-stars-fill' : 'bi-sun-fill'} my-1`}></i>
                <span className="visually-hidden">Toggle theme</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme">
                <li>
                    <button
                        type="button"
                        className="dropdown-item d-flex align-items-center"
                        onClick={() => setTheme('light')}
                    >
                        <i className="bi bi-sun-fill me-2"></i>
                        Light
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="dropdown-item d-flex align-items-center"
                        onClick={() => setTheme('dark')}
                    >
                        <i className="bi bi-moon-stars-fill me-2"></i>
                        Dark
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ThemeToggle;