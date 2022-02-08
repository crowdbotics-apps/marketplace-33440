import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_252_15}>
        <View style={styles.View_252_16}>
          <Text style={styles.Text_252_16}>Project app style definitions</Text>
        </View>
        <View style={styles.View_252_17}>
          <Text style={styles.Text_252_17}>
            Topic: a marketplace application that allows users to list and sell
            their product which are no longer in need. Users can upload a photo,
            add a description and publish the item for listing Users: People who
            loves to recycle and care for the environment and want to save
            money/time but can still find an item they are searching for with a
            great value. Best 5 words describing project styles: Retro Pleasant
            Simplicity Clear space minimalism Images: second hand items with
            old/vintage and retro feeling 
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("152%") },
  View_252_15: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("164%"),
    minHeight: hp("164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("17%")
  },
  View_252_16: {
    width: wp("99%"),
    minWidth: wp("99%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_252_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_17: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("147%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_252_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
