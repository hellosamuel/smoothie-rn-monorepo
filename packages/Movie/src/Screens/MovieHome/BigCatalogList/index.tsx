import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import Styled from "styled-components/native";

import BigCatalog from "~/Components/BigCatalog";

const Container = Styled.View`
    height: 300px;
    margin-bottom: 8px;
`;

interface Props {
  url: string;
  onPress: (id: number) => void;
}

function BigCatalogList({ url, onPress }: Props) {
  const [data, setData] = useState<IMovie[]>([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const result = await fetch(url).then((res) => res.json());
        console.log(result);
        setData(result.data.movies);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, []);

  return (
    <Container>
      <FlatList
        horizontal={true}
        pagingEnabled={true} // true=> 한 리스트 아이템이 한 화면이 보이도록, 딱딱 끊켜서 스와이프 된다
        data={data}
        keyExtractor={(item, index) => {
          return `bigScreen-${index}`;
        }}
        renderItem={({ item, index }) => (
          <BigCatalog
            id={(item as IMovie).id}
            image={(item as IMovie).large_cover_image}
            year={(item as IMovie).year}
            title={(item as IMovie).title}
            genres={(item as IMovie).genres}
            onPress={onPress}
          />
        )}
      />
    </Container>
  );
}

export default BigCatalogList;
