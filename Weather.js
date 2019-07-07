import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from "expo";
import { Ionicons } from '@expo/vector-icons';
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ["#00c6fb", "#005bea"],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
        icon: "ios-rainy",

    },
    Clear: {
        colors: ["#00c6fb", "#005bea"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt",
        icon: "ios-sunny",
    },
    Thnderstorm: {
        colors: ["#00c6fb", "#005bea"],
        title: "Thnderstorm in the house",
        subtitle: "Actually, outside of the house",
        icon: "ios-thunderstorm",
    },
    Clouds: {
        colors: ["#00c6fc", "#005bea"],
        title: "Cloud",
        subtitle: "I know fucking boring",
        icon: "ios-cloudy",
    },
    Snow: {
        colors: ["#00c6fd", "#005bea"],
        title: "Cold as balls",
        subtitle: "Do you want to build snowman? Fuck no",
        icon: "ios-snow",
    },
    Mist: {
        colors: ["black", "red"],
        title: "Drizzle",
        subtitle: "It's like a rain, but gay 🏳️‍🌈",
        icon: "ios-snow",
    },

}

function Weather({ weatherName, temp }) {
    console.log(weatherName);
    return (
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}
        >
            <StatusBar hidden={true} />
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};
export default Weather;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 38,
        color: "white",
        marginTop: 10,
    },
    lower: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        padding: 25,
    },
    title: {
        fontSize: 38,
        color: "white",
        marginBottom: 10,
        fontWeight: "300",

    },
    subtitle: {
        fontSize: 24,
        color: "white",
        marginBottom: 24,
    }
})