import { View, Text, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView, Animated, StyleSheet, Easing } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { A } from '@expo/html-elements';
import { AntDesign } from '@expo/vector-icons';
import { HelloWave } from '@/components/HelloWave';

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

const ProjectScreen = () => {

    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 5000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, [spinValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <SafeAreaView style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#FFFFFF' }}>
            <View style={StyleSheet.absoluteFillObject}>
                <AnimatedImageBackground
                    style={[styles.backgroundImage, { transform: [{ rotate: spin }] }]}
                    resizeMode='contain'
                    source={require('@/assets/images/p7.jpg')}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15 }}>
                <Text style={{ marginTop: '10%', fontWeight: '700', fontSize: 24, color: '#F3535D' }}>Projects</Text>
                <View style={{ marginTop: 10, backgroundColor: 'rgba(143, 173, 231, 0.3)', borderTopRightRadius: 20, borderBottomRightRadius: 20, height: '20%', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: '700', fontSize: 20, color: '#8FADE7', marginHorizontal: 10 }}>Rano</Text>
                    <Text style={{ fontWeight: '500', fontSize: 16, marginHorizontal: 10 }}>An App that makes the distribution of healthy water a lot easier for people.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginHorizontal: 10, }}>
                        <Text style={{ fontWeight: '600', fontSize: 16 }}>Technologies:</Text>
                        <Text style={{ color: '#0139A6', fontWeight: '500' }}>React Native, Redux, CSS, Expo,{'\n'}React Navigation, Expo Router</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, gap: 6, marginTop: 8, backgroundColor: '#bee', width: '40%', height: 30, justifyContent: 'center', borderRadius: 20, }}>
                        <A href="https://github.com/ThankGod-Uzochukwu/rano">
                            <AntDesign name="github" size={24} color="#000000" />
                        </A>
                        <Text style={{ fontWeight: '600', fontSize: 16, }}>Rano Project</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 10, backgroundColor: 'rgba(143, 173, 231, 0.5)', borderTopRightRadius: 20, borderBottomRightRadius: 20, height: '18%', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: '700', fontSize: 20, color: '#ffffff', marginHorizontal: 10 }}>Todo</Text>
                    <Text style={{ fontWeight: '500', fontSize: 16, marginHorizontal: 10 }}>A Web App that helps in managing tasks.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginHorizontal: 10 }}>
                        <Text style={{ fontWeight: '600', fontSize: 16 }}>Technologies:</Text>
                        <Text style={{ color: '#0139A6', fontWeight: '500' }}>ReactJs, CSS, HTML</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, gap: 6, marginTop: 8, backgroundColor: '#bee', width: '40%', height: 30, justifyContent: 'center', borderRadius: 20, }}>
                        <A href="https://github.com/ThankGod-Uzochukwu/todo-app">
                            <AntDesign name="github" size={24} color="#000000" />
                        </A>
                        <Text style={{ fontWeight: '600', fontSize: 16, }}>Todo Project</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 10, backgroundColor: 'rgba(143, 173, 231, 0.5)', borderTopRightRadius: 20, borderBottomRightRadius: 20, height: '20%', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: '700', fontSize: 20, color: '#ffffff', marginHorizontal: 10 }}>My Portfolio</Text>
                    <Text style={{ fontWeight: '500', fontSize: 16, marginHorizontal: 10 }}>A Web & Mobile App that shows who I am.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginHorizontal: 10 }}>
                        <Text style={{ fontWeight: '600', fontSize: 16 }}>Technologies:</Text>
                        <Text style={{ color: '#0139A6', fontWeight: '500' }}>React Native, Redux, CSS, Expo, {'\n'}TypeScript, React Navigation, Expo Router</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, gap: 6, marginTop: 8, backgroundColor: '#bee', width: '40%', height: 30, justifyContent: 'center', borderRadius: 20, }}>
                        <A href="https://github.com/ThankGod-Uzochukwu/teegee-portfolio-app">
                            <AntDesign name="github" size={24} color="#000000" />
                        </A>
                        <Text style={{ fontWeight: '600', fontSize: 16, }}>Git Repo</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={{ marginTop: 12, fontWeight: '700', fontSize: 24, color: '#F3535D' }}>References</Text>
                    <Text style={{ fontWeight: '600', fontSize: 16 }}>Available upon request.</Text>
                </View>

                <View style={{ marginTop: 12, marginBottom: "20%" }}>
                    <Text style={{ fontWeight: '700', fontSize: 24, color: '#097070' }}>More</Text>
                    <View>
                        <Text style={{ fontWeight: '600', fontSize: 18, color:'#8FADE7' }}>
                            Not just only TECH, I'm also a Content, Copy, and Technical Writer.
                        </Text>
                        <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#beebae', alignItems: 'center', height: 40, justifyContent: 'center', borderRadius: 8, flexDirection: 'row', gap: 6, }}>
                            <A href="https://flowcv.com/resume/lnvi0stb21">
                                <AntDesign name="rest" size={24} color="white" />
                            </A>
                            <Text style={{ fontWeight: '700', fontSize: 16, color: 'white' }}>See my CV</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ProjectScreen;

const styles = StyleSheet.create({
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: '100%'
    },
});
