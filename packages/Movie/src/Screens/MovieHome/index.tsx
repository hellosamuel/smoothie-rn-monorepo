import React, { useContext, useLayoutEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import Styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { UserContext } from "~/Context/User";

import BitCatalogList from "./BigCatalogList";
import SubCatalogList from "./SubCatalogList";

const Container = Styled.ScrollView`
  flex: 1;
  background-color: #141414;
`;

const StyleButton = Styled.TouchableOpacity`
  padding: 8px;
`;
const Icon = Styled(Ionicons)`
`;

type NavigationProp = StackNavigationProp<MovieNaviParamList, "MovieHome">;
interface Props {
  navigation: NavigationProp;
}

function MovieHome({ navigation }: Props) {
  const { logout } = useContext<IUserContext>(UserContext);

  // 화면이 표시되는 동시에 동기적으로 동작을 수행할 때 사용
  // useEffect와 다른 점은 컴포넌트 화면에 완전히 표시되기전에 실행된다는 점
  // useLayoutEffect가 완료된 후에 컴포넌트가 화면에 표시된다
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <StyleButton
          onPress={() => {
            logout();
          }}
        >
          <Icon size={30} name="log-out-outline" />
        </StyleButton>
      ),
    });
  }, []);

  return (
    <Container>
      <BitCatalogList
        url="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5"
        onPress={(id: number) => {
          navigation.navigate("MovieDetail", {
            id,
          });
        }}
      />
      <SubCatalogList
        title="최신 등록순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate("MovieDetail", {
            id,
          });
        }}
      />
      <SubCatalogList
        title="평점순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate("MovieDetail", {
            id,
          });
        }}
      />
      <SubCatalogList
        title="다운로드순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate("MovieDetail", {
            id,
          });
        }}
      />
    </Container>
  );
}

export default MovieHome;
