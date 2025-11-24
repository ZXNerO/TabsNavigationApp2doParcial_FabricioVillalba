import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Perfil() {
    return(
        <ParallaxScrollView 
            headerImage={
                <IconSymbol
                    size={310}
                    color="#808080"
                    name="chevron.left.forwardslash.chevron.right"
                    style={styles.headerImage}
                />
            } 
            headerBackgroundColor={{
                dark: '#1D3D47',
                light: '#A1CEDC'
            }}
        >
            <ThemedText type="title">Mi perfil - [Fabricio Alexander Villalba Lugo]</ThemedText>
            <ThemedText type="default">Email: fabriciovillalbalugo@gmail.com</ThemedText>
            <ThemedText type="default">Carrera: Ingenieria Informatica Enfasis Ciencias Computacion</ThemedText> 
        </ParallaxScrollView>
    );   
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  }
});