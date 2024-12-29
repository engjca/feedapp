import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

class Pub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pubs: this.props.data
        };

        this.showLikes = this.showLikes.bind(this);
        this.like = this.like.bind(this);
        this.showIcon = this.showIcon.bind(this);
    }

    showIcon(liked) {
        return liked ? require("../../src/img/liked.png") : require("../../src/img/like.png");
    }

    like() {
        let pubs = this.state.pubs;

        if(pubs.liked === true) {
            this.setState({
                pubs: {
                    ...pubs,
                    liked: false,
                    likes: pubs.likes - 1
                }
            });
        } else {
            this.setState({
                pubs: {
                    ...pubs,
                    liked: true,
                    likes: pubs.likes + 1
                }
            });
        }
    }

    showLikes(likes) {
        let pubs = this.state.pubs;

        if(pubs.likes <= 0) {
            return;
        }

        return(
            <Text style={ styles.totalLikes }>{ pubs.likes } { pubs.likes > 1 ? "likes" : "like" }</Text>
        );
    }

    render() {
        return(
            <View style={ styles.areaPub }>
                <View style={ styles.profile }>
                    <Image source={{ uri: this.state.pubs.imgProfile }} style={ styles.imgProfile } />
                    <Text style={ styles.userName }>{ this.state.pubs.name }</Text>
                </View>

                <Image resizeMode="cover" source={{ uri: this.state.pubs.imgPub }} style={ styles.imgPub } />

                <View style={ styles.areaButtons }>
                    <TouchableOpacity onPress={ this.like }>
                        <Image source={ this.showIcon(this.state.pubs.liked) } style={ styles.like } />
                    </TouchableOpacity>
                </View>

                {this.showLikes(this.state.pubs.likes)}

                <View style={ styles.areaBottom }>
                    <Text style={ styles.userName }>{ this.state.pubs.name }</Text>
                    <Text style={ styles.description }>{ this.state.pubs.description }</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaPub: {
        paddingVertical: 20
    },
    profile: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    imgProfile: {
        width: 40,
        height: 40,
        borderRadius: 25
    },
    userName: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "left",
        color: "black",
        paddingLeft: 10
    },
    imgPub: {
        flex: 1,
        height: 400,
        alignItems: "center"
    },
    areaButtons: {
        padding: 10
    },
    like: {
        width: 26,
        height: 26
    },
    areaBottom: {
        flexDirection: "row",
        alignItems: "center"
    },
    description: {
        fontSize: 15,
        color: "gray",
        paddingLeft: 10
    },
    totalLikes: {
        fontSize: 13,
        fontWeight: "bold",
        paddingHorizontal: 10,
        paddingBottom: 10
    }
});

export default Pub;