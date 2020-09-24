import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import {Text, Title, IconButton} from 'react-native-paper';
import ModalVideo from '../components/ModalVideo';
import {getMovieByIdApi} from '../api/movie';
import {BASE_PATH_IMG} from '../utils/constants';

export default function Movie(props) {
  const {route} = props;
  const {id} = route.params;
  const [movie, setMovie] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    getMovieByIdApi(id).then((res) => {
      setMovie(res);
    });
  }, []);

  return (
    <>
      <ScrollView>
        {movie && (
          <>
            <MovieImage posterPath={movie.poster_path} />
            <MovieTrailer setShowVideo={setShowVideo} />
          </>
        )}
      </ScrollView>
      <ModalVideo show={showVideo} setShow={setShowVideo} idMovie={id} />
    </>
  );
}

function MovieImage(props) {
  const {posterPath} = props;
  const uri = `${BASE_PATH_IMG}/w500${posterPath}`;

  return (
    <View style={styles.viewPoster}>
      <Image style={styles.poster} source={{uri}} />
    </View>
  );
}

function MovieTrailer(props) {
  const {setShowVideo} = props;
  return (
    <View style={styles.viewPlay}>
      <IconButton
        icon="play"
        color="#000"
        size={30}
        style={styles.play}
        onPress={() => setShowVideo(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewPoster: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    textShadowRadius: 10,
  },
  poster: {
    width: '100%',
    height: 500,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  viewPlay: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  play: {
    backgroundColor: '#FFF',
    marginTop: -40,
    marginRight: 30,
    width: 60,
    height: 60,
    borderRadius: 100,
  },
});
