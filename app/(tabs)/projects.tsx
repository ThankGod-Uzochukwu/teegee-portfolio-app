import { View, Text, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { A } from '@expo/html-elements';
import { AntDesign } from '@expo/vector-icons';
import { HelloWave } from '@/components/HelloWave';

const projects = () => {
    return (
        <SafeAreaView style={{ flex: 1, width: '100%', height: '100%', }}
        // source={require('@/assets/images/ThankGod.jpg')}
        >
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15, }}>
                <Text style={{ marginTop: '10%' }}>Projects</Text>
                <View>
                    <Text>Rano</Text>
                    <Text>An App that make the distribution of healthy water a lot easier to the people.</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Technologies:</Text><Text>React Native, Redux, CSS, Expo, React Navigation,{'\n'}Expo Router</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <A href="https://github.com/ThankGod-Uzochukwu/rano">
                            <AntDesign name="github" size={24} color="#000000" />
                        </A>
                        <Text>Rano Project</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text>Todo</Text>
                    <Text>A Web App that helps in managing tasks.</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Technologies:</Text><Text>ReactJs, CSS, HTML</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <A href="https://github.com/ThankGod-Uzochukwu/todo-app">
                            <AntDesign name="github" size={24} color="#000000" />
                        </A>
                        <Text>Todo Project</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text>My Portfolio</Text>
                    <Text>A Web & Mobile App shows who I am</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Technologies:</Text><Text>React Native, Redux, CSS, Expo, TypeScript,{'\n'}React Navigation, Expo Router</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <A href="https://github.com/ThankGod-Uzochukwu/teegee-portfolio-app">
                            <AntDesign name="github" size={24} color="#000000" />
                        </A>
                        <Text>Todo Project</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text>References</Text>
                    <Text>Available upon request.</Text>
                </View>

                <View>
                    <Text>More</Text>
                    <View>
                        <Text>
                            Not just only TECH, I'm also a Content, Copy and Technical Writer.
                        </Text>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <A href="https://flowcv.com/resume/gaq0m9hmmb">
                                <AntDesign name="rest" size={24} color="black" />
                            </A>
                            <Text>Click here for my Resume</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default projects