import { useState } from "react";
import { useSelector } from "react-redux";

import { Row, Layout, Spin } from "antd";

import ProfileCard from "components/ProfileCard/ProfileCard";
import Pagination from "components/Pagination/Pagination";

import { useSearchQuery } from "store/search/search.slice";

import { RootState } from "store";
import { Character } from "globalTypes/character";

import "./Home.scss";

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const {
    filterSlice: { filters },
  } = useSelector((state: RootState) => state);
  const { data, isFetching } = useSearchQuery({
    page: currentPage,
    ...filters,
  });

  if (!data && !isFetching) {
    return <div className="home-page-no-found-text">No Data Found</div>;
  }

  return (
    <div className="home-page">
      <div className="home-page-wrap">
        <h4>Home</h4>
        {isFetching && (
          <div className="spin-wrap">
            <Spin />
          </div>
        )}
        {data && (
          <Layout>
            <div className="overflow-wrap">
              <Row gutter={24}>
                {data.results.map(({ id, name, image, status }: Character) => (
                  <ProfileCard
                    key={id}
                    id={id}
                    name={name}
                    status={status}
                    image={image}
                  />
                ))}
              </Row>
            </div>
            <div className="pagination-wrapper">
              <Pagination
                current={currentPage}
                total={data.info.count}
                onChange={setCurrentPage}
              />
            </div>
          </Layout>
        )}
      </div>
    </div>
  );
};

export default Home;
