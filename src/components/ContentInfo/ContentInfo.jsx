import { Component } from "react";
import { getNews } from "../../services/getNews";
import ErrorCard from "../ErrorCard/ErrorCard";

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  REJECTED: "rejected",
  RESOLVED: "resolved",
};

class ContentInfo extends Component {
  state = {
    news: null,
    isLoading: false,
    error: "",
    status: STATUS.IDLE,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ status: STATUS.PENDING });
      getNews(this.props.searchText)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "ok") {
            this.setState({ news: data.articles, status: STATUS.RESOLVED });
          } else {
            throw new Error(data.message);
          }
        })
        .catch((error) => {
          this.setState({ error: error.message, status: STATUS.REJECTED });
        });
    }
  }

  render() {
    const { news, error, status } = this.state;

    switch (status) {
      case STATUS.REJECTED:
        return <ErrorCard>{error}</ErrorCard>;
      case STATUS.PENDING:
        return <Spinner />;
      case STATUS.RESOLVED:
        return <NewsList news={news} />;
      default:
        return;
    }
  }
}

const Spinner = () => (
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const NewsList = ({ news }) => (
  <ul>
    {news.map((el) => {
      return <li key={el.url}>{el.title}</li>;
    })}
  </ul>
);

export default ContentInfo;
