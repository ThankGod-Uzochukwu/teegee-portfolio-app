import { View, Text, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { A } from '@expo/html-elements';
import { AntDesign } from '@expo/vector-icons';
import { HelloWave } from '@/components/HelloWave';

const teegee = () => {
    return (
        <SafeAreaView style={{ flex: 1, width: '100%', height: '100%', }}
        // source={require('@/assets/images/ThankGod.jpg')}
        >
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15, }}>
                <View style={{ marginTop: '10%' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Hello there </Text>
                        <HelloWave />
                    </View>
                    <Text>ThankGod Uzochukwu</Text>
                    <Text>I'm a</Text>
                    <Text>React Native Developer</Text>
                </View>
                <View >
                    <View>
                        <Text>thankgoduzochukwu.com@gmail.com</Text>
                        <Text>+2347040066148</Text>
                    </View>
                    <View>
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
                <View>
                    <Text>About Me</Text>
                    <Text>Experienced React Native Developer with over 5 years of experience in building and maintaining mobile applications. Proficient in JavaScript, TypeScript, and modern front-end technologies. Adept at collaborating with cross-functional teams to deliver high-quality software solutions.</Text>
                </View>
                <Text>TECHNICAL SKILLS</Text>
                <View>
                    <View>
                        <Text>Mobile Development</Text>
                        <Text>
                            •Javascript
                            • React
                            • React Native {'\n'}
                            • CSS
                            • React Navigation
                            • Redux {'\n'}
                            • Redux Toolkit
                            • Axios
                            • RestAPI
                        </Text>
                        <Text>
                            • HTML
                        </Text>
                    </View>
                    <View>
                        <Text>Team Player</Text>
                        <Text>
                            • Documentation
                            • Collaboration
                            • Communication {'\n'}
                            • Problem-solving
                            • Responsibility
                            • Passion
                        </Text>
                    </View>
                </View>
                <Text>PROFESSIONAL EXPERIENCE</Text>
                <View>
                    <View>
                        <Text>React Native Developer (Intern)</Text>
                        <Text>SmartHive Tech Solution</Text>
                        <Text>2023 – present</Text>
                        <View>
                            <Text>
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
                    <View>
                        <Text>React Native Developer</Text>
                        <Text>GidiCodes</Text>
                        <Text>2024 – present</Text>
                        <View>
                            <Text>
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
                <Text>Projects</Text>
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
            </ScrollView>

        </SafeAreaView>
    )
}

export default teegee