import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer, Switch, TouchableRipple, Text} from 'react-native-paper';

export default function DrawerContent(props) {
  const {navigation} = props;
  const [active, setActive] = useState('home');

  const onChangeScreen = (screen) => {
    setActive(screen);
    navigation.navigate(screen);
  };

  return (
    <DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item
          label="Inicio"
          active={active === 'home'}
          onPress={() => onChangeScreen('home')}
        />
        <Drawer.Item
          label="Nuevas películas"
          active={active === 'news'}
          onPress={() => onChangeScreen('news')}
        />
        <Drawer.Item
          label="Películas populares"
          active={active === 'popular'}
          onPress={() => onChangeScreen('popular')}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({});
