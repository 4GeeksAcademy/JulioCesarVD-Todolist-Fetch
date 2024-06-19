import React from "react";
import TodoList from "./Todolist";
import backgroundImage from "../../img/pexels-mart-production-7718886.jpg";

const Home = () => {
  return (
    <div className="container-fluid text-center">
      {}
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
          Hecho por: Github:{" "}
          <a href="https://github.com/JulioCesarVD"> JulioCesarVD</a>,
          
        </p>
     
      </div>
      {}
      <TodoList />
    </div>

  );
};

export default Home;
