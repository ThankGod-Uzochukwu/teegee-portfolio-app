import { View, Text, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { A } from '@expo/html-elements';
import { AntDesign } from '@expo/vector-icons';
import { HelloWave } from '@/components/HelloWave';
import { FontAwesome6 } from '@expo/vector-icons';

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#FC97EC' }}>
            <ImageBackground style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#FC97EC' }} source={require('@/assets/images/ThankGod.jpg')}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15, }}>
                    <View style={{ marginTop: '10%', }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: '500', fontSize: 18, color: '#F3535D' }}>Hello there, </Text>
                            <HelloWave />
                        </View>
                        <Text style={{ fontWeight: '500', fontSize: 18, color: '#F3535D' }}>I'm</Text>
                        <Text style={{ fontWeight: '800', fontSize: 36, }}>ThankGod Uzochukwu</Text>
                        <Text style={{ fontWeight: '700', fontSize: 24, color: '#becead' }}>React Native Developer</Text>
                    </View>
                    <Text style={{ fontWeight: '500', fontSize: 16, color: '#baebae', textAlign: 'center' }}>thankgoduzochukwu.com@gmail.com</Text>
                    <View style={{ flexDirection: 'row', gap: 16, marginTop: 12, justifyContent: 'space-evenly' }}>
                        <TouchableOpacity>
                            <A href="https://www.linkedin.com/in/thankgod-uzochukwu">
                                <AntDesign name="linkedin-square" size={32} color="#286EF5" />
                            </A>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <A href="https://github.com/ThankGod-Uzochukwu">
                                <AntDesign name="github" size={32} color="#000000" />
                            </A>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <A href="https://flowcv.com/resume/lnvi0stb21">
                                <FontAwesome6 name="image-portrait" size={32} color="#000000" />
                            </A>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            marginTop: 24,
                            backgroundColor: '#beebae',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '12%',
                            borderTopLeftRadius: 70,
                            borderBottomRightRadius: 70,
                        }}
                    >
                        <Text style={{ fontWeight: '600', fontSize: 24, color: 'white' }}>About Me</Text>
                        <Text style={{ color: '#0139A6', fontWeight: '500', }}>Experienced React Native Developer with over 5 years of experience in building and maintaining mobile applications. Proficient in JavaScript, TypeScript, and modern front-end technologies. Adept at collaborating with cross-functional teams to deliver high-quality software solutions.</Text>
                    </View>
                    <View style={{ backgroundColor: '#bee', marginTop: 10, justifyContent: 'center', height: '18%', borderTopRightRadius: 70, borderBottomLeftRadius: 70 }}>
                        <Text style={{ fontWeight: '600', fontSize: 24, color: 'white', textAlign: 'center' }}>TECHNICAL SKILLS</Text>
                        <View style={{ marginLeft: 20 }}>
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
                        <View style={{ marginLeft: 20 }}>
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
                    <View
                        style={{
                            backgroundColor: '#bae',
                            marginTop: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderTopLeftRadius: 200,
                            borderBottomLeftRadius: 200,
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                            marginBottom: 100,
                        }}
                    >
                        <Text style={{ fontWeight: '600', fontSize: 24, marginTop: 10, color: 'grey', }}>PROFESSIONAL EXPERIENCE</Text>
                        <View style={{ marginTop: 8, borderTopRightRadius: 300, borderBottomLeftRadius: 300, backgroundColor: '#bee', }}>
                            <Text style={{ fontWeight: '700', fontSize: 20 }}>React Native Developer (Intern)</Text>
                            <Text style={{ fontWeight: '600', fontSize: 18 }}>SmartHive Tech Solution</Text>
                            <Text style={{ fontWeight: '500', fontSize: 16 }}>2023 – present</Text>
                            <View style={{}}>
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
                        <View style={{ marginTop: 8, borderTopLeftRadius: 300, borderBottomRightRadius: 300, backgroundColor: '#bababa', }}>
                            <Text style={{ fontWeight: '700', fontSize: 20 }}>React Native Developer</Text>
                            <Text style={{ fontWeight: '600', fontSize: 18 }}>GidiCodes</Text>
                            <Text style={{ fontWeight: '500', fontSize: 16 }}>2024 – present</Text>
                            <View>
                                <Text style={{ color: '#0139A6', fontWeight: '500', }}>
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