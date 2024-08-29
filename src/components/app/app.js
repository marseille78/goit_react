import { useEffect, useState } from "react";
import Searchbar from "../searchbar";
import css from "./app.module.css";
import ImageGallery from "../image-gallery/image-gallery";
import { apiService } from "../../services/api-service";
import Loader from "../loader";
import Button from "../button";

const IDLE = "idle";
const PENDING = "pending";
const REJECTED = "rejected";
const RESOLVED = "resolved";

const App = () => {
  const [category, setCategory] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [status, setStatus] = useState(IDLE);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [totalHits, setTotalHits] = useState(null);

  useEffect(() => {
    if (!category) return;

    setStatus(PENDING);

    apiService
      .getResource(category, activePage)
      .then(({ hits, totalHits }) => {
        setResponse((state) => [...state, ...hits]);
        setError(null);
        setTotalHits(totalHits);
        setStatus(RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(REJECTED);
      });
  }, [category, activePage]);

  const handleChangeCategory = (category) => {
    setCategory(category);
    setActivePage(1);
    setResponse([]);
  };

  const handleLoadMore = () => {
    setActivePage((state) => state + 1);
  };

  const imageGalleryIdleView = () => (
    <div>
      <h2>Enter category, please</h2>
    </div>
  );

  const imageGalleryErrorView = (message) => (
    <div>
      <h2>{message}</h2>
    </div>
  );

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleChangeCategory} />

      {status === IDLE && imageGalleryIdleView()}
      {status === PENDING && <Loader />}
      {status === REJECTED && imageGalleryErrorView(error.message)}
      <ImageGallery dataList={response} />

      {status === RESOLVED &&
        response.length !== totalHits &&
        response.length !== 0 && <Button onLoadMore={handleLoadMore} />}
    </div>
  );
};

export default App;
