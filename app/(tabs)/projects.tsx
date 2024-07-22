import { View, Text, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { A } from '@expo/html-elements';
import { AntDesign } from '@expo/vector-icons';
import { HelloWave } from '@/components/HelloWave';

const ProjectScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#F3535D' }}
        // source={require('@/assets/images/ThankGod.jpg')}
        >
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15, }}>
                <Text style={{ marginTop: '10%', fontWeight: '600', fontSize: 24, color: 'white' }}>Projects</Text>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontWeight: '700', fontSize: 20 }}>Rano</Text>
                    <Text style={{ fontWeight: '500', fontSize: 16 }}>An App that make the distribution of healthy water a lot easier to the people.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <Text style={{ fontWeight: '600', fontSize: 16 }}>Technologies:</Text>
                        <Text style={{ color: '#0139A6', fontWeight: '500' }}>React Native, Redux, CSS, Expo,{'\n'}React Navigation, Expo Router</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <A href="https://github.com/ThankGod-Uzochukwu/rano">
                            <AntDesign name="github" size={24} color="#000000" />
                        </A>
                        <Text style={{ fontWeight: '600', fontSize: 16 }}>Rano Project</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontWeight: '700', fontSize: 20 }}>Todo</Text>
                    <Text style={{ fontWeight: '500', fontSize: 16 }}>A Web App that helps in managing tasks.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <Text style={{ fontWeight: '600', fontSize: 16 }}>Technologies:</Text>
                        <Text style={{ color: '#0139A6', fontWeight: '500' }}>ReactJs, CSS, HTML</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <A href="https://github.com/ThankGod-Uzochukwu/todo-app">
                            <AntDesign name="github" size={24} color="#000000" />
                        </A>
                        <Text style={{ fontWeight: '600', fontSize: 16 }}>Todo Project</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontWeight: '700', fontSize: 20 }}>My Portfolio</Text>
                    <Text style={{ fontWeight: '500', fontSize: 16 }}>A Web & Mobile App shows who I am</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <Text style={{ fontWeight: '600', fontSize: 16 }}>Technologies:</Text>
                        <Text style={{ color: '#0139A6', fontWeight: '500' }}>React Native, Redux, CSS, Expo, TypeScript,{'\n'}React Navigation, Expo Router</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <A href="https://github.com/ThankGod-Uzochukwu/teegee-portfolio-app">
                            <AntDesign name="github" size={24} color="#000000" />
                        </A>
                        <Text style={{ fontWeight: '600', fontSize: 16 }}>Git Repo</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={{ marginTop: 12, fontWeight: '600', fontSize: 24, color: 'white' }}>References</Text>
                    <Text style={{ fontWeight: '600', fontSize: 16 }}>Available upon request.</Text>
                </View>

                <View style={{ marginTop: 12,}}>
                    <Text style={{ fontWeight: '700', fontSize: 24 }}>More</Text>
                    <View>
                        <Text style={{ fontWeight: '600', fontSize: 18 }}>
                            Not just only TECH, I'm also a Content, Copy and Technical Writer.
                        </Text>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',  marginTop: 10, }}>
                            <A href="https://flowcv.com/resume/gaq0m9hmmb">
                                <AntDesign name="rest" size={24} color="black" />
                            </A>
                            <Text style={{ fontWeight: '600', fontSize: 16 }}>Click here for my Resume</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default ProjectScreen