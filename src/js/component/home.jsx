import React from "react";
import "../../styles/index.css"; 

import backgroundImage from "../../img/pexels-googledeepmind-17483850.jpg";

const Home = () => {
    return (
        <div className="container-fluid text-center">
            {/* Fondo de pantalla */}
            <div
                className="background-image"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            <div className="content">
                <p className="mt-4">
                    Bienvenido a la aplicación de Todolist de 4Geeks Academy.
                    ¡Empieza a organizar tus tareas hoy mismo!
                </p>
                <p className="mt-4">
                    Hecho por{" "}
                    <a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
                    con amor 💚
                </p>
            </div>
        </div>
    );
};

export default Home;
