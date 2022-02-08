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
      <View style={styles.View_60_741}>
        <Text style={styles.Text_60_741}>
          App Name Heading 1 Heading 2 Body 1 Body 1 emphasis 
        </Text>
      </View>
      <View style={styles.View_207_18} />
      <View style={styles.View_207_19} />
      <View style={styles.View_207_20} />
      <View style={styles.View_207_21} />
      <View style={styles.View_217_1232}>
        <Text style={styles.Text_217_1232}>Background</Text>
      </View>
      <View style={styles.View_217_1233}>
        <Text style={styles.Text_217_1233}>Btn background</Text>
      </View>
      <View style={styles.View_217_1234}>
        <Text style={styles.Text_217_1234}>box background</Text>
      </View>
      <View style={styles.View_217_1235}>
        <Text style={styles.Text_217_1235}>Dark</Text>
      </View>
      <View style={styles.View_207_24} />
      <View style={styles.View_209_29} />
      <View style={styles.View_217_1237}>
        <Text style={styles.Text_217_1237}>List item background</Text>
      </View>
      <View style={styles.View_217_1238}>
        <Text style={styles.Text_217_1238}>Selected item</Text>
      </View>
      <View style={styles.View_209_30} />
      <View style={styles.View_217_1239}>
        <Text style={styles.Text_217_1239}>Stroke</Text>
      </View>
      <View style={styles.View_217_1240}>
        <Text style={styles.Text_217_1240}>
          Small icons in login page currently using
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(223, 221, 220, 1)" },
  View_2: { height: hp("195%") },
  View_60_741: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("133%"),
    justifyContent: "flex-start"
  },
  Text_60_741: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_207_18: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("7%"),
    backgroundColor: "rgba(248, 245, 241, 1)"
  },
  View_207_19: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("22%"),
    backgroundColor: "rgba(74, 87, 70, 1)"
  },
  View_207_20: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("36%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_207_21: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("51%"),
    backgroundColor: "rgba(40, 39, 38, 1)"
  },
  View_217_1232: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_217_1232: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_1233: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_217_1233: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_1234: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_217_1234: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_1235: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_217_1235: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_207_24: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("67%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_209_29: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("91%"),
    backgroundColor: "rgba(88, 133, 74, 1)"
  },
  View_217_1237: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_217_1237: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_1238: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("99%"),
    justifyContent: "flex-start"
  },
  Text_217_1238: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_30: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("107%"),
    backgroundColor: "rgba(148, 147, 147, 1)"
  },
  View_217_1239: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("107%"),
    justifyContent: "flex-start"
  },
  Text_217_1239: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_1240: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("114%"),
    justifyContent: "flex-start"
  },
  Text_217_1240: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
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
