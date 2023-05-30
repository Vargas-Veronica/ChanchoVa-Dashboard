//import "./DashBoard.css"
import { Card } from "../../components/Card";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/products.service";
import { Loading } from "../../components/Loading";
import { getUsers } from "../../services/users.service";
import { generateCards } from "../../helpers/dashboard.helper";
import { Alert } from "../../components/Alert";
import { ShowError } from "../../components/Error";
import { CategoriesChart } from "../../components/CategoriesChart";
import {LastDataContainer } from "../../components/LastdataContainer";
import { List } from "../../components/List";
import { Button } from "../../components/Button";


export const DetailPerPage = () => {
  const [products, setProducts] = useState(null);
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cardsData, setCardsData] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: "",
  });

  const [lastProductCreated, setLastProductCreated] = useState();
  const [lastUserCreated, setLastUserCreated] = useState();
  const [productsList, setProductsList] = useState([]);

  const [pagedProducts, setPagedProducts] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  let handlePagedProducts = () => {
    setPagedProducts(!pagedProducts);
}

  /* Efecto que se dispara solo al renderizar por primera vez el componente, se encarga de hacer las llamadas a las APIs */
  useEffect(() => {
    setIsLoading(true);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/products/?page=${currentPage}`);
            const data = await response.json();
            return data;
          
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      const fetchUsers = getUsers();

      Promise.all([fetchProducts, fetchUsers])
        .then(([productsResponse, usersResponse]) => {
          setProducts(productsResponse);
          setUsers(usersResponse);
        })
        .catch((error) => {
          console.error(error);
  
          setAlert({
            message: "Ocurrió un error al obtener la información",
            type: "danger",
            show: true,
          });
  
          setError(true);
        })
        .finally(setIsLoading(false));
    }, []);

  useEffect(() => {
    if (!products || !users) return;
    const { products: productsList } = products;
    const { users: usersList } = users;
    const cards = generateCards(products, users);

    setLastProductCreated(productsList.pop());
    setLastUserCreated(usersList.pop());
    setCardsData(cards);
    setProductsList(productsList);
    
  }, [products, users, currentPage]);

  if (isLoading) return <Loading />;



  return (
    <div className="container-fluid">

      {error && <ShowError />}
      
      {alert.show && <Alert alert={alert} setAlert={setAlert} />}

      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Chancho Va! Dashboard</h1>
      </div>

      <div className="row">
        {cardsData.map(({ id, color, title, quantity, icon, href }) => (
          <Card
            key={id}
            color={color}
            title={title}
            quantity={quantity}
            icon={icon}
            href={href}
          />
        ))}
      </div>
      <div>

        <Button className="btn btn-primary" text="Todos los productos" handleClick={handlePagedProducts} />

      </div>
      <div className="row">
            {productsList.map(({ id, name, subcategory_id, category_id, description, detail }) => (
            <List
                key={id}
                name={name}
                description={description}
                category_id={category_id}
                subcategory_id={subcategory_id}
                detail={detail}
            />
            ))}
      </div>
      <div>
            {/* Controles de paginación */}
        <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
        >
            Anterior
        </button>
        
        <button onClick={() => setCurrentPage(currentPage + 1)}>
            Siguiente
        </button>
      </div>
    </div>
  );
};