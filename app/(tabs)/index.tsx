import { View, Text, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { A } from '@expo/html-elements';
import { AntDesign } from '@expo/vector-icons';
import { HelloWave } from '@/components/HelloWave';

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#FC97EC' }}>
            <ImageBackground style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#FC97EC' }} source={require('@/assets/images/ThankGod.jpg')}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15, marginBottom: 15 }}>
                    <View style={{ marginTop: '10%' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: '500', fontSize: 18 }}>Hello there </Text>
                            <HelloWave />
                        </View>
                        <Text style={{ fontWeight: '800', fontSize: 36 }}>ThankGod Uzochukwu</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <Text style={{ fontWeight: '600', fontSize: 18 }}>A</Text>
                            <Text style={{ fontWeight: '700', fontSize: 24 }}>React Native Developer</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 12, }}>
                        <View>
                            <Text style={{ fontWeight: '500', fontSize: 16 }}>thankgoduzochukwu.com@gmail.com</Text>
                            {/* <Text style={{fontWeight: '500', fontSize: 16}}>+2347040066148</Text> */}
                        </View>
                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <TouchableOpacity>
                                <A href="https://www.linkedin.com/in/thankgod-uzochukwu">
                                    <AntDesign name="linkedin-square" size={24} color="#286EF5" />
                                </A>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <A href="https://github.com/ThankGod-Uzochukwu">
                                    <AntDesign name="github" size={24} color="#000000" />
                                </A>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 12, backgroundColor: 'red' }}>
                        <Text style={{ fontWeight: '600', fontSize: 24, color: 'white' }}>About Me</Text>
                        <Text style={{ color: '#0139A6', fontWeight: '500', }}>Experienced React Native Developer with over 5 years of experience in building and maintaining mobile applications. Proficient in JavaScript, TypeScript, and modern front-end technologies. Adept at collaborating with cross-functional teams to deliver high-quality software solutions.</Text>
                    </View>
                    <View style={{ backgroundColor: 'red', marginTop: 10, }}>
                        <Text style={{ fontWeight: '600', fontSize: 24, color: 'white' }}>TECHNICAL SKILLS</Text>
                        <View>
                            <Text style={{ fontWeight: '600', fontSize: 18 }}>Mobile Development</Text>
                            <Text style={{ color: '#0139A6', fontWeight: '500' }}>
                                • Javascript
                                • React
                                • React Native {'\n'}
                                • CSS
                                • React Navigation
                                • Redux {'\n'}
                                • Redux Toolkit
                                • Axios
                                • RestAPI
                            </Text>
                            <Text style={{ color: '#0139A6', fontWeight: '500' }}>
                                • HTML
                            </Text>
                        </View>
                        <View>
                            <Text style={{ fontWeight: '600', fontSize: 18 }}>Team Player</Text>
                            <Text style={{ color: '#0139A6', fontWeight: '500' }}>
                                • Documentation
                                • Collaboration
                                • Communication {'\n'}
                                • Problem-solving
                                • Responsibility
                                • Passion
                            </Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'red', marginTop: 10, }}>
                        <Text style={{ fontWeight: '600', fontSize: 24, marginTop: 10, color: 'white' }}>PROFESSIONAL EXPERIENCE</Text>
                        <View style={{ marginTop: 8 }}>
                            <Text style={{ fontWeight: '700', fontSize: 20 }}>React Native Developer (Intern)</Text>
                            <Text style={{ fontWeight: '600', fontSize: 18 }}>SmartHive Tech Solution</Text>
                            <Text style={{ fontWeight: '500', fontSize: 16 }}>2023 – present</Text>
                            <View>
                                <Text style={{ color: '#0139A6', fontWeight: '500' }}>
                                    • I write codes to build apps from scratch.{'\n'}
                                    • I maintain existing codes built for existing apps.{'\n'}
                                    • I write basic React components and hooks to implement UI and
                                    app functionality.{'\n'}
                                    • I debug and resolve simple issues in the codebase using tools like
                                    React Native Debugger.{'\n'}
                                    • I integrate third-party APIs and mobile databases to fetch and
                                    store data in the applications.{'\n'}
                                    • I collaborate with other developers, designers, and project
                                    managers using tools like Git or Slack.{'\n'}
                                    • I maintain the state of the app using Redux and Redux toolkit.{'\n'}
                                    • I use Axios to make API request.
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 8 }}>
                            <Text style={{ fontWeight: '700', fontSize: 20 }}>React Native Developer</Text>
                            <Text style={{ fontWeight: '600', fontSize: 18 }}>GidiCodes</Text>
                            <Text style={{ fontWeight: '500', fontSize: 16 }}>2024 – present</Text>
                            <View>
                                <Text style={{ color: '#0139A6', fontWeight: '500' }}>
                                    • I write codes to build apps from scratch.{'\n'}
                                    • I maintain existing codes built for existing apps.{'\n'}
                                    • I write basic React components and hooks to implement UI and
                                    app functionality.{'\n'}
                                    • I debug and resolve simple issues in the codebase using tools like
                                    React Native Debugger.{'\n'}
                                    • I integrate third-party APIs and mobile databases to fetch and
                                    store data in the applications.{'\n'}
                                    • I collaborate with other developers, designers, and project
                                    managers using tools like Git or Slack.{'\n'}
                                    • I maintain the state of the app using Redux and Redux toolkit.{'\n'}
                                    • I use Axios to make API request.
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default HomeScreen