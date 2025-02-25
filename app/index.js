import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
  Login,
} from "../components";

const Home = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      {loggedIn ? (
        <>
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: COLORS.lightWhite },
              headerShadowVisible: false,
              headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
              ),
              headerRight: () => (
                <ScreenHeaderBtn
                  iconUrl={images.profile}
                  dimension="100%"
                  handlePress={logout}
                />
              ),
              headerTitle: "",
            }}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                padding: SIZES.medium,
              }}
            >
              <Welcome
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleClick={() => {
                  if (searchTerm) {
                    router.push(`/search/${searchTerm}`);
                  }
                }}
              />

              <Popularjobs />
              <Nearbyjobs />
            </View>
          </ScrollView>
        </>
      ) : (
        <>
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: COLORS.lightWhite },
              headerShadowVisible: false,
              headerTitle: "",
            }}
          />
          <Login setLoggedIn={setLoggedIn} />
        </>
      )}
    </SafeAreaView>
  );
};

export default Home;
