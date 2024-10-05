import  React,{useEffect, useState}  from "react";
import axios from "axios";


function DataFetcher() {
    const [datos, setDatos] = useState([]); // almacenar los datos obtenidos de la solicitud HTTP
    const [cargando,setCargando] =useState(true); // indica si los datos aún se están cargando.
    const [error,setError] = useState(null); //almacenar cualquier error que ocurra durante la solicitud


    //Realizar  una solicitud HTTP cuando el componente e monte
        useEffect(() => {

            axios.get('http://localhost:500/data')// Realiza una solicitud GET al endpoint del servidor Express.
            .then(response => {//Se ejecuta si la solicitud es exitosa.
                setDatos(response.data); //Guarda los datos obtenidos en el estado data.

                setCargando(false);

            })
            .catch (error => {//Guarda el error en el estado error
                setError(error);
                setCargando(false);

            });
        },[]);

            if (cargando) return <p>cargando...</p>;
            if (error) return <p>Hubo un error: {error.message}</p>;
           
           

            return (
                <div>
                  <h1>Datos de la Base de Datos</h1>
                  <ul>
                    {data.map(item => (
                      <li key={item.id}>{item.nombre}</li>
                    ))}
                  </ul>
                </div>
              );

        }//fin DATAFetch





export default DataFetcher;