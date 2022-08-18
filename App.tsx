import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import {Header} from './src/components/Header';
import {Home} from './src/screens/Home';
import {Detail} from './src/screens/Detail';
import {WishList} from './src/screens/WishList';

import {Movie} from './src/types/interfaces';

const App = () => {
  const [isHome, setIsHome] = useState<boolean>(true);
  const [movieSelected, setMovieSelected] = useState<Movie>();
  const [isWishList, setIsWishList] = useState<boolean>(false);
  const [wishList, setWishList] = useState<Movie[]>([]);

  return (
    <SafeAreaView>
      <Header
        isHome={isHome}
        setIsHome={setIsHome}
        setIsWishList={setIsWishList}
        isWishList={isWishList}
      />
      {isWishList ? (
        <WishList wishList={wishList} />
      ) : isHome ? (
        <Home setMovieSelected={setMovieSelected} setIsHome={setIsHome} />
      ) : (
        <Detail
          movieSelected={movieSelected}
          setWishList={setWishList}
          wishList={wishList}
        />
      )}
    </SafeAreaView>
  );
};

export default App;
